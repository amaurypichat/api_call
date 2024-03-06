import { mount, flushPromises } from '@vue/test-utils'
import {vi} from 'vitest'
import ShowListAddress from '../components/ShowListAddress.vue'
import * as jsonResponse from './jsonResponse.test.json';
vi.stubGlobal('useFetch', async () => ({
  pending: false,
  error: undefined,
  myData: jsonResponse
}))
describe('ShowListAddress', () => {
  it('should render the title and message props', async () => {
    const wrapper = mount(ShowListAddress,{})
	await flushPromises();
	const ttt=await wrapper.findAll('span').length
    expect(ttt).toEqual(1)

  })
})
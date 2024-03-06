import { mount, flushPromises } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { defineComponent } from 'vue';
import YourAsyncSetupComponent from '../components/ShowListAddress.vue'
import * as jsonResponse from './jsonResponse.test.json';
// Create suspense wrapper for your component

vi.stubGlobal('useFetch', async () => ({
  pending: false,
  error: undefined,
  data: jsonResponse
}))
const SuspenseWrapperComponent = defineComponent({
  components: { YourAsyncSetupComponent },
  template: `
    <Suspense>
      <YourAsyncSetupComponent />
    </Suspense>
  `,
});

const createExchangeViewComponent = () => {
  const wrapper = mount(SuspenseWrapperComponent, {
    global: {
      plugins: [
        // set up plugins
      ],
    },
  });

  return wrapper;
};

describe('YourAsyncSetupComponent.vue', () => {

  it('Component renders', async () => {
    // Create and mount suspense wrapper component
    const suspenseWrapper = createExchangeViewComponent();
    // Wait suspense promise
    await flushPromises();

    // Access your target component
    const wrapper = suspenseWrapper

    // Continue your tests
    expect(wrapper.text()).contains('8 Boulevard des Evades de France');

    suspenseWrapper.unmount();
  });
});
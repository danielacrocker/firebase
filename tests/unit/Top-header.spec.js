import TopHeader from '@/components/Top-Header.vue'
import { shallowMount } from '@vue/test-utils'

import flushPromises from "flush-promises"
// import { auth } from 'firebase'

const $router = {
  replace: jest.fn(),
};

jest.mock("firebase/app", () => ({
  auth() {
    return {
      onAuthStateChanged(fnc){
        return fnc(true);
      },
      signOut: () => Promise.resolve(),

    }
  }
}));

describe('topHeader.vue', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallowMount(TopHeader, {
      mocks: {
        $router
      }
    });

    jest.resetModules();
    jest.clearAllMocks();
  });

  it ("renders",() => {
    expect(wrapper.exists()).toBe(true);
  });

  it("does h1 exist ?", () => {
    expect(wrapper.find("h1").text()).toBe("Logged in:");
  });

  it("user is logged in after starting firebase mock", () => {
    expect(wrapper.vm.loggedIn).toBe(true);
  });

  it("on signout move to correct place", async () => {
    // wrapper.find("button").trigger("click");
    wrapper.find('button').trigger("click");

    await flushPromises();
    expect($router.replace).lastCalledWith({name: "login"})
  })
})
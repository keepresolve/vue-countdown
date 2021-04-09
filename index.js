import VueCountdown from "./vue-countdown/index.js";

const components = [VueCountdown];

const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  VueCountdown,
  install,
};


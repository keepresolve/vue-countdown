import VueCountdown from "./countdown.vue";
VueCountdown.install = function () {
  Vue.component(VueCountdown.name, VueCountdown);
};
export default VueCountdown;

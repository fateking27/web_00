export const mycolor = {
  inserted(el, binding) {
    el.style.color = binding.value;
  },
};
export const myfocus = {
  inserted(el) {
    el.focus();
  },
};

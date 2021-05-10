export const throttle = (fn: () => void, delay?: number) => {
  let timer: NodeJS.Timeout;
  let start = new Date().getTime();
  let _delay = delay || 160;
  return function () {
    const args = arguments;
    const current = new Date().getTime();

    if (current - start >= _delay) {
      fn.apply(this, args);
      start = current;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, _delay);
    }
  };
};

const scrollToBottom = (e) => {
  if (e.offsetHeight >= e.scrollHeight) return;
  if (typeof e.scroll === 'function') {
    e.scroll({
      top: e.scrollHeight,
      behavior: 'smooth',
    });
  } else {
    e.scrollTop = e.scrollHeight;
  }
};

export const observe = (element) => {
  const observer = new MutationObserver(() => {
    scrollToBottom(element);
  });
  observer.observe(element, {
    childList: true,
    subtree: true,
  });

  return {
    detach() {
      observer.disconnect();
    },
  };
};

export interface ObserveResult {
  /**
   * Stop listening for changes
   */
  detach: () => void;
}

/**
 * Scrolls to bottom whenever a change in a given Dom element occurs.
 * @param element DOM Element to observe for changes
 */
export function observe(element: HTMLElement): ObserveResult {
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
}

function scrollToBottom(e: HTMLElement) {
  if (e.offsetHeight >= e.scrollHeight) return;
  if (typeof e.scroll === 'function') {
    e.scroll({
      top: e.scrollHeight,
      behavior: 'smooth',
    });
  } else {
    e.scrollTop = e.scrollHeight;
  }
}

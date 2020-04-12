declare module '@compactjs/chatscroll';

interface ObserveResult {
  /**
   * Stop listening for changes
   */
  detach: () => void;
}

/**
 * Scrolls to bottom whenever a change in a given Dom element occurs.
 * @param element DOM Element to observe for changes
 */
export function observe(element: HTMLElement): ObserveResult;

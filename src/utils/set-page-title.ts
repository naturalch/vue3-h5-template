import { pageDefaultTitle } from '@/pkg-settings';

export default function setPageTitle(routerTitle?: string): void {
  window.document.title = routerTitle
    ? `${routerTitle} | ${pageDefaultTitle}`
    : `${pageDefaultTitle}`;
}

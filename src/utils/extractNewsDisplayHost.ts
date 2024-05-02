const exDomains = new Set(['github.com', 'twitter.com']);

export const extractNewsDisplayHost = (rawUrl: string) => {
  const url = new URL(rawUrl);
  const hostname = url.hostname.startsWith('www.') ? url.hostname.substring('www.'.length) : url.hostname;

  if (exDomains.has(hostname)) {
    const { pathname } = url;
    return `${hostname}${pathname.slice(0, pathname.indexOf('/', 1))}`;
  }

  return hostname;
};

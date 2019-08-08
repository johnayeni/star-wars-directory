export const extractPageNumberFromUrl = (url) => {
  let page = null;
  if (typeof url === 'string') page = Number.parseInt(url.replace(/^\D+/g, ''), 10);
  return isNaN(page) ? null : page;
};

export const handlePayload = (payload) => {
  const { next: nextPageUrl, previousPageUrl, results: list } = payload;
  const next = extractPageNumberFromUrl(nextPageUrl);
  const previous = extractPageNumberFromUrl(previousPageUrl);
  return { next, previous, list };
};

export const buildUrl = (base, path, page = 1) => `${base}/${path}?page=${page}`;

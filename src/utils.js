export const extractPageNumberFromUrl = (url) => {
  let page = null;
  if (typeof url === 'string') page = Number.parseInt(url.replace(/^\D+/g, ''), 10);
  return isNaN(page) ? null : page;
};

export const handlePayload = (payload) => {
  const {
    next: nextPageUrl, previous: previousPageUrl, results: list, count,
  } = payload;
  const next = extractPageNumberFromUrl(nextPageUrl);
  const previous = extractPageNumberFromUrl(previousPageUrl);
  return {
    next,
    previous,
    list,
    count,
  };
};

export const buildUrl = (base, path, page = 1) => `${base}/${path}?page=${page}`;

export const getRandomIndexFromArray = (arr) => {
  const len = arr.length;
  return Math.floor(Math.random() * len);
};

export const generatePageInfoText = (prevPage, nextPage, count) => {
  if (nextPage) {
    return ` ${(nextPage - 1) * 10 - 9}-${(nextPage - 1) * 10} to ${count}`;
  }
  if (prevPage) {
    return `${prevPage * 10 + 1}-${count} to ${count}`;
  }
  return '';
};

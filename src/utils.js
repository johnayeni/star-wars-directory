export const extractPageNumberFromUrl = (url) => {
  let page = null;
  if (typeof url === 'string') page = Number.parseInt(url.replace(/^\D+/g, ''), 10);
  return isNaN(page) ? null : page;
};

export const handlePayload = (payload) => {
  const {
    next: nextPageUrl, previous: previousPageUrl, results, count,
  } = payload;
  const next = extractPageNumberFromUrl(nextPageUrl);
  const previous = extractPageNumberFromUrl(previousPageUrl);
  const list = results.map(item => ({ ...item, id: String(extractPageNumberFromUrl(item.url)) }));
  return {
    next,
    previous,
    list,
    count,
  };
};

export const buildUrl = (base, path, page = 1, search = '') => encodeURI(`${base}/${path}?page=${page}&search=${search}`);

export const isUrl = (str) => {
  const pattern = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  return !!pattern.test(str);
};

export const validateObjectKeyAndValue = ([key, value]) => key !== 'created'
  && key !== 'edited'
  && key !== 'name'
  && key !== 'id'
  && typeof value === 'string'
  && !isUrl(value);

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
  if (count) {
    return `${count} - ${count} of ${count}`;
  }
  return '';
};

import { buildUrl } from '@/utils';

const API_URL = 'https://swapi.co/api';

// eslint-disable-next-line import/prefer-default-export
export const fetchData = async (url, page, search) => (await fetch(buildUrl(API_URL, url, page, search))).json();

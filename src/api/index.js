import { buildUrl } from '@/utils';

export const API_URL = 'https://swapi.co/api';

export const fetchData = async (url, page, search) => (await fetch(buildUrl(API_URL, url, page, search))).json();

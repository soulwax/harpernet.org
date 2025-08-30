// File: src/utils/api.js (Example utility using aliases)

import { config } from '@config/env.js';

export const fetchData = async (endpoint) => {
  const response = await fetch(`${config.apiBaseUrl}${endpoint}`);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  return response.json();
};

export const postData = async (endpoint, data) => {
  const response = await fetch(`${config.apiBaseUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
};

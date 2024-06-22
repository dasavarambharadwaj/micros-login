import { genericErrorMessage } from "./constants";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const request = async (endpoint, method, body = null, queryParams = {}) => {
  const url = new URL(`${API_BASE_URL}/${endpoint}`);

  Object.keys(queryParams).forEach((key) =>
    url.searchParams.append(key, queryParams[key])
  );

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    debugger;
    if (!response.ok) {
      const body = await response.json();
      throw new Error(body?.message ?? genericErrorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const api = {
  get: (endpoint, queryParams) => request(endpoint, "GET", null, queryParams),
  post: (endpoint, body) => request(endpoint, "POST", body),
  put: (endpoint, body) => request(endpoint, "PUT", body),
  patch: (endpoint, body) => request(endpoint, "PATCH", body),
  delete: (endpoint, body) => request(endpoint, "DELETE", body),
};

export default api;

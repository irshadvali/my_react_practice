import fetch from "fetch-everywhere";
export const API_URL_ROOT = "https://api.myjson.com/bins/";

export async function post(url, payload) {
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: "POST",
    body: JSON.stringify(payload),

  });
}

export async function get(url) {
  return await fetch(`${API_URL_ROOT}/${url}`, {

  });
}

export async function put(url, payload) {
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}
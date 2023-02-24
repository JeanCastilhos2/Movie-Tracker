const apiBASE = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;

const apiRequest = async (endPoint) => {
  const response = await fetch(`${apiBASE}${endPoint}&${apiKEY}`);
  const data = await response.json();
  return data.results;
};

export const getLista = async (endPoint) => (await apiRequest(endPoint))


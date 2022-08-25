const JSON_CONTENT_TYPE = { "Content-Type": "application/json" };

export async function fetch_url({
  url,
  data,
  method = "GET",
  headers = JSON_CONTENT_TYPE,
}) {
  const create_init_fetch = () => {
    const init = {
      method,
      headers,
      body: JSON.stringify(data),
    };
    if (method === "GET") delete init.body;
    return init;
  };

  return fetch(url, create_init_fetch())
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
}

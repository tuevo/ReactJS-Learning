export const HttpRequestService = {
  post: async (url, params, isAuthenticated) => {
    const res = await (
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'token': isAuthenticated ? localStorage.token : ''
        }
      })
    ).json();

    return res;
  }
}
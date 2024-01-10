export default {
  async fetch(request, env) {
    let url = new URL(request.url);

    if (request.headers.host === 'example.com') {
      // 你的代理IP，替换成你希望的固定IP
      let proxyIP = "172.64.93.79";

      // 使用代理IP
      let proxyUrl = new URL(request.url);
      proxyUrl.hostname = proxyIP;

      let new_request = new Request(proxyUrl, request);
      new_request.headers['X-Custom-Header'] = 'value';

      return fetch(new_request);
    }

    return env.ASSETS.fetch(request);
  }
};
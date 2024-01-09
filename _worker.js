export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      // 你的代理IP，替换成你希望的固定IP
      let proxyIP = "172.64.93.79";
      
      // 使用代理IP
      let proxyUrl = new URL(request.url);
      proxyUrl.hostname = proxyIP;

      let new_request = new Request(proxyUrl, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  }
};

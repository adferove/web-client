import config from '../config/index';

export default class Api {
  static async getDefinitionsByText(endpoint, text) {
    let res = false;
    const url = `${config.legalBotHost}/${endpoint}/${text}`;
    const request = Api.fetchJson(url, 'get', null, null);
    res = await request;
    return res;
  }

  static isEmpty(str) {
    let result = true;
    if (str !== null && str !== undefined) {
      str = str.trim();
      if (str.length > 0 && str !== '-' && str !== '.') {
        result = false;
      }
    }
    return result;
  }

  static addQueryParam(url, paramName, paramValue) {
    let param;
    if (paramName) {
      param = paramName + '=';
    }
    if (paramValue) {
      param = param + encodeURIComponent(paramValue);
    }
    if (url) {
      if (url.indexOf('&') > -1 || url.indexOf('?') > -1) {
        url = url + '&';
      } else {
        url = url + '?';
      }
    }
    url = url + param;
    return url;
  }

  static async fetchText(url, method, headers, body) {
    let msg = 'Api.fetchText(): ' + method + ' ' + url + ' -> ';
    let res = null;
    try {
      const options = { method };
      if (headers) {
        options.headers = headers;
      }
      if (body) {
        options.body = body;
      }
      const request = fetch(url, options);
      const response = await request;
      if (response) {
        msg += response.status + ' (' + response.statusText + ')';
        if (response.ok) {
          res = await response.text();
        }
      }
    } catch (err) {
      console.error(err);
    }
    console.log(msg);
    return res;
  }

  static async fetchJson(url, method, headers, body) {
    let res = null;
    const responseText = await Api.fetchText(url, method, headers, body);
    if (responseText) {
      try {
        res = JSON.parse(responseText);
      } catch (err) {
        console.log("Couldn't parse the responseText", responseText);
        res = responseText;
      }
    }
    return res;
  }
}

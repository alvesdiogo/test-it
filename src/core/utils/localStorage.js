// LIBs
import { encode, decode } from "js-base64";

export default {
  // Cria um item no localStorage
  set: (name, value) => {
    window.localStorage.setItem(name, encode(JSON.stringify(value)));
  },
  // Pega um item do localStorage
  get: (name) => {
    let value = window.localStorage.getItem(name);

    if (value) {
      return JSON.parse(decode(value));
    } else {
      return false;
    }
  },
  // Deleta um item do localStorage
  del: (name) => {
    if (window.localStorage.getItem(name)) {
      window.localStorage.removeItem(name);

      return true;
    } else {
      return false;
    }
  }
};

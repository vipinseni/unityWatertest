export const queryParams = {
    encode: (data) => {
        const ret = [];
        for (let d in data)
          ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        return ret.join('&');
    },
    decode: (key) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(key);
    }
};
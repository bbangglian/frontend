// common.js
export default function parseQueryString(query) {
    if (!query || typeof query !== 'string') return {};

    return query
        .replace(/^\?/, '') // ? 제거
        .split('&')         // key=value 쌍 나누기
        .reduce((acc, pair) => {
            const [key, value] = pair.split('=');
            acc[decodeURIComponent(key)] = decodeURIComponent(value || '');
            return acc;
        }, {});
}

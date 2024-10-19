export const DataApi = (query, key) => {
    const api = `https://api.jikan.moe/v4/${query}?q=${key}`
    return api;
}

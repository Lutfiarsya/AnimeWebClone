export const DataApi = (query, id) => {
    const api = `https://api.jikan.moe/v4/${query}?${id}`
    return api;
}

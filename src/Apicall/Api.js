export const DataApi = (query, key) => {
    const api = `https://api.jikan.moe/v4/${query}?q=${key}`
    return api;
}

export const allAnime = (query) => {
    const api = `https://api.jikan.moe/v4/${query}`
    return api;
}
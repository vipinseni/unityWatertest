export const util_storage = {
    get: key => JSON.parse(window.localStorage.getitem(key))
}
// constructs absolute path from passed in relative path to use images from assets folder (usually used with modules)
// resolves potential issues of relative paths breaking
export const getImageUrl = (path) => {
    // import.meta.url = gives the absolute URL of the current file
    // new URL(relative path, base) = the browser's URL constructor, which resolves a relative path against a base URL
    // .href = extracts the final URL string from the URL object
    // return new URL(`/assets/${path}`, import.meta.url).href;
    return `/assets/${path}`;
};
export const storeUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
};

export const userData = () => {
    const stringifieldUser = localStorage.getItem('user') || '""';
    return JSON.parse(stringifieldUser || {});
}
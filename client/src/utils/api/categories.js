import { instance } from './index'
export const getCategories = async () => {
    const res = await instance.get('/categories?populate=img&[populate][0]=products&populate[1]=products.thumbnail&populate[2]=products.images');
    return res.data;
}
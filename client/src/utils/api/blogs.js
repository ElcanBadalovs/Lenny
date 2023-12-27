import { instance } from './index'
export const getBlogs = async () => {
    const res = await instance.get('/blogs?populate=*');
    return res.data;
}
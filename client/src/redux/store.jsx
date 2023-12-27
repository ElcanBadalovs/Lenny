import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import categorySlice from './categorySlice'
import ReviewFilterSlice from './ReviewFilterSlice'
import searchProductSlice from './searchProductSlice'
import logSlice from './logSlice'
import amountSlice from './amountSlice'
import buyProductsList from './buyProductsList'
import userInfo from './userInfo'
import buyProductCount from './buyProductCount'

export const store = configureStore({
  reducer: {
    amountSlice: amountSlice,
    buyProductCount: buyProductCount,
    buyProductsList: buyProductsList,
    categorySlice: categorySlice,
    productSlice: productSlice,
    ReviewFilterSlice: ReviewFilterSlice,
    searchProductSlice: searchProductSlice,
    logSlice: logSlice,
    userInfo: userInfo,
  },
})
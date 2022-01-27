import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PizzaItem, SortOption} from "../../types/interfaces";

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://my-json-server.typicode.com/tovach/react-pizza-jsonserver/'}),
    endpoints: (builder) => ({
        getGoods: builder.query<PizzaItem[], { category: string, sortBy: SortOption }>({
            query: ({
                        category,
                        sortBy,
                    }) => `goods?category_like=${category}&_sort=${sortBy.value}&_order=${sortBy.order}`
        }),
        getCategories: builder.query<string[], void>({
            query: () => 'categories'
        }),
    })
})

export const {useGetGoodsQuery, useGetCategoriesQuery} = goodsApi;


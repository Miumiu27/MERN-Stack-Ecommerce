import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoriteItems: [],
    favTotalQuantity: 0
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFav: (state, action) => {
        const newItemFav = action.payload
        const existingFav = state.favoriteItems.find(
            (item) => item.id === newItemFav.id
        );

        
        if (!existingFav) {
            state.favoriteItems.push({
                id: newItemFav.id,
                productName: newItemFav.productName,
                imgUrl: newItemFav.imgUrl,
                price: newItemFav.price, 
                quantity: 1,
            });
            state.favTotalQuantity++
        };

    },

    deletFavItem: (state, action) => {
        const id = action.payload
        const existingFav = state.favoriteItems.find(item => item.id === id)

        if(existingFav) {
            state.favoriteItems = state.favoriteItems.filter(item => item.id !== id)
            state.favTotalQuantity = state.favTotalQuantity - existingFav.quantity
        }

    }
  }
});

export const favAction = favoriteSlice.actions;

export default favoriteSlice.reducer
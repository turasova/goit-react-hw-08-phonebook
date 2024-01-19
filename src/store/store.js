import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";
import { contactsPersistReducer } from "./contactsSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";


export const store = configureStore({
    reducer: {
        contacts: contactsPersistReducer,
        filter: filterSlice.reducer,
       
    },
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
            }
        })
});
 
export const persistor = persistStore(store)


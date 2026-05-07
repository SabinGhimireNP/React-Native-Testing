import {create} from "zustand";

interface DataState {
    todos: any[];
    loading: boolean;
    fetchData: () => Promise<void>;
}


const useDataStore = create<DataState>((set) => ({
    todos: [],
    loading: false,
   
    fetchData: async () => {
        try{
            const response = await fetch("https://dummyjson.com/products");
            const result = await response.json();
            set({todos: result.products, loading: false});
        } catch (error) {
            console.error("Error fetching data:", error);
            set({loading: false});
        }
    },
}));

export default useDataStore;
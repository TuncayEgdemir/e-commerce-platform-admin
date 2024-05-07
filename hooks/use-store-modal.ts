import  {create} from "zustand";

interface useStoreModaStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


export const useStoreModal = create<useStoreModaStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));
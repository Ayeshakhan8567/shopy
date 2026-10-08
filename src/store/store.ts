import {create} from "zustand";

type Store={
    currentIndex:number;
    currentIndex2:number;
    handleFirstSlideshow:()=>void;
    handleSecondSlideshow:()=>void;
}
const useStore=create<Store>((set)=>({
    
    currentIndex:0,
    currentIndex2:0,

    handleFirstSlideshow:
     () => set((state) => ({ currentIndex: (state.currentIndex + 1) % 2 })),

    handleSecondSlideshow:() => {
    set((state) => {
      if (state.currentIndex2 >= 4) {
        return { currentIndex2: 0 };
      }

      return { currentIndex2: state.currentIndex2 + 1 };
    });
    }
}))
export default useStore;

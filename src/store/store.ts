import { create } from "zustand";

type Store = {
  currentIndex: number;
  currentIndex2: number;
  currentIndex3: number;
  handleFirstSlideshow: () => void;
  handleSecondSlideshow: () => void;
  handleThirdSlideshow: () => void;
};

const useStore = create<Store>((set) => ({
  currentIndex: 0,
  currentIndex2: 0,
  currentIndex3: 0,

  handleFirstSlideshow: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % 2,
    })),

  handleSecondSlideshow: () => {
    set((state) => {
      if (state.currentIndex2 >= 4) {
        return { currentIndex2: 0 };
      }

      return { currentIndex2: state.currentIndex2 + 1 };
    });
  },

  handleThirdSlideshow: () => {
    set((state) => {
      if (state.currentIndex3 >= 2) {
        return { currentIndex3: 0 };
      }

      return { currentIndex3: state.currentIndex3 + 1 };
    });
  },
}));

export default useStore;
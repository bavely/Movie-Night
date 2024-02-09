import { genres } from "../interfaces/moodInterface";
import { render } from "../interfaces/randerInterface";
import { search } from "../interfaces/searchInterface";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useRander = create<render>()(
    
   persist ((set) => ({
      ms: false,
      as: false,
      ma: true
  }) , {
    name: "render",
    storage: createJSONStorage(() => localStorage),
  })
  )

export const useMoodGenres = create<genres>()(
    
   persist ((set) => ({
      type: "",
      page: 1
  }) , {
    name: "moodGenres",
    storage: createJSONStorage(() => localStorage),
  })
  )
  
  export const searchCriteria = create<search>()(
    
   persist ((set) => ({
      keyword: "",
      page: 1
  }) , {
    name: "searchCriteria",
    storage: createJSONStorage(() => localStorage),
  })
  )

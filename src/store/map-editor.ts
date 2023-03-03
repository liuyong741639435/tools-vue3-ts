import { defineStore } from 'pinia'
export const useMapEditorStore = defineStore('mapEditor', {
  state: () => ({ 
    // imgs 背景图相关
    imgsSize: {
      width: 930,
      height: 610
    },
    // 格子相关
   cells: {
     
   }
  }),
  getters: {
  },
  actions: {
  },
})
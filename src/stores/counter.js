import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const loginstatus=ref(false)

  return {loginstatus }
})

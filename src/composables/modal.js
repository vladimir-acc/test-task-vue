import { reactive, ref } from "vue";

export const useModal = () =>{ 
  const isVisible = ref(false)
  
  const show = () => {
    isVisible.value = true
  }
  
  const hide  = () => {
    isVisible.value = false
  }

  const toggle = () => {
    isVisible.value = !isVisible.value
  }

  return reactive({ hide, show, toggle, isVisible })
}
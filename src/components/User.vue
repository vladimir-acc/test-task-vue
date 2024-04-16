<template>
  <transition name="fade">
    <div
      v-show="selected"
      class="absolute flex justify-between w-full side-width h-[138px] md:h-[144px] rounded-[15px] s-linaire shadow-md hover:shadow-none cursor-pointer"
    ><img
        class="absolute top-12 right-4 md:right-6"
        width="40"
        height="30"
        src="../assets/img/check.svg"
      >
    </div>
  </transition>
  <div
    class="relative flex justify-between items-center py-[1.85rem] px-5 my-10 rounded-[15px] bg-white shadow-md hover:shadow-none cursor-pointer "
    :style="selected ? 'max-width:84%;box-shadow: none;' :''"
  >
    <div class="pr-5">
      <img
        src="../assets/img/avatar.png"
        alt="Avatar"
      >
    </div>
    <div :class="selected ? 'md:m-auto' :''">
      <p class="font-[600] md:text-[22px]">{{user.name}}</p>
      <p class="md:text-[18px]">{{user.position}}</p>
    </div>
    <div
      class="relative w-[85px] h-[85px]"
      :style="selected ? 'display:none' :''"
    >
      <div
        class="!absolute text-gray-100 radial-progress inset-[1.5px]"
        :style="{'--thickness':'4px','--size':'83px', '--value':'100'}"
      ></div>
      <div
        class="!absolute radial-progress  inset-0"
        :style="{'--thickness':'6px','--size':'85px', '--value':user.level, 'color':color}"
      >
        <span class="font-[600] md:text-[22px]">{{user.level}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: {
    user: {
      type: Object
    },
    selected: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props) {
    const color = computed(() => {
      if (props.user.level > 80) {
        return 'rgba(0, 201, 111, 1)'
      } else if (props.user.level > 50) {
        return 'rgba(248, 219, 120, 1)'
      } else if (props.user.level < 25) {
        return '#f75d4975'
      }
      return 'rgba(255, 114, 95, 1)'
    })
    return { color }
  }
}
</script>
<style>
.side-width {
  width: calc(100% - 60px);
}
@media (min-width: 315px) and (max-width: 767px) {
  .side-width {
    width: calc(100% - 16px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
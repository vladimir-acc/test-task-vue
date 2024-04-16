<template>
  <div class="flex no-wrap justify-between">
    <button
      class="flex btn-sort border border-transparent border-b-[#F0F0F0] cursor-pointer"
      @click="toggleSort()"
      title="Sort"
    >
    </button>
    <input
      type="text"
      @keyup="onSearch(nameKey)"
      v-model="nameKey"
      class="w-full border border-transparent border-b-[#F0F0F0] outline-inherit bg-[#F8F9FB] focus:outline-none focus-visible:none"
    /><button>
      <img
        src="../assets/img/user-add.svg"
        alt="add user"
        title="Add user"
        class="border border-transparent border-b-[#F0F0F0] cursor-pointer"
        @click="modal.show"
      />
    </button>
    <hr />
  </div>
  <UserForm
    :modal="modal"
    @submit="onAdd"
  />
</template>

<script>
import UserForm from "./UserForm.vue";
import { useModal } from "../composables/modal";
import { useUsersStore } from "../stores/users";
import { ref } from 'vue';

export default {
  components: { UserForm },
  setup() {
    const modal = useModal();
    const usersStore = useUsersStore();
    const isSorted = ref(false);
    const nameKey = ref('');

    const onAdd = (user) => {
      usersStore.users.unshift(user);
      modal.hide();
    };
    const toggleSort = () => {
      isSorted.value = !isSorted.value;
      if (isSorted.value) usersStore.sortUser();
      else usersStore.unSortUser();
    };

    const onSearch = (nameKey) => {
      usersStore.search(nameKey);
    }

    return { modal, onAdd, toggleSort, isSorted, onSearch, nameKey };
  },
};
</script>
<style>
.btn-sort::after {
  content: "⇵";
  color: rgb(186, 185, 185);
  font-size: 20px;
  font-weight: 900;
  --tw-border-opacity: 1;
  border-bottom-color: rgb(240 240 240 / var(--tw-border-opacity));
  position: relative;
  width: 40px;
  top: 10px;
  transform: scaleX(1.8);
}
</style>
<template>
  <div class="side relative w-[98%] md:min-w-[480px] md:max-w-[577px] p-2 md:px-[30px] md:py-[50px] bg-[#F8F9FB] overflow-hidden max-h-[750px] md:max-h-[980px]">
    <Nav />
    <div
      v-for="(user, key) in usersStore.users"
      :key="key"
      @click="() => (usersStore.user = user)"
    >
      <User
        :user="user"
        :selected="usersStore.user == user"
      />
    </div>
    <div class="overflow-transparent inset-0 top-[unset]"></div>
  </div>
</template>
<script>
import Nav from "./Nav.vue";
import User from "./User.vue";

import { useUsersStore } from "../stores/users";

export default {
  components: { Nav, User },
  setup() {
    const usersStore = useUsersStore();

    const deleteUser = (index) => {
      usersStore.removeUser(index);
    };

    return { usersStore };
  },
};
</script>

<style>
.side {
  -webkit-box-shadow: 13px 1px 10px -16px rgba(145, 145, 145, 1);
  -moz-box-shadow: 13px 1px 10px -16px rgba(145, 145, 145, 1);
  box-shadow: 13px 1px 10px -16px rgba(145, 145, 145, 1);
}
</style>
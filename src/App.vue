<template>
  <router-view></router-view>
</template>

<script>
import { useUsersStore } from './stores/users';

export default {
  setup() {
    const usersStore = useUsersStore();
    usersStore.user = usersStore.users[2];
  },
};
</script>


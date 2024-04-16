
<template>
  <div class="grid grid-cols-1 md:grid-cols-3">
    <SideBare />
    <UserProfile />
  </div>
</template>
<script>

import SideBare from '../components/SideBare.vue';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile, SideBare }

}
</script>

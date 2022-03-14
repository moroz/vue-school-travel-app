<script lang="ts">
import SiteNavigation from "@/components/SiteNavigation.vue";

export default {
  components: {
    SiteNavigation
  }
};
</script>

<template>
  <SiteNavigation />
  <div class="container">
    <router-view></router-view>
  </div>
</template>


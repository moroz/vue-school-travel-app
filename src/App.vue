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
    <router-view :key="$route.path"></router-view>
  </div>
</template>

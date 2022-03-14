<template>
  <nav id="nav">
    <router-link id="logo" to="/">Vue School Travel App</router-link>
    <router-link
      v-for="destination in destinations"
      :to="{ name: 'destination.show', params: { slug: destination.slug } }"
      :key="destination.id"
      v-text="destination.name"
    ></router-link>
  </nav>
</template>

<script lang="ts">
import { destinations } from "@/data.json";

export default {
  data() {
    return {
      destinations
    };
  }
};
</script>

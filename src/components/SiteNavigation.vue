<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
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

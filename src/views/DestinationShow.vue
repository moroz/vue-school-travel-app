<template>
  <section class="destination" v-if="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p v-text="destination.description" />
    </div>
  </section>
</template>

<script lang="ts">
import { destinations } from "@/data.json";

export default {
  computed: {
    destination() {
      return destinations.find((dest) => dest.slug === this.$route.params.slug);
    }
  }
};
</script>

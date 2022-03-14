<script setup lang="ts">
import { destinations } from "@/data.json";
</script>

<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link
      v-for="destination in destinations"
      :to="`/${destination.slug}`"
      :key="destination.id"
      v-text="destination.name"
    ></router-link>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
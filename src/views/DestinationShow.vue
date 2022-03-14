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
const fetchData = async (slug: string) => {
  const res = await fetch(`https://travel-dummy-api.netlify.app/${slug}`);
  return res.json();
};

export default {
  data() {
    return {
      destination: null
    };
  },
  methods: {
    async initData() {
      this.destination = await fetchData(this.$route.params.slug as string);
    }
  },
  async created() {
    this.initData();
  }
};
</script>

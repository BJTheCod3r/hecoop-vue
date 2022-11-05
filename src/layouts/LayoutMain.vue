<template>
  <main class="d-flex">
    <div class="overflow-auto flex-grow-1 vh-100">
      <TheHeader />
      <router-view />
    </div>
  </main>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>
<style lang="scss">
body {
  background-color: $main-body-bg;
}
</style>

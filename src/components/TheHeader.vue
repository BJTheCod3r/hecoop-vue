<template>
  <header class="main-header d-flex justify-content-between">
    <div class="d-flex flex-column justify-content-center">
      <h1>{{ $route.meta.title ? $route.meta.title : "" }}</h1>
      <p>{{ $route.meta.description ? $route.meta.description : "" }}</p>
    </div>
    <div>
      <b-button variant="primary" @click="signOut">Sign Out</b-button>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    signOut() {
      this.$store.dispatch('auth/signOut')
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="scss" scoped>
.main-header {
  background-color: $body-bg;
  color: $dark-blue;
  height: 131px;
  padding: 2.65% 3.8% 0.2% 3.8%;
  h1 {
    font-size: 1.875rem;
    font-weight: 600;
    @include media-breakpoint-down(sm) {
      font-size: 1.25rem;
    }
  }
  p {
    @include media-breakpoint-down(sm) {
      font-size: 0.875rem;
    }
  }
}
</style>

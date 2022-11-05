<template>
  <main>
    <div class="auth-container d-flex justify-content-center align-items-center">
      <div class="auth-form">
        <router-view />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.auth-container {
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
}
.auth-form {
  background-color: $white;
  width: 45.13%;
  max-width: 650px;
  min-height: 470px;
  padding: 2em 3em;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: $size-10 * 2;
  @media screen and (min-width: $breakpoint-sm) {
    min-width: 650px;
  }
  @media screen and (max-width: $breakpoint-sm) {
    width: 90%;
  }
}
</style>

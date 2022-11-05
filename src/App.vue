<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "App",
  components: {},
  mounted() {
    window.addEventListener("online", () => {
      this.toggleOnlineStatus(true);
      this.showToast("App is back online!", "info");
    });

    window.addEventListener("offline", () => {
      this.toggleOnlineStatus(false);
      this.showToast("App is currently offline!", "error");
    });
  },
  methods: {
    ...mapMutations({
      toggleOnlineStatus: "TOGGLE_ONLINE",
    }),
    showToast(message, type, duration = 7000) {
      this.$toast.open({
        message: message,
        type: type,
        duration: duration,
        position: "bottom-right",
      });
    },
  },
};
</script>

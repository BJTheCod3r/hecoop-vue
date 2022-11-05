<template>
  <div class="form-container">
    <div class="mb-4">
      <h1 class="mb-3">Sign In</h1>
    </div>
    <div class="form-group">
      <label for="">Email Address</label>
      <input
        v-model="payload.email"
        type="email"
        class="form-control"
        placeholder="e.g someone@example.com"
      />
    </div>
    <div class="form-group">
      <label for="">Password</label>
      <div class="with-icon">
        <input v-model="payload.password" :type="passwordType" class="form-control" />
        <span class="-icon m-cursor-pointer" @click="visiblePass = !visiblePass">
          <font-awesome-icon :icon="visiblePass ? faEye : faEyeSlash" />
        </span>
      </div>
    </div>
    <b-alert
      v-for="(err, i) in errors"
      :key="i"
      v-model="err.visible"
      class="mt-4"
      variant="danger"
      show
      dismissible
    >
      {{ err.message }}
    </b-alert>
    <div class="form-group m-mt-40">
      <b-button
        block
        variant="primary"
        :class="classObject"
        :disabled="btnDisabled"
        @click="signin()"
      >
        {{ processing ? "" : "Log In" }} <RingLoader v-if="processing" />
      </b-button>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import setErrorMixin from "@/mixins/setErrorMixin";
import RingLoader from "@/components/loader/RingLoader";

export default {
  title: "Sign In",
  components: { FontAwesomeIcon, RingLoader },
  mixins: [setErrorMixin],
  data() {
    return {
      faEye,
      faEyeSlash,
      visiblePass: false,
      errors: [],
      payload: {
        email: "",
        password: "",
        rememberMe: false,
      },
    };
  },
  computed: {
    btnDisabled() {
      return this.payload.email === "" || this.payload.password === "" || this.processing;
    },
    passwordType() {
      return this.visiblePass ? "text" : "password";
    },
  },
  methods: {
    signin() {
      this.processing = true;
      this.$store
        .dispatch("auth/signin", this.payload)
        .then(() => {
          location.replace("/resources");
        })
        .catch((err) => {
          let data = err?.response;
          if (data?.status === 422) {
            this.errors = this.getErrors(data.data.errors);
          }
        })
        .finally(() => {
          this.processing = false;
        });
    },
  },
};
</script>

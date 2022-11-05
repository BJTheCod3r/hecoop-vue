<template>
  <div class="resources">
    <div class="dashboard-content py-4">
      <div class="d-flex justify-content-between">
        <b-form-checkbox
          v-model="meta.completed"
          switch
          value="1"
          unchecked-value="0"
          size="lg"
        >
          completed
        </b-form-checkbox>
        <div class="mr-3">
          <BFormSelect v-model="meta.sort" :options="sortOptions" />
        </div>
        <div class="mr-2">
          <BFormInput v-model="meta.q" placeholder="Search resource" @keyup="search()" />
        </div>
      </div>
      <div class="mt-3 p-5 d-flex justify-content-center">
        <TreeNodes :nodes="treeNodes" />
        <p v-if="!treeNodes.length">Nothing to show here!</p>
      </div>
    </div>
  </div>
</template>
<script>
import TreeNodes from "@/components/TreeNodes"

import { mapGetters } from "vuex";

import debounce from "lodash.debounce";

export default {
  name: "Resources",
  components: {
    TreeNodes
  },
  data() {
    return {
      meta: {
        sort: null,
        completed: 0,
        q: null,
      },
      sortOptions: [
        {
          value: null,
          text: "No sort",
        },
        {
          value: "ASC",
          text: "ASC",
        },
        {
          value: "DESC",
          text: "DESC",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      treeNodes: "resource/treeNodes",
    }),
  },
  watch: {
    "meta.sort"() {
      this.fetchResources();
    },
    "meta.completed"() {
      this.fetchResources();
    },
  },
  created() {
    this.fetchResources();
  },
  methods: {
    search: debounce(function () {
      this.fetchResources();
    }, 400),
    fetchResources() {
      let meta = this.meta;

      Object.keys(meta).forEach((key) => {
        if (meta[key] == "") delete meta[key];
      });

      this.$store.dispatch("resource/fetchResources", meta);
    },
  },
};
</script>
<style lang="scss" scoped></style>

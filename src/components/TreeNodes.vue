<template>
  <Tree
    id="my-tree-id"
    ref="my-tree-ref"
    :nodes="nodes"
    :custom-styles="myCustomStyles"
  ></Tree>
</template>
<script>
import Tree from "vuejs-tree";

export default {
  name: "TreeNodes",
  components: {
    Tree,
  },
  props: {
    nodes: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    myCustomStyles() {
      return {
        tree: {
          style: {
            height: "100%",
            maxHeight: "100%",
            overflowY: "visible",
            display: "block",
            textAlign: "left",
          },
        },
        row: {
          style: {
            width: "100%",
            cursor: "pointer",
          },
          child: {
            class: "",
            style: {
              height: "50px",
              padding: "20px",
            },
            active: {
              class: "custom_row_active_class",
              style: {
                height: "50px",
              },
            },
          },
        },
        text: {
          style: {
            "text-transform": "none",
          },
          active: {
            style: {
              "font-weight": "bold",
              color: "#2ECC71",
            },
          },
        },
      };
    },
  },
};
</script>

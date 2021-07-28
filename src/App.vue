<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: 'App',
  mounted() {
    const store = useStore();
    store.dispatch("handleAuthStateChanged");
  }
})
</script>

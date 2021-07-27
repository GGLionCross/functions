<template>
  <q-layout view="lHr Lpr lFf">
    <app-header
      @toggle-drawer="toggleDrawer"
    ></app-header>

    <app-drawer
      v-model="drawerOpen"
      side="right"
    ></app-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AppDrawer from "src/components/AppDrawer.vue";
import AppHeader from "src/components/AppHeader.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { AppDrawer, AppHeader },
  setup () {
    const drawerOpen = ref(false);
    function toggleDrawer() {
      drawerOpen.value = !drawerOpen.value;
    }
    return {
      drawerOpen,
      toggleDrawer
    };
  }
})
</script>

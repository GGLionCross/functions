<template>
  <q-header>
    <q-toolbar>
      <q-btn
        v-if="showBackButton"
        flat
        dense
        round
        icon="arrow_back"
        aria-label="Go Back"
        @click="goBack"
      />
      <q-toolbar-title>
        Functions
      </q-toolbar-title>
      
      <!-- <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleDrawer"
      /> -->
    </q-toolbar>
  </q-header>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup(props, { emit }) {
    const route = useRoute();
    const showBackButton = computed(() => route.path !== "/");

    const router = useRouter();
    function goBack() {
      router.push({
        path: "/"
      });
    }

    function toggleDrawer() {
      emit("toggleDrawer");
    }

    return {
      showBackButton,
      goBack,
      toggleDrawer
    }
  }
});
</script>

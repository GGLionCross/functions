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
      
      <div v-if="isUserLoggedIn" class="row items-center q-gutter-x-sm">
        <div class="text-h6">{{ userEmail }}</div>
        <q-btn
          icon="logout"
          dense
          flat
          round
          @click="logout"
        ></q-btn>
      </div>
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
import { useStore } from "vuex";

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

    const store = useStore();
    const isUserLoggedIn = computed(() => store.getters.isUserLoggedIn);
    const userEmail = computed(() => store.getters.getCurrentUser.email);

    function logout() {
      store.dispatch("userLogout");
    }

    return {
      showBackButton,
      goBack,
      toggleDrawer,
      isUserLoggedIn,
      userEmail,
      logout
    }
  }
});
</script>

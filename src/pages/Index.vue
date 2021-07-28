<template>
  <q-page>
    <div v-if="!isUserLoggedIn" class="row justify-center q-pa-md">
      <login-register></login-register>
    </div>
    <div v-else>
      <q-btn
        color="primary"
        @click="goTo('image-hosting')"
      >
        Image Hosting
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import LoginRegister from "components/LoginRegister.vue";

export default defineComponent({
  components: { LoginRegister },
  setup() {
    const router = useRouter();
    function goTo(path) {
      router.push({
        path
      });
    }

    const store = useStore();
    const isUserLoggedIn = computed(() => store.getters.isUserLoggedIn);

    return {
      goTo,
      isUserLoggedIn
    };
  }
});
</script>

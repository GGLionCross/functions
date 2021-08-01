<template>
  <q-page class="flex flex-center">
    <div v-if="!isUserLoggedIn" class="row justify-center q-pa-md">
      <sign-in></sign-in>
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
import SignIn from "src/components/SignIn.vue";

export default defineComponent({
  components: { SignIn },
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

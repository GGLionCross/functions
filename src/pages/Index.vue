<template>
  <q-page class="flex flex-center">
    <q-btn
      color="primary"
      @click="goTo('image-hosting')"
    >
      Image Hosting
    </q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    function goTo(path) {
      router.push({
        path
      });
    }
    return { goTo };
  }
});
</script>

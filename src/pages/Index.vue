<template>
  <q-page class="flex flex-center">
    <q-btn
      color="primary"
      @click="goTo('pdf-to-jpg')"
    >
      Split PDF Into JPG Images
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

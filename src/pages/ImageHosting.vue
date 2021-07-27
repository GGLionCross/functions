<template>
  <q-page class="flex flex-center">
    <q-file
      v-model="images"
      label="Images"
      label-color="primary"
      dark
      multiple
    >
      <template v-slot:append>
        <q-icon name="attachment" color="primary" />
      </template>
    </q-file>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const images = ref(null);
    return {
      images
    };
  }
});
</script>

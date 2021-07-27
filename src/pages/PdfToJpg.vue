<template>
  <q-page class="row justify-center q-pa-md">
    <div class="column q-gutter-md">
      <q-file
        v-model="pdf"
        label="PDF"
        label-color="primary"
        color="grey-3"
        dark
      >
        <template v-slot:append>
          <q-icon name="attachment" color="primary" />
        </template>
      </q-file>
      <q-btn color="primary" @click="convert">
        Convert To JPG
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const pdf = ref(null);
    async function convert() {
      console.error("pdf:", pdf.value);
      if (pdf.value) {
        const buffer = await pdf.value.arrayBuffer();
        console.error("buffer:", buffer);
      }
    }
    return {
      pdf,
      convert
    };
  }
});
</script>

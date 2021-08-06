<template>
  <q-page class="flex flex-center">
    <div class="column">
      <!-- <div class="row">
        <q-img></q-img>
      </div> -->
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
      <div class="row justify-center">
        <q-btn color="primary" @click="upload">Upload</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const images = ref(null);

    function upload() {
      let userId = store.getters.getCurrentUser.userId;
      for (let file of images.value) {
        store.dispatch("storageUpload", {
          path: `image-hosting/${userId}/${file.name}`,
          file
        });
      }
    }
    return {
      images,
      upload
    };
  }
});
</script>

<template>
  <q-page class="column justify-between">
    <div class="col-grow column q-pa-md">
      <images-viewer class="col-grow" />
    </div>
    <div class="row justify-end q-px-md q-pb-md">
      <q-file
        v-model="images"
        label="Images"
        label-color="primary"
        dark
        dense
        multiple
      >
        <template v-slot:append>
          <q-icon name="attachment" color="primary" />
        </template>
      </q-file>
      <div>
        <q-btn color="primary" @click="upload">Upload</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import ImagesViewer from "components/ImageHosting/ImagesViewer.vue";
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { ImagesViewer },
  setup() {
    const store = useStore();
    const images = ref(null);

    onMounted(() => store.dispatch("retrieveHostedImages"));

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

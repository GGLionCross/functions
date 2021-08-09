<template>
  <q-scroll-area class="images-viewer column">
    <div class="row q-pa-md">
      <q-img
        v-for="img in images"
        :key="img.name"
        :alt="img.name"
        :title="img.name"
        :src="img.url"
        class="col-3"
        spinner-color="white"
      />
    </div>
  </q-scroll-area>
</template>

<script>
import { computed, defineComponent, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const images = computed(() => store.getters.getHostedImages);

    function removeRoutes(images) {
      // Remove routes to images
      Object.values(images).forEach(img => {
        router.removeRoute(img.name);
      });
    }
    function addRoutes(images) {
      // Add routes to images
      Object.values(images).forEach(img => {
        router.addRoute("image-hosting", {
          path: `/${img.name}`,
          name: img.name,
          redirect: img.url
        });
      });
    }
    async function setupRoutes(newImages, oldImages) {
      await removeRoutes(oldImages);
      await addRoutes(newImages);
      console.error(router.getRoutes());
    }
    watch(images, setupRoutes);

    return { images };
  }
})
</script>

<style lang="scss">
.images-viewer {
  border: 2px solid var(--q-positive);
  border-radius: 4px;
  .q-scrollarea__container {
    flex: 1 0 auto;
  }
}
</style>

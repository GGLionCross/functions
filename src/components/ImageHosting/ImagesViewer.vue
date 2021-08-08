<template>
  <q-scroll-area class="images-viewer column">
    <div class="q-pa-md">
      <q-btn color="primary">Hello</q-btn>
    </div>
  </q-scroll-area>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    
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

<template>
  <q-btn color="white" text-color="black" @click="login">
    <div class="row items-center q-gutter-x-sm">
      <div>Sign In With Google</div>
      <q-icon name="img:icons/google.svg" />
    </div>
  </q-btn>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    function login() {
      store.dispatch("userLogin");
    }

    return {
      login
    }
  }
});
</script>

<template>
  <canvas ref="bjsCanvas" />
</template>

<script lang="ts">
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "../scenes/PhotoDomScene";

export default {
  name: "BabylonScene",
  setup() {
    const bjsCanvas = ref(null);

    onMounted(() => {
      if (bjsCanvas.value) {
        createScene(bjsCanvas.value);
      }
    });

    return {
      bjsCanvas,
    };
  },
};
</script>

<style>  
  body {
    margin: 0;
  }
</style>

<style scoped>  
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
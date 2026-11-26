<script setup lang="ts">
import { ref } from 'vue'
import { useNuxtApp, useRuntimeConfig } from '#imports'

const { $createCallApp, $useCallApp } = useNuxtApp()
const options = useRuntimeConfig().public.callapp
const path = 'question/270839820/answer/477722658'
const scheme = ref('')

function previewScheme () {
  scheme.value = $createCallApp(options).generateScheme({ path })
}
</script>

<template>
  <div>
    <button @click="$useCallApp({ path })">
      打开知乎
    </button>
    <button @click="previewScheme">
      预览唤端链接
    </button>
    <output v-if="scheme">{{ scheme }}</output>
  </div>
</template>

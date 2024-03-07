<template>
  <div className="App">
    <button
      @click="$useCallApp({ path: 'question/270839820/answer/477722658' })"
    >
      callapp-lib 唤端
    </button>
  </div>
</template>

<script setup>
const {$createCallApp} = useNuxtApp()
const click = () => {
  const CallApp = $createCallApp({
    scheme: ''
  })
}
</script>

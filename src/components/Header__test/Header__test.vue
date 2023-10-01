<template>
    <button
        @click="increment"  
    >
        add
    </button>
    <div>
        <p>bunny dust</p>
        <span>{{ counter }}</span>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const counter = ref(0)
    function increment() {
      counter.value++
    }
    console.log("counter.value")
</script>
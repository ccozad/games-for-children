<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goToMemory() {
    router.push('/memory')
}
</script>


<template>
    <button class="btn btn-primary" @click="goToMemory()">
        Memory
    </button>
</template>
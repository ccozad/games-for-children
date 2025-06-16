<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goToMemory() {
    router.push('/memory')
}
</script>


<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center m-3">
                <button class="btn btn-primary" @click="goToMemory()">
                    Memory
                </button>
            </div>
        </div>
                <div class="row">
            <div class="col-md-12 text-center m-3">
                <button class="btn btn-primary" @click="goToMemory()">
                    Balloon Pop
                </button>
            </div>
        </div>
    </div>

</template>
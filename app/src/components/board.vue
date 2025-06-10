<script setup>
import { ref } from 'vue';
const cards = ref([
    {
        name: 'Apple',
        img: 'apple.jpg',
        isFlipped: false
    },
    {
        name: 'Banana',
        img: 'banana.jpg',
        isFlipped: false
    },
    {
        name: 'Orange',
        img: 'orange.jpg',
        isFlipped: false
    }/*,
    {
        name: 'Pineapple',
        img: 'pineapple.png'
    },
    {
        name: 'Strawberry',
        img: 'strawberry.png'
    },
    {
        name: 'Watermelon',
        img: 'watermelon.png'
    }*/
]);

const flipCard = (card) => {
    card.isFlipped = true;
};
</script>

<template>
    <div class="row">
        <div class="col-md-6 col-lg-6 col-xl-6 mx-auto">
            <div class="row justify-content-md-center">
                <div v-for="card in cards" class="col-auto m-3 flip-container" :class="{ 'flipped': card.isFlipped }" @click="flipCard(card)">
                    <div class="memorycard">
                        <div class="front border rounded shadow"><img width="100" height="150" src="/images/cardback.png"></div>
                        <div class="back border rounded  shadow"><img width="100" height="150" :src="'/images/' + card.img"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flip-container {
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -o-perspective: 1000;
    perspective: 1000;
    min-height: 150px;
    cursor: pointer;
}

.front,
.back {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 0.6s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 0.6s;
    -moz-transform-style: preserve-3d;
    -o-transition: 0.6s;
    -o-transform-style: preserve-3d;
    -ms-transition: 0.6s;
    -ms-transform-style: preserve-3d;
    transition: 0.6s;
    transform-style: preserve-3d;
    top: 0;
    left: 0;
    width: 100%;
}

.back {
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    position: absolute;
}

.flip-container.flipped .back {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
}

.flip-container.flipped .front {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    transform: rotateY(180deg);
}
</style>
<script setup>
const cards = [
    {
        name: 'Apple',
        img: 'apple.jpg'
    },
    {
        name: 'Banana',
        img: 'banana.jpg'
    },
    {
        name: 'Orange',
        img: 'orange.jpg'
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
]
</script>

<template>
    <div class="row">
        <div class="col-md-6 col-lg-6 col-xl-5 mx-auto">
            <div class="row justify-content-md-center">
                <div v-for="card in cards" class="col-auto mb-3 flip-container">
                    <div class="memorycard">
                        <div class="front border rounded shadow"><img width="100" height="150" src="../assets/images/cardback.png"></div>
                        <div class="back rounded border"><img width="100" height="150" :src="'../assets/images/' + card.img"></div>
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
    min-height: 120px;
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
</style>
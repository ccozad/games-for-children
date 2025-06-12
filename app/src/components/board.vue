<script setup>
import { ref } from 'vue';
const isFinished = ref(false);
const turnCount = ref(0);
const cards = ref([
    {
        name: 'Apple',
        img: 'apple.jpg',
        isFlipped: false,
        isMatched: false
    },
    {
        name: 'Banana',
        img: 'banana.jpg',
        isFlipped: false,
        isMatched: false
    },
    {
        name: 'Orange',
        img: 'orange.jpg',
        isFlipped: false,
        isMatched: false
    }
]);

var selectedCards = ref([]);
var memoryCards = ref([]);
const cards1 = JSON.parse(JSON.stringify(cards.value)); //Deep copy to avoid reference issues
const cards2 = JSON.parse(JSON.stringify(cards.value)); //Deep copy to avoid reference issues
memoryCards.value = memoryCards.value.concat(cards1, cards2); //Duplicate cards by value
// Shuffle the cards
memoryCards.value.sort(() => Math.random() - 0.5);

const flipCard = (card) => {
    
    
    if (selectedCards.value.length < 2  && !card.isMatched && !card.isFlipped) {
        card.isFlipped = true;
        turnCount.value++;
        selectedCards.value.push(card);
    }
    if (selectedCards.value.length === 2) {
        if (selectedCards.value[0].name === selectedCards.value[1].name) {
            setTimeout(() => {
                selectedCards.value[0].isMatched = true;
                selectedCards.value[1].isMatched = true;
                selectedCards.value = [];
                checkGameFinished();
            }, 500);
        } else {
            setTimeout(() => {
                selectedCards.value[0].isFlipped = false;
                selectedCards.value[1].isFlipped = false;
                selectedCards.value = [];
            }, 1000);
        }
    }
};

const checkGameFinished = () => {
    isFinished.value = memoryCards.value.every(card => card.isMatched);
};

const startNewGame = () => {
    isFinished.value = false;
    turnCount.value = 0;
    memoryCards.value.forEach(card => {
        card.isFlipped = false;
        card.isMatched = false;
    });
    selectedCards.value = [];
    memoryCards.value.sort(() => Math.random() - 0.5); // Shuffle the cards again
};
</script>

<template>
    <div class="container">
         <div class="row mt-3">
            <div class="col-sm-6 text-end">
                <button type="button" class="btn btn-primary hud-button">
                    Moves <span class="badge bg-secondary">{{ turnCount }}</span>
                </button>
            </div>
            <div class="col-sm-6 text-start">
                <button type="button" class="btn btn-primary hud-button" @click="startNewGame">
                    Reset
                </button>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 text-center">
                <div v-if="isFinished" class="mx-3"><h1>You won!</h1></div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <div class="row gx-0 text-center justify-content-center">
                    <div v-for="card in memoryCards" class="col-auto m-3 flip-container" :class="{ 'flipped': card.isFlipped, 'matched' : card.isMatched }" @click="flipCard(card)">
                        <div class="front border rounded shadow"><img width="100" height="150" src="/images/cardback.png"></div>
                        <div class="back border rounded shadow"><img width="100" height="150" :src="'/images/' + card.img"></div>
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
    justify-content: center;
}

.flip-container.flipped .front {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    transform: rotateY(180deg);
    justify-content: center;
}

.matched{
   opacity: 0.3;
}

.hud-button {
    width: 120px;
}
</style>
<script setup>
import { ref, onMounted } from "vue";

const currentSlide = ref(2);
const getSlideCount = ref(null);
const autoPlayEnabled = ref(true);
const timeOutDuration = ref(3000);

onMounted(() => {
  getSlideCount.value = document.querySelectorAll(".item").length;
  console.log(getSlideCount.value);
});

const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};

const autoPlay = () => {
  setInterval(() => {
    nextSlide();
  }, timeOutDuration.value);
};

if (autoPlayEnabled.value) {
  autoPlay();
}

const images = [
  "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
];
</script>

<template>
  <div class="main_page relative h-full">
    <div class="absolute top-0 flex flex-col h-screen bg-gradient-to-b from-slate-400 via-slate-600 to-slate-900 z-10">
      <div class="flex justify-around">
        <div class="carousel h-80 w-80 mt-20 relative flex justify-center">
          <div class="slide">
            <div class="item" v-for="(img, index) in images" :key="index">
              <transition name="v">
                <div class="image-list absolute w-full max-h-full h-full" v-show="currentSlide === index + 1">
                  <img :src="img" class="w-full h-full object-cover rounded-lg shadow-white shadow-sm" />
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="flex content-center mt-40">
          <div class=" text-black">
            <p><b>Title: </b>Rick and Morty</p>
            <p><b>Genre: </b>animated science fiction, comedy, and adventure</p>
            <p><b>Creator: </b>Justin Roiland and Dan Harmon</p>
            <p><b>Rate: </b> 9/10 on IMDb and 95% on Rotten Tomatoes</p>
          </div>
        </div>
      </div>
      <div class=" text-white pl-2 ml-2 mt-4 w-3/4 rounded-lg">
        <p>
          "Rick and Morty" follows the misadventures of an eccentric and alcoholic
          scientist, Rick Sanchez, and his kind-hearted but easily influenced grandson,
          Morty Smith. Rick, who reappears in the lives of his daughter Beth's family
          after years of absence, drags Morty into dangerous and morally ambiguous
          escapades across different dimensions using his portal gun. The show blends dark
          humor, science fiction, and satire, exploring deep philosophical questions while
          highlighting the dysfunctional dynamics of the Smith family.
        </p>
      </div>
    </div>

    <div class="z-30 text-white bg-slate-900 w-full h-12 pb-10 border-t-2 border-solid border-white fixed bottom-0">
      <div class="flex justify-center">
        <p>wubishetwudu &copy; 2024</p>
      </div>
      <div class="flex justify-center">
        <div class="flex justify-between">
          <a class="mr-2 hover:underline"
            href="https://www.figma.com/design/IXrQh1rjenrWx3M3Sre6KW/rick-and-morty?m=auto&t=XswwF8sUQRnIF2vG-6">Figma</a>
          <a class="ml-2 hover:underline"
            href="https://github.com/zwubishet/minab-rickandmortyseries-website.git">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.75s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

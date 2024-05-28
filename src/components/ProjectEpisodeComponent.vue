<script setup>
import { computed, watchEffect } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";

const { result, loading, error } = useQuery(gql`
  query {
    episodes {
      results {
        id
        name
        episode
        created
        air_date
        characters {
          id
          name
          status
          species
          gender
          image
        }
      }
    }
  }
`);
const episode = computed(() => result.value?.episodes.results ?? []);
watchEffect(() => {
  console.log(episode);
});

function btn_click_effect() {
  const page = event.target.closest(".episode");
  page.style.overflow = page.style.overflow === "visible" ? "scroll" : "visible";
  const overflow = page.style.overflow;
  if (page) {
    if (overflow == "visible") page.style.height = "auto";
    else page.style.height = "384px";
  }
}
</script>

<template>
  <div class="episode_page w-full h-auto mt-1">
    <div v-if="error">error</div>
    <div v-if="loading">Loading....</div>
    <div v-else class="episode_div flex flex-col flex-wrap mt-20 ml-2 justify-around z-0">
      <div
        class="episode relative flex flex-wrap gap-5 px-6 pb-6 h-96 w-full text-white bg-gradient-to-r from-slate-600  to-slate-800 border-solid border-black border-b-2 rounded-md shadow-md overflow-scroll"
        v-for="episode in episode" :key="episode.id">
        <div class="block">
          <p v-if="episode" class="font font-black text-4xl text-purple-600">
            {{ episode.episode }}
          </p>
          <p v-if="episode">Id: {{ episode.id }}</p>
          <p v-if="episode">Name: {{ episode.name }}</p>
          <p v-if="episode">Created: {{ episode.created }}</p>
          <p v-if="episode">Air_date: {{ episode.air_date }}</p>
          <h1 class="text-center mt-1 text-2xl text-purple-500 font-semibold underline">
            Characters
          </h1>
        </div>

        <div class="flex flex-wrap">
          <div class="image" v-for="character in episode.characters" :key="character.id">
            <div
              class="p px-2 mt-1 mb-3 border-l-4 border-solid border-black hover:scale-150 hover:transition-all hover:bg-white hover:text-black">
              <div>
                <p v-if="character">Name: {{ character.name }}</p>
                <p v-if="character">Status: {{ character.status }}</p>
                <p v-if="character">Species: {{ character.species }}</p>
                <p v-if="character">Gender: {{ character.gender }}</p>
              </div>
              <div>
                <img v-if="character" :src="character.image" alt="" width="150px" height="150px" />
              </div>
            </div>
          </div>
        </div>
        <button id="btn" @click="btn_click_effect"
          class="text-2xl ml-auto h-12 w-12 font-extrabold bg-black bg-opacity-35 p-2 rounded-md sticky bottom-12">
          ⇓
        </button>
      </div>
    </div>
    <div class="z-30 text-white bg-slate-900 w-full h-12 pb-8 fixed bottom-0">
      <div class="flex justify-center">
        <p>wubishetwudu &copy; 2024</p>
      </div>
      <div class="flex justify-center">
        <div class="flex justify-between">
          <a class="mr-2 hover:underline"
            href="https://www.figma.com/design/IXrQh1rjenrWx3M3Sre6KW/rick-and-morty?m=auto&t=XswwF8sUQRnIF2vG-6">Figma</a>
          <a class="ml-2 hover:underline" href="https://github.com/zwubishet/Rick_and_Morty_tvSeries_website">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

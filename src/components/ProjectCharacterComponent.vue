<script setup>
import { computed, watchEffect } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";

const { result, loading, error } = useQuery(gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
        }
        image
        created
        episode {
          id
          episode
          name
          air_date
        }
      }
    }
  }
`);
const character = computed(() => result.value?.characters.results ?? []);
watchEffect(() => {
  console.log(character);
});

function btn_click_effect() {
  const page = event.target.closest(".image");
  page.style.overflow = page.style.overflow === "visible" ? "scroll" : "visible";
  const overflow = page.style.overflow;
  if (page) {
    if (overflow == "visible") page.style.height = "auto";
    else page.style.height = "384px";
  }
}
</script>

<template>
  <div class="episode_page w-full h-auto mt-14 bg-black">
    <div v-if="error">error</div>
    <div v-if="loading">Loading....</div>
    <div v-else class="image_div flex flex-col flex-wrap justify-around">
      <div
        class="image text-white bg-gradient-to-r from-slate-600  to-slate-800  h-96 overflow-scroll pl-2 pt-2 mx-2 mt-5 border-s-slate-600 border-2 rounded-md shadow-md flex flex-col items-center gap-1"
        v-for="character in character" :key="character.id">
        <div class="">
          <div class="flex gap-3">
            <div>
              <img v-if="character" :src="character.image" alt="" width="200px" height="200px" class="rounded-md" />
            </div>
            <div>
              <p v-if="character" class="font-black text-3xl text-purple-600">
                {{ character.name }}
              </p>
              <p v-if="character">Status: {{ character.status }}</p>
              <p v-if="character">Species: {{ character.species }}</p>
              <p v-if="character">Type: {{ character.type }}</p>
              <p v-if="character">Gender: {{ character.gender }}</p>
              <p v-if="character">Created: {{ character.created }}</p>
            </div>
          </div>
          <h1 class="text-center mt-2 text-2xl text-purple-500 font-semibold underline">
            Character origin
          </h1>
          <div>
            <p v-if="character.origin">Origin: {{ character.origin.name }}</p>
            <p v-if="character.origin">Type: {{ character.origin.type }}</p>
            <p v-if="character.origin">Dimension: {{ character.origin.dimension }}</p>
          </div>
        </div>
        <h1 class="text-center mt-6 text-2xl text-purple-500 font-semibold underline">
          Episode Character Participated
        </h1>
        <div class="flex flex-wrap">
          <div class="image hover:scale-150 transition-all hover:bg-white hover:text-black"
            v-for="episode in character.episode" :key="episode.id">
            <div class="p px-2 my-3 border-r-4 border-solid border-black">
              <div>
                <p v-if="episode" class="font font-black text-xl">
                  {{ episode.episode }}
                </p>
                <p v-if="episode">Name: {{ episode.name }}</p>
                <p v-if="episode">Status: {{ episode.air_date }}</p>
              </div>
            </div>
          </div>
        </div>
        <button id="btn" @click="btn_click_effect"
          class="text-xl mr-3 ml-auto h-12 w-12 font-extrabold bg-black bg-opacity-35 p-2 rounded-md sticky bottom-12">
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

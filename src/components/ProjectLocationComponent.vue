<script setup>
import { computed, watchEffect } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";

const { result, loading, error } = useQuery(gql`
  query {
    locations {
      results {
        id
        name
        type
        dimension
        created
        residents {
          image
          name
          status
          species
          gender
        }
      }
    }
  }
`);
const location = computed(() => result.value?.locations.results ?? []);
watchEffect(() => {
  console.log(location);
});

function btn_click_effect() {
  const page = event.target.closest(".location");
  page.style.overflow = page.style.overflow === "visible" ? "scroll" : "visible";
  const overflow = page.style.overflow;
  if (page) {
    if (overflow == "visible") page.style.height = "auto";
    else page.style.height = "384px";
  }
}
</script>

<template>
  <div class="location_page w-full h-auto mt-14 dark:bg-black relative overflow-y-visible">
    <div v-if="error">error</div>
    <div v-if="loading">Loading....</div>
    <div v-else class="location_div mr-6 flex flex-col flex-wrap text-center">
      <div
        class="location m-2 p-2 h-96 w-full text-white bg-gradient-to-r from-slate-600  to-slate-800 border-s-slate-600 border-2 rounded-md shadow-md overflow-scroll"
        v-for="location in location" :key="location.id">
        <div>
          <p v-if="location" class="font-black text-3xl text-purple-600">
            {{ location.name }}
          </p>
          <p v-if="location">Id: {{ location.id }}</p>
          <p v-if="location">Type: {{ location.type }}</p>
          <p v-if="location">Dimension: {{ location.dimension }}</p>
          <p v-if="location">Created: {{ location.created }}</p>
        </div>
        <h1 class="mt-6 ml-6 text-2xl text-purple-400 font-semibold underline">
          residents
        </h1>
        <div class="flex gap-2 flex-wrap justify-center">
          <div
            class="image flex px-2 my-3 border-r-4 border-solid border-black hover:scale-110 transition-all hover:bg-white hover:text-black"
            v-for="character in location.residents" :key="character.id">
            <div>
              <img v-if="character" :src="character.image" alt="" width="200px" height="200px"
                class="rounded-md mr-3" />
            </div>
            <div>
              <p v-if="character" class="font-black text-xl">{{ character.name }}</p>
              <p v-if="character">Status: {{ character.status }}</p>
              <p v-if="character">Species: {{ character.species }}</p>
              <p v-if="character">Gender: {{ character.gender }}</p>
            </div>
          </div>
        </div>
        <button id="btn" @click="btn_click_effect"
          class="text-xl ml-auto h-12 w-12 font-extrabold bg-black bg-opacity-30 rounded-md sticky bottom-12">
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
          <a class="ml-2 hover:underline"
            href="https://github.com/zwubishet/minab-rickandmortyseries-website.git">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

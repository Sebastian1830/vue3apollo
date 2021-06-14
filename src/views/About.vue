<template>
  <h1 class="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10 max-w-6xl mx-auto">
    Find
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-green-500 to-green-400">GitHub</span>
    Repositories:
  </h1>
  <SearchBar @search="search" />
  <RepositoryList :search-options="searchOptions" />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import SearchBar from "@/components/SearchBar.vue";
import RepositoryList from "@/components/RepositoryList.vue";

export default defineComponent({
  name: 'About',
  setup() {
    const searchOptions = reactive({query: "", limit: 10});
    const search = (query: string) => {
      searchOptions.query = query;
    };

    return { searchOptions, search }
  },
  components: { SearchBar, RepositoryList }
});
</script>

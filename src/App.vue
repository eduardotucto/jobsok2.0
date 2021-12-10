<template>
  <router-view/>
</template>

<script>
import store from './store';

export default {
  created () {
    store.dispatch('cargarLocalStorage');
  },
}
</script>


<style>
</style>

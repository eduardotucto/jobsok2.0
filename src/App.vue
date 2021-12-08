<template>
  <router-view/>
</template>

<script>
import store from './store';

export default {
  created () {
    store.dispatch('gettingUser');
  },
}
</script>


<style>
</style>

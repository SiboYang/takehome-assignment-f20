<template>
<div>
  <p></p>
  <p>Current episode seen: {{ episode_seen }}</p>
  <button @click="increase">Add one</button>
  <button @click="decrease">Minus one</button>
</div>
</template>

<script>
export default {
  props: {
    episode_seen: {
      type: Number,
      default: 0
    }
  },
  methods: {
    increase: function() {
      this.episode_seen += 1
    },
    decrease: function() {
      this.episode_seen -= 1
    }
  }
};
</script>

<style>
</style>


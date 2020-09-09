<template>
  <!-- PART 4: Add your code here -->
  <div class="show">
    <b>{{ this.name }}</b>
    <Counter :episode_seen="this.episodes_seen"/>
  </div>
</template>

<script>
// PART 4: Add your code here
import Counter from "./Counter.vue";

export default {
  components: {
    'Counter': Counter
  },
  props: {
    id: Number,
    name: String,
    episodes_seen: Number
  }
};
</script>

<style>
.show {
  margin-bottom: 30px;
}
</style>

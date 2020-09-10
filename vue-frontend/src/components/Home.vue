<template>
  <div>
    <!-- PART 1: Pass in a "complete" prop here -->
    <Instructions :complete="true"/>
    
    <!-- PART 4: Modify the Show component to accept all of these props -->
    <div id="addShow">
      <input v-model="name"  @keyup.enter="create_show()" placeholder="Enter show name">
      <button @click="create_show()" >Add show</button>
      <hr> 
    </div>

    <div id="shows">
          <Show
      v-for="show in shows"
      :key="show.id"
      :id="show.id"
      :name="show.name"
      :episodes_seen="show.episodes_seen"
    />
    </div>



  </div>
</template>

<script>
import Instructions from "./Instructions.vue";
import Show from "./Show.vue";

export default {
  components: {
    Instructions,
    Show
  },
  data() {
    return {
      shows: [
        { id: 1, name: "Game of Thrones", episodes_seen: 0 },
        { id: 2, name: "Naruto", episodes_seen: 220 },
        { id: 3, name: "Black Mirror", episodes_seen: 3 }
      ],
      name: '',
    };
  },
  methods: {
    create_show: function() {
      if (this.name.length > 0) {
        let new_id = this.shows.length + 1;
        this.shows.push({id: new_id, name: this.name, episodes_seen: 0});
        this.name = '';
      }
    }
  }
};
</script>

<style>
#addShow {
  margin-bottom: 20px;
}
</style>



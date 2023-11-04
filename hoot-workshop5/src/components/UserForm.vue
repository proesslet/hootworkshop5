<template>
  <form>
    <input v-model="name" type="text" placeholder="Name" />
    <button type="button" @click="submit">Submit</button>
  </form>
  <p>{{ message }}</p>
</template>

<script>
import axios from "axios";

export default {
  name: "UserForm",
  data() {
    return {
      name: "",
      message: "",
    };
  },
  methods: {
    submit() {
      axios("http://localhost:3000/addPerson", {
        method: "POST",
        data: {
          name: this.name,
        },
      })
        .then((response) => {
          this.message = response.data.message;
        })
        .catch((error) => {
          this.message = error;
        });
    },
  },
};
</script>

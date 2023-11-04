<template>
  <form>
    <input v-model="name" type="text" placeholder="Name" />
    <!--Using @click, this button will run the submit method when clicked-->
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
    // This method will send a POST request to the specified URL
    // and send the name in the form as the data
    submit() {
      axios("http://localhost:3000/addPerson", {
        method: "POST",
        data: {
          // "this" refers to the Vue instance and allows us to access the data above
          name: this.name,
        },
      })
        .then((response) => {
          this.message = response.data.message;
        })
        .catch((error) => {
          this.message = error;
        });

      // The above method is asynchronous, so we must use "then" and "catch" to handle the response
      // from the server.
    },
  },
};
</script>

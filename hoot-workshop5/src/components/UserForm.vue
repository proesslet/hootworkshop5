<template>
  <form>
    <input v-model="name" type="text" placeholder="Name" />
    <button type="button">Submit</button>
  </form>
  <p>{{ message }}</p>
</template>

<script>
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
      // Todo: submit the form
    },
  },
};
</script>

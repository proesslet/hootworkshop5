<template>
  <form>
    <input v-model="name" type="text" placeholder="Name" />
    <button type="button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    submit() {
      // Todo: submit the form
    },
  },
};
</script>

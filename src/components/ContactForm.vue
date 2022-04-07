<template>
  <v-form class="mt-4">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
      outlined
      clearable
      color="accent"
      class="custom-text-color accent--text"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      outlined
      clearable
    ></v-text-field>
    <v-text-field
      v-model="subject"
      :rules="subjectRules"
      label="Subject"
      required
      outlined
      clearable
    ></v-text-field>
    <v-textarea
      v-model="message"
      :rules="messageRules"
      label="Message"
      required
      outlined
      clearable
    ></v-textarea>
    <v-btn :disabled="!valid" class="mr-4 primary--text" @click="validate">
      Send
    </v-btn>
    <v-btn color="error" class="primary--text" @click="reset"> Cancel </v-btn>
  </v-form>
</template>
<style lang="scss" scoped>
::v-deep fieldset {
  border-color: #d57e8e !important;
}

::v-deep input,
::v-deep .v-label,
::v-deep .mdi-close::before {
  color: #d57e8e !important;
}
</style>
<script>
export default {
  name: "ContactForm",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    subject: "",
    subjectRules: [(v) => !!v || "Subject is required"],
    message: "",
    messageRules: [(v) => !!v || "Message is required"],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

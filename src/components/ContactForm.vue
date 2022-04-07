<template>
  <v-form ref="form" class="mt-4">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
      dense
      outlined
      clearable
      color="accent"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      dense
      outlined
      clearable
      color="accent"
    ></v-text-field>
    <v-text-field
      v-model="subject"
      :rules="subjectRules"
      label="Subject"
      required
      dense
      outlined
      clearable
      color="accent"
    ></v-text-field>
    <v-textarea
      v-model="message"
      :rules="messageRules"
      label="Message"
      required
      dense
      outlined
      clearable
      color="accent"
    ></v-textarea>
    <v-btn color="cta" class="mr-4 primary--text" @click="validate">
      Submit
    </v-btn>
    <v-btn color="accent_2" class="primary--text" @click="onSubmit">
      Cancel
    </v-btn>
  </v-form>
</template>
<style lang="scss" scoped>
::v-deep fieldset {
  border-color: #d57e8e !important;
}

::v-deep input,
::v-deep textarea,
::v-deep .v-label,
::v-deep .mdi-close::before {
  color: #d57e8e !important;
}
</style>
<script>
export default {
  name: "ContactForm",
  props: {
    tab: { type: Number, required: true },
  },
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
  watch: {
    tab(newTab) {
      if (newTab != 4) {
        this.reset();
      }
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    sendEmail() {
      console.log("Email Sent!");
    },
    onSubmit() {
      this.validate();
      if (this.valid) {
        this.sendEmail();
      }
    },
  },
};
</script>

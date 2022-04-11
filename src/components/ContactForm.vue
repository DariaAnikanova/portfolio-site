<template>
  <v-form ref="form" id="form" v-model="valid" class="mt-4">
    <v-text-field
      v-model="formFields.name"
      :rules="rules.nameRules"
      label="Name"
      required
      dense
      outlined
      clearable
      color="accent"
    ></v-text-field>
    <v-text-field
      v-model="formFields.email"
      :rules="rules.emailRules"
      label="E-mail"
      required
      dense
      outlined
      clearable
      color="accent"
    ></v-text-field>
    <v-text-field
      v-model="formFields.subject"
      :rules="rules.subjectRules"
      label="Subject"
      required
      dense
      outlined
      clearable
      color="accent"
    ></v-text-field>
    <v-textarea
      v-model="formFields.message"
      :rules="rules.messageRules"
      label="Message"
      required
      dense
      outlined
      clearable
      color="accent"
    ></v-textarea>
    <v-btn
      color="cta"
      class="mr-4 primary--text"
      :disabled="!valid"
      @click="onSubmit"
    >
      Submit
    </v-btn>
    <v-btn color="accent_2" class="primary--text" @click="reset">
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
import emailjs from "@emailjs/browser";
import { contactFormIDs } from "../constants";

export default {
  name: "ContactForm",
  props: {
    tab: { type: Number, required: true },
  },
  data: () => ({
    valid: false,
    formFields: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    rules: {
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      subjectRules: [(v) => !!v || "Subject is required"],
      messageRules: [(v) => !!v || "Message is required"],
    },
  }),

  watch: {
    tab(newTab) {
      if (newTab != 4) {
        this.reset();
      }
    },
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    sendEmail() {
      emailjs
        .send(
          contactFormIDs.serviceID,
          contactFormIDs.templateID,
          this.formFields,
          contactFormIDs.publicKey
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
    onSubmit() {
      this.$refs.form.validate();
      if (this.valid) {
        this.sendEmail();
      }
    },
  },
};
</script>

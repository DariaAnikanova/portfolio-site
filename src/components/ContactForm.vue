<template>
  <v-form ref="form" v-model="valid" class="mt-4">
    <div>
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
        :color="valid ? 'cta ' : 'cta darken-2'"
        small
        :outlined="!valid"
        class="mr-4 primary--text"
        @click.stop="onSubmit"
      >
        Submit
      </v-btn>
      <v-btn color="accent_2" small class="primary--text" @click="reset">
        Cancel
      </v-btn>
    </div>
    <v-dialog v-model="emailSent" max-width="400" min-width="30vw">
      <v-card tile color="secondary">
        <v-alert tile outlined color="accent" class="pa-0">
          <v-card-title class="accent--text text-h5">Email Sent!</v-card-title>
          <v-card-text class="accent--text"
            >Thank you for your message!</v-card-text
          >

          <v-card-actions class="px-4 pb-4">
            <v-btn color="accent_2" small class="primary--text" @click="reset">
              Close
            </v-btn>
          </v-card-actions>
        </v-alert>
      </v-card>
    </v-dialog>
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

::v-deep .v-dialog {
  border-radius: 0 !important;
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
    emailSent: false,
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
      this.emailSent = false;
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
        this.emailSent = true;
      }
    },
  },
};
</script>

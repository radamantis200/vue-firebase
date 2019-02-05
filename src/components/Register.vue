<template>
  <div>
    <!-- <auth-form action="register" v-on:process="register($event)"/>
    <app-snack-bar v-if="snackBar" :snack-Bar="snackBar" :text="message" :timeout="timeout"/>-->
    <auth-form action="register" v-on:process="register($event)"/>

    <app-snack-bar v-if="snackBar" :snack-bar="snackBar" :text="message" :timeout="timeout"/>
  </div>
</template>

<script>
import AppSnackBar from "@/components/SnackBar";
import AuthForm from "@/forms/auth";
export default {
  components: { AppSnackBar, AuthForm },
  name: "Register",

  data() {
    return {
      snackBar: false,
      message: "",
      timeout: 5000
    };
  }
};
</script>
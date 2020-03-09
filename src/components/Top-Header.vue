<template>
  <div>
    <h1>Logged in: </h1>
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <div>
      <button @click="signOut">Sign out</button>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    this.setupFirebase()
  },
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log('test', data);
        this.$router.replace({name: "login"})
      } catch(err) {
        console.log(err);
      }
    },
    setupFirebase() {
      firebase.auth().onAuthStateChanged( user => {
        this.loggedIn = !!user;   
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
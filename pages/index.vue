<template>
  <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="blue deep-2">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="email" label="email" type="text" v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="blue deep-2" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
</template>
<script>
import gql from 'graphql-tag'
import graphql from 'apollo-client'

const login = gql`
mutation loginMutation($email:String!,$password:String!) {
  login(email:$email, password:$password){
    token
    user{
      id
      name
    }
  }
}`

export default {
  data: ()=>({
    email:"",
    password:""
  }),
  methods: {
    login() {
      this.$apollo.mutate({
         mutation:login,
         variables:{email:this.email,password:this.password }
         })
         .then(async (data) =>{
          await this.$apolloHelpers.onLogin(data.data.login)
          location.replace('/inspire')
       })
       .catch(error => {
         this.loginError = error.message
         console.log(error.message)
       })
    }
  }
}
</script>

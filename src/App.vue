<template>
  <div id="app" class="container">
    <header>
      <router-link to="/">Main</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/registration">Registration</router-link>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
  *
    padding: 0
    margin: 0
    text-decoration: none
    list-style: none
    box-sizing: border-box
  body
    font-family: 'Montserrat', sans-serif
    &::-webkit-scrollbar
      width: 7px
    &::-webkit-scrollbar-track
      background: #f2f2f2
    &::-webkit-scrollbar-thumb
      background: lightcoral
      border-radius: 10px
  .container
    width: 1200px
    margin: 0 auto
    padding-top: 70px
  header
    position: fixed
    top: 0
    left: 0
    width: 100%
    padding: 15px 0
    background: rgba(255,255,255,0.5)
    box-shadow: 0 0 5px 0.5px rgba(0,0,0,0.3)
    backdrop-filter: blur(5px)
    display: flex
    justify-content: center
    align-items: center
    z-index: 99
    a
      color: #000
      font-weight: bold
      font-size: 17px
      margin: 0 10px
      position: relative
      &::after
        content: ''
        position: absolute
        left: 0
        bottom: -3px
        width: 0
        height: 2px
        transition: 0.5s
        background: lightcoral
      &:hover::after
        width: 100%
  h1
    text-align: center
    font-weight: bold
    color: #000
    font-size: 30px
</style>

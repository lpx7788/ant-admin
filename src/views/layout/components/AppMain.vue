<template>
    <section class="app-main">
        <transition-group name="fade" mode="out-in">
            <Levelbar :key="key"></Levelbar>
            <router-view :key="key"></router-view>
        </transition-group>
    </section>
</template>

<script>
   import Levelbar from "./Levelbar";
    export default {
      name: 'AppMain',
      components: {
        Levelbar,

     
    },
      computed: {
        key() {
          return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
        }
      }
    }
</script>

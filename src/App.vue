<template>
  <div>
  <NavBarComp />
  <div v-if ="!$store.state.aboutMeInfo">
  <Spinner />
  </div>
  <router-view />
  <FooterComp />
  </div>
</template>

<script>
import Spinner from '@/components/SpinnerComp.vue';
import NavBarComp from './components/NavBarComp.vue'
import FooterComp from './components/FooterComp.vue'
export default {
  components: {
    NavBarComp,
    FooterComp,
    Spinner
  },created() {
    if (!this.aboutMeInfo) {
      this.$store.dispatch("getAboutMeInfo");
    }
  },
  mounted() {
    this.getAboutMeInfo;
  },
  data() {
    return {
      loading: false
    };
  }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/commando?styles=7971');

#app {
  font-family: 'Commando', sans-serif;
  -webkit-text-fill-color: white;
  -webkit-text-stroke: 1px #060018;
}
#contactLink{
     height: 20px;
}
#title {
  -webkit-text-fill-color: white;
  -webkit-text-stroke: 2px #060018;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

#titleAlt {
  -webkit-text-fill-color: white;
  -webkit-text-stroke: 2px #060018;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glowAlt 1s ease-in-out infinite alternate;
  animation: glowAlt 1s ease-in-out infinite alternate;
}

#glow {
  -webkit-animation: iglow 1s ease-in-out infinite alternate;
  -moz-animation: iglow 1s ease-in-out infinite alternate;
  animation: iglow 1s ease-in-out infinite alternate;
}

@keyframes iglow {
  from {
    box-shadow: 0 0 0 #fff, 0 0 5px #fff, 0 0 10px #df0056, 0 0 15px #df0056, 0 0 20px #df0056, 0 0 25px #df0056, 0 0 30px #e60073;
  }

  to {
    box-shadow: 0 0 5px #fff, 0 0 10px #ff4da6, 0 0 15px #ff4da6, 0 0 20px #ff4da6, 0 0 25px #ff4da6, 0 0 30px #ff4da6, 0 0 35px #ff4da6;
  }
}

@keyframes glow {
  from {
    text-shadow: 0 0 0 #fff, 0 0 5px #fff, 0 0 10px #df0056, 0 0 15px #df0056, 0 0 20px #df0056, 0 0 25px #df0056, 0 0 30px #e60073;
  }

  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #ff4da6, 0 0 15px #ff4da6, 0 0 20px #ff4da6, 0 0 25px #ff4da6, 0 0 30px #ff4da6, 0 0 35px #ff4da6;
  }
}

@keyframes glowAlt {
  from {
    text-shadow: 0 0 0 #fff, 0 0 5px #fff, 0 0 10px #031663, 0 0 15px #031663, 0 0 20px #031663, 0 0 25px #031663, 0 0 30px #031663;
  }

  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #5152cc, 0 0 15px #5152cc, 0 0 20px #5152cc, 0 0 25px #5152cc, 0 0 30px #5152cc, 0 0 35px #5152cc;
  }
}

body,
html {
  background-color: #0c0c0c;
}

.bgContainerAbBlur {
  background-image: url("https://aneeqbass.github.io/hostedImages_portfolio/images/loungeBgImg.png");
  background-position: center;
  transform: rotate(180deg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.with-blur-backdrop {
  background-color: rgba(0, 0, 0, 0);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  height: inherit;
}

.menuIcon {
  height: 70px;
  margin-left: 15.5px;
  margin-top: 15.5px;
  -webkit-filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  -webkit-animation: aboutGlow 1s ease-in-out infinite alternate;
  -moz-animation: aboutGlow 1s ease-in-out infinite alternate;
  animation: aboutGlow 1s ease-in-out infinite alternate;
  -webkit-filter: aboutGlow ease-in-out infinite alternate;
}

.menuIcon:hover {
  background-color: rgb(246, 0, 180, 0.90);
}

.menuIcon2 {
  height: 70px;
  -webkit-filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  -webkit-animation: aboutGlow 1s ease-in-out infinite alternate;
  -moz-animation: aboutGlow 1s ease-in-out infinite alternate;
  animation: aboutGlow 1s ease-in-out infinite alternate;
  -webkit-filter: aboutGlow ease-in-out infinite alternate;
}

.menuIcon2:hover {
  background-color: rgb(246, 0, 180, 0.90);
}


@keyframes aboutGlow {
  from {
    -webkit-filter: drop-shadow(0 0 0 #fff, 0 0 5px #fff, 0 0 10px #df0056, 0 0 15px #df0056, 0 0 20px #df0056, 0 0 25px #df0056, 0 0 30px #e60073);
    filter: drop-shadow(0 0 0 #fff, 0 0 5px #fff, 0 0 10px #df0056, 0 0 15px #df0056, 0 0 20px #df0056, 0 0 25px #df0056, 0 0 30px #e60073);
  }

  to {
    -webkit-filter: drop-shadow(0 0 5px #fff, 0 0 10px #ff4da6, 0 0 15px #ff4da6, 0 0 20px #ff4da6, 0 0 25px #ff4da6, 0 0 30px #ff4da6, 0 0 35px #ff4da6);
    filter: drop-shadow(0 0 5px #fff, 0 0 10px #ff4da6, 0 0 15px #ff4da6, 0 0 20px #ff4da6, 0 0 25px #ff4da6, 0 0 30px #ff4da6, 0 0 35px #ff4da6);
  }
}

.scrolling-wrapper {
  overflow-x: auto;
}

@media (min-width: 576px) {
  .card-group.card-group-scroll {
    overflow-x: auto;
    flex-wrap: nowrap;
  }
}

.card-group.card-group-scroll>.card {
  flex-basis: 35%;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 7.5px;
}

::-webkit-scrollbar {
  width: 7.5px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 7.5px;
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.44, #fd7bbc), color-stop(0.72, #fc3699), color-stop(0.86, #df0056));
}

#accordHeading {
  background-color: #f1e9e9;
}
.router-link{
  -webkit-text-stroke: white;
}
</style>

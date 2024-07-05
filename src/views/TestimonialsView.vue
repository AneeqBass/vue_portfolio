@
<template>
  <div class="bgContainerTest lazy">
    <img class="menuIcon fixed-top" src="https://aneeqbass.github.io/hostedImages_portfolio/images/menuIcon.png"
      alt="menuIcon" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" />
    <div class="container-fluid text-center p-0">
      <div id="carouselExampleCaptions" class="carousel slide vh-100 with-blur-backdrop">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button v-for="(testimonial, index) in $store.state.testimonialInfo" :key="index" type="button" data-bs-target="carouselExampleCaptions" :data-bs-slide-to="index" :aria-label="`Slide ${index + 1}`"></button>
        </div>
        <div class="carousel-inner">
          <div v-if ="$store.state.aboutMeInfo">
            <div v-for="(testimonial, index) in $store.state.testimonialInfo" class="carousel-item vh-100"
            :key="testimonial.name" :class="{ active: index == 0 }">
            <div class="container">
              <div id="testiPic" :style="{ backgroundImage: 'url(' + testimonial.image + ')' }" class="mx-auto vh-100">
              </div>
            </div>
            <div id="caraText" class="carousel-caption d-md-block">
              <h1 id="title">{{ testimonial.name }}'s Testimonial</h1>
              <p class="fs-5 with-blur-backdrop">
                {{ testimonial.description }}
              </p>
            </div>
          </div>
          </div>
          <div v-else>
            <Spinner/>
          </div>
        </div>
        <button class="carousel-control-prev position-fixed" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next position-fixed" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/SpinnerComp.vue';

export default {
  computed: {
    aboutMeInfo() {
      return this.$store.state.aboutMeInfo;
    },
  },components: {
    Spinner
  }
};
</script>

<style scoped>
.bgContainerTest {
  background-image: url("https://aneeqbass.github.io/hostedImages_portfolio/images/buildingsBgImg.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

#caraText {
  padding-top: 400px;
  overflow-y: auto;
  max-height: 100%;
}

#testiPic {
  background-position: bottom;
  background-repeat: no-repeat;
  background-size:auto 100% ;
  -webkit-filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  -webkit-animation: aboutGlow 1s ease-in-out infinite alternate;
  -moz-animation: aboutGlow 1s ease-in-out infinite alternate;
  animation: aboutGlow 1s ease-in-out infinite alternate;
  -webkit-filter: aboutGlow ease-in-out infinite alternate;
}

::-webkit-scrollbar-thumb {
  border-radius: 7.5px;
  background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.44, #fd7bbc00),
      color-stop(0.72, #fc369900),
      color-stop(0.86, #df005600));
}

@media (max-width: 396px) {
  * {
    text-align: start;
  }
}
</style>
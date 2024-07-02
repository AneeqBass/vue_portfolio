@<template>
  <div class="bgContainerTest lazy">
        <img class="menuIcon fixed-top" src="https://aneeqbass.github.io/hostedImages_portfolio/images/menuIcon.png" alt="menuIcon" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">

        <div class="container-fluid text-center">

            <div class="container text-center">
                <div class="row row-cols-1 vw-75 vh-100 min-vw-75 min-vh-100">
                  <div class="col">
                    <div id="carouselExampleCaptions" class="carousel slide vh-100 with-blur-backdrop">
                
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                          <div v-for="(testimonial,index) in $store.state.testimonialInfo" id="contBottom" class="carousel-item vh-100" :key="testimonial.name" :class="{'active':index==0}">
                            <img id="testiPic" :src="testimonial.name" class="vh-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                              <h1 id="title">{{testimonial.name}}'s Testimonial</h1>
                              <p class="fs-4">{{testimonial.description}}</p>
                            </div>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            
            

        </div>

    </div>
</template>

<script>
export default {
    computed :{
        getAboutMeInfo(){
         return this.$store.dispatch('getAboutMeInfo')
        }
    },
    mounted() {
        this.getAboutMeInfo
    },
}
</script>
<style scoped>
.bgContainerTest {
  background-image: url("https://aneeqbass.github.io/hostedImages_portfolio/images/buildingsBgImg.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  
  background-attachment: fixed;
  height: 100%;
}
#testiPic{
  background-image: url("https://aneeqbass.github.io/hostedImages_portfolio/images/aboutMePic.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 70vh;

  -webkit-filter: drop-shadow(2px 2px 0 #e21861)
                  drop-shadow(-2px -2px 0 #e21861);
  filter: drop-shadow(2px 2px 0 #e21861) 
          drop-shadow(-2px -2px 0 #e21861);
  -webkit-animation: aboutGlow 1s ease-in-out infinite alternate;
  -moz-animation: aboutGlow 1s ease-in-out infinite alternate;
  animation: aboutGlow 1s ease-in-out infinite alternate;   
  -webkit-filter:aboutGlow ease-in-out infinite alternate; 
}
</style>
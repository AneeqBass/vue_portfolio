<template>
  <div class="bgContainerAb">
    <img class="menuIcon fixed-top" src="https://aneeqbass.github.io/hostedImages_portfolio/images/menuIcon.png"
      alt="menuIcon" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" />

    <div id="carouselExample" class="carousel slide vw-75 min-vw-75 min-vh-100">
      <div class="carousel-inner">
        <div class="carousel-item margCenter">
          <div class="card mb-3 bg-transparent cardWidth m-auto with-blur-backdrop">
            <div v-if="aboutMeInfo">
              <div class="row g-0">
                <div id="aboutMeInfo" class="col-md-4 text-center">
                  <img id="aboutInfoPic" :src="aboutMeInfo.image" class="rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h1 id="title">About Me</h1>
                    <p class="fs-5">{{ aboutMeInfo.info }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <!-- Optional: loading indicator or placeholder content -->
              <p>Loading...</p>
            </div>
          </div>
        </div>
        <div id="aboutFront" class="carousel-item m-auto active">
          <div class="container text-center">
            <div class="row vw-75 vh-100 min-vw-75 min-vh-100">
              <div class="col m-auto">
                <a>
                  <h1 id="titleAlt" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    About Me
                  </h1>
                </a>
              </div>
              <div class="col m-auto">
                <a>
                  <h1 id="titleAlt" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    Talents and Hobbies
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item m-auto pt-5 text-center">
          <div id="talentsInfo">
          <h1 id="title" class="text-center">Talents and Hobbies</h1>
          <div class="accordion accordion-flush" id="accordionExample">
            <div class="accordion-item bg-transparent with-blur-backdrop border-2 accMarg">
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="card-group card-group-scroll m-auto">
                    <div v-for="talent in $store.state.talentsHobbies" id="cardBlockWidth"
                      class="card bg-transparent with-blur-backdrop border border-0" :key="talent.name">
                      <div class="container-fluid">
                        <img id="imgSize" :src="talent.imageUrl" class="img-fluid" alt="image" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">{{ talent.name }}</h5>
                        <p class="card-text">
                          {{ talent.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                  
          </div>
          <br/>
        </div>
      </div>
      <button class="carousel-control-prev position-fixed" type="button" data-bs-target="#carouselExample"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next position-fixed" type="button" data-bs-target="#carouselExample"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    aboutMeInfo() {
      return this.$store.state.aboutMeInfo;
    },
  },
  created() {
    if (!this.aboutMeInfo) {
      this.$store.dispatch("getAboutMeInfo");
    }
  },
  mounted() {
    this.getAboutMeInfo;
  },
};
</script>
<style scoped>
.bgContainerAb {
  background-image: url("https://aneeqbass.github.io/hostedImages_portfolio/images/loungeBgImg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-attachment: fixed;
}

#aboutInfoPic {
  width: 100%;
  height: auto;
  max-width: 300px;
  -webkit-filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  -webkit-animation: aboutGlow 1s ease-in-out infinite alternate;
  -moz-animation: aboutGlow 1s ease-in-out infinite alternate;
  animation: aboutGlow 1s ease-in-out infinite alternate;
  -webkit-filter: aboutGlow ease-in-out infinite alternate;
}

#aboutFront {
  background-image: url("https://aneeqbass.github.io/hostedImages_portfolio/images/aboutMePic.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 70vh;
  background-attachment: fixed;
  -webkit-filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  -webkit-animation: aboutGlow 1s ease-in-out infinite alternate;
  -moz-animation: aboutGlow 1s ease-in-out infinite alternate;
  animation: aboutGlow 1s ease-in-out infinite alternate;
  -webkit-filter: aboutGlow ease-in-out infinite alternate;
}
#imgSize {
  width: 150px;
  -webkit-filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  filter: drop-shadow(2px 2px 0 #e21861) drop-shadow(-2px -2px 0 #e21861);
  -webkit-animation: aboutGlow 1s ease-in-out infinite alternate;
  -moz-animation: aboutGlow 1s ease-in-out infinite alternate;
  animation: aboutGlow 1s ease-in-out infinite alternate;
  -webkit-filter: aboutGlow ease-in-out infinite alternate;
}
.margCenter {
  padding: 5%;
}

.accMarg {
  padding-left: 10%;
  padding-right: 10%;
}

.cardWidth {
  width: 90%;
}

@media (max-width: 767px){
  .card-body {
    text-align: center;
  }
}
@media (max-width: 891px){
  #aboutMeInfo{
    padding-top: 70px;
  }
}
@media (max-width: 402px){
  #talentsInfo{
    padding-top: 35px;
  }
}
</style>

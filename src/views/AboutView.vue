<template>
<div class="bgContainerAb">
  <img class="menuIcon fixed-top" src="https://aneeqbass.github.io/hostedImages_portfolio/images/menuIcon.png" alt="menuIcon" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">

  <div id="carouselExample" class="carousel slide vw-75 min-vw-75 min-vh-100">
      <div class="carousel-inner">
        <div class="carousel-item margCenter">
          <div class="card mb-3 bg-transparent cardWidth m-auto with-blur-backdrop text-center">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://aneeqbass.github.io/hostedImages_portfolio/images/portrait2.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body ">
                      <h1 id="title">About Me</h1>
                      <p class="fs-5 ">{{$store.state.aboutMeInfo}}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item m-auto active">
              <div class="container text-center">
                  <div class="row vw-75 vh-100 min-vw-75 min-vh-100">
                      <div class="col m-auto">
                          <a><h1 id="titleAlt" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">About Me</h1></a>
                      </div>
                      <div class="col m-auto">
                          <img id="aboutMePic" class= "vh-100" src="https://aneeqbass.github.io/hostedImages_portfolio/images/aboutMePic.png" alt="aboutMePic">
                      </div>
                      <div class="col m-auto">
                          <a><h1 id="titleAlt" type="button" data-bs-target="#carouselExample" data-bs-slide="next">Skills and Talents</h1></a>
                      </div>
                  </div>
              </div>
        </div>
        <div class="carousel-item m-auto pt-5 text-center">
          <h1 id="title">Skills and Talents</h1>

          <div class="accordion accordion-flush accMarg" id="accordionExample">
            <div class="accordion-item bg-transparent with-blur-backdrop border-2">
              <h2 class="accordion-header ">
                <button id="accordHeading" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Programming skills
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="card-group card-group-scroll m-auto">
                      <div v-for="skill in $store.state.programmingSkills" id="cardBlockWidth" class="card bg-transparent with-blur-backdrop border border-0" :key="skill.name">
                        <div class="container-fluid">
                          <img id="imgSize" :src="skill.imageUrl" class="img-fluid" alt="image" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">{{ skill.name }}</h5>
                              <p class="card-text">
                                  {{ skill.description }}
                              </p>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent with-blur-backdrop border-2">
              <h2 class="accordion-header">
                <button id="accordHeading" class="accordion-button collapsed bg-darkb g-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Talents and Hobbies
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <h1 id="title" class="text-center">Talents and Hobbies</h1>
                    <div class="card-group card-group-scroll m-auto cardWidth ">
                      <div v-for="talent in $store.state.talentsHobbies" id="cardBlockWidth" class="card bg-transparent with-blur-backdrop border border-0" :key="talent.name">
                        <div class="container-fluid">
                          <img id="imgSize" :src="talent.imageUrl" class="img-fluid" alt="skill" />
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
          <br>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
.bgContainerAb {
  background-image: url("https://aneeqbass.github.io/hostedImages_portfolio/images/loungeBgImg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  
  
  background-attachment: fixed;
}
</style>
<template>
  <div class="bgContainerProj lazy min-vh-100 pt-5">
    <div class="container text-center">
      <div class="accordion" id="accordionExample">
        <img class="menuIcon fixed-top" src="https://aneeqbass.github.io/hostedImages_portfolio/images/menuIcon.png"
          alt="menuIcon" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
          
          <h1 id="title" class="text-center">Projects</h1>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              Projects
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div v-if ="$store.state.aboutMeInfo">
              <div class="row row-cols-auto justify-content-evenly pt-3">
                  <div v-for="project in $store.state.projects" id="cardBlockWidth"
                      class="card bg-transparent with-blur-backdrop border" :key="project.name">
                      <div class="container-fluid">
                        <img id="imgSize" :src="project.image" class="img-fluid" alt="image" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">{{ project.name }}</h5>
                      </div>
                      <div class="justify-content-evenly pb-3">
                      <p class="card-text custom-text">{{ project.description }}</p>
                        <div class="justify-content-evenly row">
                          <a class="linkBtn btn col mx-2" :href="project.github" target="_blank" role="button">GitHub</a>
                          <a class="linkBtn btn col mx-2" :href="project.varcel" target="_blank" role="button">Website</a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
                <div v-else>
                   <Spinner/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
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
.card{
  width: 250px;
  padding-top: 20px;
}
a{
  -webkit-text-fill-color: white;
  -webkit-text-stroke: 1px #060018;
}
.container{
  padding-top: 35px;
}
.bgContainerProj {
  background-image: url("https://aneeqbass.github.io/hostedImages_portfolio/images/desktopBgImg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
}
#imgSize {
  width: 100%;
}
.linkBtn{
    background-color: rgb(246, 0, 180, 0.90);
}
</style>
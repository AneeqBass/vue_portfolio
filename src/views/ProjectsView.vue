<template>
<div class="bgContainerProj lazy min-vh-100 pt-5">
        <div class="container text-center">
            <div class="accordion" id="accordionExample">
                <img class="menuIcon fixed-top" src="https://aneeqbass.github.io/hostedImages_portfolio/images/menuIcon.png" alt="menuIcon" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Projects
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <h1 id="title" class="text-center">Projects</h1>
                        <div class="row row-cols-3">
                            <div v-for="project in $store.state.projects" class="col" :key="project.name">
                                <div class="card mb-3">
                                    <img :src="project.image" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">{{ project.name }}</h5>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Personal Projects
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <h1 id="title" class="text-center">Personal Projects</h1>
                        <div class="row row-cols-3">
                            <div class="col">
                                <div class="card mb-3">
                                    <img src="" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                  </div>
                            </div>
                            <div class="col">
                                <div class="card mb-3">
                                    <img src="" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                  </div>
                            </div>
                            
                        </div>
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
.bgContainerProj {
  background-image: url("https://aneeqbass.github.io/hostedImages_portfolio/images/desktopBgImg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  
  background-attachment: fixed;
  height: 100%;
}
</style>
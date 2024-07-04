<template>
  <div class="bgContainerProj lazy min-vh-100 pt-5">
    <div class="container text-center">
        <img class="menuIcon fixed-top" src="https://aneeqbass.github.io/hostedImages_portfolio/images/menuIcon.png"
          alt="menuIcon" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
          <div id="resumeInfo">
          <h1 id="title">Skills</h1>
          <div class="accordion accordion-flush" id="accordionExample">
            <div class="accordion-item bg-transparent with-blur-backdrop border-2">
              <h2 class="accordion-header">
                <button id="accordHeading" class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Programming Skills
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="card-group card-group-scroll m-auto">
                    <div v-for="skill in $store.state.programmingSkills" id="cardBlockWidth"
                      class="card bg-transparent with-blur-backdrop border border-0" :key="skill.name">
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
          </div>
          <br>
          <h1 id="title">Education</h1>
          <div class="accordion accordion-flush" id="accordionExample2">
            <div class="accordion-item bg-transparent with-blur-backdrop border-2">
              <h2 class="accordion-header">
                <button id="accordHeading" class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="flase" aria-controls="collapseTwo">
                  Education
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                <div class="accordion-body">
                  <div class="card-group card-group-scroll m-auto">
                    <div v-for="education in $store.state.educationInfo" id="cardBlockWidth"
                      class="card bg-transparent with-blur-backdrop border border-0" :key="education.name">
                      <div class="container-fluid">
                        <img id="imgSize" :src="education.image" class="img-fluid" alt="image" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">{{ education.name }}</h5>
                        <h6 class="card-text">
                          {{ education.time }}
                          </h6>
                        <p class="card-text">
                          {{ education.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br>
          <h1 id="title">Work Experience</h1>
          <div class="accordion accordion-flush" id="accordionExample3">
            <div class="accordion-item bg-transparent with-blur-backdrop border-2">
              <h2 class="accordion-header">
                <button id="accordHeading" class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="flase" aria-controls="collapseThree">
                  Work Experience
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                <div class="accordion-body">
                  <div class="card-group card-group-scroll m-auto">
                    <div v-for="work in $store.state.workExperienceInfo" id="cardBlockWidth"
                      class="card bg-transparent with-blur-backdrop border border-0" :key="work.name">
                      <div class="container-fluid">
                        <img id="imgSize" :src="work.image" class="img-fluid" alt="image" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">{{ work.name }}</h5>
                        <h6 class="card-text">
                          {{ work.time }}
                          </h6>
                        <p class="card-text">
                          {{ work.description }}
                        </p>
                      </div>
                    </div>
                  </div>
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
export default {
  computed: {
    getAboutMeInfo() {
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

</style>
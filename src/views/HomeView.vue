<template>
  <div class="home">
    <div class="bgContainerInd lazy vh-100">
      <img class="menuIcon fixed-top" src="https://aneeqbass.github.io/hostedImages_portfolio/images/menuIcon.png"
        alt="menuIcon" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
      <div class="frontPage">
        <img id="glow" class="img-fluid rounded-circle border border-3 border-dark d-block portraitImg"
          src="https://aneeqbass.github.io/hostedImages_portfolio/images/portrait.jpg" alt="portrait">
      </div>
      <div class="frontPageText">
        <h1 id="title" class="mt-2 text-center">Welcome to Aneeq Bassadien's Digital Portfolio</h1>
        <h1 id="title" class="mt-2 text-center">Work Hard Play Hard</h1>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.bgContainerInd {
  background-image: url("https://aneeqbass.github.io/hostedImages_portfolio/images/oasisBgImg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
}

.frontPage {
  position: absolute;
  max-width: 300px;
  height: 250px;
  z-index: 15;
  top: 30%;
  left: 50%;
  margin: -100px 0 0 -150px;
}

.frontPageText {
  padding-top: 475px;
}
</style>

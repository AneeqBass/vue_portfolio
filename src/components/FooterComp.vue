<template>
   <footer class=" bg-dark text-white"> 
    <div class="">
  <div class="row row-cols-auto container text-center justify-content-evenly mx-auto">
    <div class="col">
      <br>
        <h4>Navigation</h4>
        <div class="router-link">
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/" active-class="active-link"><li>HOME</li></router-link> 
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/about" active-class="active-link"><li>ABOUT</li></router-link> 
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/resume" active-class="active-link"><li>RESUME</li></router-link> 
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/projects" active-class="active-link"><li>PROJECTS</li></router-link> 
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/testimonials" active-class="active-link"><li>TESTIMONIALS</li></router-link> 
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/contact-me" active-class="active-link"><li>ASK ME SOMETHING</li></router-link> 
        </div>
    </div>
    <div class="col">
      <br>
        <h4>Contact Me</h4>
        <li>Phone: 0760486780</li>
        <li>Email: aneeqbass@gmail.com</li>
        <li>Location: Lansdowne/Crawford-Cape Town</li>
        <li><a href="https://github.com/AneeqBass" target="_blank"><img id="contactLink" src="https://aneeqbass.github.io/hostedImages_portfolio/images/githubIcon.png" alt="githubIcon"></a></li>
       <li><a href="https://linkedin.com/in/aneeq-bassadien" target="_blank"><img id="contactLink" src="https://aneeqbass.github.io/hostedImages_portfolio/images/linkedin.png" alt="linkedin"></a></li>
    </div>
  </div>
    </div>
    <div class="container text-center">
  <div class="row align-items-start">
    <div class="col pt-3">
        <h6>&copy;Aneeq Bassadien|{{currentYear}}|All rights reserved</h6>
    </div>
  </div>
    </div>
     </footer>
 </template>
 
 <script>
 export default {
    data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
 }
 </script>
 
 <style scoped>
 footer {
    padding: 10px;
    text-align: center;
    background-color: #0c0c0c;
    border-color: transparent;
    position: absolute;
    width: 100%;
    -webkit-text-stroke: 0.5px #060018;
 }
 li{
     -webkit-text-fill-color: white; 
  list-style: none;
}
.active-link {
  color: rgb(246, 0, 180, 0.66);
}
#pageSelected:hover {
  background-color: rgb(246, 0, 180, 0.90);
}

li:hover {
  background-color: rgb(246, 0, 180, 0.90);
}

 </style>
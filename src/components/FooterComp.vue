<template>
   <footer class=" bg-dark text-white"> 
    <div class="">
  <div class="row row-cols-auto container text-center justify-content-evenly mx-auto">
    <div class="col">
        <h4>Navigation</h4>
        <div>
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/" active-class="active-link"><li>HOME</li></router-link> 
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/about" active-class="active-link"><li>ABOUT</li></router-link> 
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/resume" active-class="active-link"><li>RESUME</li></router-link> 
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/projects" active-class="active-link"><li>PROJECTS</li></router-link> 
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/testimonials" active-class="active-link"><li>TESTIMONIALS</li></router-link> 
            <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/contact-me" active-class="active-link"><li>ASK ME SOMETHING</li></router-link> 
        </div>
    </div>
    <div class="col">
        <h4>Contact Me</h4>
        <a href="#"><img id="contactLink" src="https://aneeqbass.github.io/ecommerceImages/facebook.png" alt="facebookLogo"></a>
       <a href="#"><img id="contactLink" src="https://aneeqbass.github.io/ecommerceImages/instagram.jpg" alt="instaLogo"></a>
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
 }
 #contactLink{
     height: 20px;
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
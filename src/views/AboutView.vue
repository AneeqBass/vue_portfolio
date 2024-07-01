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
                      <p class="fs-5 ">I Am a dynamic individual, characterized by a blend of curiosity, creativity, and compassion. My insatiable thirst for knowledge propels Me to dive into diverse subjects and engage with complex ideas, constantly seeking to expand my understanding of the world. With an adventurous spirit, I eagerly embrace new challenges and opportunities, relishing in the journey of discovery and growth. My creative impulses manifest in various forms, from artistic endeavors to innovative problem-solving, reflecting my innate ability to think outside the box and craft imaginative solutions. Beneath it all lies a deep-rooted sense of empathy and a genuine desire to make a positive impact, whether through lending a listening ear to those in need or actively contributing to causes I believe in. My multifaceted personality is a testament to my resilience, adaptability, and unwavering commitment to living life to its fullest potential.</p>
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
                      <div id="cardBlockWidth" class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/htmlIcon.png" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">HTML</h5>
                              <p class="card-text">
                                  I am quite comfortable in working with HTML. I have been learning HTML since grade 10.
                              </p>
                          </div>
                      </div>
                      <div id="cardBlockWidth" class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/cssIcon.png" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">CSS</h5>
                              <p class="card-text">I have been working with CSS since grade 10, recently I feel as if I am developing a better understanding of it, however there is much more I'd like to learn</p>
                          </div>
                      </div>
                      <div id="cardBlockWidth" class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/bootstrapIcon.png" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">Bootsrap</h5>
                              <p class="card-text">
                                  I have only recently started using Bootstrap. I have found a good way around it and I find it extremely useful
                              </p>
                          </div>
                      </div>
                      <div id="cardBlockWidth" class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/delphiIcon.png" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">Dephi</h5>
                              <p class="card-text">
                                  Delphi was the first programming language that I learned. I believe it is extremely tedious to code in delphi, however I apprieciate starting with Delphi because it's in turn easier to code other languages
                              </p>
                          </div>
                      </div>
                      <div id="cardBlockWidth" class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/javascriptIcon.png" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">Javascript</h5>
                              <p class="card-text">I started learning Javascript in grade 10, so I feel very confident when coding in Javascript</p>
                          </div>
                      </div>
                      <div id="cardBlockWidth" class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/csharpIcon.png" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">C#</h5>
                              <p class="card-text">
                                  I have worked on many projects involving C#. I have a good understanding of C# and I feel confident in my ability to code in C#
                              </p>
                          </div>
                      </div>
                      <div id="cardBlockWidth" class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/xamlIcon.png" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">.XAML</h5>
                              <p class="card-text">
                                  I have recently been working on a project that involves XAML. I am currently still devoloping my knowledge on XAML and still in the beginning phase
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
                      <div class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/davinci.png" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">Video Editing</h5>
                              <p class="card-text">
                                  I enjoy video editing. I am self taught and it has become one of my passions. I feel as if I am naturally gifted in editing videos
                              </p>
                          </div>
                      </div>
                      <div class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/gaming.jpg" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">Gaming</h5>
                              <p class="card-text">I enjoy playing games during some of my free time. I grew up with video games and I've always been enjoying video games</p>
                          </div>
                      </div>
                      <div class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/gym.jpg" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">Gym</h5>
                              <p class="card-text">
                                  I have picked up gyming over the last few years and I feel as if it is something that I will never be able to give up on. A heathy body-A healthy mind
                              </p>
                          </div>
                      </div>
                      <div class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/youtubeIcon.png" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">YouTube</h5>
                              <p class="card-text">
                                  I have a Youtube channel that I am looking to upload more videos to soon. It is one of my dreams to provide good content on YouTube
                              </p>
                          </div>
                      </div>
                      <div class="card bg-transparent with-blur-backdrop border border-0">
                        <div class="container-fluid">
                          <img id="imgSize" src="https://aneeqbass.github.io/hostedImages_portfolio/images/tiktok.jpg" class="img-fluid" alt="Hollywood Sign on The Hill" />
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">TikTok</h5>
                              <p class="card-text">I have dove into the content creation on TikTok. I enjoy creating media and enjoy making content that is ddifferent</p>
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

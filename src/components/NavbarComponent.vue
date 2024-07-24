<template>
  <div class="hello">
    <div class="container-fluid sticky-top ">
      <div class="container ">
        <nav class="navbar navbar-expand-lg">
          <div class="container ">
            <a class="navbar-brand " href="#">
              <img src="../assets/9.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top rounded-circle">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end " id="navbarNav" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item mx-2">
                  <a class="nav-link btn background" aria-current="page" href="#" @click="currentSection = 'home'"><strong>Home</strong></a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link btn background" aria-current="page" @click="currentSection = 'about'"><strong>About</strong></a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link btn background" aria-current="page"  @click="currentSection = 'portofolio'"><strong>Portofolio</strong></a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link btn background" aria-current="page"  @click="currentSection = 'journey'"><strong>Journey</strong></a>
                </li>
              </ul>
            </div>
            <form class="collapse navbar-collapse justify-content-end" role="search"  id="navbarNav" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <div class="nav-item p-2">
                <a href="https://www.instagram.com/nor_vita/" target="_blank">
                  <button type="button" class="background1 btn btn-out-light"  @click="sapa()">Let's Talk</button>
                </a>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <section v-if="currentSection === 'home'" key="home">
        <HeaderComponent />
        <AboutComponent />
        <ContentComponent />
        <section>
          <JourneyComponent/>
        </section>
        <FooterComponent />
      </section>
    </transition>

    <transition name="about-fade" mode="out-in">
      <section v-if="currentSection === 'about'" key="about">
        <AboutComponent />
        <FooterComponent />
      </section>
    </transition>

    <transition name="portofolio-slide" mode="out-in">
      <section v-if="currentSection === 'portofolio'" key="portofolio">
        <ContentComponent />
        <FooterComponent />
      </section>
    </transition>

    <transition name="journey-fade" mode="out-in">
      <section v-if="currentSection === 'journey'" key="journey">
        <JourneyComponent />
        <FooterComponent />
      </section>
    </transition>
  </div>
</template>

<script>
  import HeaderComponent from './HeaderComponent.vue';
  import AboutComponent from './AboutComponent.vue';
  import JourneyComponent from './JourneyComponent.vue';
  import ContentComponent from './ContentComponent.vue';
  import FooterComponent from './FooterComponent.vue';

  export default {
    name: 'HelloWorld',

    components: {
      HeaderComponent,
      AboutComponent,
      JourneyComponent,
      ContentComponent,
      FooterComponent
    },

    data() {
      return {
        currentSection: 'home',
        text:'',
      }
    },
    methods:{
      sapa() {
        alert('Anda Akan diarahkan ke halaman instagram')
      },
    }
  }
</script>

<style scoped>
  .container-fluid {
    background-color: #E2DFD0;
    columns: #524C42;
  }

  h3 {
    margin: 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0;
  }

  .background {
    background-color: #E2DFD0;
    color: #524C42;
  }

  .background:hover {
    background-color: #524C42;
    color: white;
  }

  .background1 {
    background-color: #524C42;
    color: white;
  }

  .background1:hover {
    background-color: white;
    color: black;
  }

  /* Transition classes */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
  }

  /* About transition */
  .about-fade-enter-active, .about-fade-leave-active {
    transition: opacity 1s ease-in-out;
  }
  .about-fade-enter, .about-fade-leave-to  {
    opacity: 0;
  }

  /* Portofolio transition */
  .portofolio-slide-enter-active, .portofolio-slide-leave-active {
    transition: all 0.5s ease;
  }
  .portofolio-slide-enter, .portofolio-slide-leave-to  {
    transform: translateX(100%);
    opacity: 0;
  }
</style>

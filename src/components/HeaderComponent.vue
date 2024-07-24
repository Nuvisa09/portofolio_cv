<template>
    <section >
      <div class="container-fluid p-5" >
          <div class="container overflow-hidden p-5">
            <div class="row gy-5 gy-lg-0  justify-content-lg-center">
              <div class="col-12 col-lg-6 order-1 order-lg-0 d-flex  align-items-center" >
                <div class="text-start"> 
                  <div style="align-self: start;">
                    <p  class="fs-4 mb-3">Hallo, welcome</p> 
                    <h2 class="display-3 fw-bold mb-5">A Nor Vita Sari Front-End Web Developer</h2>
                  </div>
                <div class="d-grid gap-2 d-sm-flex">
                  <a href="https://linkedin.com/in/nor-vita-sari-07402a15b" target="_blank">
                    <button type="button" class="btn background bsb-btn-2xl rounded-pill">LinkedIn</button>
                  </a>
                  <a href="#portofolio">
                    <button type="button" class="btn btn-outline-black background1 bsb-btn-2xl rounded-pill">See Portofolio</button>
                  </a>
                </div>
              </div>
            </div>
          <div class="col-12 col-lg-5 text-center">
            <div class="position-relative">
              <div class="bsb-circle border border-4 border-warning position-absolute top-50 start-10 translate-middle z-1"></div>
              <div class="bsb-circle bg-primary position-absolute top-50 start-50 translate-middle" style="--bsb-cs: 460px;"></div>
              <div class="bsb-circle border border-4 border-warning position-absolute top-10 end-0 z-1" style="--bsb-cs: 100px;"></div>
                <img class="img-fluid position-relative z-2  rounded-circle" loading="lazy" src="../assets/9.png" alt="A Digital Agency Specialized in AI and Web 3.0">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
  
    
  };
 
  </script>
  
  <style scoped>
  .container-fluid{
    background-color:#E2DFD0 ;
    color: #524C42;
  }

  .background {
    background-color: #524C42 ;
    color: white;
  }

  .background:hover{
    background-color: white;
    color: black;
  }

  .background1 {
    background-color: #E2DFD0;
    color: black;
  }

  .background1:hover{
    background-color: white ;
    
  }
  </style>





  
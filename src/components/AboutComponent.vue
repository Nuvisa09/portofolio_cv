<template>
    <section >
      <a class="anchor" id="about"></a>
      <div class="container-fluid background">
        <div class="container p-5">
            <div class="row justify-content-center p-5">
                <div class="col-lg-5 p-3 col-12 d-flex justify-content-center align-items-center " >
                    <div class="position-relative ">
                        <div class="bsb-circle border border-4 border-warning position-absolute top-50 start-10 translate-middle z-1"></div>
                        <div class="bsb-circle bg-primary position-absolute top-50 start-50 translate-middle" style="--bsb-cs: 460px;"></div>
                        <div class="bsb-circle border border-4 border-warning position-absolute top-10 end-0 z-1" style="--bsb-cs: 100px;"></div>
                      <img class="position-relative z-2 rounded-circle" width="100%" height="100%" loading="lazy" src="../assets/9.png" alt="A Digital Agency Specialized in AI and Web 3.0">
                    </div>
                </div>
                <div class="col-lg-6 p-3" style="text-align: left; align-items: center;">
                    <h2  class="display-3 fw-bold mb-3 font-color1 ">About me</h2>
                    <p  class="fs-4 mb-3 font-color1"> 
                      A fresh graduate in Computer Science with a strong passion for web development and skills honed through several intensive bootcamps.
                    </p>
                    <p class="fs-4 mb-3 font-color1">
                      Experienced in various web technologies including HTML, CSS, JavaScript, Bootstrap, and Vue.js. 
                    </p>
                    <p  class="fs-4 mb-3 font-color1"> 
                      Enthusiastic about applying acquired knowledge and continually enhancing skills in a dynamic and collaborative work environment.             
                    </p>
                </div>
          </div>
      </div>
    </div>
  </section>
</template>
  
<script>
  export default {
    name: 'ContentComponent',
   
    };
</script>
  
<style scoped>
  /* Tambahkan style khusus jika diperlukan */
  .background {
    background-color: #524C42;
  }
  .font-color{
    color: #543310;
  }
  .font-color1{
    color: #E2DFD0;
  }

  .anchor{
    position: relative;
    top: -72px;
    left: 0px;
  }
</style>
  
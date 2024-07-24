<template>
  <section>
    <a class="anchor" id="portofolio"></a>
    <div class="parallax">
      <div class="container-fluid">
        <div class="container p-5 ">
          <h2 class="display-3 fw-bold mb-3 p-4" :class="[textwarna, active]" data-aos="fade-up">My Projects</h2>
          <div class="row my-4 d-flex justify-content-center">
            <div class="col-md-12 col-lg-5 mb-4 p-3 mx-3" v-for="(project, index) in projects" :key="index" >
              <div class="card h-100 content-card my-3" >
                <div class="card-img-top" :style="{'background-image': 'url(' + project.image +')'}"></div>
                <div class="card-body p-4">
                  <h6 class="card-title font-card"><strong>{{ project.title }} </strong></h6>
                  <p class="card-text">{{ project.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

  
<script>
import Gambar from '../assets/gambar.png';
import Gambar1 from '../assets/gambar5.png';
import Gambar2 from '../assets/gambar3.png';

export default {
  name: 'ContentComponent',
  data() {
    return {
      textwarna: 'color',
      projects: [
        {
          title: 'Landing Page',
          description: 'Building a professional landing page with Bootstrap and SASS.',
          image: Gambar,
        },
        {
          title: 'Patient and Doktor Website',
          description: 'Developing a patient and doctor web application using Bootstrap and native PHP.',
          image: Gambar1,
        },
        {
          title: 'Facial login for the application',
          description: 'Building an application using Android Studio with Flutter.',
          image: Gambar2,
        },
      ],
    };
  },
};
</script>
  
<style scoped>
.background {
  background-color: #524C42;
}

.parallax {
  background-image: url('../assets/parallax.png');
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.anchor {
  position: relative;
  top: -60px;
  left: 0px;
}

.color {
  color: #E2DFD0;
}

/* .content-card {
  transition: transform 0.3s, box-shadow 0.3s;
  background-size: cover; 
  background-position: center; 
  min-height: 350px; 
} */

/* .content-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
} */

.content-card {
  position: relative; /* Menentukan posisi relatif untuk mengontrol posisi elemen card-img-top */
  overflow: hidden; /* Mengatur overflow untuk menghindari gambar latar belakang keluar dari card */
  min-height: 350px; /* Set minimum height for the card */
  background-color: #E2DFD0;
}

.card-img-top {
  height: 350px; /* Set tinggi gambar sesuai kebutuhan */
  background-size: cover; /* Pastikan gambar latar belakang mengisi card */
  background-position: center; /* Posisikan gambar latar belakang di tengah */
  transition: transform 0.3s ease-out;
}

.card-body {
  padding: 1.25rem; /* Sesuaikan padding sesuai kebutuhan */
  background-color: #E2DFD0;
  color: #524C42; /* Optional: Set background color for card-body */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
  transition: transform 0.3s ease-out;
}

.content-card:hover .card-img-top {
  transform: scale(1.1); /* Optional: Efek scaling pada gambar saat hover */
}

.content-card:hover .card-body {
  transform: translateY(0); /* Membawa card-body ke posisi normal saat hover */
}

.font-card {
  transition: color 0.3s;
}

.font-card:hover {
  color: #524C42;
}
</style>

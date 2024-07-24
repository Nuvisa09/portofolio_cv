<template>
  <section class="timeline-section">
    <a class="anchor" id="about"></a>
    <div class="container">
      <p  class="fs-4 mb-3 font-color1 pt-3" :class="[textwarna, active]">Experience</p>
      <h2 class="display-3 fw-bold mb-3 pb-3" :class="[textwarna, active]">My Journey</h2>
      <ul class="timeline ">
        <li v-for="(event, index) in events" :key="index" class="timeline-item">
          <div class="timeline-content jorney-hover">
            <h3>{{ event.title }}</h3>
            <span>{{ event.date }}</span>
            <p>{{ event.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineComponent',
  data() {
    return {
      textwarna:'color',
      events: [
        {
          title: 'Graduation',
          date: 'April 2024',
          description: 'Graduated with a degree in Computer Science from Universitas Dian Nuswantoro.'
        },
        {
          title: 'Laravel Vue Bootcamp',
          date: 'Mei - Juni 2023',
          description: 'Completed a full-stack web development bootcamp at DNCC & Kodingworks.'
        },
        {
          title: 'Accelerated Machine Learning Program',
          date: 'Agustus - Desember 2022',
          description: 'Completed an Accelerated Machine learning Program at Zenius (Certified Independent Study).'
        },
        {
          title: 'IT Fundamentals FGA',
          date: 'Juli - September 2022',
          description: 'Completed an IT Fundamental at Fresh Graduate Academy Digital Talent Scholarship'
        }
      ]
    }
  }
}
</script>

<style scoped>

.color{
  color: #524C42 ;
}
.timeline-section {
  padding: 40px 0;
  background-color: #b3aca1;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Lato', sans-serif;
}

.timeline {
  list-style: none;
  padding: 0;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #E2DFD0;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
}

.timeline-item:nth-child(odd) {
  left: 0;
}

.timeline-item:nth-child(even) {
  left: 50%;
}

.timeline-content {
  background: #fff;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.timeline-content::after {
  content: '';
  position: absolute;
  top: 20px;
  width: 12px;
  height: 12px;
  background: #524C42;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #E2DFD0;
}

.timeline-item:nth-child(odd) .timeline-content::after {
  right: -6px;
}

.timeline-item:nth-child(even) .timeline-content::after {
  left: -6px;
}

h3 {
  margin-top: 0;
}

span {
  display: block;
  margin-bottom: 10px;
  color: #524C42;
  font-weight: bold;
}

p {
  margin: 0;
}

.jorney-hover {
  transition: transform 0.3s, box-shadow 0.3s;
}

.jorney-hover:hover {
  transform: translateY(-15px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.anchor{
    position: relative;
    top: -72px;
    left: 0px;
}
</style>

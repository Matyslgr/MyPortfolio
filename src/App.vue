<template>
  <div id="app" class="full-page">
    <NavBar/>
    <div id="home">
      <HomeView/>
    </div>
    <div id="about" class="section">
      <About/>
    </div>
    <div id="skills" class="section">
      <Skills/>
    </div>
    <div id="projects" class="section">
      <ProjectList/>
    </div>
    <div id="contacts" class="section">
      <FooterView/>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="bubbles-container">
        <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import HomeView from './components/Home.vue'
import ProjectList from './components/Project.vue';
import NavBar from './components/Navbar.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import FooterView from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    HomeView,
    ProjectList,
    NavBar,
    About,
    Skills,
    FooterView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 4%;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: url('assets/fond4.jpg') center/cover no-repeat;
}

.section {
  margin: 0;
}

#app.full-page {
  min-height: 100vh;
}
.bubble {
  position: absolute;
  width: 12vw;
  height: 12vw;
  border-radius: 50%;
  top: 10%;
  left: 90%;
  z-index: -1;
  animation: moveBubble 16s linear infinite alternate;
}

.bubble:nth-child(2) {
  position: absolute;
  width: 13vw;
  height: 13vw;
  left: 8%;
  top: 90%;
  animation: moveBubble 20s linear infinite alternate -4s;
}

.bubble:nth-child(3) {
  position: absolute;
  width: 18vw;
  height: 18vw;
  left: 95%;
  top: 210%;
  animation: moveBubble 25s linear infinite alternate -6s;
}

.bubble:nth-child(4) {
  position: absolute;
  width: 17vw;
  height: 17vw;
  left: 80%;
  top: 390%;
  animation: moveBubble 22s linear infinite alternate -3s;
}

.bubble:nth-child(5) {
  position: absolute;
  width: 20vw;
  height: 20vw;
  left: 80%;
  top: 620%;
  animation: moveBubble 20s linear infinite alternate -5s;
}

@keyframes moveBubble {
  0% {
      transform: translate(-50%, -50%) translateX(100px) translateY(0);
  }
  25% {
      transform: translate(-50%, -50%) translateX(0) translateY(100px);
  }
  50% {
      transform: translate(-50%, -50%) translateX(-100px) translateY(0);
  }
  75% {
      transform: translate(-50%, -50%) translateX(0) translateY(-100px);
  }
  100% {
      transform: translate(-50%, -50%) translateX(100px) translateY(0);
  }
}

.bubble::before {
  content: '';
  position: absolute;
  top: 50px;
  left: 45px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  z-index: 10;
  filter: blur(2px);
}

.bubble::after {
  content: '';
  position: absolute;
  top: 80px;
  left: 80px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  z-index: 10;
  filter: blur(2px);
}

.bubble span {
  position: absolute;
  border-radius: 50%;
}

.bubble span:nth-child(1) {
  inset: 10px;
  border-left: 20px solid #0fb4ff;
  filter: blur(15px);
}

.bubble span:nth-child(2) {
  inset: 10px;
  border-right: 30px solid #ff4484;
  filter: blur(10px);
}

.bubble span:nth-child(3) {
  inset: 10px;
  border-top: 15px solid #ffeb3b;
  filter: blur(10px);
}

.bubble span:nth-child(4) {
  inset: 30px;
  border-left: 30px solid #ffffff;
  filter: blur(12px);
}

.bubble span:nth-child(5) {
  inset: 10px;
  border-bottom: 10px solid #fff;
  filter: blur(10px);
  transform: rotate(330deg);
}
</style>

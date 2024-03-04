<template>
  <div>
    <nav class="custom-navbar" ref="navbar">
      <a v-for="section in sections" :key="section.target" 
         v-scroll-to="`#${section.target}`" 
         @click="handleClick(section)"
         :class="{ 'nav-item': true, 'is-active': section.target === activeSection }"
         :data-active-color="section.color"
         :data-target="section.label">
        {{ section.label }}
      </a>
      <span class="nav-indicator" :style="{ width: indicatorWidth, backgroundColor: indicatorColor, left: indicatorLeft }"></span>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isFixed: false,
      activeSection: 'home',
      indicatorWidth: 0,
      indicatorColor: '',
      indicatorLeft: 0,
      sections: [
        { label: 'Home', target: 'home', color: '#ce0000' },
        { label: 'About Me', target: 'about', color: '#ff6a00' },
        { label: 'Skills', target: 'skills', color: '#ffcc00' },
        { label: 'Projects', target: 'projects', color: '#00cc00' },
        { label: 'Contact', target: 'contacts', color: '#0e6aff' },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Call handleScroll on mount to set initial state
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleClick(section) {
      this.activeSection = section.target;
    },
    handleScroll() {
      const navbar = this.$refs.navbar;
      const offset = window.scrollY;
      const fourPercent = window.innerHeight * 0.04;
      this.isFixed = offset > navbar.clientHeight - fourPercent;
      const twentyPercent = window.innerHeight * 0.5;

      const activeSection = this.sections.find(section => {
        const targetElement = document.getElementById(section.target);
        if (targetElement) {
          const sectionTop = targetElement.offsetTop - navbar.clientHeight - twentyPercent;
          const sectionBottom = sectionTop + targetElement.offsetHeight;
          return offset >= sectionTop && offset < sectionBottom;
        }
        return false;
      });
      if (activeSection) {
        this.activeSection = activeSection.target;
        this.updateIndicator(activeSection);
      }
    },
    updateIndicator(section) {
      const activeItem = this.$el.querySelector(`[data-target="${section.label}"]`);

      this.indicatorWidth = `${activeItem.offsetWidth}px`;
      this.indicatorColor = section.color;
      this.indicatorLeft = `${activeItem.offsetLeft}px`;
      // Mettre à jour la couleur du texte et de l'indicateur
      activeItem.style.color = section.color;

      // Réinitialiser la couleur du texte des autres éléments
      this.sections.forEach(otherSection => {
        if (otherSection.label !== section.label) {
          const otherItem = this.$el.querySelector(`[data-target="${otherSection.label}"]`);
          otherItem.style.color = '#83818c';
        }
      });
    },
  },
};
</script>

<style scoped>
.custom-navbar {
  z-index: 1000;
  margin: auto;
  background-color: rgba(255, 255, 255, 1);
  max-width: 70vw;
  padding: 0 -10%;
  border-radius: 5vh;
  box-shadow: 10px 20px 50px rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  overflow-x: auto;
  position: fixed;
  top: 4%;
  left: 50%;
  width: 100%;
  top: 7%;
  left: 50%;
  transform: translateX(-50%); /* Centre horizontalement la navbar */
  text-align: center;
  align-items: center;
  transition: top 0.5s ease, background-color 1.5s ease;
  cursor: pointer;
}

.nav-item {
  color: #83818c;
  font-family: arial, sans-serif;
  padding: 3.5vh 1vw;
  margin: 0 6px;
  position: relative;
  font-family: "Protest Strike", sans-serif;
  font-size: 2vw;
  font-style: normal;
  text-decoration: none;
}

.nav-item:before {
  content: "";
  position: absolute;
  bottom: -6px;
  background-color: #dfe2ea;
  height: 5px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  left: 0;
  transition: .3s;
}

.nav-item:not(.is-active):hover:before {
  bottom: 0;
}

.nav-item:not(.is-active):hover {
  color: #333;
}

.nav-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  transition: .4s;
  border-radius: 8px 8px 0 0;
}

</style>

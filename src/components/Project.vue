<template>
  <div class="Projects">
    <div class="project-title">
      <p>Mes Projets</p>
    </div>
    <div class="project-list">
      <div v-for="(project, index) in projects" :key="index" :class="['project-container', { 'project-left': project.position === 'left', 'project-right': project.position === 'right' }]">
        <a :href="project.link" target="_blank">
          <div class="project">
            <div v-if="project.position === 'right'" class="project-details">
              <h3 class="project-title-text">{{ project.title }}</h3>
              <p class="project-paragraph-text">{{ project.paragraph }}</p>
            </div>
            <img :src="project.gif" alt="Project Image" class="project-gif" :class="{ 'image-right': project.position === 'right', 'image-left': project.position === 'left' }">
            <div v-if="project.position === 'left'" class="project-details">
              <h3 class="project-title-text">{{ project.title }}</h3>
              <p class="project-paragraph-text">{{ project.paragraph }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="see-more">
      <a href="https://github.com/Matyslgr?tab=repositories" target="_blank">
        <button>
          <p>Voir plus de Projets</p>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        { title: 'My Hunter',
          paragraph: 'Le My Hunter est mon premier projet en C.\nC\'est une reproduction du jeu DunkHunt de 1984.\n\nLe but du jeu est de tuer un maximum de fantômes tout en gardant ses vies.\n\nL\'objectif étais d\'apprendre à utiliser la librairie CSFML et faire des animations de sprites.',
          gif: require('@/assets/Gif/myhunter.gif'),
          link: "https://github.com/Matyslgr/MyHunter",
          position: 'left' },
        { title: 'My AI Maze',
          paragraph: 'Le My AI Maze est un projet d\'Intelligence artificielle, développée en Python.\n\nCe projet met en lumière l\'application de l\'algorithme de Q-Learning pour permettre à une IA de trouver le chemin optimal dans un labyrinthe.\n\nL\'interface graphique, créée avec Pygame, offre une visualisation immersive du processus d\'entraînement et de la performance de l\'IA. Ce projet a renforcé mes compétences en implémentation d\'algorithmes d\'apprentissage par renforcement.',
          gif: require('@/assets/Gif/mymazeia.gif'),
          link: "https://github.com/Matyslgr/MyMazeIAreinforcement",
          position: 'right' },
        { title: 'My Radar',
          paragraph: 'Le My Radar est mon second projet graphique en C.\n\nLe Projet montre une représentation graphique d\'une simualtion aérienne.\nIl y a plusieurs modes permettant de voir les avions, les tours de contrôles, les hitbox...\n\nC\'est un projet de collision où l\'objectif était de gérer les collisions entre les avions et les tours de contrôle.',
          gif: require('@/assets/Gif/myradar.gif'),
          link: "https://github.com/Matyslgr/MyRadar",
          position: 'left' },
      ],
    };
  },
};
</script>

<style scoped>
.Projects {
  margin: 0;
  font-family: "Outfit", sans-serif;
  color: #fff;
  font-style: normal;
}
.project-title {
  max-height: 60vh;
  color: #ffffff;
  text-shadow: 4px 4px 8px #b4b4b4;
  font-family: "BoldenVan", bold;
  font-style: normal;
  font-size: 18vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  padding-left: 10%;
  margin: -10vh 0;
}
.project-list {
  display: flex;
  flex-direction: column;
}

.project-container {
  margin: 10vh;
  max-width: 70%;
}

.project {
  display: flex;
  align-items: center;
  padding: 8vh;
}

.project-right {
  display: flex;
  align-items: center;
  background-color: rgba(200, 0, 0, 0.4);
  transition: transform 0.3s ease-in-out;
  border-radius: 45px;
  align-self: flex-end;
  text-align: left;
}

.project-right:hover {
  transform: scale(1.05);
}

.project-left {
  display: flex;
  align-items: center;
  background-color: rgba(7, 0, 198, 0.4);
  transition: transform 0.3s ease-in-out;
  border-radius: 45px;
  align-self: flex-start;
  text-align: right;
}
.project-left:hover {
  transform: scale(1.05);
}

.project-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-title-text {
  font-size: 250%;
  font-weight: bold;
  text-align: left;
  margin-top: 0;
  color: #fff;
}

.project-paragraph-text {
  color: #000000;
  white-space: pre-line;
  font-size: 130%;
  text-align: left;
  margin-top: 0;
}

.project-left .project-title-text {
  text-align: right;
}
.project-left .project-paragraph-text {
  padding-left: 15%;
  text-align: left;
  margin-left: -60%;
}

.project-right .project-paragraph-text {
  text-align: left;
  margin-right: 10%;
}

.project-right .project-title-text {
  text-align: left;
}

.project-gif {
  max-width: 50%;
  height: auto;
  filter: drop-shadow(4px 4px 8px #ffffff);
}

.image-right {
  margin-left: auto;
}

.image-left {
  margin-right: 20%;
}

button {
  padding: 2% 8%;
  border: unset;
  border-radius: 40px;
  color: #000000;
  z-index: 1;
  background: #e8e8e8;
  position: relative;
  font-weight: 1000;
  font-size: 3vh;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
  box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
  transition: all 250ms;
  overflow: hidden;
}

button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 40px;
  background-color: #000000;
  z-index: -1;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
  box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
  transition: all 500ms;
}

button:hover {
  color: #e8e8e8;
}

button:hover::before {
  width: 100%;
}

button p {
  margin: 0;
}

.see_more {
  cursor : pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  z-index: 0;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0;
}
</style>

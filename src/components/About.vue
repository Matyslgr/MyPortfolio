<template>
  <div class="about">
    <div class="aboutme">
      <p>A Propos de Moi</p>
    </div>
    <div class="centeredCard">
      <div class="myCard">
        <div class="innerCard">
          <div class="frontSide">
            <div class="leftContent">
              <img src="@/assets/matys.jpg" alt="Your Image" />
            </div>
            <div class="rightContent">
              <p class="title">Matys Laguerre<br>18 ans</p>
              <p class="title">Première Année à Epitech Montpellier</p>
            </div>
          </div>
          <div class="backSide">
            <p class="text" v-html="formattedText"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      rawText: "En tant qu'étudiant passionné en première année d'informatique à Epitech Montpellier, je suis actuellement en quête d'opportunités de stage pour débuter ma deuxième année.\n\n\nDepuis mon enfance, ma fascination pour le monde de l'informatique m'a constamment motivé à explorer de nouvelles technologies et à résoudre des défis stimulants.\nJ'ai également plusieurs expériences dans des sports collectifs, ce qui m'a donné un esprit d'équipe important pour réaliser des projets à plusieurs.\n\n\nMa capacité d'apprentissage rapide et mon désir de contribuer à des projets innovants font de moi un candidat dynamique prêt à relever de nouveaux défis.",
    };
  },
  computed: {
    formattedText() {
      return this.rawText.replace(/\n/g, '<br>');
    },
  },
};
</script>

<style scoped>
.about {
  text-align: center;
  margin: 0;
}

.aboutme {
  color: #ffffff;
  text-shadow: 4px 4px 8px #aaaaaa;
  font-family: "BoldenVan", bold;
  font-style: normal;
  font-size: 18vh;
  margin: -10vh 0;
}

.centeredCard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Outfit";
}

.myCard {
  background-color: transparent;
  width: 70vw;
  height: 80vh;
  perspective: 3000px;
}

.innerCard {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1.5s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.myCard:hover .innerCard {
  transform: rotateY(180deg);
}

.frontSide,
.backSide {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 5vw;
  color: white;
  box-shadow: 0 0 1vw rgba(255, 255, 255, 0.5);
  font-weight: 700;
  font-size: 1.5vw;
}


.frontSide,
.frontSide::before {
  background: linear-gradient(160deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
}

.backSide,
.backSide::before {
  background-image: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(114, 200, 80) 46%, rgb(255, 204, 112) 100%);
}

.backSide {
  transform: rotateY(180deg);
}

.frontSide::before,
.backSide::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  width: 110%;
  height: 110%;
  position: absolute;
  z-index: -1;
  border-radius: 3em;
  filter: blur(50px);
  animation: animate 5s linear infinite;
}
.leftContent,
.rightContent {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10%;
}

.leftContent img {
  width: 120%;
  height: auto;
  object-fit: cover;
  border-radius: 5rem;
}

@keyframes animate {
  0% {
    opacity: 0.3;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}

.title {
  text-align: center;
  width: 120%;
  font-size: 160%;
  /* border: 1px solid rgba(255, 255, 255, 0.8); */
}
.text {
  padding: 5%;
  height: auto;
  margin: auto;
  line-height: 1.3;
  text-align: center;
  white-space: pre-line;
}
</style>

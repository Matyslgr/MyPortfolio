<template>
  <div class="home">
    <div class="portfolio">
      <p class="portfolio-text">Portfolio</p>
    </div>
    <div class="by">
      <p>by Matys Laguerre</p>
    </div>
    <div class="social-bar">
      <ul>
        <li><a href="https://www.linkedin.com/in/matys-laguerre-39560a2b1/" target="_blank"><img class="social-img" src="@/assets/social-logos/linkedin.png" alt="Linkedin"></a></li>
        <li><a href="https://github.com/Matyslgr" target="_blank"><img class="social-img" src="@/assets/social-logos/github.png" alt="Github"></a></li>
        <li><a href="https://discord.gg/suxrEMc2" target="_blank"><img class="social-img" src="@/assets/social-logos/discord.png" alt="Discord"></a></li>
        <li><a href="https://www.instagram.com/matys_lgr/" target="_blank"><img class="social-img" src="@/assets/social-logos/instagram.png" alt="Instagram"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};  
</script>


<style scoped>
.home {
  border: 1px solid #ff000000;
  border-style: transparent;
  font-family: "Portfolio", sans-serif;
  font-style: normal;
  position: relative;
  max-height: 80vh;
}
.portfolio {
  color: #ffffff;
  position: relative;
  left: 15vw;
  top: -15vh;
}

.portfolio-text {
  background: linear-gradient(to bottom right,#102bd9, #ff0000);
  color: transparent;
  -webkit-background-clip: text;
  font-size: 18vw;
  font-family: "Home", sans-serif;
  font-style: normal;
}
.by {
  background: linear-gradient(to bottom right,#102bd9, #ff0000);
  color: transparent;
  -webkit-background-clip: text; /* Pour appliquer le dégradé au texte seulement */
  font-size: 2.5vw;
  font-family: "Home", sans-serif;
  font-style: normal;
  position: relative;
  top: -60vh;
  left: 62vw;
}
.social-bar {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  position: relative;
  max-width: 5%;
  top: -45vw;
  left: 93%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-bar li {
  margin: 0;
  padding-top: 2vh;
  padding-bottom: 2vh;
}

.social-bar ul {
  list-style: none;
  padding: 0.8vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: space-around;
}

.social-img {
  height: auto;
  width: 100%;
  transition: transform 0.4s, filter 0.4s;
}

.social-bar:hover .social-img:not(:hover) {
  filter: blur(2px);
  transform: scale(0.9, 0.9);
}

.social-bar img:hover {
  transform: scale(1.1, 1.1);
}
</style>

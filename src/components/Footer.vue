<template>
  <div class="footer">
    <div class="horizontal-line"></div>
    <div class="contact">
      <h2>Me contacter</h2>
    </div>
    <div class="horizontal-social-bar">
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
  name: 'FooterView',
};
</script>

<style scoped>
.footer {
  text-align: center;
  margin-top: 15vh;
}

.horizontal-line {
  width: 80%;
  height: 5px;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 20px auto;
}

.contact {
  margin-bottom: 20px;
}

.contact h2 {
  color: #ffffff;
  font-family: "Home", sans-serif;
  font-size: 10vw;
  background: linear-gradient(to bottom right, #203eff, #01ff23);
  color: transparent;
  -webkit-background-clip: text;
  font-style: normal;
}

.horizontal-social-bar {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 90px;
  max-width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.horizontal-social-bar ul {
  list-style: none;
  margin: 0;
  display: flex;
}

.horizontal-social-bar li {
  margin: 0;
  padding: 10px;
}

.social-img {
  height: auto;
  width: 50%;
  transition: transform 0.4s, filter 0.4s;
}

.horizontal-social-bar:hover .social-img:not(:hover) {
  filter: blur(3px);
}

.horizontal-social-bar img:hover {
  transform: scale(1.1, 1.1);
}
</style>

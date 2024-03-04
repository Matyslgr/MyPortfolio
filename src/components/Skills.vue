<template>
  <div class="Skills">
    <div class="competences">
      <p>Compétences</p>
    </div>
    <div class="skills-list">
      <div class="skill-container" v-for="skill in skills" :key="skill.name">
        <div class="skill">
          <img :src="skill.icon" alt="Skill Icon" class="skill-icon" :title="skill.name">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsView',
  data() {
    return {
      skills: [
        { name: 'C', icon: require('@/assets/c.png') },
        { name: 'Python', icon:require('@/assets/python.png') },
        { name: 'HTML', icon:require('@/assets/html.png') },
        { name: 'CSS', icon:require('@/assets/css.png') },
        { name: 'Vue.js', icon:require('@/assets/vue.png') },
      ],
    };
  },
};
</script>

<style scoped>
.Skills {
  margin: 0;
}

.competences {
  max-height: 60vh;
  /* border: 1px solid #ff0000; */
  color: #ffffff;
  text-shadow: 4px 4px 8px #a7a7a7;
  font-family: "BoldenVan", bold;
  font-style: normal;
  font-size: 18vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: flex-start;
  padding-right: 10%;
  margin: -10vh 0;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skill-container {
  margin: 1.5vw;
}

.skill {
  padding: 2vh;
  background-color: #ffffff;
  border-radius: 15vh;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.skill:hover {
  transform: scale(1.15);
}

.skill-icon {
  padding: 1.5vw;
  width: 20vh;
  height: auto;
}


</style>

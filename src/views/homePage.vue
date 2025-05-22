<script setup>
import { onMounted, onUnmounted } from "vue";

function handleScroll() {
  // Effet parallax pour l'image de .container-main
  const mainImage = document.querySelector(".img-background");
  if (mainImage) {
    const scrollPosition = window.scrollY;
    mainImage.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Applique un effet parallax
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll); // Ajoute l'écouteur de scroll
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll); // Supprime l'écouteur de scroll
});
</script>

<template>
  <main aria-label="Page d'accueil">
    <section aria-labelledby="main-title" name=" home">
    <div class="container-main">
      <div class="container-title">
        <div class="text-title">
          <h1>Romain Lissac, développeur web</h1>
          <p>Certifié Développeur Web Full Stack, option UX/UI Design</p>
          <p>
            En coopération avec des entreprises
            internationales dans le domaine de l'intelligence artificielle.
          </p>
        </div>
        <div class="question-title" aria-label="Contact rapide">
          <h3>Vous avez un projet ?</h3>
          <p>06 73 16 71 71</p>
        </div>
      </div>
      <img
        src="@/assets/ordinateur.jpg"
        alt="Image d'un ordinateur"
        class="img-background"
      />
    </div>
  </section>
    <section class="container-about" aria-labelledby="about-title">
      <div class="text-about">
        <h2>À propos</h2>
        <h3>Je m’appelle Romain Lissac...</h3>
        <p>
          Développeur web full stack UI/UX Design, après un parcours marqué par
          l’autonomie, l’entrepreneuriat et une forte appétence pour
          l’innovation.
        </p>
        <br />
        <p>
          J’ai collaboré avec plusieurs entreprises basées au Canada et aux
          Etats Unis, principalement en télétravail et en anglais, sur des
          projets variés, permettant le développement des algorithmes
          d’intelligence artificielle. Cette expérience m’a permis de consolider
          mes compétences techniques tout en cultivant une forte capacité
          d’adaptation et d’autoformation.
        </p>
        <br />
        <p>
          Autodidacte passionné, je me suis formé seul à de nombreuses
          technologies et méthodologies de travail. Aujourd’hui, je souhaite
          mettre mes compétences en développement web alliant IA, design et
          programmation, pour créer des solutions innovantes, performantes et
          centrées sur l’utilisateur.
        </p>
      </div>
      <img
        src="@/assets/Romain.jpg"
        alt="Image d'un ordinateur"
        class="img-about"
      />
    </section>
    <section class="container-band" aria-labelledby="sur-mesure-title">
      <div class="text-band">
        <h2>Sur-mesure</h2>
        <p>
          Vous avez déjà vos idées en tête, votre maquette, votre cahier des
          charges et vous cherchez un développeur web compétent pour
          l’intégration et le développement d’un site internet qui vous
          ressemble. Discutons de votre projet afin que je puisse répondre au
          mieux à vos besoins
        </p>
        <div class="info-blocks">
          <a class="info-block" href="mailto:lissac.romain@gmail.com" aria-label="Envoyer un email à Romain Lissac">lissac.romain@gmail.com</a>
          <a class="info-block" href="tel:0673167171" aria-label="Téléphoner à Romain Lissac">0673167171</a>
        </div>
      </div>
      <img
        src="@/assets/dev_web.avif"
        alt="Développement web sur écran d'ordinateur"
        class="img-background-band"
      />
    </section>
    <h2 class="skill-title">Mes compétences</h2>
    <section class="skills-section" aria-labelledby="skills-title">
      <div class="skill-card" aria-label="Développement Back End">
        <div class="skill-icon">
          <img src="@/assets/Back-End-1.png" alt="Icône Back End" />
        </div>
        <h3>Développement Back End</h3>
        <p>
          Création et manipulation de bases données. Conception d’API liant données et fonctionnalités.
        </p>
        <div class="skill-tags">
          <span>#Symfony</span>
          <span>#PHP</span>
          <span>#SQL</span>
          <span>#InnoDB</span>
        </div>
      </div>
      <div class="skill-card" aria-label="Développement Front End">
        <div class="skill-icon">
          <img src="@/assets/Front-End-1.png" alt="Icône symbolisant le développement Front End" />
        </div>
        <h3>Développement Front End</h3>
        <p>
          Création d’interfaces web interactives, ergonomiques et adaptation du
          site au responsive design.
        </p>
        <div class="skill-tags">
          <span>#HTML</span>
          <span>#CSS</span>
          <span>#JavaScript</span>
          <span>#VueJS</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* MAIN SECTION */
main {
  min-height: 100vh;
  height: auto;
  background-color: white;
  z-index: -100;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.container-main {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  background-color: black; /* Optionnel : couleur de fond si l'image ne charge pas */
}

.img-background{
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  filter: brightness(45%);
}
.container-title {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  width: 100%;
  top: 40%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5vw;
  
}

.text-title {
  width: 50%;
  color: white;
  z-index: 1; /* Assure que le texte est au-dessus de l'image */
  position:absolute;
}

.text-title h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2vh;
}
.text-title p {
  font-size: 1.2rem;
  margin-bottom: 2vh;
}
.question-title {
  position: absolute;
  width: 30%;
  left: 60%;
  padding: 20px;
  color: white;
  background-color: rgb(255, 0, 0);
  z-index: 1; /* Assure que le texte est au-dessus de l'image */
}
.img-background {
  position: absolute; /* Positionne le texte par rapport au conteneur */
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 40%; /* Centre horizontalement et aligne en haut verticalement */
  filter: brightness(80%);
}

/*  A PROPOS SECTION */

.container-about {
  margin-top: 10vh;
  position: relative;
  left: 20%; /* Centre horizontalement */
  width: 60%;
  height: 80vh;
  background-color: #f1f6fa;
  padding: 16px;
  display: flex; /* Active Flexbox */
  justify-content: space-between; /* Espace entre les éléments */
  align-items: center; /* Centre verticalement les éléments */
}
.title-about {
  font-weight: bold;
  text-align: justify;
  margin-bottom: 4vh;
  color: #4a5768;

}
.accroche-about {
  font-weight: bold;
  margin-bottom: 6vh;

}
.text-about {
  margin-top: 10vh;
  margin-left: 5vh;
  width: 60%; /* Ajustez la largeur du texte */
  height: 100%; /* Conserve les proportions du texte */
  margin-right: 16px; /* Ajoute un espace entre le texte et l'image */
}

.img-about {
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-right: 0.5vh;
  width: 30%; /* Ajustez la largeur de l'image */
  height: 100%; /* Conserve les proportions de l'image */
  object-fit: cover; /* S'assure que l'image reste proportionnelle */
  object-position: 60% 50%; /* Centre horizontalement et aligne en haut verticalement */
}

.container-about h2 {
  color: #4a5768;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: justify;
  margin-bottom: 4vh;
}
.container-about h3 {
  color: #4a5768;
  font-size: 2rem; 
  text-align: justify;
  margin-bottom: 6vh;

}
.container-about p {
  color: #4a5768;
  font-size: 1.2rem;
  text-align: justify;
}

/*  BANDE SECTION */

.container-band {
  position: relative; /* Positionne le conteneur comme référence pour les éléments absolus */
  left: 0;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  margin-top: 10vh;
  margin-bottom: 10vh;
}
.text-band {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  max-width: 1300px;      
  padding: 0px 10vw;      
  transform: translateY(-50%);
  margin: 0 auto;
  z-index: 2;
  color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.text-band h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2vh;
}
.text-band p {
  font-size: 1.2rem;
  margin-bottom: 2vh;
  text-align: justify;
}
.info-blocks {
  display: flex; /* Aligne les blocs horizontalement */
  gap: 20px; /* Ajoute un espace entre les blocs */
  margin-top: 20px; /* Ajoute un espace au-dessus des blocs */
}

.info-block {
  padding: 10px 20px; /* Ajoute de l'espace à l'intérieur des blocs */
  background-color: #6c757d; /* Couleur de fond */
  color: white; /* Couleur du texte */
  border-radius: 50px; /* Rend les blocs ronds */
  font-size: 1rem; /* Taille du texte */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ajoute une ombre légère */
  cursor: pointer; /* Change le curseur pour indiquer que c'est cliquable */
  transition: background-color 0.3s ease; /* Ajoute une transition pour l'effet hover */
}

.info-block:hover {
  background-color: #5a6268; /* Change la couleur de fond au survol */
}
.img-background-band {
  position: absolute; /* Positionne le texte par rapport au conteneur */
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 80%; /* Centre horizontalement et aligne en haut verticalement */
  filter: brightness(40%);
}

/*  COMPETENCE SECTION */

.skill-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 5vh;
  color: #666;  
}

.skills-section {
  height: 55vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  margin-bottom: 5vh;
}

.skill-card {
  height: 100%;
  flex: 1;
  background-color: #f1f6fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.skill-icon img {
  width: 600px;
  height: auto;
  margin-bottom: 15px;
  border: solid 5px #000000;
}

.skill-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #666;
}

.skill-card p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.skill-tags span {
  background-color: #e0e0e0;
  color: #333;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
}
@media (max-width: 1444px) {

  .container-about {
    flex-direction: column;
    align-items: center;
    width: 96%;
    left: 2%;
    height: auto;
    padding: 0;
    margin-top: 3vh;
    background: #f1f6fa;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    overflow: hidden;
  }
  .img-about {
    width: 100%;
    height: auto;
    margin: 0;
    border-radius: 0;
    object-fit: cover;
    max-height: 220px;
    display: block;
  }
  .text-about {
    width: 100%;
    margin: 0;
    padding: 24px 18px 18px 18px;
    background: #f1f6fa;
    border-radius: 0 0 10px 10px;
    box-sizing: border-box;
  }
  .container-about h2,
  .container-about h3 {
    text-align: left;
    margin-bottom: 12px;
    color: #2d3a4a;
    font-weight: 700;
  }
  .container-about p {
    text-align: left;
    color: #2d3a4a;
    font-size: 1.05rem;
    margin-bottom: 12px;
  }

  .skills-section {
    flex-direction: column;
    align-items: stretch;
    height: auto;
    gap: 24px;
    padding: 10px;
  }
  .skill-card {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .skill-icon img {
    width: 100%;
    max-width: 350px;
    height: auto;
  }
}
@media (max-width: 1024px) {
  .container-title {
    flex-direction: column;
    align-items: center;
    width: 98%;
    height: auto;
    position: static;
    
  }
  .text-title{
    position: absolute;
    width: 98%;
    left: 1%;
    color: white;
    top: 30%;
    text-align: left;

  }
  .question-title {
    position: absolute;
    background-color: rgb(255, 0, 0); /* garde le fond rouge si tu veux */
    color: white;
    padding: 20px;
    width: auto;
    left: auto;
    top: 60%;
    margin-top: 120px;;
  }
}

@media (max-width: 600px) {
    .container-band {
    position: relative; /* Positionne le conteneur comme référence pour les éléments absolus */
    left: 0;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
  .text-band {
    position: absolute;
    max-width: 98vw;
    padding: 20px 2vw;
    font-size: 0.95rem;
  }
  .text-band h2 {
    font-size: 2rem;
    margin-bottom: 1vh;
  }
  .text-band p {
    font-size: 1rem;
    margin-bottom: 1vh;
    text-align: justify;
  }
   .info-blocks {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
  .img-background-band {
    position: absolute; /* Positionne le texte par rapport au conteneur */
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 80%; /* Centre horizontalement et aligne en haut verticalement */
    filter: brightness(40%);
  }
}


</style>

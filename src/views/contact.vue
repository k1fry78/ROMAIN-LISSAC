<template>
  <main aria-label="Page de contact">
    <div class="contact-container" role="region" aria-labelledby="contact-title">
      <div class="contact-left" role="region" aria-labelledby="contact-info-title">
        <div class="contact-info">
          <div class="contact-info-text">
          <h2 id="contact-info-title">Contactez-moi</h2>
          <p>Je suis disponible du lundi au vendredi par téléphone et tous les jours par email. <br> Il est possible de prendre rendez-vous en visio ou sur place.</p>
          <p class="infos">Adresse: rue Bernard Amiel, 31140 Saint-Alban, France <br> Horaires: 9h30 à 19h30 <br>06.73.16.71.71<br>lissac.romain@gmail.com</p>
        </div>
          <img
           src="@/assets/IconeWebSite.png"
           alt="Icone du site web"
           class="contact-icon"           
           />
        </div>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23077.772969088815!2d1.3927325112469942!3d43.695550479330294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aea4301e3564e1%3A0x406f69c2f4115b0!2sSaint-Alban!5e0!3m2!1sfr!2sfr!4v1746058259864!5m2!1sfr!2sfr"
            width="900"
            height="400"
            style="border:solid white 5px; border-radius: 8px;"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Carte interactive de Saint-Alban, France"
            aria-label="Carte interactive de Saint-Alban, France"
          >
            Votre navigateur ne supporte pas les iframes. Voici une description : "Carte interactive de Saint-Alban, France".
          </iframe>
        </div>
      </div>
      <div class="contact-form" role="form" aria-labelledby="form-title">
        <h2 id="form-title">Envoyez-moi un message</h2>
        <form action="https://formspree.io/f/xwpozbqa" method="POST">
          <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" name="name" required aria-required="true" />
          </div>
          <div class="form-group">
            <label for="first-name">Prénom</label>
            <input type="text" id="first-name" name="first-name" required aria-required="true" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required aria-required="true" />
          </div>
          <div class="form-group">
            <label for="options">Choisir le sujet</label>
            <select id="options" name="options" required aria-required="true" aria-describedby="options-description">
              <option value="option0" selected disabled>Sélectionnez</option>
              <option value="option1">Demande d'informations</option>
              <option value="option2">Prendre un rendez-vous</option>
              <option value="option3">Autre</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="6" required aria-required="true"></textarea>
          </div>
          <button type="submit" aria-label="Envoyer le formulaire de contact">Envoyer</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Styles principaux */
main {
  min-height: 95vh;
  height: auto;
  padding-top: 9vh;
  background-color: #d6d6d6;
  z-index: -100;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.contact-container {
  height: auto;
  min-height: 85vh;
  color: black;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
}

.contact-left {
  background-color: #ffffff;
  width: 45%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.contact-info {
  width: 100%;
  padding: 20px;
  display: flex; /* Active Flexbox */
  flex-direction: row; /* Aligne les éléments horizontalement */
  align-items: center; /* Centre verticalement */
}

.contact-info-text {
  flex: 1; /* Prend tout l'espace disponible à gauche */
}

.contact-icon {
  width: 150px; /* Ajustez la taille de l'image selon vos besoins */
  height: auto; /* Conserve les proportions de l'image */
  margin-top: 10vh;
  border: solid black 5px;

}

.map-container {
  width: 100%;
  display: flex;
  align-items: center;
}

.contact-info h2 {
  margin-top: 1vh;
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
  margin-bottom: 5vh;
}

.contact-info p {
  font-size: 1.1rem;
  text-align: left;
  width: 100%;  
}

.infos {
  font-weight: bold;
}

.contact-form {
  width: 45%;
  padding: 20px;
  background-color: #ffffff;
  color: black;
  text-align: left;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.contact-form h2 {
  margin-top: 1vh;
  margin-bottom: 5vh;
  font-size: 2.5rem;
  text-align: center;


}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #e2e2e2;
}

button {
  min-height: 5vh;
  width: 100%;
  margin-top: 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Styles responsives */
@media (max-width: 1024px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
    min-height: 85vh;
    height: auto;
  }

  .contact-left,
  .contact-form {
    width: 90%;
  }
   .contact-left {
    margin-bottom: 32px; /* Ajoute une marge entre les deux conteneurs */
  }
  .map-container iframe {
    width: 100%;
    height: 250px;
  }
}

@media (max-width: 768px) {
  .contact-info h2 {
    font-size: 1.8rem;
  }

  .contact-info p {
    font-size: 0.9rem;
  }

  .contact-form h2 {
    font-size: 1.2rem;
  }

  button {
    font-size: 0.9rem;
  }
}
</style>
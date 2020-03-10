<template>
  <div>
    <div class="header-wrapper">
      <header>
        <!-- <div class="header_bg"></div> -->
        <div class="img-wrapper">
          <img src="./henrik-tenhovirta.jpg" alt="Henrik Tenhovirta">
        </div>
        <div class="text-wrapper">
          <span style="text-transform: uppercase; font-size: 11px; font-weight: bold; letter-spacing: 2px;">Senior Frontend Developer</span>
          <h1 class="full-name">Henrik Tenhovirta</h1>
        </div>
      </header>
    </div>
    <div class="main-content">
      <main role="main">
        <article>
          <h2>Experience</h2>
          <div class="experience">
            <div class="experience-data">
              <h3 class="experience__employer">OP Financial Group Oyj</h3>
              <h4 class="experience__rank">Senior Software Developer</h4>
              <span class="experience__duration">01/2019 - present</span>
            </div>
            <p class="experience-text">I made a branding overhaul and a few big releases to an admin portal made with React and used by thousands of e-commerce merchants. My responsibilities included development and maintenance of several different systems made in several different technologies, main focus being on the UI side of things. During my stint at OP I adopted TypeScript into my toolbox and learned a lot about AWS among other things.</p>
          </div>

          <div class="experience">
            <div class="experience-data">
              <h3 class="experience__employer">Gofore Oy</h3>
              <h4 class="experience__rank">Senior Software Developer / Frontend Developer</h4>
              <span class="experience__duration">12/2015 - 01/2019</span>
            </div>
            <p class="experience-text">During my time at Gofore I worked as a frontend specialist in multiple projects using technologies such as Node.js, Vue and React. I also gave talks about CSS basics, CSS Grid, SCSS and BEM, as well as facilitated student events and held technical interviews for recruitment candidates.</p>
          </div>

          <div class="experience">
            <div class="experience-data">
              <h3 class="experience__employer">Flockler Oy</h3>
              <h4 class="experience__rank">Frontend Developer</h4>
              <span class="experience__duration">10/2014 - 10/2015</span>
            </div>
            <p class="experience-text">At Flockler I got to develop high-quality responsive websites on top of the Flockler social media platform. The technologies I used were mainly HTML, SCSS, JavaScript and Ruby/Rails.</p>
          </div>

          <div class="experience">
            <div class="experience-data">
              <h3 class="experience__employer">Geniem Oy</h3>
              <h4 class="experience__rank">Frontend Developer</h4>
              <span class="experience__duration">03/2014 - 10/2014</span>
            </div>
            <div class="experience-text">
              <p>I worked as a consultant for the first time in my career at Geniem. Although my stint there was brief, I had several projects where my tasks included:</p>
              <ul>
                <li>Building, developing and refactoring Node.js applications, improving performance both in the client-side and the Node.js layer.</li>
                <li>Designing a cross-platform hybrid web application that uses both native UI elements and web views.</li>
                <li>Developing features to a large Wordpress site.</li>
              </ul>
            </div>
            <br>
          </div>

          <div class="experience">
            <div class="experience-data">
              <h3 class="experience__employer">3 Step IT Oyj</h3>
              <h4 class="experience__rank">Software Developer</h4>
              <span class="experience__duration">12/2010 - 03/2014</span>
            </div>
            <p class="experience-text">My first real programming job had me coding Java 6 and using an Oracle database. I started shifting towards the frontend side of things and applied the use of Bootstrap into the application we were developing for our customers. I mostly worked with JavaScript, jQuery and CSS while making AJAX calls to a newly-made JSON API.</p>
          </div>
        </article>
      </main>
      <footer>

      </footer>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0)
    const inc = () => {
      count.value++
    }

    return {
      count,
      inc
    }
  }
}
</script>

<style>

  .main-content {
    width: 100%;
    padding: 0 32px;
    max-width: 1028px;
    margin: 0 auto;
  }

  .header-wrapper {
    background: linear-gradient(90deg, hotpink, cyan);
    padding-top: 4px;
    display: flex;
  }

  header {
    padding: 32px 16px;
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
    background-color: white;
  }

  .header_bg {
    bottom: 0;
    top: 0;
    position: absolute;
    right: -18px;
    width: 50px;
    background-color: white;
    transform: skewX(-20deg);
  }

  .full-name {
    margin: 0;
    font-size: 20px;
  }

  .img-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }

  .img-wrapper img {
    width: 100%;
  }

  .text-wrapper {
    flex: 1;
    align-self: center;
    padding-left: 8px;
  }

  article {
    margin: 32px auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 8px 0;
  }

  .summary-paragraph {
    margin-bottom: 24px;
  }

  ul {
    margin: 0;
  }

  .experience {
    display: flex;
    padding-top: 64px;
    padding-bottom: 64px;
    border-bottom: 1px solid #ddd;
  }

  .experience-text {
    flex: 1;
    margin: 0;
    padding: 0 16px;
  }

  .experience-text p {
    margin-top: 0;
  }

  .experience-data {
    width: 25%;
  }

  .experience__employer {
    margin: 0;
  }

  .experience__rank {
    margin: 0;
  }
</style>

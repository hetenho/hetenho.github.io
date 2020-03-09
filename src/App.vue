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
          <h2>Summary</h2>
          <p class="summary-paragraph">I am an experienced frontend developer with a strong emphasis on UX design, but I'm also capable of working with multiple different backend technologies as well. What drives me is having an effect with clients and helping out in any way possible be it technology choices, team communication, UX design or just simply getting that final touch on a product.</p>
          <p>My strengths include:</p>
          <ul>
            <li>Rethinking user flows and making life easier for the end user</li>
            <li>Clean code with well thought out naming, maintenance and scalability in mind</li>
            <li>An eye for UI design to make things just a little bit prettier using colors, shapes and spacing</li>
            <li>Building relationships on trust, giving support and positive feedback for the greater good</li>
          </ul>
          <p>On the tech side my skills include:</p>
          <ul>
            <li>Frontend (UX design, React, Vue, CSS)</li>
            <li>Backend (Typescript with Node.js, Ruby, Java)</li>
            <li>Databases (PostgreSQL, MySQL, MongoDB, Oracle, Redis)</li>
            <li>AWS (S3, RDS, Lambda)</li>
            <li>DevOps (Git, Docker, Jenkins)</li>
            <li>General (Microservices, API development, OOP, functional programming)</li>
          </ul>
          <p>Currently I'm using Typescript a lot because it helps me find bugs and write code that is more maintainable and expressive. Of the biggest frontend frameworks I've used React and Vue for multiple years now and prefer to work with them but will also easily adopt Angular, Ember, or Svelte when necessary.</p>
          <p>I know layouts and CSS well and I've kept multiple presentations on CSS architecture, naming methodologies, SCSS and the new shiny features of CSS. I get asked for help on a lot of CSS and design questions and I love to help people out and give them pointers about best practices of CSS and tips on design.</p>
          <p>I speak fluent English and have found it pleasant to work in multinational teams. I've worked with people for example from the UK, Germany, Spain and Estonia.</p>

          <h2>Experience</h2>
          <div class="experience">
            <h3 class="experience__employer">OP Financial Group Oyj</h3>
            <h4 class="experience__rank">Senior Software Developer</h4>
            <span class="experience__duration">01/2019 - present</span>
            <p>I made a branding overhaul and a few big releases to an admin portal made with React and used by thousands of e-commerce merchants. My responsibilities included development and maintenance of several different systems made in several different technologies, main focus being on the UI side of things. During my stint at OP I adopted TypeScript into my toolbox and learned a lot about AWS among other things.</p>
          </div>

          <div class="experience">
            <h3 class="experience__employer">Gofore Oy</h3>
            <h4 class="experience__rank">Senior Software Developer / Frontend Developer</h4>
            <span class="experience__duration">12/2015 - 01/2019</span>
            <p>During my time at Gofore I worked as a frontend specialist in multiple projects using technologies such as Node.js, Vue and React. I also gave talks about CSS basics, CSS Grid, SCSS and BEM, as well as facilitated student events and held technical interviews for recruitment candidates.</p>
          </div>

          <div class="experience">
            <h3 class="experience__employer">Flockler Oy</h3>
            <h4 class="experience__rank">Frontend Developer</h4>
            <span class="experience__duration">10/2014 - 10/2015</span>
            <p>At Flockler I got to develop high-quality responsive websites on top of the Flockler social media platform. The technologies I used were mainly HTML, SCSS, JavaScript and Ruby/Rails.</p>
          </div>

          <div class="experience">
            <h3 class="experience__employer">Geniem Oy</h3>
            <h4 class="experience__rank">Frontend Developer</h4>
            <span class="experience__duration">03/2014 - 10/2014</span>
            <p>I worked as a consultant for the first time in my career at Geniem. Although my stint there was brief, I had several projects where my tasks included:</p>
            <ul>
              <li>Building, developing and refactoring Node.js applications, improving performance both in the client-side and the Node.js layer.</li>
              <li>Designing a cross-platform hybrid web application that uses both native UI elements and web views.</li>
              <li>Developing features to a large Wordpress site.</li>
            </ul>
            <br>
          </div>

          <div class="experience">
            <h3 class="experience__employer">3 Step IT Oyj</h3>
            <h4 class="experience__rank">Software Developer</h4>
            <span class="experience__duration">12/2010 - 03/2014</span>
            <p>My first real programming job had me coding Java 6 and using an Oracle database. I started shifting towards the frontend side of things and applied the use of Bootstrap into the application we were developing for our customers. I mostly worked with JavaScript, jQuery and CSS while making AJAX calls to a newly-made JSON API.</p>
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
    margin: 0 auto;
    max-width: 640px;
    padding: 16px;
  }

  .header-wrapper {
    background: linear-gradient(90deg, hotpink, cyan);
    padding-top: 4px;
    display: flex;
  }

  header {
    padding: 16px;
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

  .experience__employer {
    margin: 0;
  }

  .experience__rank {
    margin: 0;
  }
</style>

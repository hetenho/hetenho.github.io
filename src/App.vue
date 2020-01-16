<template>
  <div>
    <nav>
      <span class="logo">FEELS</span>
      <ul class="menu">
        <li><a href='/contact'>Contact</a></li>
        <li><a href='/projects'>Projects</a></li>
      </ul>
    </nav>
    <div class="centered">
      <h1 class="animation">A reliable Frontend Agency that gives you the feels.</h1>
      <button>Contact</button>
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

<style scoped>

  nav {
    padding: 0em 2em;
    display: flex;
  }

  .menu {
    margin: 0;
    margin-left: auto;
    padding: 0;
    display: flex;
  }

  .menu li {
    list-style: none;
    display: flex;
  }

  .menu a {
    color: rgb(255, 2, 149);
    padding: 0.5em;
    align-self: center;
    display: flex;
    text-decoration: none;
    font-size: 14px;
  }

  .menu a:hover {
    text-decoration: underline;
  }

  .logo {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    background: -webkit-linear-gradient(rgb(255, 2, 149),rgb(194, 38, 255));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: italic;
    padding: 1em 1em 1em 0;
  }

  .centered {
    text-align: center;
    padding: 0 2em;
    max-width: 440px;
    margin: 15% auto 0;
  }

  h1 {
    font-size: 24px;
  }

  button {
    background: rgb(255, 2, 149);
    color: white;
    border-radius: 6px;
    box-shadow: none;
    border: none;
    font-size: 16px;
    padding: 0.5em 1em;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 32px;
    }

    .centered {
      padding: 0 4em;
      max-width: 1200px;
    }

    button {
      font-size: 20px;
      padding: 0.5em 1.5em;
    }
  }

  /* Animation */
  .animation{
    animation: typewriter 4s steps(44) 1s 1 normal both,
              blinkTextCursor 500ms steps(44) infinite normal;
  }
  @keyframes typewriter{
    from{width: 0;}
    to{width: 24em;}
  }
  @keyframes blinkTextCursor{
    from{border-right-color: rgba(253, 1, 220, 0.75);}
    to{border-right-color: transparent;}
  }
</style>

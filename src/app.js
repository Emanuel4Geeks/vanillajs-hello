/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pExcuse = document.getElementById("excuse");

  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function generateText() {
    let whoRandom = who[getRandom(who.length)];
    let whoCapitalized = whoRandom.charAt(0).toUpperCase() + whoRandom.slice(1);

    pExcuse.innerHTML = `${whoCapitalized} ${what[getRandom(what.length)]} ${
      when[getRandom(when.length)]
    }`;
  }

  const getRandom = size => Math.floor(Math.random() * size);

  generateText();
};

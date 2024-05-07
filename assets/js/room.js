
let room = document.querySelector(".room_main")

import { professionMas } from "./Mas-js/prof.js";

import { namesMas } from "./Mas-js/names.js";

import { diseaseMas } from "./Mas-js/disease.js";

import { baggageMas } from "./Mas-js/bagage.js";

import { hobbyMas } from "./Mas-js/hobby.js";
import { fobosMas } from "./Mas-js/fobos.js";
import { abilityMas } from "./Mas-js/ability.js";

function random(min=0, max=199) {
  return Math.floor(Math.random() * (max-min) + min)

}

// console.log(professionMas[random(0,  professionMas.length)]);

class Player{
  constructor(nameArg, ageArg, professionArg, workExpArg, diseaseArg, hobbyArg, fobosArg, baggageArg, abilityArg ){
    this.name = nameArg
    this.age={
      age: ageArg,
      isVisible: false
    }
    this.profession = {
      profession: professionArg,
      isVisible: false
    }
    this.workExp= {
      workExp: workExpArg,
      isVisible: false
    }
    this.disease= {
      disease: diseaseArg,
      isVisible: false
    }
    this.hobby= {
      hobby: hobbyArg,
      isVisible: false
    }
    this.fobos= {
      fobos: fobosArg,
      isVisible: false
    }
    this.baggage= {
      baggage: baggageArg,
      isVisible: false
    }
    this.ability= {
      ability: abilityArg,
      isVisible: false
    }
  }
  Talk() {
    console.log("Игрок говорит");
  }
  Vote(name, vote){
    console.log("Игрок ", this.name, "голосует за ", vote)
  }
}



let playersMas = []

for (let i = 0; i < 8; i++) {
  let name = namesMas[random(0,namesMas.length)]
  let age = random(0, 100)
  let prof = null
  let fobos = null
let ability = null
  let workExp = null
  let hobby = null
  let baggage = null
  let disease = null
  if (age<20) {
    prof = "безработный"
    workExp = "нет"
  } else {
    prof = professionMas[random(0,professionMas.length)]
    workExp = age-random(20,age)
  }
if (age<5) {
  fobos = fobosMas[random(0,fobosMas.length)]

} else {
fobos = fobosMas[random(0,fobosMas.length)]
}

if (age<15) {
  hobby = "нет"
  ability = "нет"
disease = "нет"
baggage= "нет"
} else {
  hobby = hobbyMas[random(0,hobbyMas.length)]
baggage = baggageMas[random(0, baggageMas.length)]
ability = abilityMas[random(0,abilityMas.length)]
disease = diseaseMas[random(0,diseaseMas.length)]

}
  
playersMas.push( new Player(
  name, age, prof, workExp, disease, hobby, fobos, baggage, ability  
) )
}



let widthLine = 85
let widthMan = 105
let widthMic = 80



let count = 0

for (let i = 0; i < playersMas.length; i++) {
  
    
    room.insertAdjacentHTML("beforeend", `
          <div class="${i%2==0?'room-right':'room-left'} person">
            <img
            style="width:${widthMan}px"
              class="room-avatar"
              src="./assets/images/icons/avatar.svg"
              alt=""
            />
            <img style="width:${widthMic}px" class="room-mic" src="./assets/images/icons/on.svg" alt="" />
          </div>
        `)

if (count == 1) {
  widthLine = widthLine - 15
  widthMan = widthMan - 15
  widthMic = widthMic - 15
  count = 0
}
else {

  count++
}





}

let players = document.querySelectorAll(".person")
let params = document.querySelectorAll(".room-menu__item")

// console.log(players);
let menu = document.querySelector(".room-menu")

players.forEach((player,i) => {
  player.onclick = ()=>{
    console.log(playersMas[i].profession);
    menu.innerHTML = `
      <div class="room-menu__item">
        <h2>Имя: ${playersMas[i].name}</h2>
        <img src="./assets/images/icons/question-mark.svg" alt="" />
      </div>
      <div class="room-menu__item">
        <h2>Возраст: ${playersMas[i].age.age}</h2>
        <img src="./assets/images/icons/question-mark.svg" alt="" />
      </div>
      <div class="room-menu__item">
        <h2>Профессия: ${playersMas[i].profession.profession}</h2>
        <img src="./assets/images/icons/question-mark.svg" alt="" />
      </div>
      <div class="room-menu__item">
        <h2>Стаж работы: ${playersMas[i].workExp.workExp }</h2>
        <img src="./assets/images/icons/question-mark.svg" alt="" />
      </div>
      <div class="room-menu__item">
        <h2>Заболевания: ${playersMas[i].disease.disease}</h2>
        <img src="./assets/images/icons/question-mark.svg" alt="" />
      </div>
      <div class="room-menu__item">
        <h2>Хобби: ${playersMas[i].hobby.hobby}</h2>
        <img src="./assets/images/icons/question-mark.svg" alt="" />
      </div>
      <div class="room-menu__item">
        <h2>Страхи: ${playersMas[i].fobos.fobos}</h2>
        <img src="./assets/images/icons/question-mark.svg" alt="" />
      </div>
      <div class="room-menu__item">
        <h2>Багаж: ${playersMas[i].baggage.baggage}</h2>
        <img src="./assets/images/icons/question-mark.svg" alt="" />
      </div>
      <div class="room-menu__item">
        <h2>Особая способность: ${playersMas[i].ability.ability}</h2>
        <img src="./assets/images/icons/question-mark.svg" alt="" />
      </div>
    `
  }
});

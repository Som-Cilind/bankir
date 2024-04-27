let room = document.querySelector(".room_main")


class Player{
  constructor(name, profession, workExp, disease, hobby, fobos, baggage, ability ){
    this.name = name
    this.profession = {
      profession: profession,
      isVisible: false
    }
    this.workExp= {
      workExp: workExp,
      isVisible: false
    }
    this.disease= {
      disease: disease,
      isVisible: false
    }
    this.hobby= {
      hobby: hobby,
      isVisible: false
    }
    this.fobos= {
      fobos: fobos,
      isVisible: false
    }
    this.baggage= {
      baggage: baggage,
      isVisible: false
    }
    this.ability= {
      ability: ability,
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


let player_1 = new Player(
  "Папой", "Диктатор", 52, "немой", "гольф", "народ", "микрофон", "красивый"
)
let player_2 = new Player(
  "Папой1", "Диктатор1", 521, "немой1", "гольф1", "народ1", "микрофон1", "красивый1"
)
let player_3 = new Player(
  "Папой1", "Диктатор2", 522, "немой2", "гольф2", "народ2", "микрофон2", "красивый2"
)
let player_4 = new Player(
  "Папой1", "Диктатор3", 522, "немой3", "гольф2", "народ2", "микрофон2", "красивый2"
)
let player_5 = new Player(
  "Папой1", "Диктатор4", 522, "немой4", "гольф2", "народ2", "микрофон2", "красивый2"
)
let player_6 = new Player(
  "Папой1", "Диктатор5", 522, "немой5", "гольф2", "народ2", "микрофон2", "красивый2"
)
let player_7 = new Player(
  "Папой1", "Диктатор6", 522, "немой6", "гольф2", "народ2", "микрофон2", "красивый2"
)
let player_8 = new Player(
  "Папой1", "Диктатор7", 522, "немой7", "гольф2", "народ2", "микрофон2", "красивый2"
)


let playersMas = [
  player_1, player_2, player_3, player_4, player_5, player_6, player_7, player_8
]



let widthLine = 100
let widthMan = 120
let widthMic = 90





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


  widthLine = widthLine - 15
  widthMan = widthMan - 10
  widthMic = widthMic - 10

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


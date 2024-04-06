let room = document.querySelector(".room_main")

let widthLine = 100
let widthMan = 120
let widthMic = 90
for (let i = 0; i < 4; i++) {

  room.insertAdjacentHTML("beforeend", `<div style="width:${widthLine}%" class="room_line">
        <div class="room-left person">
          <img
          style="width:${widthMan}px"
            class="room-avatar"
            src="./assets/images/icons/avatar.svg"
            alt=""
          />
          <img style="width:${widthMic}px" class="room-mic" src="./assets/images/icons/on.svg" alt="" />
        </div>
        <div class="room-right person">
          <img style="width:${widthMic}px" class="room-mic" src="./assets/images/icons/on.svg" alt="" />
          <img
           style="width:${widthMan}px"
            class="room-avatar"
            src="./assets/images/icons/avatar.svg"
            alt=""
          />
        </div>
      </div>`)
  widthLine = widthLine - 15
  widthMan = widthMan - 10
  widthMic = widthMic - 10
}


let players = document.querySelectorAll(".person")
console.log(players);
let menu = document.querySelector(".room-menu")


// const parametersMass = [
//   "Профессия",
//   "Стаж работы",
//   "Заболения",
//   "Хобби",
//   "Страхи",
//   "Багаж",
//   "Особая способность",
// ]

const playersParameters = [
  {
    profession: "w",
    workExp: "w",
    disease: "w",
    hobby: "w",
    fobos: "w",
    baggage: "w",
    ability: "w",
  },
  {
    profession: "d",
    workExp: "d",
    disease: "d",
    hobby: "d",
    fobos: "d",
    baggage: "d",
    ability: "d",
  },
  {
    profession: "",
    workExp: "",
    disease: "",
    hobby: "",
    fobos: "",
    baggage: "",
    ability: "",
  },
  {
    profession: "",
    workExp: "",
    disease: "",
    hobby: "",
    fobos: "",
    baggage: "",
    ability: "",
  },
  {
    profession: "",
    workExp: "",
    disease: "",
    hobby: "",
    fobos: "",
    baggage: "",
    ability: "",
  },
  {
    profession: "",
    workExp: "",
    disease: "",
    hobby: "",
    fobos: "",
    baggage: "",
    ability: "",
  },
  {
    profession: "",
    workExp: "",
    disease: "",
    hobby: "",
    fobos: "",
    baggage: "",
    ability: "",
  },
  {
    profession: "",
    workExp: "",
    disease: "",
    hobby: "",
    fobos: "",
    baggage: "",
    ability: "",
  },
]
let params = document.querySelectorAll(".room-menu__item")

players.forEach((elem, i) => {
  elem.onclick = () => {
    params[i].innerHTML = ``

  }
})

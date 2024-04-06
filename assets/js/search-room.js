let searchRooms = [
    {
        nameRoom: "Boba",
        password: "123",
        people: 4,
        isOpen: true
    },
    {
        nameRoom: "Biba",
        password: "123",
        people: 7,
        isOpen: false
    },
    {
        nameRoom: "Buba",
        password: "123",
        people: 2,
        isOpen: false
    },
]

let searchList = document.querySelector(".search-room__main-list")


searchRooms.forEach((element, i) => {
    searchList.insertAdjacentHTML('beforeend', `<div class="search-room__item">
          <h1>№${i + 1}</h1>
          <h1>${element.nameRoom}</h1>
          <div class="info">
            <h1>${element.people}/8</h1>
            <img src=${element.isOpen ? "./assets/images/icons/zamok_open.svg" : "./assets/images/icons/zamok_close.svg"} alt="" />
          </div>
        </div>`)
});
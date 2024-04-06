let settingsBtn = document.getElementById("settings-btn")
let modal = document.querySelector(".modal-settings")

// переменная, которая хранит состояние окошка
let isOpen = false

// нажатие на кнопку
settingsBtn.onclick = () => {
    console.log("Кнопка сработала");
    if (isOpen == false) {
        modal.style.display = "flex"
        isOpen = true
    } else {
        isOpen = false
        modal.style.display = "none"
    }

}


// если окно закрыто => надо открыть

// если окно открыто => надо закрыть

// создаем переменные для элементов
let switchBtn = document.querySelector(".music-switch")
let switchCheckbox = document.getElementById("switch")
let music = document.getElementById("music")
let volume = document.getElementById("volume")

let volumePercent = document.getElementById("volume-percent")
volumePercent.innerText = volume.value + "%"
// отслеживаем изменение ползунка
volume.addEventListener("input", () => {
    music.volume = volume.value / 100
    volumePercent.innerText = volume.value + "%"
})

switchCheckbox.addEventListener("input", () => {
    if (switchCheckbox.checked == true) {
        music.pause()
    }
    else {
        music.play()
    }
})



// яркость


let brightnes = document.getElementById("brightnes")
let darkBlock = document.querySelector(".brightnes-block")
darkBlock.style.opacity = brightnes.value - (brightnes.value - (100 - brightnes.value)) + "%"
brightnes.addEventListener("input", () => {
    darkBlock.style.opacity = brightnes.value - (brightnes.value - (100 - brightnes.value)) + "%"
})


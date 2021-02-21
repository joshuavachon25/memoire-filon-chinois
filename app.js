const jeu1 = [
            ["马克","Mǎkè","Mark"],
            ["大伟","Dàwěi","David"],
            ["你","nĭ","Tu, toi"],
            ["好","hăo","bien, bon"],
            ["吗","ma","particule interrogative"],
            ["我","wŏ","Je, moi"],
            ["很","hĕn","très"],
            ["呢","ne","ellipse interrogative"],
            ["也","yĕ","aussi"],
            ["谢谢","xièxie","merci/remercier"],
            ["再见","zàijiàn","au revoir"],
            ["拜拜","bàibài","bye bye"],
            ["子", "zǐ", "enfant (suffixe)"], 
            ["女", "nǚ", "femme"]
        ]

let active = []

function init(selection){
    let cartes = document.querySelectorAll(".carte");
    let jeu = shuffle(jeu1)
    console.log(jeu)
    jeu = jeu.slice(0, 8)
    console.log(jeu)
    let paquet = [];
    let z = 0

    for (pair of jeu) {
        paquet.push([z, pair[0], "zh"])
        paquet.push([z, pair[2], "fr"])
        z++
    }

    paquet = shuffle(paquet)

    for (let i = 0; i < cartes.length; i++) {
        cartes[i].classList.add(paquet[i][2])
        let match = document.createElement("div")
        match.innerText = paquet[i][0]
        match.classList.add("match")
        let contenu = document.createElement("div")
        contenu.classList.add("contenu")
        contenu.innerText = paquet[i][1]
        cartes[i].appendChild(match)
        cartes[i].appendChild(contenu)
        cartes[i].addEventListener("click", () => {tourner(cartes[i])})
    }
}

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
  }

function tourner(elem){
    elem.classList.add("recto")
    elem.children[1].classList.add("rectoTxt")
    active.push(elem)
    verif()
}

function verif(){
    if (active.length === 2) {
        document.querySelector(".overlay").classList.toggle("pop")
        setTimeout(function() {
            console.log(active)
            if (active[0].children[0].innerText == active[1].children[0].innerText && active[0].children[1].innerText !== active[1].children[1].innerText) {
                active[0].classList.add("trouve")
                active[1].classList.add("trouve")
            }else{
                active[0].classList.remove("recto")
                active[1].classList.remove("recto")
            }
            active[0].children[1].classList.remove("rectoTxt")
            active[1].children[1].classList.remove("rectoTxt")
            active = []
            document.querySelector(".coups").innerText = parseInt(document.querySelector(".coups").innerText) + 1
            document.querySelector(".overlay").classList.toggle("pop")
        }, 1000);
        
    }
}
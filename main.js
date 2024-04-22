function carregar(){
    let msg = document.querySelector("#msg")
    let img =document.querySelector("#imagem")
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12){
        img.src = "images/morning.png"
        document.body.style.background = "yellow"
    }
    else if (hora >= 12 && hora < 18){
        img.src = "images/afternoon.png"
        document.body.style.background = "blue"
    }
    else{
        img.src = "images/night.png"
        document.body.style.background = "gray"
    }
}
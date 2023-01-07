function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} `
    if(hora >= 0 && hora < 12){
        img.src = "sol.png"
        document.body.style.background = "#FFD700"
    }else if (hora >= 12 && hora < 18) {
        img.src = "tarde.png"
        document.body.style.background = "#F0E68C"
    }else{
        img.src = "lua.png"
        document.body.style.background = "#708090"
    }
}
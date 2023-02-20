function initMap(){
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    const posicionDos = {
        lat: 36.3637800,
        lng: 140.0025458
    }

    const posicionTres = {
        lat: 37.1803336,
        lng: -3.6005897
    }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom:4,
        center:posicion
    })
    
    const marker = new google.maps.Marker({
        position:posicion,
        map,
        title:"posicion Inicial"
    })

    const marker2 = new google.maps.Marker({
        position :posicionDos,
        map,
        title:"Posición dos"
    })

    const marker3 = new google.maps.Marker({
        position : posicionTres,
        map,
        title:"Posición Tres"
    })

}

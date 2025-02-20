let images = [
    {
        "url": "./assets/image_1.jpg",
        "name": "Picture 1",
        "description": "La primera imagen corresponde a un lago"
    },
    {
        "url": "./assets/image_2.jpeg",
        "name": "Picture 2",
        "description": "La segunda imagen muestra un mar morado"
    },
    {
        "url": "./assets/image_3.jpeg",
        "name": "Picture 3",
        "description": "La tercera imagen es un mar naranja"
    },
];

let back = document.getElementById('back');
let next = document.getElementById('next');
let picture = document.getElementById('picture');
let text = document.getElementById('text');
let actual = 0;

back.addEventListener('click', function(){
    actual = actual - 1;
    if (actual === -1){
        actual = images.length - 1;
    }

    picture.src = images[actual].url; 
    text.innerHTML = `<h3>${images[actual].name}</h3>
                      <p>${images[actual].description}</p>`;
});

next.addEventListener('click', function(){
    actual = actual + 1;
    if (actual === images.length){
        actual = 0;
    }

    picture.src = images[actual].url; 
    text.innerHTML = `<h3>${images[actual].name}</h3>
                      <p>${images[actual].description}</p>`;
});
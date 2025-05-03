const btnLoadProducts = document.getElementById("btnLoadProducts");
const containerCard = document.querySelectorAll(".card");
const cardImg = document.querySelectorAll(".card-img-top");
const cardBody = document.querySelectorAll(".card-body");
const cardText = document.querySelectorAll(".card-text");

const price = document.querySelectorAll(".price");


const URLMain = "https://api.escuelajs.co/api/v1/products/";

function loadProducts(cat){
    fetch(URLMain)
    .then((response)=> response.json())
    .then((data)=>{
        //limitando los datos a 9
        const limitedData = data.slice(0, 9);

        limitedData.forEach((e, i)=>{
           
            // Eliminando la imagen anterior si existe
            if (containerCard[i].querySelector("img")) {
                containerCard[i].querySelector("img").remove();
            }
            //creando un nuevo elemento de DOM
            const imgElement = document.createElement("img");
            //Es igual al segundo elememto del array images
            imgElement.src = e.images[1];
            imgElement.alt = "Image Product";
            imgElement.style.width = "100%";
            imgElement.style.height = "100%";
            //Para evitar errores de forbiden
            imgElement.referrerPolicy = "no-referrer";

            // agregar la imagen (imgElement) al principio de la tarjeta
            containerCard[i].insertBefore(imgElement, containerCard[i].firstChild);
            //quitamos el contenido del svg
            cardImg[i].style.display = "none";
            
            cardText[i].innerHTML= 
            `<h5 class="card-title">${e.title}</h5>
            <p class="card-text">${e.description}</p>`;
            price[i].innerText= `$ ${e.price}`;
            //console.log(e.images[1]);
        })
    })
}

btnLoadProducts.addEventListener('click', loadProducts);


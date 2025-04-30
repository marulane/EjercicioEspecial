const btnLoadProducts = document.getElementById("btnLoadProducts");
const containerCard = document.querySelectorAll(".card");

const URLMain = "https://api.escuelajs.co/api/v1/products/";

function loadProducts(cat){
    fetch(URLMain)
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach((e)=>{
            containerCard.insertAdjacentHTML("beforeend",
                ``
            )
        })
    })
}

btnLoadProducts.addEventListener('click', loadProducts);


const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Portatil", desc: "PORTATIL HP AMD RYZEN 7-7730U SSD 512GB RAM 16GB LED 15,6 FULL HD", price: 1505000, image: "https://wallpapers.com/images/hd/laptop-pictures-2l1fs0hwq4c9obgx.jpg" },
    { titulo: "Mouse", desc: "Inalámbrico", price: 100000, image: "https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg" },
    { titulo: "RAM", desc: "8GB", price: 55000, image: "https://http2.mlstatic.com/D_NQ_NP_783863-MCO84207717037_042025-O.webp" },
    { titulo: "SSD", desc: "128 GB", price: 150000, image: "https://acf.geeknetic.es/imgri/imagenes/tutoriales/definiciones/2020/4/SSD-i8kf.jpg" },
    { titulo: "Teclado", desc: "Mecánico", price: 250000, image: "https://cnnespanol.cnn.com/wp-content/uploads/2021/07/teclado-mecanico-gamer-2.png?w=460&h=260&crop=1" }
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector("img").src = producto.image;
    clon.querySelector(".price").textContent = producto.price.toLocaleString("Es-Co");
    contenedor.appendChild(clon);
});


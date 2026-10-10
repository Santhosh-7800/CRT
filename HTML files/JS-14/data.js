const alpha=async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data[2]);
        document.querySelector("h1").innerHTML = data[2].description;
        document.querySelector("img").setAttribute("src", data[2].image);
    };
alpha().catch((error) => {
    console.error("Error fetching data: " + error);  
    });
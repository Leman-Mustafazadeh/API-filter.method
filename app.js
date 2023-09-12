
let container = document.querySelector(".container");
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let allData = fetch("https://fakestoreapi.com/products/")
    .then(response => response.json())
    .then(data => {
        let count = 2;
        function Leman(allData) {
            container.innerHTML = "";
            allData.forEach((item) => {
                let x;
                const { image, title, price,category } = item;
                if (title.length > 30) {
                    x = title.slice(0, 25) + "..."

                } else {
                    x = title
                };
                
                container.innerHTML += `
                    <div class="box">
                        <div class="img-box">
                            <img src=${image} alt="">
                        </div>
                        <div class="textBox">
                            <h3>${price}</h3>
                            <p>${x}</p>
                            <p>${category}</p>
                        </div>
                    </div>
                    `

            });
        };

        Leman(data);

        btn.addEventListener("click",()=>{
            count +=2;
            Leman(data);
        });

        inp.addEventListener("change",(e)=>{
            let filterData = data.filter((item)=>{
              return item.category.toLowerCase().includes(e.target.value.toLowerCase())
            })
                console.log(filterData);
            Leman(filterData);
        })

    });



/* fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json)) */
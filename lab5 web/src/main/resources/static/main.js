class Shoe {
    constructor(brand, information, price) {
        this.brand = brand;
        this.information = information;
        this.price = price;
    }
}


let shoes = [
    new Shoe("nike","info",21),
    new Shoe("adidas","ifdsnfo",2)

];

const main=document.getElementById("shoeList")

const searchInput=document.getElementById("search_input")
function updateDOM(sorted = false) {

    console.log('dfsfdsf')
    main.innerHTML = '';
    fetch('http://localhost:8080/shoes')
        .then(response => response.json())
        .then(data => {
            shoes = data;
            if (sorted){shoes.sort((a, b) => a.price - b.price);}
            const searchTerm = searchInput.value.toLowerCase();
            const filteredShoes = shoes.filter(shoe =>
                shoe.brand.toLowerCase().includes(searchTerm)
            );
            console.log(data);
            filteredShoes.forEach((item, index) => {
                const element = document.createElement('div');
                element.classList.add('shoe');
                element.innerHTML = `
            <h1 class="Name">${item.brand}</h1>
            <h2 class="phoragraph">${item.information}</h2>
            <h2 class="sale">Price: ${item.price}$</h2>
            <a href="" class="Edit" onclick="editShoe(${item.id})">Edit</a>
            <a href="" class="Remove" onclick="removeShoeByIndex(${item.id})">Remove</a>`;

                main.appendChild(element);
            });
            let total = filteredShoes.reduce((sum, shoe) =>  sum + shoe.price, 0);
            document.querySelector('.Total').textContent = 'Total expenses: ' + total + '$';

        })
        .catch(error => console.error('Помилка при отриманні даних:', error));



}

searchInput.addEventListener('input', updateDOM);

updateDOM();




function OpenShoes(evt, shoesName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(shoesName).style.display = "block";
    evt.currentTarget.className += " active";
}

OpenShoes({ currentTarget: document.getElementById("home_button") }, "My shoes");



document.querySelector('.button__create').addEventListener('click', function(event) {
    event.preventDefault();

    const brandInput = document.getElementById('Brand');
    const informationInput = document.getElementById('information');
    const priceInput = document.getElementById('price');

    const brand = brandInput.value;
    const information = informationInput.value;
    const price = parseInt(priceInput.value);

    if (brand.trim() !== '' && information.trim() !== '' && !isNaN(price)) {

        if (price >= 0) {

            const newShoe = new Shoe(brand,information,price);


            fetch('http://localhost:8080/shoes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newShoe)
            })
                .then(response => response.json())
                .then(data =>{console.log(data);
                updateDOM()} )
                .catch((error) => console.error('Error:', error));




            brandInput.value = '';
            informationInput.value = '';
            priceInput.value = '';
            OpenShoes(event, 'My shoes');

        } else {
            alert('Ціна не може бути від\'ємною.');
        }
    } else {
        alert('Заповніть всі поля коректно.');
    }
});


function sortByPrice() {

    updateDOM(sorted = true);
}


document.getElementById('shoeList').addEventListener('click', function(event) {
    if (event.target.classList.contains('Edit')) {
        event.preventDefault();
    }
    if (event.target.classList.contains('Remove')) {
        event.preventDefault();
        const shoeElement = event.target.closest('.shoe');
        if (shoeElement) {
            const index = Array.from(shoeElement.parentNode.children).indexOf(shoeElement);
            console.log(Array.from(shoeElement.parentNode.children))

        }
    }
});


let lastEditedIndex=null;

function editShoe(index) {
    const selectedShoe = shoes.filter(shoe => shoe.id == index)[0];

    const editBrandInput = document.getElementById('EditBrand');
    const editInformationInput = document.getElementById('EditInformation');
    const editPriceInput = document.getElementById('EditPrice');
    console.log(shoes)
    console.log(selectedShoe)
    console.log("before ")
    console.log(lastEditedIndex)

    lastEditedIndex = index;
    console.log(lastEditedIndex)

    if (selectedShoe) {
        editBrandInput.value = selectedShoe.brand;
        editInformationInput.value = selectedShoe.information || '';
        editPriceInput.value = selectedShoe.price;
    }


    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    const editShoesTab = document.getElementById('Edit shoes');
    editShoesTab.style.display = "block";
}

function saveEditedShoes() {
    console.log(lastEditedIndex)
    const editBrandInput = document.getElementById('EditBrand');
    const editInformationInput = document.getElementById('EditInformation');
    const editPriceInput = document.getElementById('EditPrice');


    const brand = editBrandInput.value;
    const information = editInformationInput.value;
    const price = parseInt(editPriceInput.value);

   let updatedShoe = new Shoe(brand,information,price);
    if (brand.trim() !== '' && !isNaN(price)) {
        if (price >= 0) {

            const selectedIndex = lastEditedIndex;
            if (selectedIndex >= 0 ) {
                fetch(`http://localhost:8080/shoes/${selectedIndex}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedShoe),
                })
                    .then(response => response.json())
                    .then(data => {console.log(data);
                        updateDOM();
                       }
                    )

                    .catch((error) => console.error('Error:', error));
                OpenShoes(event, 'My shoes');
                OpenShoes({ currentTarget: document.getElementById("home_button") }, "My shoes");

            }
        } else {
            alert('Ціна не може бути від\'ємною.');
        }
    } else {
        alert('Заповніть всі поля коректно.');
    }
}









function removeShoeByIndex(index) {
    console.log(index)
    fetch(`http://localhost:8080/shoes/${index}`, {
        method: 'DELETE',
    })
        .then(response => {console.log(response.json())})
        .then(data => {console.log(data);
        updateDOM()})
        .catch((error) => console.error('Error:', error));

}
updateDOM();

localStorage.setItem('shoes', JSON.stringify(shoes));


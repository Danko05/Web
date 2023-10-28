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
function updateDOM(providedData = shoes) {
    main.innerHTML = '';

    providedData.forEach((item, index) => {
        const element = document.createElement('div');
        element.classList.add('shoe');
        element.innerHTML = `
            <h1 class="Name">${item.brand}</h1>
            <h2 class="phoragraph">${item.information}</h2>
            <h2 class="sale">Price: ${item.price}$</h2>
            <a href="" class="Edit" onclick="editShoe(${index})">Edit</a>
            <a href="" class="Remove" onclick="removeShoeByIndex(this)">Remove</a>`;

        main.appendChild(element);
    });
    let total = providedData.reduce((sum, shoe) =>  sum + shoe.price, 0);
    document.querySelector('.Total').textContent = 'Total expenses: ' + total + '$';

}

updateDOM();

const searchInput=document.getElementById("search_input")
function searchShoes() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredShoes = shoes.filter(shoe =>
        shoe.brand.toLowerCase().includes(searchTerm)
    );
    updateDOM(filteredShoes);
}
searchInput.addEventListener('input', searchShoes);

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


            shoes.push(newShoe);
            updateDOM();

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
    shoes.sort((a, b) => a.price - b.price);
    updateDOM();
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
            removeShoeByIndex(index);
        }
    }
});


let lastEditedIndex=null;

function editShoe(index) {
    const selectedShoe = shoes[index];

    const editBrandInput = document.getElementById('EditBrand');
    const editInformationInput = document.getElementById('EditInformation');
    const editPriceInput = document.getElementById('EditPrice');
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

    if (brand.trim() !== '' && !isNaN(price)) {
        if (price >= 0) {

            const selectedIndex = lastEditedIndex;
            if (selectedIndex >= 0 && selectedIndex < shoes.length) {
                console.log(shoes[selectedIndex])

                shoes[selectedIndex].brand = brand;
                shoes[selectedIndex].information = information;
                shoes[selectedIndex].price = price;
                console.log(shoes[selectedIndex])
                updateDOM();
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
    if (index >= 0 && index < shoes.length) {
        shoes.splice(index, 1);
        updateDOM();
    }
}





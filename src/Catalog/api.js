import axios from "axios";
export function getFilteredShoes(minPrice,maxPrice,minSize,maxSize,searchTerm){
    return axios.get('http://localhost:8080/shoes/filtered', {
        params: {

            priceOptions: `${minPrice} ${maxPrice}`,
            sizeOptions: `${minSize} ${maxSize}`,
            searchTerm: searchTerm
        }
    })
}
export function getAllShoes(){
    return axios.get('http://localhost:8080/shoes').then(response=>{
        return response.data
    })
}


export function getShoebyId(id) {
    return axios.get(`http://localhost:8080/shoes/${id}`).then(response => {
        return response.data;
    });
}
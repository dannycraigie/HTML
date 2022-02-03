`use strict`;

let button = document.getElementById(`button`);
let input = document.getElementById(`input`);
let output = document.getElementById(`output`);


// https://reqres.in/api/users?page=2  API for USER LIST EXAMPLE

//read = URL => {
//    axios.get(URL)
//    .then((response) => {
//        output.innerHTML = JSON.stringify(response.data);
//    }).catch((err) => {
//    console.log(err);
//})
//}



//create = URL => {
//    axios.post(URL, {
//        email : `eve.holt@reqres.in`,
//        password : `pistol`
//    })
//    .then((response) => {
//        output.innerHTML = JSON.stringify(response.data);
//    }).catch((err) => {
//    console.log(err);
//})
//}

login = URL => {
    axios.post(URL, {
        email : `eve.holt@reqres.in`,
        password : `cityslicka`
    })
    .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
    }).catch((err) => {
    console.log(err);
})
}

button.onclick = () => login(input.value);
`use strict`

import * as DOM from './dom.js';

// list item function
const writeItem = item => {
  const child = document.createElement(`li`);
  child.id = item._id;
  child.innerHTML = `${JSON.stringify(item)}`;
  DOM.listOutput.appendChild(child);
}

// GET all function
const get = () => {
  DOM.listOutput.innerHTML = ``;

  axios.get(`/read`)
    .then((response) => {
      if (!Array.isArray(response.data)) {
        writeItem(response.data);
      } else {
        for (let item of response.data) {
          writeItem(item);
        }
      }
    }).catch((err) => {
      console.log(err);
    });
}

// POST function
const post = () => {
  axios.post(`/create`, {name : DOM.inputName.value})
    .then((response) => {
      console.log(response);
      get();
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonCreate.onclick = () => post();

// ID Write function
const idWrite = item => {
  document.createElement("div");
  DOM.getOutput.writeItem(item)
}



// ID Read function
const read = () => {
  DOM.getOutput.innerHTML = ""  

  axios.get(`/read`, id , DOM.idGet.value)
  .then ((response) => {
    output.innerHTML = JSON.stringify(response.data);
    idWrite(response.data);
  }).catch((err) => {
    console.log(err);
  })
}

DOM.buttonId.onclick = () => read ();

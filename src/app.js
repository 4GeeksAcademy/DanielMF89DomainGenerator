/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};
let pronombre = ["the", "our"];
let adjetivo = ["great", "big"];
let nombre = ["jogger", "racoon"];
let extensiones = [".com", ".es", ".net", ".org"];
for (let index = 0; index < pronombre.length; index++) {
  for (let index2 = 0; index2 < adjetivo.length; index2++) {
    for (let index3 = 0; index3 < nombre.length; index3++) {
      for (let index4 = 0; index4 < extensiones.length; index4++)
        console.log(
          pronombre[index] +
            adjetivo[index2] +
            nombre[index3] +
            extensiones[index4]
        );
    }
  }
}

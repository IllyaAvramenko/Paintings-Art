import {getResourse} from "../services/requests";

const calc = (size, material, options, promocode, result) => {
   const sizeBlock = document.querySelector(size),
         materialBlock = document.querySelector(material),
         optionsBlock = document.querySelector(options),
         promocodeBlock = document.querySelector(promocode),
         resultBlock = document.querySelector(result);

   getResourse('http://localhost:3000/sizes')
         .then(res => setSizeValues(res))
         .catch(error => console.log(error));
   
   getResourse('http://localhost:3000/materials')
         .then(res => setMaterialsValues(res))
         .catch(error => console.log(error));
   
   getResourse('http://localhost:3000/options')
         .then(res => setOptionsValues(res))
         .catch(error => console.log(error));

   const setSizeValues = response => {
      sizeBlock.children.forEach((option, i) => {
         if (i > 0) {
            option.setAttribute('value', response[i - 1].value);
            option.textContent = response[i - 1].size;
         }
      });
   };

   const setMaterialsValues = response => {
      materialBlock.children.forEach((option, i) => {
         if (i > 0) {
            option.setAttribute('value', response[i - 1].value);
            option.setAttribute('title', response[i - 1].title);
            option.textContent = response[i - 1].material;
         }
      });
   };

   const setOptionsValues = response => {
      optionsBlock.children.forEach((option, i) => {
         if (i > 0) {
            option.setAttribute('value', response[i - 1].value);
            option.textContent = response[i - 1].text;
         }
      });
   };

   let sum = 0;

   const calcFunction = () => {
      sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

      if (sizeBlock.value == '' || materialBlock.value == '') {
         resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
      } else if (promocodeBlock.value === 'IWANTPOPART') {
         resultBlock.textContent = Math.round(sum * 0.7);
      } else {
         resultBlock.textContent = sum;
      }
   };

   calcFunction();
   
   sizeBlock.addEventListener('change', calcFunction);
   materialBlock.addEventListener('change', calcFunction);
   optionsBlock.addEventListener('change', calcFunction);
   promocodeBlock.addEventListener('input', calcFunction);
};

export default calc;
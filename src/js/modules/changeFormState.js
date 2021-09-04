const changeFormState = (state) => {
   const pictureSize = document.querySelectorAll('#size'),
         pictureMaterial = document.querySelectorAll('#material'),
         pictureOptions = document.querySelectorAll('#options'),
         picturePromocode = document.querySelectorAll('.promocode');
         
   function bindActionToElems (event, elem, prop) {
      elem.forEach(item => {
         item.addEventListener(event, () => {
            switch(item.nodeName) {
               case 'SELECT' :
                  console.log('Select');
                  state[prop] = item.value;
                  console.log(state);
                  break;
               
               case 'INPUT' :
                  state[prop] = item.value;
                  console.log(state);
                  break;
            }
         });
      });
   }

   bindActionToElems('change', pictureSize, 'size');
   bindActionToElems('change', pictureMaterial, 'material');
   bindActionToElems('change', pictureOptions, 'options');

   bindActionToElems('input', picturePromocode, 'promocode');
};

export default changeFormState;
const accordion = triggersSelector => {
   const btns = document.querySelectorAll(triggersSelector);

   btns.forEach(btn => {
      btn.addEventListener('click', function() {
         if (this.classList.contains('active-style') || this.classList.contains('active-content')) {
            btns.forEach(bttn => {
               bttn.classList.remove('active-style');
               bttn.nextElementSibling.classList.remove('active-content');
               bttn.nextElementSibling.style.maxHeight = '0px';
            });
         } else {
            btns.forEach(bttn => {
               bttn.classList.remove('active-style');
               bttn.nextElementSibling.classList.remove('active-content');
               bttn.nextElementSibling.style.maxHeight = '0px';
            });
            

            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
   
            if (this.classList.contains('active-style')) {
               this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
               this.nextElementSibling.style.maxHeight = '0px';
            }
         }
      });
   });
};

export default accordion;
const filter = () => {
   const menu = document.querySelector('.portfolio-menu'),
            items = menu.querySelectorAll('li'),
            wrapper = document.querySelector('.portfolio-wrapper'),
            markAll = wrapper.querySelectorAll('.all'),
            no = document.querySelector('.portfolio-no');

   const typeFilter = (markTypeSelector) => {
      const markType = wrapper.querySelectorAll(markTypeSelector);

      markAll.forEach(mark => {
         mark.style.display = 'none';
         mark.classList.remove('animated', 'fadeIn');
      });

      no.style.display = "none";
      no.classList.remove('animated', 'fadeIn');

      if (markTypeSelector === '.grandmother' || markTypeSelector === '.granddad') {
         no.style.display = 'block';
         no.classList.add('animated', 'fadeIn');

      } else {
         markType.forEach(mark => {
            mark.style.display = 'block';
            mark.classList.add('animated', 'fadeIn');
         });
         console.log('ol');
      }
   };

   const setFilter = (markSelector) => {
      const btn = menu.querySelector(markSelector);

      btn.addEventListener('click', () => {
         typeFilter(markSelector);
      });
   };

   setFilter('.all');
   setFilter('.lovers');
   setFilter('.chef');
   setFilter('.guy');
   setFilter('.girl');
   setFilter('.grandmother');
   setFilter('.granddad');

   menu.addEventListener('click', (e) => {
      let target = e.target;

      if (target && target.tagName == "LI") {
         items.forEach(btn => btn.classList.remove('filter__active'));
         target.classList.add('filter__active');
      }
   });
};

export default filter;
const slider = document.querySelector('.slider');
          const prevBtn = document.querySelector('.prev');
          const nextBtn = document.querySelector('.next');

          prevBtn.addEventListener('click', () => {
               slider.scrollBy({
                    left: -slider.clientWidth,
                    behavior: 'smooth'
               });
          });

          nextBtn.addEventListener('click', () => {
               slider.scrollBy({
                    left: slider.clientWidth,
                    behavior: 'smooth'
               });
          });
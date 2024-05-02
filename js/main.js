document.addEventListener("DOMContentLoaded", function () {
    
    const accordians = document.querySelectorAll('.qs');

    console.log(accordians);
    console.log(accordians);
    accordians.forEach(qs => {
        const icon = qs.querySelector('.icon');
        const answer = qs.querySelector('.answer');

        icon.addEventListener('click', () => {

            if (icon.classList.contains('active')) {
                icon.classList.remove('active');
                answer.classList.remove('active');
                icon.alt = "Expand";

            }
            else {
                icon.classList.add('active');
                answer.classList.add('active');
                icon.alt = "Collapse";
            }
        })
    });
})



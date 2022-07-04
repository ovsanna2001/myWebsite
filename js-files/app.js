const allSections  = document.querySelectorAll('.main-content');
const sectBtn = document.querySelectorAll('.control');

function pageTransitions() {
    // Section btns add active class and add active class to section
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', () => {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            let activeBtn = document.querySelectorAll('.control')[i];
            activeBtn.className += ' active-btn';
            // Add active class to section
            let sectionId = activeBtn.dataset.id;
            let currentSection = document.querySelectorAll('.active');
            currentSection[0].className = currentSection[0].className.replace('active','');
            let activeSection = document.getElementById(sectionId);
            activeSection.className += ' active';
        })
    }
}
if(allSections.length != 0) {
    pageTransitions();
}

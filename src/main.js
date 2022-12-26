document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero){
            hiddenElemntsHeader();
            console.log("escondido")
        }else{
            showElemntsHeader();
            console.log("mostrando")
        }
    });
    
    // Atrações
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(button){
            const tabtarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabtarget}]`)
            hideAlltabs();
            tab.classList.add('shows__list--is-active')
            hideAllButtons();
            button.target.classList.add('shows__tabs__button--is-active');


        })
    }

    // faq accordion
    for(let i=0 ; i < questions.length; i++){
        questions[i].addEventListener('click', openOrCloseQuestion)
    }
})

function hiddenElemntsHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showElemntsHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openOrCloseQuestion(elemento){
    const classe = 'faq__questions__item--is-open;';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle('faq__questions__item--is-open')
}

function hideAlltabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function hideAllButtons(){
    const buttonsActive = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttonsActive.length; i++){
        buttonsActive[i].classList.remove('shows__tabs__button--is-active');
    }
}
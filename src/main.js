document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    

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
})

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
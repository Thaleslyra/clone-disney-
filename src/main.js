document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll(`[data-tab-button]`);

    function trocarClasseBotao(botao) {

        buttons.forEach(botao => botao.classList.remove('shows__tabs__button--is-active'));


        botao.classList.add('shows__tabs__button--is-active');
    }




    buttons.forEach(button => {

        button.addEventListener('click', () => trocarClasseBotao(button))


        button.addEventListener('click', (botao) => {

            const tabId = botao.target.dataset.tabButton;
            const tabContent = document.querySelector(`[data-tab-id="${tabId}"]`);
            const allTabs = document.querySelectorAll(`[data-tab-id]`);
            allTabs.forEach(tab => {
                tab.classList.remove('shows__list--is-active');

            });
            tabContent.classList.add('shows__list--is-active');
        })




    })

})
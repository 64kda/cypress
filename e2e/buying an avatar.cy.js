describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {   // Посещение страницы входа в игру
        cy.visit('https://pokemonbattle-stage.me/login'); // Ввод логина и пароля для входа в игру
        cy.get(':nth-child(1) > .auth__input').type('Мой логин');
        cy.get('#password').type('мой пароль');
        cy.get('.auth__button').click(); // Переход на страницу магазина
        cy.get('.header__btns > [href="/shop"]').click(); // Выбор аватара для покупки
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // Ввод данных банковской карты для оплаты
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
        cy.get('.pay-btn').click();// Ввод данных банковской карты (неверные данные)
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();// Переход на страницу подтверждения оплаты
        cy.get('.payment__adv').click();
    })
})
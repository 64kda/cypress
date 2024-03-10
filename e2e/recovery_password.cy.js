describe('Автотесты на восстановление пароля', function () {

     it('корректность работы функции восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //посетить сайт.

        cy.get('#forgotEmailButton').should('be.visible'); // найти кнопку "Забыли пароль?" и проверить, что она видимая.
        cy.get('#forgotEmailButton').should('be.enabled'); // найти кнопку "Забыли пароль?" и проверить, что она кликабельная.
        cy.get('#forgotEmailButton').click();              // найти кнопку "Забыли пароль?" и нажать на неё.


        cy.get('#forgotForm > .header').should('be.visible'); //найти надпись "Восстановите пароль" и проверить, что она видимая.

        cy.get('#mailForgot').type('german@dolnikov.ru');

        cy.get('#restoreEmailButton').should('be.enabled'); //Найти кнопку "Отправить код" и проверить, что она кликабельная.
        cy.get('#restoreEmailButton').click();            //Найти кнопку "Отправить код" и нажать на неё.

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //найти и проверить, что появилась надпись "Успешно отправили пароль на e-mail".
        cy.get('#messageHeader').should('be.visible');//найти и проверить что надпись "Успешно отправили пароль на e-mail" видна пользователю".

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // найти и проверить, что крестик виден пользователю.
        cy.get('#exitMessageButton > .exitIcon').click();              // нажать на крестик.
        })
})
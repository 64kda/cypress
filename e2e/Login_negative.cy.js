describe('Автотесты на авторизацию', function () {

     it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //браузер зайди на сайт.

        cy.get('#mail').type('germ@dolnikov.ru'); //найти поле "Логин"+ написать неправльный логин.
        cy.get('#loginButton').should('be.disabled'); //найти кнопку "Войти" и проверить что она не кликабельна.

        cy.get('#pass').type('iLoveqastudio1'); //найти поле "пароль" + написать правильный пароль.

        cy.get('#loginButton').should('be.enabled'); // найти кнопку "войти" и проверить что она кликабельная.

        cy.get('#loginButton').click(); //найти кнопку "войти" и нажать на неё.

        cy.get('#messageHeader').should('be.visible');//найти и проверить, что текст виден пользователю.
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //найти и проверить, что после  не усп.авториз появилась надпись
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // найди элемент крестик и проверить, что он виден пользователю.
        cy.get('#exitMessageButton > .exitIcon').click();              // нажать на крестик.
        })
})




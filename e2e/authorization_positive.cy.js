describe('Автотесты на авторизацию', function () {

     it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //браузер зайди на сайт.

        cy.get('#mail').type('german@dolnikov.ru'); //найти поле "Логин"+ написать правильный логин
        cy.get('#loginButton').should('be.disabled'); //найти кнопку "Войти" и проверить что она не кликабельна.

        cy.get('#pass').type('iLoveqastudio1'); //найти поле "пароль" + правильный пароль.

        cy.get('#loginButton').should('be.enabled'); // найти кнопку "войти" и проверить что она кликабельная.

        cy.get('#loginButton').click(); //найти кнопку "войти" и нажать на неё.

        cy.get('#messageHeader').should('be.visible');//найти и проверить, что текст виден пользователю.
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //найти и проверить, что после усп.авториз появилась надпись
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // найди элемент крестик и проверить, что он виден пользователю.
        
        })
})




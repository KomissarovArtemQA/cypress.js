describe('Проверка авторизации ', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //открыть сайт
         cy.get('#mail').type('german@dolnikov.ru');//найти поле логин иввести правильный логин
         cy.get('#pass').type('iLoveqastudio1');// найти поле пароль и ввести правильный пароль
         cy.get('#loginButton').click();// найти кнопку войти и нажать на неё
         cy.get('#messageHeader').contains('Авторизация прошла успешно');// авторизироваться и проверить что авторизация успешна
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
     })
     it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); //открыть сайт
        cy.get('#mail').type('german@dolnikov.ru');//найти поле логин иввести правильный логин
        cy.get('#pass').type('iLoveqastudio');// найти поле пароль и ввести неправильный пароль
        cy.get('#loginButton').click();// найти кнопку войти и нажать на неё
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверить что авторизация  не успешна
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
    })
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); //открыть сайт
        cy.get('#mail').type('german@dolniko.ru');//найти поле логин иввести неправильный логин
        cy.get('#pass').type('iLoveqastudio1');// найти поле пароль и ввести правильный пароль
        cy.get('#loginButton').click();// найти кнопку войти и нажать на неё
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверить что авторизация  не успешна
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
    })
    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //открыть сайт
        cy.get('#forgotEmailButton').click();// найти кнопку восстановления пароля и нажать её
        cy.get('#forgotForm > .header').contains('Восстановите пароль');// проверить надпись на табличке
        cy.get('#forgotForm > .header').should('be.visible');// надпись на табличке видна пользователю
        cy.get('#mailForgot').type('fi4e4ki@rambler.ru');
        cy.get('#restoreEmailButton').click();//нажать кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверить что пароль отправлен успешно
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
    })
    it('Ввести логин без @', function () {
        cy.visit('https://login.qa.studio/'); //открыть сайт
        cy.get('#mail').type('germandolniko.ru');//найти поле логин и ввести  логин без @
        cy.get('#pass').type('iLoveqastudio1');// найти поле пароль и ввести правильный пароль
        cy.get('#loginButton').click();// найти кнопку войти и нажать на неё
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// проверить что авторизация  не успешна
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
    })
    it('Ввести логин GerMan@Dolnikov.ru', function () {
        cy.visit('https://login.qa.studio/'); //открыть сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');//найти поле логин и ввести  логин GerMan@Dolnikov
        cy.get('#pass').type('iLoveqastudio1');// найти поле пароль и ввести правильный пароль
        cy.get('#loginButton').click();// найти кнопку войти и нажать на неё
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверить что авторизация  успешна
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
    })
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/timoha_auto.cy.js --browser chrome
  
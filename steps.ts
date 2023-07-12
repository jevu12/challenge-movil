import { Given, When, Then   } from '@wdio/cucumber-framework';
import login from '../pageobjects/signIn.Page';

const loginPage = new login();


Given('que estoy en la pantalla de inicio de sesión',  () => {
    loginPage.validateTitle('Gmail');
    loginPage.clickLoginHome();
    loginPage.clickButtonAddEmailAddress();
    loginPage.clickGoogle();
});


When('ingreso mi cuenta de Google',  () => {
    loginPage.fillEmailInput('jevasquez682')

});

When('presiono el botón de siguiente',  () => {
    loginPage.clickbuttonNextEmail();

});

When('ingreso mi contraseña',  () => {
    loginPage.fillPasswordInput('123456789')

});

When('presiono el botón de iniciar sesión',  () => {
    loginPage.clickNextPassword();

});
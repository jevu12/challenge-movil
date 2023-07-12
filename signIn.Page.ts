import { ChainablePromiseElement } from 'webdriverio';
import Page from "./page";

export default class signInPage extends Page{
    constructor() {
        const elements = {
            inputEmail: 'identifierId',
            buttonNextEmail: 'identifierNext',
            buttonPassword: 'password',
            buttonNextPassword: 'passwordNext',
            buttonGotIt: 'com.google.android.gm:id/welcome_tour_got_it',
            textTitle:'com.google.android.gm:id/welcome_tour_title',
            buttonTakeMeGmail:'com.google.android.gm:id/action_done',
            buttonAddEmailAddress:'com.google.android.gm:id/setup_addresses_add_another',
            buttonGoogleAccount: 'com.google.android.gm:id/account_address',
            buttonGoogle: '`android=${\'new UiSelector().text("Google")\'}`',
        }
        super(elements);
    }

    public fillEmailInput (email: string){
        this.type(this.elements.inputEmail, email);

    }

    public clickbuttonNextEmail(){
        this.click(this.elements.buttonNextEmail);
    }
    public fillPasswordInput(password: string) {
        this.type(this.elements.buttonPassword, password);
    }

    public clickNextPassword() {
        this.click(this.elements.buttonNextPassword);
    }

    public clickLoginHome() {
        this.click(this.elements.buttonLoginHome);
    }
    public validateTitle(text: string) {
        this.validateText(this.elements.textTitle, text);
    }
    public clickButtonAddEmailAddress() {
        this.click(this.elements.buttonAddEmailAddress);
    }
    public clickGoogle() {
        this.click(this.elements.buttonGoogle);
    }
}
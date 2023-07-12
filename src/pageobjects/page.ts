export default class Page {
    protected readonly elements: Record<string, string>;
    protected constructor(elements: Record<string, string>) {
        this.elements = elements;
    }
    //HAcer clic en un elemento movil usando WebdriverIO
    protected click(selector: string) {
        return  $(selector).click();
    }
    //Escribir texto en un elemento movil usando WebdriverIO
    protected type(selector: string, text: string) {
        return $(selector).setValue(text);
    }
    // hacer scroll en un elemento movil usando WebdriverIO
    protected scroll(selector: string) {
        return $(selector).scrollIntoView();
    }
    //Validar texto en un elemento movil usando WebdriverIO
    protected validateText(selector: string, text: string) {
        return expect($(selector)).toHaveTextContaining(text);
    }
}
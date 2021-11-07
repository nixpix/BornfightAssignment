export class OrderFormPage {
  url = "/site/order";

  visit() {
    return cy.visit(this.url);
  }

  breadcrumbNavigation() {
    return cy.get("body > div > div > ul");
  }

  breadcrumbNavHomeItem() {
    return cy.get("body > div > div > ul > li:nth-child(1) > a");
  }

  orderInstruction() {
    return cy.get("body > div > div > div > p");
  }

  publisherPicker() {
    return cy.get("#orderform-publisher");
  }

  gamePicker() {
    return cy.get("#orderform-game");
  }

  priceText() {
    return cy.get("#price");
  }

  addToCartAlert() {
    return cy.get("[class=alert-success]");
  }

  addToCartButton() {
    return cy.get(
      "#order-form > div > div:nth-child(1) > div:nth-child(4) > button"
    );
  }

  selectFromPublisherPicker(publisher) {
    return this.publisherPicker().select(publisher);
  }

  selectFromGamePicker(game) {
    return this.gamePicker().select(game);
  }

  clickAddToCartButton() {
    return this.addToCartButton().click();
  }
}

export class WelcomePage {
  url = "/";

  visit() {
    return cy.visit(this.url);
  }

  welcomeMessage() {
    return cy.get("body > div > div > div > div.jumbotron");
  }

  letsGetStartedButton() {
    return cy.get(
      "body > div > div > div > div.jumbotron > p:nth-child(4) > a"
    );
  }

  clickLetsGetStartedButton() {
    return this.letsGetStartedButton().click();
  }
}

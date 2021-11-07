export class NavigationMenuPage {
  navigationMenu() {
    return cy.get("#w0-collapse");
  }

  startHereNavItem() {
    return cy.get("#w1 > li:nth-child(1) > a");
  }

  orderFormNavItem() {
    return cy.get("#w1 > li:nth-child(2) > a");
  }

  checkouteNavItem() {
    return cy.get("#w1 > li:nth-child(3) > a");
  }

  clickStartHereNavItem() {
    return this.startHereNavItem().click();
  }

  clickOrderFormNavItem() {
    return this.orderFormNavItem().click();
  }

  clickCheckouteNavItem() {
    return this.checkouteNavItem().click();
  }
}

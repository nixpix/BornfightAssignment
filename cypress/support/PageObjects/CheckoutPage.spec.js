export class CheckoutPage {
    url = "/site/checkout"

    visit() {
        return cy.visit(this.url)
    }

    cartOverviewTable() {
        return cy.get("#w0")
    }

    emptyCartButton() {
        return cy.get('a').contains("Empty Cart");
    }

    placeOrderButton() {
        return cy.get('button[type="submit"]');
    }

    firstnameField() {
        return cy.get("#orderform-firstname")
    }

    lastnameField() {
        return cy.get("#orderform-lastname")
    }

    emailField() {
        return cy.get("#orderform-email")
    }

    countryField() {
        return cy.get("#orderform-country")
    }

    cityField() {
        return cy.get("#orderform-city")
    }

    shippingAddressField() {
        return cy.get("#orderform-shippingaddress")
    }

    clickEmptyCartButton() {
        return this.emptyCartButton().click()
    }

    clickPlaceOrderButton() {
        return this.placeOrderButton().click()
    }

    fillCheckoutForm(firstname, lastname, email, country, city, shippingAddress) {
        this.firstnameField().type(firstname)
        this.lastnameField().type(lastname)
        this.emailField().type(email)
        this.countryField().type(country)
        this.cityField().type(city)
        this.shippingAddressField().type(shippingAddress)
    }
}
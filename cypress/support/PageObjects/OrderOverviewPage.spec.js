export class OrderOverviewPage {
    topBanner() {
        return cy.get("body > div > div > div > div.jumbotron")
    }

    contactInformationTable() {
        return cy.get("#w0")
    }

    orderDetailsTable() {
        return cy.get("#w1")
    }

    firstnameField() {
        return cy.get('#w0 > tbody > :nth-child(1) > td')
    }

    lastnameField() {
        return cy.get(':nth-child(2) > td')
    }

    emailField() {
        return cy.get(':nth-child(3) > td')
    }

    countryField() {
        return cy.get(':nth-child(4) > td')
    }

    cityField() {
        return cy.get(':nth-child(5) > td')
    }

    shippingAddressField() {
        return cy.get(':nth-child(6) > td')
    }

    orderDetailsFirstRowPublisher() {
        return cy.get('#w1 > .table > tbody > tr > :nth-child(2)')
    }
    
    orderDetailsFirstRowGame() {
        return cy.get('tbody > tr > :nth-child(3)')
    }

    orderDetailsFirstRowPrice() {
        return cy.get('tbody > tr > :nth-child(4)')
    }
}


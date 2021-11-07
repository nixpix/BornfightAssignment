export class CheckoutPage {
    url = "/site/checkout"

    visit() {
        return cy.visit(this.url)
    }

    cartOverviewTable() {
        return cy.get("#w0")
    }

    emptyCartButton() {
        return cy.get("")
    }
}
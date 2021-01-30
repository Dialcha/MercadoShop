describe('MercadoShop E2E test', () => {
    it('First cypress test on jumbo', () => {
        cy.visit('http://localhost:3000')
        cy.get('#searchInput').type('Apple mac {enter}')
        cy.url().should('include', '/search/Apple%20mac')
    })
})
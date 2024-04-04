describe('Test spec', () => {
  beforeEach('Go to BASE_URL', () => {
    cy.visit(Cypress.env('BASE_URL'))
  })

  it('should passes', () => {
    cy.get('#__next')
  })
})
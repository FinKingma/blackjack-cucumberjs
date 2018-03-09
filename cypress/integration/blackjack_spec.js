describe('Playing blackjack', function () {
  it('You always start with two cards', function () {
    cy.visit('http://localhost:8080')
    cy.get('#newGameBtn').click()
    cy.get('.playingCards').children().should('have.length', 2)
  })

  it('Your score is shown at the bottom of the page', function () {
    cy.visit('http://localhost:8080')
    cy.get('#newGameBtn').click()
    cy.get('#app').contains(/^Score: \d\d/)
  })

  it('Your score is updated after getting a new card', function () {
    cy.visit('http://localhost:8080')
    cy.get('#newGameBtn').click()

    cy.get('#score').then(($score1) => {
      const score1 = $score1.text()

      cy.get('#hitBtn').click()

      cy.get('#score').should(($score2) => {
        expect($score2.text()).not.to.eq($score1)
      })
    })
  })

  it('The game ends if you choose to stand', function () {
    cy.visit('http://localhost:8080')
    cy.get('#newGameBtn').click()
    cy.get('#standBtn').click()
    cy.get('#hitBtn').should('not.be.visible')
  })
})

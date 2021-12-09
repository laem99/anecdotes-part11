describe('Anecdote app', function () {
    it('front page can be opened', function () {
        cy.visit('http://localhost:3001')
        cy.contains('Anecdotes')
        cy.contains('If it hurts, do it more often')
    })
})
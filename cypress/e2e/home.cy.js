describe('homepage', () => {

    it('testing homepage', () => {
      cy.visit('https://demo.vercel.store/')
      cy.contains('All')
      cy.contains('Shirts')
      cy.contains('Stickers')
      cy.get('.text-md').should('have.attr', 'placeholder', 'Search for products...')
      cy.get('button[aria-label="Open cart"]').should('be.visible');
    })
  
   
  })
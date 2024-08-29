describe('search products', ()=> {
    it('searching pets products', () => {
        cy.visit('https://demo.vercel.store/')
        cy.get('.text-md').type('pets')
        cy.get('.text-md').should('have.value', 'pets')
        cy.get('input[type="text"]').type('{enter}')
        cy.url().should('include', 'search?q=pets')
        cy.contains('Showing 1 result for "pets"')
        cy.contains('Acme Dog Sweater')
    })

    it('searching product not found', ()=>{
        cy.visit('https://demo.vercel.store/')
        cy.get('.text-md').type('aguacates')
        cy.get('.text-md').should('have.value', 'aguacates')
        cy.get('.text-md').type('{enter}')
        cy.url().should('include', 'search?q=aguacates')
        cy.contains('There are no products that match "aguacates"')
    })

    it('searching shoes products', () => {
        cy.visit('https://demo.vercel.store/')
        cy.get('.text-md').type('shoes')
        cy.get('.text-md').should('have.value', 'shoes')
        cy.get('input[type="text"]').type('{enter}')
        cy.url().should('include', 'search?q=shoes')
        cy.contains('Showing 1 result for "shoes"')
        cy.contains('Acme Slip-On Shoes')
    })
})
describe("navbar", () => {
    it('clicking "Sticker" navigates to the stickers page', ()=> {
        cy.visit('https://demo.vercel.store/')
        cy.contains('Stickers').click()
        cy.url().should('include', '/search/stickers')
    })

    it('back to homepage', ()=> {
        cy.visit('https://demo.vercel.store/')
        cy.contains('Shirts').click()
        cy.url().should('include', '/search/shirts')
        cy.get('a[href="/"]').first().click()
        cy.url().should('eq', 'https://demo.vercel.store/')
    })
})
describe("cart", () => {
    it('add shoes to cart', ()=> {
        cy.visit('https://demo.vercel.store/product/acme-slip-on-shoes')
        cy.contains('2.5').click()
        cy.contains('Add To Cart').click()
        cy.contains('My Cart')
    })
})
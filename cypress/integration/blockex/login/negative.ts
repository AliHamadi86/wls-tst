describe('login to the markets', () => {
    it('should be ok', async (done) => {
        
        cy.request('https://api-tst.blockex.com/api/lookups/languages?ApiID=7c11fb8e-f744-47ee-aec2-9da5eb83ad84').then(function (xhr) {
            const response = xhr.body
            expect(response[0]).to.have.property('LineName', 'Line A')

            const obj1Values = Cypress._.values(response[0])
            expect(obj1Values).to.deep.eq([16176, "Line A", "A-0300/0350 801"])
        })
    })
})
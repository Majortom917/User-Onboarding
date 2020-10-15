describe('testing', () => {

    // schedule somethign to happen before each test
    // before each test we navigate to http://localhost:1234
    // EACH TEST NEEDS FRESH STATE
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    // helpers to avoid tons of repetition
    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[email="email"]')
    const passwordInput = () => cy.get('input[password="password"]')
    const termsBox = ()=> cy.get('input[name="terms"]')
    const submitBtn = () => cy.get('button[id=submitBtn]')

    it('exisitence', ()=>{
        nameInput().should('exist')
        emailInput().should('exist')
       passwordInput().should('exist')
       termsBox().should('exist')
       submitBtn().should('exist')
    })

    describe('filling out inputs', ()=>{
        it('submit button is disabled', () => {
            submitBtn().should('be.disabled')
        })

        it('can type inside the inputs', () => {
           nameInput()
              .should('have.value', '')
              .type('ThrockMorton')
              .should('have.value', 'Phil')
      
            emailInput()
              .should('have.value', '')
              .type('sk8tercousin@hawtmail.com')
              .should('have.value', 'sk8tercousin@hawtmail.com')
          })



    })

})
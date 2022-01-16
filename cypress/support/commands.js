const user = Cypress.env("userEmail")
const password = Cypress.env("userPassword")
const path = "saas-admin.sit.powerbiz.asia"

Cypress.Commands.add("login", () => { 
    cy.visit(path)
    cy.wait(3000);
    cy.get('#user_login')
        .type(user)
    cy.get('#password')
        .type(password)
    cy.get('.ant-form > .pbz-font').click()
    cy.wait(5000);
})
  
/*-----------------------------------------------------------------
Logout 
EX: cy.Logout()
  -----------------------------------------------------------------*/
Cypress.Commands.add('logout', () => {
    cy.visit('web/session/logout')
})
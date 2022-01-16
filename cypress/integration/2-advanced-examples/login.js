class loginPage {
    loginUser(userEmail, userPassword) {
      cy.get('#user_login').type(userEmail)
      cy.get('#password').type(userPassword)
      this.clickSubmit()
    }
    clickSubmit() {
        cy.get('.ant-form > .pbz-font').click()
      }
    
      getDashboardMyCoursesHeader() {
        return cy.get('.header-courses')
      }
    
      getWelcomePageHeading() {
        return cy.get('.welcome-page-heading')
      }
    
      getLoginFailureError() {
        return cy.get('.ant-notification-notice-with-icon')
      }
    }
  
  export default loginPage
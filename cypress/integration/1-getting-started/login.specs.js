import LoginPage from '../2-advanced-examples/login'

describe('Login page tests', function () {
  const loginPage = new LoginPage()

  before(function () {
    cy.clearCookies()
  })

  beforeEach(function () {
    cy.visit('saas-admin.sit.powerbiz.asia')
  })

 // it('should show empty field error messages', function () {
    loginPage.clickSubmit()
    //loginPage.getLoginFailureError().should('contain.text', 'We couldn\'t sign you in.')
    //loginPage.getLoginFailureError().should('contain.text', 'Please fill in the fields below.')
  })

  it('should show invalid email or password error message', function () {
    LoginPage.loginUser('incorrect@email.com', 'incorrect-password')
    LoginPage.getLoginFailureError().should('contain.text', 'We couldn\'t sign you in.')
    LoginPage.getLoginFailureError().should('contain.text', 'The username, email, or password you entered is incorrect. Please try again.')
  })

  it('user can successfully login and redirected to dashboard', function () {
    loginPage.clickSubmit()
    LoginPage.loginUser(Cypress.env('ADMIN_USER_EMAIL'), Cypress.env('ADMIN_USER_PASSWORD'))
    LoginPage.getDashboardMyCoursesHeader().should('have.text', 'My Courses')
  })
//})
import loginPage from '../pages/loginPage'

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/') // Replace with AUT
  })

  it('Login with valid credentials', () => {
    cy.fixture('user').then((user) => {
      loginPage.login(user.valid.username, user.valid.password)
      cy.url().should('include', '/logged-in-successfully')
    })
  })

  it('Login with invalid credentials', () => {
    loginPage.login('wrongUser', 'wrongPass')
    loginPage.elements.errorMessage().should('be.visible')
  })
})

class LoginPage {
  elements = {
    usernameInput: () => cy.get('#username'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('#submit'),
    errorMessage: () => cy.get('#error')
  }

  login(username, password) {
    this.elements.usernameInput().type(username)
    this.elements.passwordInput().type(password)
    this.elements.loginButton().click()
  }
}

module.exports = new LoginPage()
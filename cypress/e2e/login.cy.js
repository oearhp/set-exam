describe('Login screen validation', () => {

  beforeEach (() => {
    cy.visit('/')
    cy.get('h3')
      .should('contain', 'เข้าใช้ระบบ')
    cy.get('[name="loginName"]')
      .should('have.attr', 'placeholder', 'ชื่อผู้ใช้')
    cy.get('[name="password"]')
      .should('have.attr', 'placeholder', 'รหัสผ่าน')
  })
})

// Since I don't have valid credentials, this is a guess scenario.
it.skip('able to login with the valid credentials', () => {
  cy.get('[name="loginName"]')
    .type('validUsername')
  cy.get('[name="password"]')
    .type('validPassword')
  cy.contains('Login')
    .click()
  cy.get('h1')
    .should('contain', 'Welcome')
})

it('unable to login, valid username without password', () => {
  cy.get('[name="loginName"]')
    .type('tfitpornprasert')
  cy.get('[name="password"]')
    .type('')
  cy.contains('Login')
    .click()
  cy.contains('This Login name has been disabled.')
})

it('able to go to reset password screen', () => {
  cy.contains('ขอรหัสผ่านใหม่')
    .click()
  cy.get('h3')
    .should('contain', 'ขอรหัสผ่านใหม่')
})
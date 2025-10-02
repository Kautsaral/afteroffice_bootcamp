describe('Add Leave Entitlement for New Employee', () => {
  it('Login as Admin and Add Leave Entitlement', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', 'dashboard');
    cy.get('.oxd-main-menu-item').contains('Leave').click();
    cy.get('.oxd-topbar-body-nav').contains('Entitlements').click();
    cy.get('.oxd-topbar-body-nav').contains('Add Entitlements').click();
    cy.get('.oxd-autocomplete-text-input > input').type('john');
    cy.wait(5000);
    cy.get('.oxd-autocomplete-dropdown').contains('joker john selvam').click();
    cy.get('.oxd-select-wrapper').eq(0).click();
    cy.get('.oxd-select-dropdown').contains('Personal').click();
    cy.get('.oxd-select-wrapper').eq(1).click();
    cy.get('.oxd-select-dropdown').contains('2025-01-01 - 2025-31-12').click();
    cy.get(':nth-child(2) > .oxd-input').type('12');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-sheet').should('be.visible');
    cy.get('.orangehrm-modal-footer > .oxd-button--secondary').click();
    cy.get('.orangehrm-container').contains('CAN - Personal').should('be.visible');
  });
});

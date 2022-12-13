describe('Loads users', () => {
  it('Logged in as admin, should display list', () => {
    cy.visit('/users');
    cy.get('[type="email"]').type('brandon@email.com');
    cy.get('[type="password"]').type('1234567');
    cy.get('[type="submit"]').click();
    cy.title().should('equal', 'Users');
  });

  it('Not display users page when logged in as normal user', () => {
    cy.visit('/users');
    cy.get('[type="email"]').type('manuel@email.com');
    cy.get('[type="password"]').type('1234567');
    cy.get('[type="submit"]').click();
    cy.title().should('equal', 'Pokedex');
  });

  it('Buttons should be clickable', () => {
    cy.visit('/users');
    cy.get('[type="email"]').type('brandon@email.com');
    cy.get('[type="password"]').type('1234567');
    cy.get('[type="submit"]').click();
    cy.get('#agregar').click();
    cy.visit('/users');
    cy.get('#Editar1').click();
    cy.visit('/users');
    cy.get('#Eliminar1').click();
  });
  it('Buttons should be clickable', () => {
    cy.visit('/users');
    cy.get('[type="email"]').type('brandon@email.com');
    cy.get('[type="password"]').type('1234567');
    cy.get('[type="submit"]').click();
    cy.get('#agregar').click();
    cy.visit('/users');
    cy.get('#Editar1').click();
    cy.visit('/users');
    cy.get('#Eliminar1').click();
  });
});

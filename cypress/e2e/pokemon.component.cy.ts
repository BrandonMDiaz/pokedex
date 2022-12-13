describe('Loads pokemons', () => {
  it('Logged in as admin, should display agregar btn and show pokemons', () => {
    cy.visit('/login');
    cy.get('[type="email"]').type('brandon@email.com');
    cy.get('[type="password"]').type('1234567');
    cy.get('[type="submit"]').click();
    cy.get('#agregar').should('be.visible');
  });

  it('Not display agregar btn', () => {
    cy.visit('/login');
    cy.get('[type="email"]').type('manuel@email.com');
    cy.get('[type="password"]').type('1234567');
    cy.get('[type="submit"]').click();
    cy.get('#agregar').should('not.exist');
  });
});

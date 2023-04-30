/// <reference types="cypress" />
describe('Just visit e2e test', () => {
  it('should visit', () => {
    cy.visit('/');

    cy.get('a[href="/"]').should('be.visible').contains('HomePage');

    cy.get('a[href="/aboutus"]').should('be.visible').contains('AboutUs');
    cy.get('a[href="/form"]').should('be.visible').contains('AddedForm');
  });

  it('form page', () => {
    cy.visit('/');
    cy.get('a[href="/form"]').click();
    cy.get('h1').should('be.visible').contains('Added Form');
  });

  it('about page', () => {
    cy.visit('/');
    cy.get('a[href="/aboutus"]').click();
    cy.get('h1').should('be.visible').contains('About Us');
  });

  it('home page', () => {
    cy.visit('/');
    cy.get('img').should('have.length', 23);
    cy.get('img').first().click();
    cy.get('button').should('contain.text', 'X');
  });
});

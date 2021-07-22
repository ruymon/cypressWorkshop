/// <reference types="cypress" />

context('Validar Menus', () => {
  it('Clicando no link comprar deve direcionar para a página de compra', () => {
    cy.visit('http://lojaebac.ebaconline.art.br');
    cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink');
    cy.get('@comprarMenuLink').contains('Comprar').and('have.attr', 'href').and('include', 'shop');
    cy.get('@comprarMenuLink').click();
    cy.get('.page-title').should('contain', 'Produtos');
    cy.url().should('contain', '/shop');
  });

  it('Clicando no link de conta deve direcionar para a página de Login/Cadastro', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/');
    cy.get('.icon-user-unfollow').click();
    cy.url().should('contain', '/my-account-2');
  });
});
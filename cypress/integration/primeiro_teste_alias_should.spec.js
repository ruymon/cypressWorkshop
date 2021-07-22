/// <reference types="cypress" />

context('Validar Menu', () => {

  it('Clicando no link comprar deve direcionar para a página de compra', () => {
    cy.visit('http://lojaebac.ebaconline.art.br');

    // ALIAS
    // cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar');
    // cy.get('#primary-menu > .menu-item-629 > a').click();

    cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink');
    // cy.get('@comprarMenuLink').contains('Comprar'); 
    // cy.get('@comprarMenuLink').click();

    // Combinando 2 Ações
    //cy.get('@comprarMenuLink').contains('Comprar').click();
    cy.get('@comprarMenuLink')
      .contains('Comprar')
      .and('have.attr', 'href')
      .and('include', 'shop');

    cy.get('@comprarMenuLink').click();


    //cy.contains('Produtos');
    
    // Should
    cy.get('.page-title').should('contain', 'Produtos');
  });

});

  
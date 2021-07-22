/// <reference types="cypress" />

const data = require('../fixtures/envio.json');

context('Comprar um produto', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br');
  });
  
  it('Clicando no link comprar deve direcionar para a página de compra e escolher o Produto', () => {
    cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink');
    cy.get('@comprarMenuLink').click();
    
    // Escolhe o Produto
    cy.get('.post-2559 > .product-block').click();

    // Escolhe o Tamanho e a Cor
    cy.get('.button-variable-item-M').click();
    cy.get('.button-variable-item-Blue').click();

    // Comprar
    cy.get('.single_add_to_cart_button').click();

    // Valida se Produto foi Adicionado ao Carrinho
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.');

    // Validar se tem um Item no Carrinho - Widgets
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '1');

    // Abrir o Carrinho
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click();
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click();cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout')

    // Preencher dados de Envio
    cy.get('#billing_first_name').type(data.nome);
    cy.get('#billing_last_name').type(data.sobrenome);

    cy.get('#billing_country ').select('BR', {force: true})

    cy.get('#billing_address_1').type(data.endereço.rua);
    cy.get('#billing_address_2').type(data.endereço.numero);

    cy.get('#billing_city').type(data.endereço.cidade);

    cy.get('#billing_postcode').type(data.endereço.cep);
    cy.get('#billing_phone').type(data.telefone);

    cy.get('#billing_state').select('PE', {force: true})

    cy.get('#billing_email').type(data.email);

    cy.get('#place_order').click();

    // Validar Pedido
    cy.get('.page-title').should('contain', 'Pedido recebido');

  });

});
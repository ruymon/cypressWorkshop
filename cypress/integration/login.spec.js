/// <reference types="cypress" />

import LoginPage from '../support/pageObjects/login';
import MinhaContaPage from '../support/pageObjects/minhaConta';

// const data = require('../fixtures/user.json');

context('Login', () => {
  let data;

  before(() => {
    cy.fixture('user')
      .then(dadosUsuario => {
        data = dadosUsuario;
      });
  });

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/');
  });

  it('Clicando no link de conta deve direcionar para a página de Login/Cadastro', () => {
    cy.get('.icon-user-unfollow').click();

    // Hard-Coded
    //cy.get('#username').type('eshi')
    //cy.get('#password').type('teste@123');

    // User JSON
    //cy.get('#username').type(data.usuario)
    //cy.get('#password').type(data.senha);
  
    //cy.get('.woocommerce-form > .button').click();
    //cy.get('a > .hidden-xs').should('contain', 'Welcome Eshi Cruz !');

    // Page objects
    // LoginPage.login(data.usuario, data.senha);
    // MinhaContaPage.getUsuarioLogado().should('contain', 'Welcome Eshi Cruz !');

    // Commands
    cy.login(data.usuario, data.senha);
    cy.mensagemBoasVindas().should('contain', 'Welcome Eshi Cruz !');

    
  });
});

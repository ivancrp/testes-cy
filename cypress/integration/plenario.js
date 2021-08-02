/// <reference types="cypress" />

describe('Plenario', () => {
    it('devem poder realizar Login', () => {
        cy.visit('https://plenariovirtual-tst.tce.ce.gov.br/sessao');
        // cy.get - busca um elemento
        // .type - insere um texto
        cy.get('.login-button').click();
        cy.get('[name=ion-input-0]').type("marcelo.picanco"); 
        cy.get('[name=ion-input-1]').type("1q2w3e");
        cy.get('.form-content--button').click();
       
    });

    it('não devem poder realizar Login', () => {
        cy.visit('https://plenariovirtual-tst.tce.ce.gov.br/sessao');
        // cy.get - busca um elemento
        // .type - insere um texto
        cy.get('.login-button').click();
        cy.get('[name=ion-input-0]').type("marcelo.picanco"); 
        cy.get('[name=ion-input-1]').type("1q2w3e");
        cy.get('.form-content--button').click();
        
    });

  
});

describe('Plenario login', () => {


    it('não devem poder realizar Login', () => {
        cy.visit('https://plenariovirtual-tst.tce.ce.gov.br/sessao');
        // cy.get - busca um elemento
        // .type - insere um texto
        cy.get('.login-button').click();
        cy.get('[name=ion-input-0]').type("marcelo.picanco"); 
        cy.get('[name=ion-input-1]').type("1q2w3e");
        cy.get('.form-content--button').click();
        
    });

  
});
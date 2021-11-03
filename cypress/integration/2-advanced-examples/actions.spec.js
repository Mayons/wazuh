/// <reference types="cypress" />

describe('Actions', function(){
      
  /*beforeEach(() => {
      cy.fixture('data').then(credentials => {
        this.credentials = credentials;
      })
    })
    */  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false });
  it('validate user group', function(){
    
    cy.visit('https://127.0.0.1/app/wazuh#/overview/')
      .get('[data-test-subj="user-name"]')
      .type('admin')
      .get('[data-test-subj="password"]')
      .type('admin')
      .get('[data-test-subj="submit"]')
      .click()
      .get('[data-test-subj="confirm"]')

      .wait(2000)
      .click({force:true})
      .get('[data-test-subj="menuWazuhButton"]')
      .click({force:true})
      .get('[data-test-subj="menuAgentsButton"]')
      .click()
      .wait(3000)


      cy.fixture('data').then((locators)=>{
        cy.get('input[placeholder*=search]').type(locators.ip).type('{enter}');
        cy.get('[data-test-subj="row-001"]').find('td').eq(1).should('contain', locators.agente)
        cy.get('[data-test-subj="row-001"]').find('td').eq(2).should('contain', locators.ip)
        cy.get('[data-test-subj="row-001"]').find('td').eq(3).should('contain', locators.group)
      })
      /*.get('input[placeholder*=search]')
      .type('default')
      .type('{enter}')*/
      //Codigo para leer archivo
      /*cy.fixture('data').then((locators)=>{
        cy.get('input[placeholder*=search]').type(locators.agente)
        //cy.get(locators.ip)
      })*/
      
      //.should('contain', this.credentials.agente)
      //.should('contain', 'agente-VirtualBox')
      /*.get('[data-test-subj="row-001"]')
      .find('td')
      .eq(2)*/
      //.should('contain', this.credentials.ip)
      //.should('contain', '192.168.0.234')
     //Desde aca
      // .wait(10000)
      .get('[data-test-subj="menuWazuhButton"]')
      .click({force:true})
      .get('[data-test-subj="menuManagementButton"]')
      .click()
      .get('[data-test-subj="menuManagementGroupsLink"]')
      .click()
      
      //search para grupos
      cy.fixture('data').then((locators)=>{
        cy.get('input[placeholder*=Search]').type(locators.group).type('{enter}');
        })

      .get('[data-test-subj="row-undefined"]')
      .click()


      //search para agente particular
      cy.fixture('data').then((locators)=>{
        cy.get('input[placeholder*=search]').type(locators.ip).type('{enter}');
        cy.get('tbody').find('td').eq(1).should('contain', locators.agente)
        cy.get('tbody').find('td').eq(2).should('contain', locators.ip)
        })
     // .get('/input[placeholder*=search]')
      
     /* .get('@nameText').then(nameText => {
        cy.get('input[placeholder*=search]')
        .type('${nameText}')
        .type('{enter}')
      })*/
      /*.get('tbody')
      .find('td')
      .eq(1)
      .should('contain', 'agente-VirtualBox')
      .get('tbody')
      .find('td')
      .eq(2)
      .should('contain', '192.168.0.234')*/
      
      
      
      
      
      //.get('[data-test-subj="menuModulesSecurityEventsLink"]')
      //.click()
      
      //.wait(2000)
      //.get('data-test-subj="menuModulesButton"')
      //.click()
      
      //Tomamos el valor del nombre del agente y lo almacenamos en la variable nameText
      /*.then(($name) => {
        const nameText = $name.text()
        cy.wrap(nameText).as('nameText');
      })*/
      

    })
})

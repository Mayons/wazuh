/// <reference types="cypress" />

context('Actions', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false });


  it('validate user group', () => {
    
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
      .get('input[placeholder*=search]')
      .type('default')
      .type('{enter}')
      .get('[data-test-subj="row-001"]')
      .find('td')
      .eq(1)
      .should('contain', 'agente-VirtualBox')
      .get('[data-test-subj="row-001"]')
      .find('td')
      .eq(2)
      .should('contain', '192.168.0.234')
     //Desde aca
      // .wait(10000)
      .get('[data-test-subj="menuWazuhButton"]')
      .click({force:true})
      .get('[data-test-subj="menuManagementButton"]')
      .click()
      .get('[data-test-subj="menuManagementGroupsLink"]')
      .click()
      .get('input[placeholder*=Search]')
      .type('default')
      .type('{enter}')
      .get('[data-test-subj="row-undefined"]')
      .click()
      .get('tbody')
      .find('td')
      .eq(1)
      .should('contain', 'agente-VirtualBox')
      .get('tbody')
      .find('td')
      .eq(2)
      .should('contain', '192.168.0.234')
      
      
      
      
      
      //.get('[data-test-subj="menuModulesSecurityEventsLink"]')
      //.click()
      
      //.wait(2000)
      //.get('data-test-subj="menuModulesButton"')
      //.click()
      
     
      

    })
})

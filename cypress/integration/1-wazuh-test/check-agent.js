/// <reference types="cypress" />
import homePage from "../../page-objects/home-page"
import agentPage from "../../page-objects/agent-page"
import groupPage from "../../page-objects/group-page"

describe('Actions', function(){
  //This commands are to handle a security certification excepction on the browser
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false });

  it('validate user group', function(){
    // Calling HomePage Open Method
      homePage.open()
     
      //Calling User Name Field 

      cy.fixture('config').then((userId)=>{
        homePage.getUserNameField().type(userId.user)
        });

       //Calling Password Field   

      cy.fixture('config').then((passWd)=>{
        homePage.getPasswordField().type(passWd.pass)
        });  
     
      //Calling Sumbmit Bttn 
      homePage.getSubmitBttn()
      .click()
      
      //Calling Confirm Bttn 
      homePage.getConfirmBttn()
      .wait(2000)
      .click({force:true})
      
      // Calling Wazuh Menu Bttn
      homePage.getWazuhBttn()
      .click({force:true})
      
      // Calling Agent Bttn 
      homePage.getAgentBttn()
      .click()
      //This wait it's implemented to be sure that the WebPage is completed loaded
      .wait(3000)

    /*Fixture is using data.json file to read the data from agent, agent-name, ip and gruop. 
    It's necessary to update these fields with your own agent data to run satisfactory the test
    The test looks for an existing ip address in the existing agent list and corroborates that the
    data of the agent found matches with the data saved on data.json file*/
      cy.fixture('data').then((agData)=>{
        //Calling Search Field
        agentPage.getSearchField().type(agData.ip).type('{enter}');
        //Calling Row Selector
        agentPage.getRow().find('td').eq(1).should('contain', agData.agent)
        agentPage.getRow().find('td').eq(2).should('contain', agData.ip)
        agentPage.getRow().find('td').eq(3).should('contain', agData.group)
      })
      
      
      //Calling Wazuh Menu Bttn 
      homePage.getWazuhBttn()
      .click({force:true})
     
      //Calling Managment Option
      homePage.getManagmentOp()
      .click()
     
      //Calling Gruop Option
      homePage.getGroupOp()
      .click()
      
      /
      cy.fixture('data').then((agData)=>{
        
        /*Calling Group Search Field Selector
        Here the test it's looking for all the agents that belongs to a particular
        group (The gruop that was specifeded on data.json file)
        and select the agent found.
        */
      groupPage.getSearchField().type(agData.group).type('{enter}');
        })
      groupPage.getRow()
      .click()

        /*Finally the test checks that the ip adrres specificed on the data.json file it's from an agent
        of the specifided grop and check the agent name and ip-adrres.
        */
      cy.fixture('data').then((agData)=>{
        //Calling Search Field Selector
        agentPage.getSearchField().type(agData.ip).type('{enter}');
        cy.get('tbody').find('td').eq(1).should('contain', agData.agent)
        cy.get('tbody').find('td').eq(2).should('contain', agData.ip)
        })
     
      

    })
})

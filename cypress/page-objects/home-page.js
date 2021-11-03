class HomePage{
    //Access to the home page
    open(){
        
        //cy.visit('https://127.0.0.1/app/wazuh#/overview/')
       cy.fixture('config').then((host)=>{
        cy.visit(host.localhost)
        });
    }

    getUserNameField(){
        return cy.get('[data-test-subj="user-name"]')
    }
    
    getPasswordField(){
        return cy.get('[data-test-subj="password"]')
    }

    getSubmitBttn(){
        return cy.get('[data-test-subj="submit"]')
    }

    getConfirmBttn(){
        return cy.get('[data-test-subj="confirm"]')
    }

    getWazuhBttn(){
        return cy.get('[data-test-subj="menuWazuhButton"]')
    }

    getAgentBttn(){
        return cy.get('[data-test-subj="menuAgentsButton"]')
    }

    getManagmentOp(){
        return cy.get('[data-test-subj="menuManagementButton"]')
    }

    getGroupOp(){
        return cy.get('[data-test-subj="menuManagementGroupsLink"]')
    }

}

    export default new HomePage();

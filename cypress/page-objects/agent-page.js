class AgentPage{

    getSearchField(){
       return cy.get('input[placeholder*=search]')
    }

    getRow(){
        return cy.get('[data-test-subj="row-001"]')
    }
}
export default new AgentPage();
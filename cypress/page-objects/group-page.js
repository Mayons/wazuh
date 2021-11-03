class GroupPage{

    getSearchField(){
        return cy.get('input[placeholder*=Search]')
    }

    getRow(){
        return cy.get('[data-test-subj="row-undefined"]')
    }
}
export default new GroupPage();
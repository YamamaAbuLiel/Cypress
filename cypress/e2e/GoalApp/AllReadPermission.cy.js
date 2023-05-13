beforeEach(() => {
  cy.visit('/');
  cy.get('form[action="/login/"]').should('exist');
 cy.get('#id_username').type('Yamama1');
 cy.get('#id_password').type('11923817n');
 cy.get('select[name="login_as"]').select('staff');
 cy.get('.btn').click();
 
});



//2 Goal-Read
it('GoalFunctionalityWithReadGoalPermission', function() {
 
  cy.get('.nav > .nav-item > .nav-link').click();
  cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
  cy.get(':nth-child(3) > .nav-link > strong').should('not.exist');
  
});

//5  Staff-Read 
it('StaffFunctionalityWithReadPermission', function() {
 
  cy.get('.nav > .nav-item > .nav-link').click();
  cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
  cy.get('#staffs').should('be.exist');
  cy.get('#new_staff').should('not.exist')
    cy.get('.toolbar > .row > :nth-child(2) > .btn').should('not.exist')
 
});

 //8 Academic Week - Read
 it('AcademicWeekFunctionalityWithReadPermission', function() {
 
  cy.get('div.list-group-item').click();
  cy.get('.nav > .nav-item > .nav-link').click();
  cy.get(':nth-child(5) > .nav-link').click();
  cy.get('.col-sm-2 > .btn').should('not.exist');
  cy.get('.ist-group > .p-0').should('be.exist');

});
beforeEach(() => {
  cy.visit('/');
  cy.get('form[action="/login/"]').should('exist');
 cy.get('#id_username').type('Yamama1');
 cy.get('#id_password').type('11923817n');
 cy.get('select[name="login_as"]').select('staff');
 cy.get('.btn').click();
 
});








it('GoalFunctionalityWithN/APermission', function() {
    
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get(':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').should('not.exist');
  
  });

    //6 Staff-N/A 
  
it('StaffFunctionalityWithN/APermission', function() {
 
    
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get(':nth-child(3) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').should('not.exist');
    
  });

   //9 Academic Week - N/A
   it('AcademicWeekFunctionalityWithN/APermission', function() {
    
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get(':nth-child(5) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').should('not.exist');
  
  });

  //10 All Permission are N/A
  it('StaffWithAllPermissionAreN/A', function() {
    
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get(':nth-child(3) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').should('not.exist');
    cy.get(':nth-child(4) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').should('not.exist');
    cy.get(':nth-child(5) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').should('not.exist');
  
  
  
  });

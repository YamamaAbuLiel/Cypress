beforeEach(() => {
  cy.visit('/');
  cy.get('form[action="/login/"]').should('exist');
 cy.get('#id_username').type('Yamama1');
 cy.get('#id_password').type('11923817n');
 cy.get('select[name="login_as"]').select('staff');
 cy.get('.btn').click();
 
});

//1  Goal-Write
it('GoalFunctioanlityWithWriteGoalPermission', function() {
  
    cy.visit('/');
   
    cy.get(':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    cy.get(':nth-child(3) > .nav-link > strong').click();
    cy.get('#id_name').type('SE');
    cy.get('#id_topic').type('Topic1');
    cy.get('#id_level').select('2');
    cy.get('#id_start').type('2024-06-03');
    cy.get('#id_ECD').type('2024-06-15');
    cy.get('.modal-footer > .btn-primary').click();
    cy.get(':nth-child(3) > .nav-link > strong').should('be.exist');
    cy.get('#add_goal_success').contains(" The goal has been added successfully.")
    cy.get('#add_goals_container').should('be.exist');
  });
//2 Goal-Read
  it('GoalFunctionalityWithReadGoalPermission', function() {
  
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    cy.get(':nth-child(3) > .nav-link > strong').should('not.exist');
    
  });
//3 Goal-N/A
  it('GoalFunctionalityWithN/APermission', function() {
   
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get(':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').should('not.exist');
  
  });

//4 Staff-Write Add Staff
it('StaffFunctionalityWithWritePermission', function() {
   
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
    cy.get('#staffs').should('be.exist');
    cy.get('#new_staff').should('be.exist');
    cy.get('.toolbar > .row > :nth-child(2) > .btn').should('be.exist');
    cy.get('#new_staff').type('Mikasa');
    cy.get('.toolbar > .row > :nth-child(2) > .btn').click();
    cy.get('#staff_Mikasa > .sorting_1').should('be.exist') });
//5  Staff-Read 
  it('StaffFunctionalityWithReadPermission', function() {
   
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
    cy.get('#staffs').should('be.exist');
    cy.get('#new_staff').should('not.exist')
      cy.get('.toolbar > .row > :nth-child(2) > .btn').should('not.exist')
   
  });

  //6 Staff-N/A 
  
it('StaffFunctionalityWithN/APermission', function() {
 
  
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get(':nth-child(3) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').should('not.exist');
    
  });


  //7 Academic Week - Write  
  it('AcademicWeekFunctionalityWithWritePermission', function() {
    
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get(':nth-child(5) > .nav-link').click();
    cy.get('.col-sm-2 > .btn').click();
    cy.get('#week_21').click();
    cy.get('#week_21').click();
    cy.get('#save_calendar').click();
    cy.get('.modal-footer > .btn').click();
    cy.get('.ist-group > .p-0').should('be.exist')
    cy.get(':nth-child(21) > .text-center').should('be.exist')
  });

  //8 Academic Week - Read
  it('AcademicWeekFunctionalityWithReadPermission', function() {
   
    cy.get('div.list-group-item').click();
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get(':nth-child(5) > .nav-link').click();
    cy.get('.col-sm-2 > .btn').should('not.exist');
    cy.get('.ist-group > .p-0').should('be.exist');
  
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



// student view page  
describe('Student Page   View', () => {
  //1) visit student page with correct username and password
  beforeEach(()=>{
    cy.visit('https://goal-dev.mdx.ac.uk/staff/28/staffs'); 
    cy.get('form[action="/login/"]').should('exist');
    cy.get('#id_username').should('exist').should('have.attr' , 'name' , 'username');
    cy.get('#id_password').should('exist').should('have.attr' , 'name' , 'password');
    cy.get('select[name="login_as"]').should('exist');
    cy.get('#id_username').type('NoorK');
    cy.get('#id_password').type('RoRo2002');
    cy.get('select[name="login_as"]').select('Staff');
    cy.get('form[action="/login/"] > button[type="submit"]').click();
    cy.get('.nav > .nav-item > .nav-link').click();
  })
  it('student Functionlty ' , ()=>{
    //2) Add student with name
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get('#new_student').type('zozo').click()
    cy.get(':nth-child(1) > .btn').click();});
    it('student Functionlty ' , ()=>{
      //3)search student 
      cy.get(':nth-child(4) > .nav-link').click();
    cy.get('#students_filter > label').click();
    cy.get('label > .form-control').type('Khaled').click();});
    it('student Functionlty ' , ()=>{
      //3)Edit  student 
      cy.get(':nth-child(4) > .nav-link').click();
      cy.get(':nth-child(2) > :nth-child(8) > .row > .col-5 > a').click()
      cy.get('#id_group').clear().type('Group B').click()
      cy.get('.btn-primary').click();
     });
     it('student Functionlty ' , ()=>{
      //4)Delete  student 
      cy.get(':nth-child(4) > .nav-link').click();
      cy.get(':nth-child(6) > :nth-child(8) > .row > .col-6 > a').click()
      cy.get('#confirm-delete > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click()
     
     });
  });
  //Goal page functionality Test 
describe('Goal Page View goal filter', () => {
  beforeEach(()=>{
//5) view Goal page 
    cy.visit('https://goal-dev.mdx.ac.uk/staff/28/staffs'); 
    cy.get('form[action="/login/"]').should('exist');
    cy.get('#id_username').should('exist').should('have.attr' , 'name' , 'username');
    cy.get('#id_password').should('exist').should('have.attr' , 'name' , 'password');
    cy.get('select[name="login_as"]').should('exist');
    cy.get('#id_username').type('NoorK');
    cy.get('#id_password').type('RoRo2002');
    cy.get('select[name="login_as"]').select('Staff');
    cy.get('form[action="/login/"] > button[type="submit"]').click();
    cy.get('.nav > .nav-item > .nav-link').click();
  })

it('Goal functionlity' , ()=>{
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    cy.get('#all_goal_tab > strong').click() 
     //6) Goal filter (Advance filter )
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    cy.get('#all_goal_tab > strong').click() 
    cy.get('.card-header > a').click()
   cy.get('#goal_filter').type('SE').click()
    //7) Edit Goal 
    cy.get(':nth-child(1) > :nth-child(8) > .row > .col-sm-5').click();
    cy.get(':nth-child(3) > .col-sm-4').click();
    cy.get('#id_name').clear().type('SE').click()
    cy.get('.btn-primary').click()
    //8)Remove Goal
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    cy.get('#all_goal_tab > strong').click() 
    cy.get(':nth-child(1) > :nth-child(8) > .row > .col-sm-6 > a').click()
    cy.get('.modal-content > .modal-footer > .btn-danger').click()
   
   })

  });
  //9)view Acdmic Week
  describe('Acdmic week Page', () => {
    beforeEach(()=>{
      cy.visit('https://goal-dev.mdx.ac.uk/staff/21/staffs'); 
      cy.get('form[action="/login/"]').should('exist');
      cy.get('#id_username').should('exist').should('have.attr' , 'name' , 'username');
      cy.get('#id_password').should('exist').should('have.attr' , 'name' , 'password');
      cy.get('select[name="login_as"]').should('exist');
      cy.get('#id_username').type('NoorK');
      cy.get('#id_password').type('RoRo2002');
      cy.get('select[name="login_as"]').select('Staff');
      cy.get('form[action="/login/"] > button[type="submit"]').click();
      cy.get('.nav > .nav-item > .nav-link').click();
    })
  //10)Delete week 
    it('Acdmic Week ' , ()=>{
      cy.get(':nth-child(5) > .nav-link').click(); 
      cy.get('#delete_28').click()
      cy.get('#save_calendar').click();
       })
  })
describe('Login e registro de usuarios', ()=> {

  beforeEach(() =>{
    cy.visit('http://alura-fotos.herokuapp.com/');
  })

  it('verifica msg de validacao', ()=>{

    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');

  } )


  it('verifica msg de email invalido', ()=>{

    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="email"]').type("jacqueline")
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');

  } )

  it('verifica msg de senha pequena', ()=>{

    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="password"]').type("p")
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');

  } )

  it('verifica user pequeno', ()=>{

    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="fullName"]').type("p")
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');

  } )

  it('verify user lowcase', ()=>{

    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="userName"]').type("PPP")
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');

  } )

  it('fazer login de usuario valido', () =>{
    cy.login('flavio', '123');
    cy.contains('a', '(Logout)').should('be.visible');
  })

  it('fazer login de usuario invalido', () =>{
    cy.login('jaqueline', '1234');
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid user name or password')
    })

  });

  // const usuarios = require('../../fixtures/usuarios.json');
  // usuarios.forEach(usuario =>{})
    

  } );


  





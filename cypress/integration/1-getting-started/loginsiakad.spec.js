describe('Login Pada Siakad', () => {
    it('Membuka halaman', () => {
        cy.visit('http://siakad.polinema.ac.id') 
        cy.url().should('eq', 'http://siakad.polinema.ac.id/')
    });

    it('User Memasukkan username dan password berupa NIM dan password yang Benar', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('#username').type('1831710163')
        cy.get('#password').type('iqbalarifudin')
        cy.get('.btn-success').click()
    });

    it('User Memasukkan username dan password berupa NIM dan password yang Salah', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('#username').type('iqbal')
        cy.get('#password').type('iqbal')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });

    it('User Memasukkan username dan tidak mengisi password', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('#username').type('1831710163')
        cy.get('.btn-success').click()
        cy.contains('Password harus diisi')
    });

    it('User Memasukkan Password dan tidak mengisi Username', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('#password').type('iqbalarifudin')
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });

    it('User Mengeklik Lupa Password?', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('.forget-password').click()
    });



});
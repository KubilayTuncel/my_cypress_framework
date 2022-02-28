describe('XHR - XML, HTTP, Request',()=>{
    //XHR, JavaScript ile sinilmis bir API dir
    //Web sitesini es zamanli olarak arka planda calisan olaylari takip eder

    
    it('XHR Example 3',()=>{
        cy.visit('https://example.cypress.io/commands/waiting')
        cy.intercept('GET','**/comments/*').as('getComment');
        //networku dinle
        //as -> degisken atiyor. daha sonra @ ile kullanilir
        cy.get('.network-btn').click();   
        cy.wait('@getComment').its('response').then((response)=>{
            console.log('response')
            assert.equal(response.statusCode, 200,'Status kod kontrol')
        }); 
    
        })
    })
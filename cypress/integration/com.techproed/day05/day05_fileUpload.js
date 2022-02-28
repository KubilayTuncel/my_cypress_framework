describe('file upload',()=>{

    it('tek dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile('maxresdefault.jpeg')
        //2.yol
        const path ='maxresdefault.jpeg'
        cy.get('#filesToUpload').attachFile(path)
        cy.get('#fileList > li').should('have.text','maxresdefault.jpeg')
    })

    it('coklu dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1 ='maxresdefault.jpeg'
        const path2 ='mqdefault.jpeg'
        const path3 ='wurmloch04g.jpeg'
        cy.get('#filesToUpload').attachFile(path1).wait(2000)
        .attachFile(path2).wait(2000).attachFile(path3)
    })
    it('coklu dosya yükleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload')
        .attachFile(['maxresdefault.jpeg','mqdefault.jpeg','wurmloch04g.jpeg'])
    })
    it('coklu dosya yükleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1 ='maxresdefault.jpeg'
        const path2 ='mqdefault.jpeg'
        const path3 ='wurmloch04g.jpeg'
        cy.get('#filesToUpload')
        .attachFile([path1,path2,path3])
    })
    it.only('override file name',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1 ='maxresdefault.jpeg'
        cy.get('#filesToUpload')
        .attachFile({filePath:path1,fileName:'deneme.jpeg'})
        //yuklenen dosya ismini degistirme
        cy.contains('deneme.jpeg').should('be.visible')
    })
})
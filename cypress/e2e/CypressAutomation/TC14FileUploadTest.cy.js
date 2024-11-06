describe('Test File Upload', function(){
    it('Cypress File Upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('example.json');
        cy.get('#file-submit').click();
    })
    it('Cypress File Upload - RENAME', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'example.json',fileName:'demo123.json'});
        cy.get('#file-submit').click();
    })
    it('File Upload Drag and Drop', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        // cy.get('#drag-drop-upload').attachFile('example.json',{subjectType:'drag-n-drop'});
        cy.get('#drag-drop-upload').attachFile('demoimage.jpeg',{subjectType:'drag-n-drop'});
    })
    it.only('Multiple file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['example.json','pageObject.json', 'demoImage.jpeg']);
        cy.get('#fileList > :nth-child(1)').should('have.text', 'example.json')
        //cy.get('#fileList > :nth-child(2)')
        //cy.get('#fileList > :nth-child(3)')
    })
})
import { faker } from '@faker-js/faker';
describe('Multiple way to Handle Post call', function(){
    it('Approach 1', ()=>{
        let url = 'https://reqres.in/api/users'
        let payload = 
        {
              "name": faker.internet.userName(),
                "job": faker.company.name()    
        }
        cy.request({
            method:'POST',
            url:url,
            body:payload
        })
        .then((response)=>{
            let res = JSON.stringify(response.body)
            cy.log(res);
            expect(response.status).to.be.equal(201)
        })
    })
    it('Approach 2', ()=>{
        let url = 'https://reqres.in/api/users'
        const payload = 
        {
                "name": faker.internet.userName(),
                "job": faker.company.name()   
        }
        cy.request({
            method:'POST',
            url:url,
            body:payload
        })
        .then((response)=>{
            let res = JSON.stringify(response.body)
            cy.log(res);
            expect(response.status).to.be.equal(201)
        })
    })

    it.only('Approach 3', ()=>{
        let url = 'https://reqres.in/api/users'
        cy.fixture('postrequest').then((data)=>{
            const reqBody = data;
        
        cy.request({
            method:'POST',
            url:url,
            body:reqBody
        })
        .then((response)=>{
            let res = JSON.stringify(response.body)
            cy.log(res);
            expect(response.status).to.be.equal(201)
        })
    })
})

})
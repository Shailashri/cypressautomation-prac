describe('Query Param demo', function(){
    it('Query param', ()=>{
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users',
            qs:{page:2}
        }).then((response)=>{
            let res = JSON.stringify(response.body);
            cy.log(res);
            expect(response.status).to.be.eq(200);
            expect(res).to.be.contain('Ferguson');
            expect(response.body.data).has.length(6);
            expect(response.body.data[1]).have.property('email','lindsay.ferguson@reqres.in');

        })
    })
})
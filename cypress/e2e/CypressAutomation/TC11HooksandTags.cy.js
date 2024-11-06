describe('Before and After demo', function(){
   
        before(()=>{
            cy.log('BEFORE');
        })

        after(()=>{
        cy.log('AFTER');
        })

        beforeEach(()=>{
        cy.log('BEFOREEACH');
        })

        afterEach(()=>{
        cy.log('AFTEREACH')
        })

     it('Actual Test case - 1',()=>{
        cy.log('Test Case Number1');
     })
     it('Actual Test Case - 2', ()=>{
     cy.log('Test case Number2');
     })

    })

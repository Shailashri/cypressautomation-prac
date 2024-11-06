
describe('Http Request', function(){
let minm = 1000;
let maxm = 99999;
let randomNo = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result = ' ';
let length = 8;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    it('POST Call', ()=>{
        cy.request({
            method:'POST',
            url:'https://petstore.swagger.io/v2/pet',
            body:{
                    "id": randomNo,
                    "category": {
                      "id": randomNo,
                      "name": "result"
                    },
                    "name": "result",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": randomNo,
                        "name": "result"
                      }
                    ],
                    "status": "available"
            }
        })
    })
    it('Get Call', ()=>{
        cy.request('GET', `https://petstore.swagger.io/v2/pet/${randomNo}`)
        .its('status')
        .should('eq', 200)
    })


    it('Delete Call', ()=>{
        cy.request('DELETE', `https://petstore.swagger.io/v2/pet/${randomNo}`)
        .its('status')
        .should('eq', 200)
    })
})




describe('Http Request', function(){
    
    let minm = 1000;
    let maxm = 99999;
    let randomNo = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    let length = 8;
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        it('POST Call', ()=>{
            cy.request({
                method:'POST',
                url:'https://petstore.swagger.io/v2/pet',
                body:{
                        "id": randomNo,
                        "category": {
                          "id": randomNo,
                          "name": "result"
                        },
                        "name": "result",
                        "photoUrls": [
                          "string"
                        ],
                        "tags": [
                          {
                            "id": randomNo,
                            "name": "result"
                          }
                        ],
                        "status": "available"
                }
            })
        })
        it('Get Call', ()=>{
            cy.request('GET', `https://petstore.swagger.io/v2/pet/${randomNo}`)
            .its('status')
            .should('eq', 200)
        })
    
    
        it('Delete Call', ()=>{
            cy.request('DELETE', `https://petstore.swagger.io/v2/pet/${randomNo}`)
            .its('status')
            .should('eq', 200)
        })
    })
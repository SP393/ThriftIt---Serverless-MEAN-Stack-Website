let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');
let server = require('../index');
 chai.should();
 chai.use(chaiHttp);


 describe('Product API', () =>{
     
     describe("GET /Types", ()=>{
         it("It should GET all the Categories", (done) => {
             chai.request('http://localhost:5000')
             .get("/Types")
             .end((err, response)=>{
                 response.should.have.status(200);
                
                 done();
             });
            });
             it("It should Not GET all the Categories", (done) => {
                chai.request('http://localhost:5000')
                .get("/Type")
                .end((err, response)=>{
                    response.should.have.status(404);
                   
                    done();
                });
         });
     });
     describe("GET /Types/:title", ()=>{
        it("It should GET a Category", (done) => {
            const title ="Women"
            chai.request('http://localhost:5000')
            .get("/Types/" +title)
            .end((err, response)=>{
                response.should.have.status(200);
               
                done();
            });
           });
           it("It should NOT GET a Category", (done) => {
            const title ="ABC"
            chai.request('http://localhost:5000')
            .get("/Type/" +title)
            .end((err, response)=>{
                response.should.have.status(404);
               
                done();
            });
           });
        });
        describe("GET /Types/:id", ()=>{
            it("It should GET a Category", (done) => {
                const id ="5fdb117ba7a7cbc1f164e5b7"
                chai.request('http://localhost:5000')
                .get("/Types/" +id)
                .end((err, response)=>{
                    response.should.have.status(200);
                   
                    done();
                });
               });
               it("It should NOT GET a Category", (done) => {
                const id ="1234"
                chai.request('http://localhost:5000')
                .get("/Type/" +id)
                .end((err, response)=>{
                    response.should.have.status(404);
                   
                    done();
                });
               });
            });
        describe("POST /Types", ()=>{
            it("It should POST a new Category", (done) => {
                const category={
                    title: "Sale"
                };
                chai.request('http://localhost:5000')
                .post("/Types" )
                .send(category)
                .end((err, response)=>{
                    response.should.have.status(201);
                   response.body.should.be.a('object');
                   response.body.should.have.property('title').eq("Sale")
                    done();
                })
               });

               it("It should NOT POST a new Category without the title property", (done) => {
                const category={
                    
                };
                chai.request('http://localhost:5000')
                .post("/Type" )
                .send(category)
                .end((err, response)=>{
                    response.should.have.status(404);
                   
                    done();
                })
               })
            });
            describe("DELETE /Types/:id", ()=>{
                it("It should DELETE an existing Category", (done) => {
                    const id = "5fdb117ba7a7cbc1f164e5b7"
                    chai.request('http://localhost:5000')
                    .delete("/Types/" +id)
                    .end((err, response)=>{
                        response.should.have.status(200);
                       
                        done();
                    });
                   });
                   it("It should  NOT DELETE an existing Category", (done) => {
                    const id = "147"
                    chai.request('http://localhost:5000')
                    .delete("/Type/" +id)
                    .end((err, response)=>{
                        response.should.have.status(404);
                       
                        done();
                    });
                   });
                });
                describe("GET /Category", ()=>{
                    it("It should GET all the Sub- Categories", (done) => {
                        chai.request('http://localhost:5000')
                        .get("/Category")
                        .end((err, response)=>{
                            response.should.have.status(200);
                           
                            done();
                        });
                       });
                        it("It should Not GET all the Sub-Categories", (done) => {
                           chai.request('http://localhost:5000')
                           .get("/Categorys")
                           .end((err, response)=>{
                               response.should.have.status(404);
                              
                               done();
                           });
                    });
                });
                describe("GET /Category/:type/category", ()=>{
                   it("It should GET all Sub-Categories of same Category", (done) => {
                       const type ="Women"
                       chai.request('http://localhost:5000')
                       .get("/Types/" +type)
                       .end((err, response)=>{
                           response.should.have.status(200);
                          
                           done();
                       });
                      });
                      it("It should NOT GET all Sub-Categories of same Category", (done) => {
                       const type ="ABC"
                       chai.request('http://localhost:5000')
                       .get("/Type/" +type)
                       .end((err, response)=>{
                           response.should.have.status(404);
                          
                           done();
                       });
                      });
                   });
                   
                   describe("POST /Category", ()=>{
                       it("It should POST a new Sub-Categories", (done) => {
                           const subcategory={
                               title: "Sale",
                               type:"Women"
                           };
                           chai.request('http://localhost:5000')
                           .post("/Category" )
                           .send(subcategory)
                           .end((err, response)=>{
                               response.should.have.status(200);
                              response.body.should.be.a('object');
                              response.body.should.have.property('title').eq("Sale");
                              response.body.should.have.property('type').eq("Women")
                               done();
                           })
                          });
           
                          it("It should NOT POST a new Sub-Categorie without the type property", (done) => {
                           const subcategory={
                               title:"Skirt"
                           };
                           chai.request('http://localhost:5000')
                           .post("/Categorys" )
                           .send(subcategory)
                           .end((err, response)=>{
                               response.should.have.status(404);
                              
                               done();
                           })
                          })
                       });
                       describe("DELETE /Category/:id", ()=>{
                           it("It should DELETE an existing Sub-Category", (done) => {
                               const id = "5fdb117ba7a7cbc1f164e5b7"
                               chai.request('http://localhost:5000')
                               .delete("/Category/" +id)
                               .end((err, response)=>{
                                   response.should.have.status(200);
                                  
                                   done();
                               });
                              });
                              it("It should  NOT DELETE an existing Sub-Category", (done) => {
                               const id = "147"
                               chai.request('http://localhost:5000')
                               .delete("/Categorys/" +id)
                               .end((err, response)=>{
                                   response.should.have.status(404);
                                  
                                   done();
                               });
                              });
                           });
                           describe("GET /products", ()=>{
                            it("It should GET all the Products", (done) => {
                                chai.request('http://localhost:5000')
                                .get("/products")
                                .end((err, response)=>{
                                    response.should.have.status(200);
                                   
                                    done();
                                });
                               });
                                it("It should Not GET all the Products", (done) => {
                                   chai.request('http://localhost:5000')
                                   .get("/product")
                                   .end((err, response)=>{
                                       response.should.have.status(404);
                                      
                                       done();
                                   });
                            });
                        });
                        describe("GET /products/:id", ()=>{
                           it("It should GET One Product", (done) => {
                               const id ="5fd5c5bb3afe71e36c0ba65a"
                               chai.request('http://localhost:5000')
                               .get("/products/" +id)
                               .end((err, response)=>{
                                   response.should.have.status(200);
                                  
                                   done();
                               });
                              });
                              it("It should NOT GET One Product", (done) => {
                               const id ="1234"
                               chai.request('http://localhost:5000')
                               .get("/product/" +id)
                               .end((err, response)=>{
                                   response.should.have.status(404);
                                  
                                   done();
                               });
                              });
                           });
                           describe("POST /products", ()=>{
                               it("It should POST a new Product", (done) => {
                                   const product={
                                       title: "Red Top",
                                       desc: "Wrap around",
                                       category: "Tops",
                                       price:400,
                                       image:"abc"
                                   };
                                   chai.request('http://localhost:5000')
                                   .post("/products" )
                                   .send(product)
                                   .end((err, response)=>{
                                       response.should.have.status(200);
                                      response.body.should.be.a('object');
                                      response.body.should.have.property('title').eq("Red Top"),
                                      response.body.should.have.property('desc').eq("Wrap around"),
                                      response.body.should.have.property('category').eq("Tops"),
                                      response.body.should.have.property('price').eq(400),
                                      response.body.should.have.property('image').eq("abc")
                                       done();
                                   })
                                  });
                   
                                  it("It should NOT POST a new Product without the title property", (done) => {
                                   const product={
                                    desc: "Wrap around",
                                    category: "Tops",
                                    price:400,
                                    image:"abc"
                                   };
                                   chai.request('http://localhost:5000')
                                   .post("/product" )
                                   .send(product)
                                   .end((err, response)=>{
                                       response.should.have.status(404);
                                        
                                       done();
                                   })
                                  })
                               });
                               describe("DELETE /products/:id", ()=>{
                                   it("It should DELETE an existing  Product", (done) => {
                                       const id = "5fdb117ba7a7cbc1f164e5b7"
                                       chai.request('http://localhost:5000')
                                       .delete("/products/" +id)
                                       .end((err, response)=>{
                                           response.should.have.status(200);
                                          
                                           done();
                                       });
                                      });
                                      it("It should  NOT DELETE an existing Product", (done) => {
                                       const id = "147"
                                       chai.request('http://localhost:5000')
                                       .delete("/product/" +id)
                                       .end((err, response)=>{
                                           response.should.have.status(404);
                                          
                                           done();
                                       });
                                      });
                                   });
                                   describe("GET /Cart", ()=>{
                                    it("It should GET all the Products in the Cart", (done) => {
                                        chai.request('http://localhost:5000')
                                        .get("/Category")
                                        .end((err, response)=>{
                                            response.should.have.status(200);
                                           
                                            done();
                                        });
                                       });
                                        it("It should Not GET all the Products in the Cart", (done) => {
                                           chai.request('http://localhost:5000')
                                           .get("/Carts")
                                           .end((err, response)=>{
                                               response.should.have.status(404);
                                              
                                               done();
                                           });
                                    });
                                });
                                describe("GET /Cart/:userId", ()=>{
                                    it("It should GET Products in the Cart of That User", (done) => {
                                        const userId ="5fdb117ba7a7cbc1f164e5b7"
                                        chai.request('http://localhost:5000')
                                        .get("/Cart/" +userId)
                                        .end((err, response)=>{
                                            response.should.have.status(200);
                                           
                                            done();
                                        });
                                       });
                                       it("It should NOT GET Products in the Cart of That User", (done) => {
                                        const userId ="1234"
                                        chai.request('http://localhost:5000')
                                        .get("/Carts/" +userId)
                                        .end((err, response)=>{
                                            response.should.have.status(404);
                                           
                                            done();
                                        });
                                       });
                                    });
                                
                                       describe("DELETE /Cart/:id", ()=>{
                                           it("It should DELETE an existing Product in the Cart", (done) => {
                                               const id = "5fdb117ba7a7cbc1f164e5b7"
                                               chai.request('http://localhost:5000')
                                               .delete("/Cart/" +id)
                                               .end((err, response)=>{
                                                   response.should.have.status(200);
                                                  
                                                   done();
                                               });
                                              });
                                              it("It should  NOT DELETE an existing Product in the Cart", (done) => {
                                               const id = "147"
                                               chai.request('http://localhost:5000')
                                               .delete("/Carts/" +id)
                                               .end((err, response)=>{
                                                   response.should.have.status(404);
                                                  
                                                   done();
                                               });
                                              });
                                           });
 });
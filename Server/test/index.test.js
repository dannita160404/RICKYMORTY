const app = require('../src/app');
const session = require('supertest');
const agent = session(app);


describe("Test de RUTAS" , () =>{
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            await agent.get("/rickandmorty/character/1").expect(200)
        })

    })

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () =>{ 
        const {body} = await agent.get("/rickandmorty/character/1")

        expect(body).toHaveProperty( "id", "species", "gender", "status", "origin" , "image" , "dni")
    })

    it( 'Si hay un error responde con status: 500' , async () =>{
        await agent.get("/rickandmorty/character/111111111111111").expect(500)
    })

    describe("GET /rickandmorty/login", () => {
        it("Si la info es correcta devuelve access:true", async () => {
         const {body} = await agent.get("/rickandmorty/login?email=sofia@mail.com&password=espiritusanto7")

         expect(body).toEqual({
            access: false 
           })
        } 
    )})
    describe("POST /rickandmorty/fav", () => {
        let character1 = {id: 1, name: "Rick"}
        let character2 = {id: 2, name: "Morty"}
        it("Debe devolver la info en un array", async () => {
            const response= await agent.post("/rickandmorty/fav").send(character1)

            expect(response.body).toContainEqual(Array)
            expect(response.body).toContainEqual(character1)


        })

    }
    

)

})
import fastfy from "fastify";

const app = fastfy();

app.get('/', () =>{
        return 'NLW Unite';
})

app.listen({port : 3333}).then(() =>{
        console.log('HTTP Server Running')
})
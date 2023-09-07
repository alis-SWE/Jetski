import { createServer, Model } from "miragejs"


createServer({
    models: {
        jetskis: Model,
    },

    seeds(server) {
        server.create("jetski", { id: "1", name: "Wave Rider 3000", price: 85, description: "The Wave Rider 3000 is a high-performance jet ski built for speed and excitement on the water. It features a powerful engine, ergonomic design, and advanced control system, making it perfect for thrill-seekers.",imageUrl:"https://i.gyazo.com/2f78cebe81bdb3171429d4f4a3653b99.jpg", type: "sport" });
server.create("jetski", { id: "2", name: "Aquatic Explorer", price: 65, description: "The Aquatic Explorer is designed for those who love exploring the open water. It comes with a spacious storage compartment, comfortable seating, and GPS navigation, ensuring a smooth and adventurous ride.",imageUrl:"https://i.gyazo.com/14baf91c0a79502660847c9791cfaae2.jpg", type: "recreational" });
server.create("jetski", { id: "3", name: "Family Fun Cruiser", price: 75, description: "The Family Fun Cruiser is ideal for a day of fun with your loved ones. It offers multiple seating options, a stable platform, and safety features to keep everyone entertained and secure.",imageUrl:"https://i.gyazo.com/0d54cfd447800f133633c770c01b44e3.jpg", type: "recreational" });
server.create("jetski", { id: "4", name: "Ocean Master Pro", price: 95, description: "The Ocean Master Pro is a professional-grade jet ski built for water sports enthusiasts. It boasts exceptional maneuverability, wakeboard tower compatibility, and a reliable engine for an adrenaline-packed experience.",imageUrl:"https://i.gyazo.com/405ccbd6c6ba5d22eb168b691a14d687.jpg", type: "sport" });
server.create("jetski", { id: "5", name: "Adventure Seeker", price: 78, description: "The Adventure Seeker jet ski is perfect for those who crave exploration. It features all-terrain capabilities, a rugged design, and a comfortable seating arrangement, making it your go-to choice for waterborne adventures.",imageUrl:"https://i.gyazo.com/95f9717503194b6375e45cadef6435f6.jpg", type: "adventure" });
server.create("jetski", { id: "6", name: "Luxury WaveMaster", price: 120, description: "The Luxury WaveMaster is the epitome of opulence on the water. It comes with premium leather seating, a top-of-the-line sound system, and cutting-edge technology for the ultimate jet ski experience.",imageUrl:"https://i.gyazo.com/db58f022a5945a95be654444b3526c73.jpg", type: "luxury" });
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        
        this.get("/jetskis", (schema, request) => {
            return schema.jetskis.all()
        })
        
        this.get("/jetskis/:id", (schema, request) => {
            const id = request.params.id
            return schema.jetskis.find(id)
        })
    }
})
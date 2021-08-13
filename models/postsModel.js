const mongoose = require("mongoose")

const PostsModel = mongoose.model( //création d'un modèle de bdd
    "node-api", //bdd se trouvera le modèle
    {
        author: {               //déclaration dans la table
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }                
    },
    "posts" //table où se trouvera la déclaration
);



module.exports = { PostsModel };
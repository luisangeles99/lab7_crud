const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const userSchema = mongoose.Schema({
    fifanumber:{ //para identificar a cualquier jugador
        type:String,
        required:true,
        unique:true
    },
    name:{
        type: String,
        required:true
    },
    equipo:{
        nombre:{
            type: String
        },
        pais:{
            type: String
        },
        liga:{
            type: String
        }
    },
    age:{
        type:Number,
        required: true,
        validate(value){
            if(value > 55)
            {throw new Error('No hay futbolistas mayores de 55')}
        }
    },
    nacido:{
        type: Number,
        required:true,
        validate(value){
            if(value < 1964)
            {throw new Error('No hay futbolistas mayores de 55')}
        }
    },
    nacionalidad:{
        pais:{
            type: String,
            required:true
        },
        ciudad:{
            type: String,
            required:true
        }
    },
    fisico:{
        estatura:{
            type: Number,
            required:true,
            validate(value){
                if(value > 2.5 || value <1)
                {throw new Error('Estatura incorrecta')}
            }
        },
        peso:{
            type: Number,
            required:true
        },
        pie_dominante:{
            type: String,
            required:true
        },
        cirugias:{
            type: String,
            required:true
        }
    },
    debut:{
        type: String,
        required:true
    },
    apodos:[{type:String}]
})

const User = mongoose.model('User', userSchema)
module.exports = User

/*
{
	"fifanumber": "00012",
	"name": "Cristiano Ronaldo",
	"equipo":{
		"nombre": "Juventus FC",
		"pais": "Italia",
		"liga": "Serie A"
	},
	"age": 34,
	"nacido": 1985,
	"nacionalidad":{
		"pais":"Portugal",
		"ciudad": "Lisboa"
	},
	"fisico":{
		"estatura": 1.85,
		"peso": 80,
		"pie_dominante": "Derecha",
		"cirugias": "NA"
	},
	"debut": "Sporting de Lisboa",
	"apodos":[
		"CR7", "El Bicho", "SuperFly", "Terminator"
	]
}
*/ 
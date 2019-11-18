const User = require ('../model/user')

const getUsers = function(req,res){
    User.find({}).then(function(users){
        return res.send(users)
    }).catch(function(error){
        return res.status(500).send(error)
    })
}

const getUser = function(req, res){
    _id = req.params.id
    User.findById(_id).then(function(user){
        return res.send(user)
    }).catch(function(error){
        return res.status(404).send(error)
    })
}

const createUser = function(req,res){
    const user = new User(req.body)
    user.save().then(function(user){
        return res.send(user)
    }).catch(function(error){
        return res.status(400).send(error) //posibles mejoras
    })
}

const updateUser = function(req,res){
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowed= ['name', 'age', 'apodos', 'equipo', 'nacido', 'nacionalidad', 'fisico', 'debut'
                    , 'fifanumber'] //checar formato de json
    const isValid = updates.every((update) => allowed.includes(update))
    if(!isValid){
        return res.status(400).send({
            error: 'Invalid Update, verify compliance to: ', allowed
        })
    }
    User.findByIdAndUpdate(_id, req.body).then(function(user){
        if(!user){
            return res.status(404).send({})
        }
        return res.send(user)
    }).catch(function(error){
        return res.status(500).send(error)
    })
}

const deleteUser = function(req,res){
    const _id= req.params.id
    User.findByIdAndDelete(_id).then(function(user){
        if(!user){
            return res.status(404).send({})
        }
        return res.send(user)
    }).catch(function(error){
        return res.status(505).send(error)
    })
}

const redirect = function(){
    res.send(
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
        })
}


module.exports={
    getUsers,getUser,createUser,updateUser,deleteUser,redirect
}
'use strict'

import { createToken } from '../services/jwt'
import { compare } from '../services/password'
import Model from '../models'
import _ from 'underscore'

const operations = {
    signIn: (req, res) => {
        Model.Usuario.findOne({
             where: {
                usuario: req.body.usuario, 
                f_eliminacion: null 
             } 
        })
        .then(user => {
            if( !user || user == null || user == undefined) {
                return res.status(403).json({ 
                    message: "El usuario no coincide con nuestros registros"
                })
            } else {
                if (req.body.contraseña == user.contraseña) {
                    Model.Acceso.create({
                        usuario_id: user.id
                    }).then(created => {
                        return res.status(200).json({
                            token: createToken(user),
                            user: _.pick(user, ['nombre', 'apellido', 'cedula', 'rol']),
                            message: "Usuario logeado correctamente"
                        }) 
                    })
                } else {
                    return res.status(403).json({
                        message: "Las credenciales no coinciden con nuestros registros"
                    })
                }
            }
            
        }).catch(error => {
            return res.status(400).json({
                message: "Algo ha salido mal, por favor intentelo nuevamente"
            })
        })
    },
    signInByKey: (req, res) => {
        if (!req.body.usuario) {
            return res.status(400).json({
                message: "El campo usuario es requerido"
            })
        }

        if (!req.body.frase) {
            return res.status(400).json({
                message: "El campo frase es requerido"
            })
        }

        Model.Usuario.findOne({
            where: {
               usuario: req.body.usuario, 
               f_eliminacion: null 
            } 
       })
       .then(user => {
           if( !user || user == null || user == undefined) {
               return res.status(403).json({ 
                   message: "El usuario no coincide con nuestros registros"
               })
           } else {
                if (req.body.frase == user.frase) {
                    Model.Acceso.create({
                        usuario_id: user.id
                    }).then(created => {
                        return res.status(200).json({
                            token: createToken(user),
                            user: _.pick(user, ['nombre', 'apellido', 'cedula', 'rol']),
                            message: "Usuario logeado correctamente"
                        }) 
                    })
                } else {
                    return res.status(403).json({
                        message: "Las credenciales no coinciden con nuestros registros"
                    })
                }
           }
           
       }).catch(error => {
           return res.status(400).json({
               message: "Algo ha salido mal, por favor intentelo nuevamente"
           })
       })
    }
}

export default operations
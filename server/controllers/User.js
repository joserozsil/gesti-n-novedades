'use strict'

import models from '../models'
import responser from '../services/response'
import { encrypt } from '../services/password'
import chalk from 'chalk'

const operations = {
    index: (req, res) => {
        models.User.findAll({ where: { deletedAt: null } }).then(users => {
            return res.status(200).json(
                responser.response(200, users)
            )
        }).catch(error => {
            return res.status(200).json(
                responser.error(200, "¡Algo ha salido mal, por favor intentelo nuevamente!", error)
            )
        })
    },
    show: (req, res) => {
        models.User.findOne({ where: { idCard: req.params.idCard } }).then(user => {
            return res.status(200).json(
                responser.response(200, user)
            )
        }).catch(error => {
            return res.status(200).json(
                responser.error(200, "¡Algo ha salido mal, por favor intentelo nuevamente!", error)
            )
        })
    },
    store: (req, res) => {
        const user = {
            idCard: req.body.idCard,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            password: req.body.password,
            phone: req.body.phone
        }
        models.User.create(user)
            .then(user => {
                return res.status(201).json(
                    responser.response(201, user, "¡Usuario registrado correctamente!")
                )
            }).catch(error => {
                return res.status(400).json(
                    responser.error(400, "¡Algo ha salido mal, por favor intentelo nuevamente!", error)
                )
            })
    },
    update: (req, res) => {
        const userToUpdated = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            password: req.body.password
        }
        models.User.findOne({ where: { idCard: req.params.idCard } }).then(user => {
            user.updateAttributes(userToUpdated).then(updated => {
                return res.status(200).json(
                    responser.response(200, updated, "¡Usuario actualizado correctamente!")
                )

            })
        }).catch(error => {
            return res.status(200).json(
                responser.error(200, "¡Algo ha salido mal, por favor intentelo nuevamente!", error)
            )
        })

    },
    delete: (req, res) => {
        models.User.findOne({ where: { idCard: req.params.idCard } }).then((user) => {
            user.updateAttributes({ deletedAt: Date.now() }).then((updated) => {
                return res.status(200).json(
                    responser.response(200, updated, "¡Usuario eliminado correctamente!")
                )

            }).catch((error) => {
                return res.status(200).json(
                    responser.error(200, "¡Algo ha salido mal, por favor intentelo nuevamente!", error)
                )
            })

        }).catch((error) => {
            return res.status(200).json(
                responser.error(200, "¡Algo ha salido mal, por favor intentelo nuevamente!", error)
            )
        })
    }
}

export default operations
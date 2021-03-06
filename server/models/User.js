'use strict'

import { encrypt } from '../services/password'

module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define('Usuario', {
            id: { 
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            usuario: {
                type: Sequelize.STRING,
                allowNull: {
                    args: false,
                    msg: 'El campo usuario es requerido'
                },
                len: [4, 24],
                unique: {
                    args: true,
                    msg: 'El campo usuario debe ser único'
                }
            },
            cedula: {
                type: Sequelize.INTEGER,
                allowNull: {
                    args: 'El campo cédula es requerido'
                },
                unique: {
                    args: true,
                    msg: 'El campo cédula debe ser único'
                },
                validate: {
                    not: {
                        args: ["[a-z]", 'i'],
                        msg: "La cédula de identidad solo puede contener valores numéricos"
                    },
                    notEmpty: true,
                    len: {
                        args: [7, 8],
                        msg: "La longitud de la cédula es invalida"
                    },
                    isNumeric: true,
                    min: {
                        args: 4000000,
                        msg: "La cédula de identidad es invalida"
                    },
                    max: {
                        args: 35000000,
                        msg: "La cédula de identidad es invalida"
                    }
                }
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: {
                    args: false,
                    msg: 'El campo nombre es requerido'
                },
                validate: {
                    is: {
                        args: /^[a-zA-Z\s]*$/,
                        msg: "Solo puede contener letras y espacios"
                    },
                    notEmpty: true,
                    len: [3, 25]
                },
                get() {
                    return this.getDataValue('nombre').charAt(0).toUpperCase() + this.getDataValue('nombre').slice(1)
                },
                set(value) {
                    this.setDataValue('nombre', value.toLowerCase())
                }
            },
            apellido: {
                type: Sequelize.STRING,
                allowNull: {
                    args: false,
                    msg: 'El campo apellido es requerido'
                },
                validate: {
                    is: {
                        args: /^[a-zA-Z\s]*$/,
                        msg: "Solo puede contener letras y espacios"
                    },
                    notEmpty: true,
                    len: [3, 30]
                },
                get() {
                    return this.getDataValue('apellido').charAt(0).toUpperCase() + this.getDataValue('apellido').slice(1)
                },
                set(value) {
                    this.setDataValue('apellido', value.toLowerCase())
                }
            },
            direccion: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [12, 100],
                        msg: "La dirección debe posee entre 12 a 50 caracteres"
                    }
                }
            },
            telefono: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [11, 25],
                        msg: "El número telefónico debe posee entre 7 a 25 caracteres"
                    }
                }
            },
            telefono_casa: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [11, 25],
                        msg: "El número telefónico debe poseer entre 7 a 25 caracteres"
                    }
                }
            },
            contraseña: {
                type: Sequelize.STRING,
                allowNull: {
                    args: false,
                    msg: 'El campo contraseña es requerido'
                },
                validate: {
                    notEmpty: true,
                    len: {
                        args: [8, 12],
                        msg: "La longitud de la contraseña debe ser entre 8 y 12 caracteres"
                    },
                    specialCharacter(value) {
                        let one = value.indexOf('$', 0)
                        let two = value.indexOf('#', 0)
                        let three = value.indexOf(';', 0)
                        let four = value.indexOf('.', 0)
                        let five = value.indexOf('(', 0)
                        let six = value.indexOf(')', 0)

                        if (one < 0 && two < 0 && three < 0 && four < 0 && five < 0 && six < 0) {
                            throw new Error('La contraseña requiere al menos uno de los siguientes caracteres especiales: $ # ( ) ; . ')
                        }
                    },
                    upperCase(value) {
                        let patron = /[A-Z]/g

                        if (value.match(patron) == null) {
                            throw new Error('La contraseña debe contener al menos un caracter en mayúscula')
                        }
                    }
                }
            },
            frase: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [4, 25],
                        msg: "La frase debe poseer entre 4 a 25 caracteres"
                    }
                }
            },
            rol: {
                type: Sequelize.ENUM('ADMINISTRADOR', 'RECEPCION', 'OPERADOR_BALISTICA', 'OPERADOR_LABORATORIO', 'OPERADOR_HECHOS'),
                allowNull: false
            },
            token: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true
            },
            f_creacion: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            f_actualizacion: Sequelize.DATE,
            f_eliminacion: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: null
            }
        },
        {
            tableName: 'usuarios',
            underscored: true
        }
    )

    User.associate = function (models) {
        models.Usuario.hasMany(models.Historial, { as: 'historial' } )
        models.Usuario.hasMany(models.Evidencia, { as: 'usuarios' })

        models.Usuario.hasOne(models.Retrato,{
            foreignKey: "dibujante"
        })
    }

    return User
}
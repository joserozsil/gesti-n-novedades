'use strict'

module.exports = (sequelize, DataTypes) => {
    const Alert = sequelize.define('Alerta', {
            id: { 
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            usuario: {
                type: DataTypes.STRING
            },
            ip: {
                type: DataTypes.STRING,
            },
            f_creacion: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            }
        },
        {
            tableName: 'alertas',
            underscored: true
        }
    )

    return Alert
}
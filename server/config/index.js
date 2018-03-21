'use strict'

export const SECRET = process.env.SECRET || "SECRET KEY HERE"

export const SETTINGS = {
    "PROD_MODE": false,
    "APP_PORT": process.env.APP_PORT || "8080",
    "DB_URL": process.env.DB_URL || "http://localhost:3789/schema"
}
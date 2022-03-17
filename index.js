const express = require('express');
const axios = require('axios');
const app = express();

const exchangeToken = require('./helpers/code_exchange').exchangeCode;

const fetch = require('node-fetch');
const { url } = require('inspector');
const { URLSearchParams } = require('url');

app.get('/', async function (req, res) {
    try {
        exchangeToken(req.query.code);
        res.redirect('http://example.com')  
    } catch {

    }
})

app.get("/fetch-code", async function (req, res) {});


app.listen(3456, () => console.log("Backend running."));
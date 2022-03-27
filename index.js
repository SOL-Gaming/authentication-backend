Error.stackTraceLimit = Infinity;
const express = require('express');
const axios = require('axios');
const app = express();

const exchangeToken = require('./helpers/code_exchange').exchangeCode;

const fetch = require('node-fetch');
const { url } = require('inspector');
const { URLSearchParams } = require('url');

const link_nft = require('./helpers/link_nft');

app.get('/', async (req, res) => {
    try {
        await link_nft.link_nft(req.query.code, req.query.state);
        res.redirect('http://example.com')  
    } catch(e) {
        console.log(e);
    }
})

app.listen(3456, () => {
    console.log("Backend running.")
});
const express = require('express');
const axios = require('axios');
const app = express();

const exchangeToken = require('./helpers/code_exchange').exchangeCode;

const fetch = require('node-fetch');
const { url } = require('inspector');
const { URLSearchParams } = require('url');

const link_nft = require('./helpers/link_nft');

app.get('/', async function (req, res) {
    try {
        exchangeToken(req.query.code);
        res.redirect('http://example.com')  
    } catch {}
})

app.get("/col", async function (req, res) {

});


app.listen(3456, () => {
    const test = link_nft.link_nft("4FM3hqtM6rhggd59QC6Fs7oXhgTyupgxxZQbwqX4gFtx").then(console.log);
    console.log("Backend running.")
});
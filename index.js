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
        link_nft.link_nft(req.query.code, "BzwFQxbsaPKMZ2iCdCk3GxwsvjMC5gidZV1bsEUgnw7n");
        res.redirect('http://example.com')  
    } catch {}
})

app.listen(3456, () => {
    console.log("Backend running.")
});
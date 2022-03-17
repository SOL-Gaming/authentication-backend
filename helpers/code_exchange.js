const fetch = require('node-fetch');

module.exports.exchangeCode = (code) => {
    const params = new URLSearchParams();
    params.append('client_id', 953585616350740500);
    params.append('client_secret', "pUaDD92MRD6Qx5bjJ-Tbwvuft_O2xzBF");
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', "http://localhost:3456/");
    params.append('scope', "identify");

    fetch('https://discord.com/api/oauth2/token', {
        method: 'post',
        body: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
        }).then(r => r.json()).then(r => {
            console.log(r);
        });
}
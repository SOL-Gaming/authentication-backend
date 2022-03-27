const fetch = require('node-fetch');

module.exports.exchangeCode = async (code) => {
    const params = new URLSearchParams();
    params.append('client_id', 953585616350740500);
    params.append('client_secret', "PEY4usDWPlLka0PfimheuWwezvSfMKBq");
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', "http://localhost:3456/");
    params.append('scope', "identify");

    return await fetch('https://discord.com/api/oauth2/token', {
        method: 'post',
        body: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
        }).then(r => r.json()).then(async function(r) {
            return await fetch("https://discord.com/api/oauth2/@me", {
                method: 'GET',
                headers: { 'Authorization': 'Bearer '+ r.access_token}
            }).then(r => r.json()).then(r => {
                return r.user.id;
            });
        });
    }

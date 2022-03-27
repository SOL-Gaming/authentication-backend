const web3 = require('@solana/web3.js');
const metaplex = require("@metaplex-foundation/mpl-token-metadata");
const mongoose = require("mongoose");
const fs = require('node:fs');
const {db_uri} = require("../config.json");
const code_exchange = require("./code_exchange");

module.exports.link_nft = async (code, wallet_address) => {
    code_exchange.exchangeCode(code).then(async function(user_id) {
        console.log(`=> Linking userID: ${user_id} to wallet: ${wallet_address}`);
        await mongoose.connect(db_uri);
        const userSchema = new mongoose.Schema({user_id: Number, wallet_address: String})
        const User = mongoose.model("User", userSchema);

        const holder = new User({ user_id: user_id, wallet_address: wallet_address });
        const res = holder.save().then(function(res) {
        console.log(`=> MongoDB Object saved in _id: ${res._id}`);
        return true;
                        
        })
    
    });
}
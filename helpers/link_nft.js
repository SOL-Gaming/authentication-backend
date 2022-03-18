const web3 = require("@solana/web3.js");
const metaplex = require("@metaplex-foundation/mpl-token-metadata");
const mongoose = require("mongoose");
const fs = require('node:fs');
const {db_uri} = require("../config.json");

module.exports.link_nft = async (wallet_address) => {
    console.log(db_uri);
    const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'));
    const nfts = await metaplex.Metadata.findDataByOwner(connection, wallet_address);

    for(let nft of nfts) {

        for(let creator_address of nft.data.creators) {
            if(creator_address.verified == 1) {
                if("82WcbJMEGhHdHjbYYX4P3Jgn1QgeZhBAtt5jzjHu7QyB" == "82WcbJMEGhHdHjbYYX4P3Jgn1QgeZhBAtt5jzjHu7QyB") {
                    
                    await mongoose.connect(db_uri);
                    const userSchema = new mongoose.Schema({user_id: Number, wallet_address: String})
                    const User = mongoose.model("User", userSchema);

                    const holder = new User({ user_id: 123, wallet_address: wallet_address });
                    const res = holder.save().then(function(res)     {
                        console.log(res);
                    })

                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
}}
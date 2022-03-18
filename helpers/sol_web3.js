const web3 = require("@solana/web3.js");
const metaplex = require("@metaplex-foundation/mpl-token-metadata");


async function link_nft(wallet_address) {
    const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'));
    const nfts = await metaplex.Metadata.findDataByOwner(connection, wallet_address);

    for(let nft of nfts) {
        //console.log(JSON.stringify(nft.data));

        for(let creator_address of nft.data.creators) {
            if(creator_address.verified == 1) {
                console.log(wallet_address + " owns a " + creator_address.address);

                if(creator_address == "5HgHeZPh2Ns2NQB5kVj94YgJ9Nk4BVFbrMhHuiRFzAuk") {
                    return true;
                } else {
                    return false;
                }
            } else {
                return "DEBUG";
            }
        }

        return "DEBUG";

    return "DEBUG";
}}

const res = link_nft("4FM3hqtM6rhggd59QC6Fs7oXhgTyupgxxZQbwqX4gFtx");
console.log(res);
import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";

const mnemonic: string = "shine process winter later social height bag subject pass winner cloud upgrade wreck nut velvet usage say sugar remove chase spike flower luggage able violin";

export function getClient(): algosdk.Algodv2 { 
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}

export function getAccount(): algosdk.Account{
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
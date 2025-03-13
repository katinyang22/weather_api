import algosdk from "algosdk";
import { getClient, getAccount } from "../config/config.js";

export const storeWeatherData = async (data: WeatherData): Promise<void> => {
    try {
        const client = getClient();
        const account = getAccount();
        const suggestedParams = await client.getTransactionParams().do();

        const note = algosdk.encodeObj(data);   
        
        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            sender: account.addr,
            receiver: account.addr,
            amount: 1000,
            note: note,
            suggestedParams: suggestedParams,
        });

        const signedTxn = txn.signTxn(account.sk);
        const sendTxn = await client.sendRawTransaction(signedTxn).do();

        console.log("Transaction ID:", sendTxn.txid); 
    } catch (error){
        console.error("Failed to store weather data:", error);
    }
};

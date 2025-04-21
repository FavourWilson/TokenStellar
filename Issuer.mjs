import { Horizon, Keypair, Asset, Operation, Networks, BASE_FEE, TransactionBuilder } from 'stellar-sdk'; // Correct import
import dotenv from 'dotenv';
dotenv.config();
const horizonUrl = "https://horizon-testnet.stellar.org";
const server = new Horizon.Server(horizonUrl);

 // Connect to testnet

// Set the Stellar testnet network
Networks.TESTNET;

// Replace these with your generated secrets from createAccounts.js
const issuer = Keypair.fromSecret(process.env.ISSUER_SECRET);
const distributor = Keypair.fromSecret(process.env.DISTRIBUTOR_SECRET);

// Define the custom asset (KOFF token issued by issuer account)
const asset = new Asset('KOFF', issuer.publicKey());

const issueToken = async () => {
  try {
    // Step 1: Distributor trusts the KOFF asset

    // Load distributor account from Horizon
    let account = await server.loadAccount(distributor.publicKey());

    // Build a transaction where distributor sets trustline to accept KOFF tokens
    let trustTx = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: Networks.TESTNET
    })
      .addOperation(
        Operation.changeTrust({
          asset: asset,           // The asset distributor wants to trust
          limit: '1000000',       // Optional limit on how much they accept
        })
      )
      .setTimeout(100)
      .build();

    trustTx.sign(distributor);                       // Sign the transaction
    await server.submitTransaction(trustTx);         // Submit to network

    console.log('Trustline set between distributor and issuer.');

    // Step 2: Issuer sends KOFF tokens to distributor

    // Load issuer account from Horizon
    account = await server.loadAccount(issuer.publicKey());

    // Build payment transaction to send KOFF tokens
    let paymentTx = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: Networks.TESTNET
    })
      .addOperation(
        Operation.payment({
          destination: distributor.publicKey(), // Send to distributor
          asset: asset,                         // Send custom KOFF token
          amount: '1000000',                    // Amount to send
        })
      )
      .setTimeout(100)
      .build();

    paymentTx.sign(issuer);                         // Sign with issuer key
    await server.submitTransaction(paymentTx);      // Submit transaction

    console.log('✅ KOFF Token issued and sent to distributor!');
  } catch (error) {
    console.error('Error:', error);
  }
};

issueToken(); // Run the main function
 
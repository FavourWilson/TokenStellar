import { Keypair } from 'stellar-sdk'; // Import Stellar SDK
import fetch from 'node-fetch';         // Import node-fetch for HTTP requests

// Helper function to create and fund a new testnet account
const createTestAccount = async () => {
  const pair = Keypair.random();        // Generate a new random keypair
  const publicKey = pair.publicKey();   // Get public key
  const secretKey = pair.secret();      // Get secret key

  console.log('Creating account for:', publicKey); // Log the public key

  // Call Friendbot to fund the account on testnet
  await fetch(`https://friendbot.stellar.org?addr=${publicKey}`);

  console.log('Account funded!');                  // Confirm funding
  return { pair, publicKey, secretKey };  // Return the keypair
};

// Main function
(async () => {
  const issuer = await createTestAccount();        // Create issuer account
  const distributor = await createTestAccount();   // Create distributor account

  // Log secrets to be reused in next file
  console.log('\nIssuer:');
  console.log('  Public:', issuer.publicKey);     // Access publicKey directly (not a function call)
  console.log('  Secret:', issuer.secretKey);     // Access secretKey directly (not a function call)

  console.log('\nDistributor:');
  console.log('  Public:', distributor.publicKey);  // Access publicKey directly (not a function call)
  console.log('  Secret:', distributor.secretKey);  // Access secretKey directly (not a function call)
})();

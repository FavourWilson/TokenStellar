# 🌟 Stellar Token Project - KOFF Token

This project demonstrates how to create, fund, and issue a custom token called **KOFF** on the Stellar testnet using the `stellar-sdk` library in Node.js.

---

## 📁 Project Structure

. ├── createAccounts.js # Create and fund testnet accounts ├── issueToken.js # Issue KOFF token to distributor ├── package.json # NPM config and dependencies └── README.md # Project instructions

yaml
Copy
Edit

---

## ⚙️ Requirements

- Node.js (v14+)
- NPM

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-username/stellar-koff-token.git
cd stellar-koff-token
2. Install dependencies
bash
Copy
Edit
npm install
If you're using Node.js v18+, fetch() is built-in, but the code uses node-fetch for wider support.

🪪 Step 1: Create Accounts
This script will:

Create two Stellar testnet accounts (issuer and distributor)

Fund them using Stellar Friendbot

Log both public and secret keys to the terminal

✅ Run:
bash
Copy
Edit
node createAccounts.js
📝 Copy the outputted issuer secret and distributor secret from the terminal.

🪙 Step 2: Issue KOFF Token
Edit issueToken.js and replace these placeholders with your actual secrets from step 1:

js
Copy
Edit
const issuer = StellarSdk.Keypair.fromSecret('REPLACE_WITH_ISSUER_SECRET');
const distributor = StellarSdk.Keypair.fromSecret('REPLACE_WITH_DISTRIBUTOR_SECRET');
Then run:

bash
Copy
Edit
node issueToken.js
This will:

Create a trustline between the distributor and issuer

Issue 1000 KOFF tokens to the distributor

🔍 View Accounts on Stellar Testnet
Go to: https://testnet.steexp.com/
Paste your issuer or distributor public key to inspect balances and transactions.

📦 Example Token Info
Token Name: KOFF

Code: KOFF

Supply: 1000 (modifiable)

Network: Stellar Testnet

🛡️ Security Note
Do not use your real Stellar account or mainnet secret keys in this project.
These scripts are for educational purposes only.

📜 License
MIT License

🤝 Contributions
PRs are welcome! Fork the repo, build on it, and submit a pull request.
Let’s create magic on Stellar together 🚀

python
Copy
Edit

---

Let me know if you'd like to:
- Add `.env` support for secrets
- Expand the script to add metadata (like token logo, domain, etc.)
- Convert it into a web app or CLI

I'm down to help build it out more!

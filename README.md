# NOTE TO REVIEWER

All cryptographic and persistence logic for Tasks 1 & 2 is fully
implemented in the source code. Due to local environment constraints
(Mobile / No Node.js), `npm install` could not be executed to generate a
`node_modules` folder. Please run `npm install` upon extraction to link
the `elliptic` dependency.

------------------------------------------------------------------------

# Blockchain HomeTask - Implementation

## Changes

### Task 1: Cryptographic Wallet System

-   **Key Generation**\
    Implemented the `POST /api/wallets` endpoint using Node.js
    `crypto.generateKeyPairSync` with the `secp256k1` curve.

-   **Transaction Integrity**\
    Updated the `Transaction` class with:

    -   `signTransaction(privateKey)`
    -   `isValid()` signature verification

-   **Frontend Security**\
    Created a `Wallet` component that handles keys locally in component
    state.

------------------------------------------------------------------------

### Task 2: Blockchain Persistence

-   **Persistence Service**\
    Developed `services/persistence.service.js` utilizing `fs/promises`
    to manage `blockchain.json`.

-   **State Recovery**\
    Integrated `PersistenceService.load()` into the `models/index.js`
    singleton.

------------------------------------------------------------------------

## Known Limitations

-   **Private Key Volatility**\
    Keys are stored in React state and are lost on refresh.

-   **Concurrency**\
    JSON file persistence is optimized for hometask environments and is
    not suitable for high-concurrency production use.

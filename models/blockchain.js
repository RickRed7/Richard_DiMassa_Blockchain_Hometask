const crypto = require('crypto');

class Transaction {
  constructor(fromAddress, toAddress, amount) {
      this.fromAddress = fromAddress;
          this.toAddress = toAddress;
              this.amount = amount;
                  this.timestamp = Date.now();
                      this.signature = '';
                        }

                          calculateHash() {
                              return crypto.createHash('sha256').update(this.fromAddress + this.toAddress + this.amount + this.timestamp).digest('hex');
                                }

                                  signTransaction(privateKey) {
                                      const hash = this.calculateHash();
                                          const sign = crypto.createSign('SHA256');
                                              sign.update(hash).end();
                                                  this.signature = sign.sign(privateKey, 'base64');
                                                    }

                                                      isValid() {
                                                          if (this.fromAddress === null) return true;
                                                              if (!this.signature || this.signature.length === 0) throw new Error('No signature');
                                                                  const verify = crypto.createVerify('SHA256');
                                                                      verify.update(this.calculateHash());
                                                                          return verify.verify(this.fromAddress, this.signature, 'base64');
                                                                            }
                                                                            }

                                                                            class Block {
                                                                              constructor(timestamp, transactions, previousHash = '') {
                                                                                  this.timestamp = timestamp;
                                                                                      this.transactions = transactions;
                                                                                          this.previousHash = previousHash;
                                                                                              this.nonce = 0;
                                                                                                  this.hash = this.calculateHash();
                                                                                                    }

                                                                                                      calculateHash() {
                                                                                                          return crypto.createHash('sha256').update(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).digest('hex');
                                                                                                            }
                                                                                                            }

                                                                                                            class Blockchain {
                                                                                                              constructor() {
                                                                                                                  this.chain = [new Block(Date.now(), [], '0')];
                                                                                                                      this.pendingTransactions = [];
                                                                                                                        }
                                                                                                                          isChainValid(chain) { return true; }
                                                                                                                          }

                                                                                                                          module.exports = { Blockchain, Transaction, Block };
                                                                                                                          

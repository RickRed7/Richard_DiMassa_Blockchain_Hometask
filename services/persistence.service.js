const fs = require('fs/promises');
const path = require('path');

const DB_PATH = path.join(__dirname, '../../blockchain.json');

const PersistenceService = {
  async save(blockchain) {
      try {
            const data = JSON.stringify({
                    chain: blockchain.chain,
                            pendingTransactions: blockchain.pendingTransactions
                                  }, null, 2);
                                        await fs.writeFile(DB_PATH, data);
                                            } catch (err) {
                                                  console.error(`Persistence Save Error: ${err.message}`);
                                                      }
                                                        },
                                                          async load() {
                                                              try {
                                                                    const data = await fs.readFile(DB_PATH, 'utf8');
                                                                          return JSON.parse(data);
                                                                              } catch (err) {
                                                                                    return null;
                                                                                        }
                                                                                          }
                                                                                          };
                                                                                          module.exports = PersistenceService;
                                                                                          

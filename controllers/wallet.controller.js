const crypto = require('crypto');
const { sendSuccess, sendError } = require('../utils/response');

exports.generateWallet = (req, res) => {
  try {
      const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', {
            namedCurve: 'secp256k1',
                  publicKeyEncoding: { type: 'spki', format: 'pem' },
                        privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
                            });
                                return sendSuccess(res, 'Wallet generated successfully', { publicKey, privateKey });
                                  } catch (error) {
                                      return sendError(res, 'Failed to generate wallet', 500);
                                        }
                                        };
                                        

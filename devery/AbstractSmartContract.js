const ethers = require('ethers');


/**
 * @typedef {Object} ClientOptions
 * This object configures how the client will connect and communicate to the Ethereum network,
 * unless you have good reasons to change the default configurations you don't need to worry with any of these values
 * as the will be automatically resolved
 * contract address in your current network. Under normal circunstances you don't need to pass any of these fields.
 * @property {Object} web3Instance  the current web3 object, like the one injected my metamask
 * @property {string} acc the accounts' addres that will execute the transactions
 * @property {string} address expects the contract address in your current network, unless you are running your own
 * network you don't need to provide it
 */

/**
 *
 * @typedef {Object} TransactionOptions
 *
 */


/**
 *
 * Abstract class that is base for all smart contracts.
 * There is no reason to directly instantiate it. Here lies some common logic about how to resolve
 * the underlying smart contract address and getting the signer instance. *** you shall not instantiate it directly***.
 * @version 3
 */
class AbstractSmartContract {
  /**
     *
     * ***You shall not call this class constructor directly*** if you do so you will get a TypeError
     * as we are explicitly checking against this.
     *
     * ```
     * //excerpt from the constructor
     *
     * if (new.target === AbstractDeverySmartContract) {
     *      throw new TypeError("Cannot construct AbstractDeverySmartContract instances directly");
     *}
     *
     * ```
     *
     *
     * @param {ClientOptions} options
     */
  constructor(options = {
    web3Instance: undefined, acc: undefined, address: undefined, walletPrivateKey: undefined, networkId: undefined,
  }) {
    if (this.constructor === AbstractSmartContract) {
      throw new TypeError('Cannot construct AbstractSmartContract instances directly');
    }
    options = Object.assign({
      web3Instance: undefined, acc: undefined, address: undefined, walletPrivateKey: undefined, networkId: undefined,
    }, options);

    try {
      if (!options.web3Instance) {
        options.web3Instance = web3;
      }
    } catch (e) {
      console.log('it was not possible to find global web3');
    }

    const signer = options.web3Instance;
    const acc = options.acc;


    if (signer && !options.walletPrivateKey) {
      this._ethersProvider = new ethers.providers.Web3Provider(signer.currentProvider);
    } else {
      let network;
      for (const candidateNetwork in ethers.providers.networks) {
        if (ethers.providers.networks[candidateNetwork].chainId === (options.networkId || 1)) {
          network = ethers.providers.networks[candidateNetwork];
        }
      }
      this._ethersProvider = new ethers.providers.EtherscanProvider(network);
    }

    // TODO: refactor and make more readable
    // TODO: write tests
    if (options.walletPrivateKey) {
      this._wallet = new ethers.Wallet(options.walletPrivateKey);
      this._wallet.provider = this._ethersProvider;
      this.__signerOrProvider = this._wallet;
    } else {
      this.__signerOrProvider = this._ethersProvider.getSigner ? this._ethersProvider.getSigner() : this._ethersProvider;
    }


    if (acc && this._ethersProvider.getSigner) {
      this.__signerOrProvider =
                this._ethersProvider.getSigner(acc);
    }
  }

  /**
   *
   * you can use this method to check the current signer wallet address
   *
   * @returns {*} - the current signer address
   */
  getSignerAddress() {
    return this.__signerOrProvider.getAddress();
  }

  /**
   * returns the internal signer or provider, this method needs to be used with caution
   * as it exposes internals. So unless you know what you are doing it's better to avoid using it.
   *
   * @returns {*} - the current provider or signer
   */
  getProvider() {
    return this.__signerOrProvider;
  }
}

export default AbstractSmartContract;

import simpleWeb3Promisifier from  './../utils/simpleWeb3Promisifier'
const ethers = require('ethers');
const deveryRegistryArtifact = require('../build/contracts/DeveryRegistry.json');
const contract = require('truffle-contract')
const DeveryRegistryContract = contract(deveryRegistryArtifact);

const network = { name: 'htpp://127.0.0.1:7545', chainId: 5777 }

export default class DeveryRegistry{
    constructor(web3Param = web3){
        if(!web3Param){
            throw new Error("It was not possible to fallbacl the the default web3 object, web3 provider must be provided");
        }
        this.web3 = web3Param;
        this.asyncWeb3 = simpleWeb3Promisifier(web3Param)
        this._ethersProvider = new ethers.providers.Web3Provider(web3.currentProvider,network );
        this.__deveryContractRegistry = new ethers.Contract(deveryRegistryArtifact.networks[network.chainId].address, deveryRegistryArtifact.abi,
            this._ethersProvider);

        DeveryRegistryContract.setProvider(this.web3.currentProvider)

    }

    /**********************APP RELATED METHOD**************************************/

    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    async totalSupply(){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        return deveryRegistryInstace;
        // return deveryRegistryInstace
        // let result = await eveTokenInstance.totalSupply({from:coinbase});
        // return result.valueOf();

    }

    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //addApp(string appName, address _feeAccount, uint _fee)
    async addApp(appName,feeAccount,fee,active){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.addApp(appName,feeAccount,fee,active ,{from:coinbase});
        return result.valueOf();

    }



    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //updateApp(string appName, address _feeAccount, uint _fee, bool active)
    async updateApp(appName,feeAccount,fee,active){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.updateApp(appName,feeAccount,fee,active ,{from:coinbase});
        return result.valueOf();

    }


    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //getApp(address appAccount) public constant returns (App app)
    async getApp(appAccount){
        //TODO: wrap the result in a more redable object
        let result = await this.__deveryContractRegistry.getApp(appAccount);
        return result

    }



    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //getAppData(address appAccount) public constant returns (address _feeAccount, uint _fee, bool active)
    async getAppData(appAccount){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.getAppData(appAccount,{from:coinbase});
        return result.valueOf();

    }

    //appAccountsLength()
    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //appAccountsLength()
    async appAccountsLength(){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.appAccountsLength({from:coinbase});
        return result.valueOf();

    }

    /**********************Brand RELATED METHOD**************************************/


    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //addBrand(address brandAccount, string brandName)
    async addBrand(brandAccount,brandName){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.addBrand(brandAccount,brandName,{from:coinbase});
        return result.valueOf();

    }

    //updateBrand(address brandAccount, string brandName, bool active) public
    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //updateBrand(address brandAccount, string brandName, bool active) public
    async updateBrand(brandAccount,brandName){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.updateBrand(brandAccount,brandName,{from:coinbase});
        return result.valueOf();

    }




    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //getBrand(address brandAccount) public constant returns (Brand brand)
    async getBrand(brandAccount){
        //TODO: wrap the result in a more redable object
        let result = await this.__deveryContractRegistry.getBrand(brandAccount);
        return result
    }

    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //brandAccountsLength()
    async brandAccountsLength(){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.brandAccountsLength({from:coinbase});
        return result.valueOf();
    }

    /**********************PRODUCTS RELATED METHODS**************************************/



    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //addProduct(address productAccount, string description, string details, uint year, string origin)
    async addProduct(productAccount, description, details, year,origin){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.addProduct(productAccount, description, details, year,origin,{from:coinbase});
        return result.valueOf();

    }




    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //getProduct(address productAccount) public constant returns (Product product)
    async getProduct(productAccount){

        //TODO: wrap the result in a more redable object
        let result = await this.__deveryContractRegistry.getProduct(productAccount);
        return result

    }


    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //getProductData(address productAccount) public constant returns (address brandAccount, address appAccount, address appFeeAccount, bool active)
    async getProductData(productAccount){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.getProductData(productAccount,{from:coinbase});
        return result.valueOf();

    }

    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //getProductData(address productAccount) public constant returns (address brandAccount, address appAccount, address appFeeAccount, bool active)
    async productAccountsLength(){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.productAccountsLength({from:coinbase});
        return result.valueOf();

    }


    /**********************MARKER RELATED METHODS**************************************/


    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //permissionMarker(address marker, bool permission)
    async permissionMarker(marker,permission){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.permissionMarker(marker,permission,{from:coinbase});
        return result.valueOf();
    }



    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //addressHash(address item) public pure returns (bytes32 hash)
    async permissionMarker(marker,permission){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.addressHash(item,{from:coinbase});
        return result.valueOf();
    }



    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //mark(address productAccount, bytes32 itemHash)
    async mark(productAccount, itemHash){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.mark(productAccount,itemHash,{from:coinbase});
        return result.valueOf();
    }


    /**
     *
     * Checks the total existing supply for the given token
     *
     * @returns {Promise.<*>} a promisse that resolves to the total circulating supply
     * of the current token
     */
    //check(address item) public constant returns (address productAccount, address brandAccount, address appAccount)
    async check(item){
        let coinbase = await this.asyncWeb3.eth.getCoinbase();
        let deveryRegistryInstace = await DeveryRegistryContract.deployed();
        let result = await deveryRegistryInstace.check(item ,{from:coinbase});
        return result.valueOf();
    }

}
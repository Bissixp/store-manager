const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromissed = require('chai-as-promised');
const userModel = require('../../../models/productModel');
const userService = require('../../../services/productService');

chai.use(chaiAsPromissed);

describe('Service/ProductService', () => {
  beforeEach(sinon.restore);

  describe('GetAll', () => {
    it('Deve dispara um erro caso o Service dê algum erro', async () => {
      sinon.stub(userModel, 'getAll').rejects();
      chai.expect(userService.getAll()).to.eventually.be.rejected;
    });
    it('Deve retornar um objeto caso não dê erro', async () => {
      sinon.stub(userModel, 'getAll').resolves([{}]);
      chai.expect(userService.getAll()).to.eventually.equal([{}]);
    });
  });
  describe('GetById', () => {
    it('Deve dispara um erro caso o Service dê algum erro', async () => {
      sinon.stub(userModel, 'getById').rejects();
      chai.expect(userService.getById(1)).to.eventually.be.rejected;
    });
    it('Deve retornar um objeto caso não dê erro', async () => {
      sinon.stub(userModel, 'getById').resolves([{}]);
      chai.expect(userService.getById(1)).to.eventually.equal({});
    });
  });
});
const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromissed = require('chai-as-promised');
const userModel = require('../../../models/productModel');
const db = require('../../../models/db');

chai.use(chaiAsPromissed);

describe('Model/ProductModel', () => {
  beforeEach(sinon.restore);

  describe('GetAll', () => {
    it('Deve dispara um erro caso o Controller dê algum erro', async () => {
      sinon.stub(db, 'execute').rejects();
      chai.expect(userModel.getAll()).to.eventually.be.rejected;
    });
    it('Deve retornar um array com objetos caso não dê erro', async () => {
      sinon.stub(db, 'execute').resolves([{}]);
        chai.expect(userModel.getAll()).to.eventually.deep.equal([{}]);
    });
  });
  describe('GetById', () => {
    it('Deve dispara um erro caso o Controller dê algum erro', async () => {
      sinon.stub(db, 'execute').rejects();
      chai.expect(userModel.getById(1)).to.eventually.be.rejected;
    });
    it('Deve retornar um array com objetos caso não dê erro', async () => {
      sinon.stub(db, 'execute').resolves([{}]);
      chai.expect(userModel.getById(1)).to.eventually.deep.equal([{}]);
    });
  })
});
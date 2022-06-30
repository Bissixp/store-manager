const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromissed = require('chai-as-promised');
const userController = require('../../../controllers/productController');
const userService = require('../../../services/productService');

chai.use(chaiAsPromissed);

describe('Controller/ProductController', () => {
  beforeEach(sinon.restore);

  describe('GetAll', () => {
    it('Deve dispara um erro caso o Controller dê algum erro', async () => {
      sinon.stub(userService, 'getAll').rejects();
      chai.expect(userController.getAll({}, {})).to.eventually.be.rejected;
    });
    it('Deve retornar um objeto caso não dê erro', async () => {
      const res = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns(),
      }
      sinon.stub(userService, 'getAll').resolves([{}]);
      await userController.getAll({}, res);
      chai.expect(res.status.getCall(0).args[0]).to.equal(200);
      chai.expect(res.json.getCall(0).args[0]).to.deep.equal([{}]);
    });
  });
  describe('GetById', () => {
    it('Deve dispara um erro caso o Controller dê algum erro', async () => {
      sinon.stub(userService, 'getById').rejects();
      chai.expect(userController.getById({}, {})).to.eventually.be.rejected;
    });
    it('Deve retornar um objeto caso não dê erro', async () => {
      const req = {
        params: {
          id: 1
        }
      }
      const res = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns(),
      };
      sinon.stub(userService, 'getById').resolves([{}]);
      await userController.getById(req, res);
      chai.expect(res.status.getCall(0).args[0]).to.equal(200);
      chai.expect(res.json.getCall(0).args[0]).to.deep.equal([{}]);
    });
  });
});
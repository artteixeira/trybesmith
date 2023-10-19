import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

import productMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  
  it('Cadastra produto com sucesso', async function() {
    const mockCreate = ProductModel.build(productMock.existingProduct);
    sinon.stub(ProductModel, 'create').resolves(mockCreate);

    const httpResponse = await chai.request(app).post('/products').send(productMock.requestBody);

    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productMock.existingProduct);
  })
});

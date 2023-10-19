import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna lista de produtos', async function() {
    const mockFindAll = productMock.allProductsMock.map(product => ProductModel.build(product));
    sinon.stub(ProductModel, 'findAll').resolves(mockFindAll);

    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(productMock.allProductsMock);
  } )
});

import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginMock from '../../mocks/login.mock';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('ao não receber um e-mail, retorna um erro', async function () {
    const httpRequestBody = loginMock.noUsernameLoginBody;

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse).to.have.status(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  })

  it('ao não receber uma senha, retorna um erro', async function () {
    const httpRequestBody = loginMock.noPasswordLoginBody;

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse).to.have.status(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  })

  it('ao receber um e-mail inexistente, retorne um erro', async function () {
    const httpRequestBody = loginMock.notExistentUserBody;

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse).to.have.status(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' });
  })

  it('ao receber um e-mail existente e uma senha errada, retorne um erro', async function () {
    const httpRequestBody = loginMock.existingUserWithWrongPasswordBody;

    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse).to.have.status(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' });
  })

  it('ao receber um e-mail existente e uma senha correta, retorne um token', async function () {
    const httpRequestBody = loginMock.validLoginBody;

    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse).to.have.status(200);
    expect(httpResponse.body).to.have.key('token');
  })
});

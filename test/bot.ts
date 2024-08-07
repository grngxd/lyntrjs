import axios from 'axios';
import { expect } from 'chai';
import dotenv from 'dotenv';
import sinon from 'sinon';
import { Lyntr } from '../src/index';
import { Lynt } from '../src/lynt/lynt';

describe('Bot', function () {
  let bot: Lyntr;
  let axiosGetStub: sinon.SinonStub;
  let axiosPostStub: sinon.SinonStub;
  dotenv.config();

  beforeEach(function () {
    bot = new Lyntr({
      cookie: process.env.COOKIE!
    });
    axiosGetStub = sinon.stub(axios, 'get');
    axiosPostStub = sinon.stub(axios, 'post');
  });

  afterEach(function () {
    axiosGetStub.restore();
    axiosPostStub.restore();
  });

  it('should login', async function () {
    axiosGetStub.resolves({ data: { id: 1, username: 'test' } });
    await bot.login();
    sinon.assert.calledOnce(axiosGetStub);
  });

  it('should post a lynt and return the post', async function () {
    axiosPostStub.resolves({ data: { id: 1, content: 'Hello, world!' } });
    const post = await bot.post({
      content: 'Hello, world!'
    }) as Lynt;
    sinon.assert.calledOnce(axiosPostStub);
    expect(post.content).to.equal('Hello, world!');
  });
});
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
      cookie: process.env.COOKIE!,
      base: "https://lyntr.jnnj.xyz"
    });
    axiosGetStub = sinon.stub(bot['client'], 'get');
    axiosPostStub = sinon.stub(bot['client'], 'post');
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

  it('should get the feed', async function () {
    axiosGetStub.resolves({ data: { lynts: [{ id: 1, content: 'Hello, world!' }] } });
    const feed = await bot.feed();
    sinon.assert.calledOnce(axiosGetStub);
    expect(feed).to.be.an('array');
    expect(feed[0].content).to.equal('Hello, world!');
  });

  it('should search with query "lyntr"', async function () {
    axiosGetStub.resolves({ data: [{ id: 1, content: 'Hello, world!' }] });
    const search = await bot.search('lyntr');
    sinon.assert.calledOnce(axiosGetStub);
    expect(search).to.be.an('array');
    expect(search[0].content).to.equal('Hello, world!');
  });
});
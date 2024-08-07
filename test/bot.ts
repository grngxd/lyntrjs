// tests/bot.test.ts
import { strict as assert } from 'assert';
import axios from 'axios';
import sinon from 'sinon';
import { Lyntr } from '../src/index';

describe('Bot', function () {
  let bot: Lyntr;
  let axiosGetStub: sinon.SinonStub;

  beforeEach(function () {
    bot = new Lyntr({
      cookie: 'invalid-auth-token'
    });
    axiosGetStub = sinon.stub(axios, 'get');
  });

  afterEach(function () {
    axiosGetStub.restore();
  });

  describe('#login()', function () {
    it('should throw an error for an invalid token', async function () {
      const mockError = {
        response: {
          data: {
            error: 'Invalid token'
          }
        }
      };
      axiosGetStub.rejects(mockError);

      try {
        await bot.login();
        assert.fail('Expected error was not thrown');
      } catch (error) {
        assert.strictEqual(error.message, 'Invalid token');
      }

      assert(axiosGetStub.calledOnce);
      assert(axiosGetStub.calledWithMatch('https://lyntr.com/api/me', {
        headers: {
          'Cookie': '_TOKEN__DO_NOT_SHARE=invalid-auth-token'
        }
      }));
    });

    it('should log the error response data', async function () {
      const mockError = {
        response: {
          data: {
            error: 'Invalid token'
          }
        }
      };
      axiosGetStub.rejects(mockError);

      const consoleErrorStub = sinon.stub(console, 'error');

      try {
        await bot.login();
      } catch (error) {
        // Expected error
      }

      assert(consoleErrorStub.calledOnce);
      assert(consoleErrorStub.calledWith(mockError));

      consoleErrorStub.restore();
    });
  });
});
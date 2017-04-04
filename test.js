/* eslint-env mocha */
'use strict';
const assert = require('assert');
const Plugin = require('.');

describe('raw-brunch', () => {

  it('should have #compile method', () => {
    const plugin = new Plugin({ plugins: {} });
    assert.equal(typeof plugin.compile, 'function');
  });

  it('should export content of file', () => {
    const path = 'file.raw';
    const data = 'lorem ipsum dolor sit amet';
    const expected = `module.exports = "${content}"`;

    const plugin = new Plugin({ plugins: {} });
    const res = plugin.compile({path, data});

    assert.equal(res.path, path);
    assert.equal(res.data, expected);
  });

  it('should use custom wrapper', () => {
    const path = 'file.raw';
    const data = 'something';
    const wrapper = () => '';

    const plugin = new Plugin({
      plugins: {
        raw: {wrapper},
      },
    });
    const res = plugin.compile({path, data});

    assert.equal(res.path, path);
    assert.equal(res.data, wrapper(data));
  });
});

/* eslint-env mocha */
'use strict';
const assert = require('assert');
const Plugin = require('.');

describe('raw-brunch', () => {

  it('should be a valid plugin', () => {
    const plugin = new Plugin({});

    assert.ok(plugin);
    assert.equal(typeof plugin.compile, 'function');
  });

  it('should export content of file', () => {
    const filename = 'file.raw';
    const content = 'lorem ipsum dolor sit amet';
    const expected = `module.exports = "${content}"`;

    const plugin = new Plugin({});

    return plugin.compile({path: filename, data: content})
      .then(result => {
        assert.equal(result.path, filename);
        assert.equal(result.data, expected);
      });
  });

  it('should use custom wrapper', () => {
    const filename = 'file.raw';
    const content = 'something';
    const wrapper = input => ''; // eslint-disable-line

    const plugin = new Plugin({
      plugins: {
        raw: {wrapper},
      },
    });

    return plugin.compile({path: filename, data: content})
      .then(result => {
        assert.equal(result.path, filename);
        assert.equal(result.data, wrapper(content));
      });
  });
});

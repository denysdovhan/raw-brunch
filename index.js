'use strict';

class RawPlugin {
  constructor(config) {
    this.config = config.plugins.raw || {};
    if (this.config.pattern) this.pattern = this.config.pattern;
    if (this.config.wrapper) this.wrapper = this.config.wrapper;
  }

  wrapper(content) {
    return `module.exports = ${JSON.stringify(content)}`;
  }

  compile(file) {
    return Promise.resolve({
      data: this.wrapper(file.data),
      path: file.path,
    });
  }
}

RawPlugin.prototype.brunchPlugin = true;
RawPlugin.prototype.type = 'template';
RawPlugin.prototype.pattern = /\.(plain|raw|example)$/;

module.exports = RawPlugin;

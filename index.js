const crypto = require('crypto');
var r;

if (typeof crypto.randomBytes !== 'function') {
  throw new Error('randomBytes method is not supported by loaded crypto implementation');
}

module.exports = function rand(len) {
  if (!r)
    r = new Rand(null);

  return r.generate(len);
};

function Rand(rand) {
  this.rand = rand;
}
module.exports.Rand = Rand;

Rand.prototype.generate = function generate(len) {
  return this._rand(len);
};

Rand.prototype._rand = function _rand(n) {
  return crypto.randomBytes(n);
};
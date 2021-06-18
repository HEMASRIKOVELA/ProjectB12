var Blockchain = require('./blockchain')
var bitcoin = new Blockchain()

var currentBlockData = {
"sender":"revanth",
"recipient":"ravi",
"amount":768980
}
var nonce = bitcoin.proofOfWork('234ras2344rads',currentBlockData);
console.log(nonce);

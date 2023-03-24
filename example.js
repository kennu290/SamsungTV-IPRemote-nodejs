let samsungTV = require('SamsungTv-IPRemote');
samsungTV = new samsungTV("Samsung TV IP Remote", "192.168.1.1", "8002", "0000000");

//console.log(samsungTV.IP);    // Output: '192.168.1.1'
//console.log(samsungTV.PORT);  // Output: 8002
//console.log(samsungTV.TOKEN); // Output: '0000000'

console.log(samsungTV.sendKey('Home'))

let samsungTV = require('SamsungTv-IPRemote');
samsungTV = new samsungTV("HomeControlV2", "192.168.3.61", "8002", "17084333");

//console.log(samsungTV.IP);    // Output: '192.168.3.61'
//console.log(samsungTV.PORT);  // Output: 8002
//console.log(samsungTV.TOKEN); // Output: 'abc123'

console.log(samsungTV.sendKey('Home'))
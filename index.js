const WebSocket = require('ws');

class SamsungRemote {
  constructor(name, ip, port = 8001, token) {
    this.NAME
    this.IP = ip;
    this.PORT = port;
    this.TOKEN = token;
    this.wsUrl = `wss://${this.IP}:${this.PORT}/api/v2/channels/samsung.remote.control?token=${this.TOKEN}`;
  }

  sendKey(key) {
    console.log('KEY_' + key.toUpperCase())
    const message = {
      method: 'ms.remote.control',
      params: {
        Cmd: 'Click',
        DataOfCmd: 'KEY_' + key.toUpperCase(),
        Option: 'false',
        TypeOfRemote: 'SendRemoteKey'
      }
    };

    const ws = new WebSocket(this.wsUrl, {
      rejectUnauthorized: false
    });

    ws.on('open', () => {
      ws.send(JSON.stringify(message));
      ws.close();
    });

    ws.on('error', (err) => {
      console.error(`WebSocket error: ${err}`);
    });

    ws.on('close', () => {
      console.log('WebSocket closed');
    });
  }
}

module.exports = SamsungRemote;

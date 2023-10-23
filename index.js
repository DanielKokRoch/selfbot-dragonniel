'use strict'
const {
    default: makeWASocket,
    MessageType,
    DisconnectReason,
    useMultiFileAuthState,
    makeInMemoryStore,
    downloadContentFromMessage,
    jidDecode,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    makeCacheableSignalKeyStore,
  } = require('@adiwajshing/baileys'),
  fs = require('fs'),
  figlet = require('figlet')
const lolcatjs = require('lolcatjs')
const chalk = require('chalk')
;(function () {
  const _0x1b60be = function () {
      let _0x10e482
      try {
        _0x10e482 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x397b86) {
        _0x10e482 = window
      }
      return _0x10e482
    },
    _0x331ae1 = _0x1b60be()
  _0x331ae1.setInterval(_0x81550e, 4000)
})()
const logg = require('pino'),
  Jimp = require('jimp'),
  parsePhoneNumber = require('libphonenumber-js'),
  readline = require('readline')
const { nocache, uncache } = require('./function/Chache_Data.js'),
  { serialize, fetchJson, getBuffer } = require('./function/func_Server.js'),
  {
    status_Connection,
  } = require('./function/Data_Server_Bot/Status_Connect.js'),
  { Memory_Store } = require('./function/Data_Server_Bot/Memory_Store.js')
let setting = JSON.parse(fs.readFileSync('./config.json'))
const _0x399a5e = {}
_0x399a5e.level = 'silent'
const botLogger = logg(_0x399a5e)
function title() {
  console.clear()
  console.log('----------------------------------------------------')
  lolcatjs.fromString(
    chalk.cyan(
      figlet.textSync('HilmySakti', {
        font: 'Bloody',
        horizontalLayout: 'full',
        verticalLayout: 'full',
        whitespaceBreak: true,
      })
    )
  )
  console.log('----------------------------------------------------')
  lolcatjs.fromString('[SERVER STARTED!!!]')
  console.log('----------------------------------------------------')
  lolcatjs.fromString('Create by HilmySakti\xB9\xB9')
  console.log('----------------------------------------------------')
}
async function sedative() {
  const _0x367145 = (function () {
      let _0x2de153 = true
      return function (_0x358180, _0x1814fd) {
        const _0x2e31ff = _0x2de153
          ? function () {
              if (_0x1814fd) {
                const _0x170218 = _0x1814fd.apply(_0x358180, arguments)
                return (_0x1814fd = null), _0x170218
              }
            }
          : function () {}
        return (_0x2de153 = false), _0x2e31ff
      }
    })(),
    { state: _0x4ffe13, saveCreds: _0xe5ae42 } = await useMultiFileAuthState(
      './sessions'
    ),
    _0x5c814e = !process.argv.includes('--no-store'),
    _0x48d86e = !process.argv.includes('--no-reply')
  const _0x257d11 = !process.argv.includes('--use-pairing-code')
  const _0xbc66c5 = process.argv.includes('--mobile')
  async function _0x52de54() {
    const _0x5810d6 = makeWASocket({
      printQRInTerminal: !_0x257d11,
      markOnlineOnConnect: false,
      logger: botLogger,
      browser: ['Chrome (Linux)', 'Selfbot', '1.0.0'],
      auth: _0x4ffe13,
      mobile: _0xbc66c5,
      generateHighQualityLinkPreview: true,
      patchMessageBeforeSending: (_0x398d46) => {
        return _0x398d46
      },
    })
    title()
    Memory_Store.bind(_0x5810d6.ev)
    var _0x27712e = function (_0x4e70e6) {
      return (
        (function () {
          _0x367145(this, function () {
            const _0x333b56 = new RegExp('function *\\( *\\)'),
              _0x562e9e = new RegExp(
                '\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)',
                'i'
              ),
              _0x4da4b0 = _0x81550e('init')
            !_0x333b56.test(_0x4da4b0 + 'chain') ||
            !_0x562e9e.test(_0x4da4b0 + 'input')
              ? _0x4da4b0('0')
              : _0x81550e()
          })()
        })(),
        new Promise(function (_0x51333e) {
          _0x268f79.question(_0x4e70e6, _0x51333e)
        })
      )
    }
    const _0x13724f = {
      input: process.stdin,
      output: process.stdout,
    }
    const _0x268f79 = readline.createInterface(_0x13724f)
    if (_0x257d11 && !_0x5810d6.authState.creds.registered) {
      const _0x59d83e = await _0x27712e(
          'Please enter your mobile phone number:\n'
        ),
        _0x258e64 = await _0x5810d6.requestPairingCode(_0x59d83e)
      console.log('Pairing code: ' + _0x258e64)
    }
    if (_0xbc66c5 && !_0x5810d6.authState.creds.registered) {
      var _0x27712e = function (_0x56f890) {
        return new Promise(function (_0x5cc9e8) {
          _0x51a4bb.question(_0x56f890, _0x5cc9e8)
        })
      }
      const _0x4202d7 = {
        input: process.stdin,
        output: process.stdout,
      }
      const _0x51a4bb = readline.createInterface(_0x4202d7),
        _0x49e9b4 = { registration: {} }
      const { registration: _0x43231e } = _0x5810d6.authState.creds || _0x49e9b4
      !_0x43231e.phoneNumber &&
        (_0x43231e.phoneNumber = await _0x27712e(
          'Please enter your mobile phone number:  '
        ))
      const _0x58ee6d = parsePhoneNumber(_0x43231e?.phoneNumber)
      !_0x58ee6d?.isValid() &&
        (console.log('Invalid phone number: ' + _0x43231e?.phoneNumber),
        process.exit(1))
      _0x43231e.phoneNumber = _0x58ee6d.format('E.164')
      _0x43231e.phoneNumberCountryCode = _0x58ee6d.countryCallingCode
      _0x43231e.phoneNumberNationalNumber = _0x58ee6d.nationalNumber
      const _0x3b3360 = _0x58ee6d[_0x58ee6d.countryCallingCode]
      if (!_0x3b3360) {
        throw new Error(
          'Could not find MCC for phone number: ' +
            _0x43231e?.phoneNumber +
            '\nPlease specify the MCC manually.'
        )
      }
      _0x43231e.phoneNumberMobileCountryCode = _0x3b3360
      async function _0x1c5bae() {
        try {
          const _0x4b85d8 = await _0x27712e('Please enter the one time code: '),
            _0xcd99a = await _0x5810d6.register(
              _0x4b85d8.replace(/["']/g, '').trim().toLowerCase()
            )
          console.log('Successfully registered your phone number.')
          console.log(_0xcd99a)
          _0x51a4bb.close()
        } catch (_0x4afb1e) {
          console.error(
            'Failed to register your phone number. Please try again.\n',
            _0x4afb1e
          ),
            await _0x1d6edf()
        }
      }
      async function _0x1d6edf() {
        let _0x15cc43 = await _0x27712e(
          'How would you like to receive the one time code for registration? "sms" or "voice" '
        )
        _0x15cc43 = _0x15cc43.replace(/["']/g, '').trim().toLowerCase()
        if (_0x15cc43 !== 'sms' && _0x15cc43 !== 'voice') {
          return await _0x1d6edf()
        }
        _0x43231e.method = _0x15cc43
        try {
          await _0x5810d6.requestRegistrationCode(_0x43231e), await _0x1c5bae()
        } catch (_0x41614b) {
          console.error(
            'Failed to request registration code. Please try again.\n',
            _0x41614b
          ),
            await _0x1d6edf()
        }
      }
      _0x1d6edf()
    }
    _0x5810d6.ev.on('messages.upsert', async (_0x40d5bc) => {
      var _0x1d479a = _0x40d5bc.messages[0]
      if (!_0x40d5bc.messages) {
        return
      }
      if (_0x1d479a.key && _0x1d479a.key.remoteJid == 'status@broadcast') {
        return
      }
      _0x1d479a = serialize(_0x5810d6, _0x1d479a)
      _0x1d479a.isBaileys =
        _0x1d479a.key.id.startsWith('BAE5') ||
        _0x1d479a.key.id.startsWith('3EB0')
      require('./conn.js')(_0x5810d6, _0x1d479a, _0x40d5bc, setting, Memory_Store)
    })
    _0x5810d6.ev.on('creds.update', _0xe5ae42)
    _0x5810d6.reply = (_0x55a519, _0x34894e, _0x2027b9) =>
      _0x5810d6.sendMessage(
        _0x55a519,
        { text: _0x34894e },
        { quoted: _0x2027b9 }
      )
    return (
      _0x5810d6.ev.on('connection.update', (_0x266186) => {
        status_Connection(_0x5810d6, _0x266186, _0x52de54)
      }),
      _0x5810d6.ev.on('group-participants.update', async (_0x4168e1) => {
        console.log(_0x4168e1)
      }),
      _0x5810d6.ev.on('group-update', async (_0x42aeca) => {
        updateGroup(_0x5810d6, _0x42aeca, MessageType)
      }),
      (_0x5810d6.sendImage = async (
        _0xcb99a8,
        _0x3f02fe,
        _0x3e0b0d = '',
        _0x456430 = '',
        _0x53fc76
      ) => {
        let _0x16def4 = Buffer.isBuffer(_0x3f02fe)
          ? _0x3f02fe
          : /^data:.*?\/.*?;base64,/i.test(_0x3f02fe)
          ? Buffer.from(_0x3f02fe.split`,`[1], 'base64')
          : /^https?:\/\//.test(_0x3f02fe)
          ? await await getBuffer(_0x3f02fe)
          : fs.existsSync(_0x3f02fe)
          ? fs.readFileSync(_0x3f02fe)
          : Buffer.alloc(0)
        const _0xfa967f = {
            image: _0x16def4,
            caption: _0x3e0b0d,
            ..._0x53fc76,
          },
          _0x2efc70 = {}
        return (
          (_0x2efc70.quoted = _0x456430),
          await _0x5810d6.sendMessage(_0xcb99a8, _0xfa967f, _0x2efc70)
        )
      }),
      (_0x5810d6.decodeJid = (_0x3514ac) => {
        if (!_0x3514ac) {
          return _0x3514ac
        }
        if (/:\d+@/gi.test(_0x3514ac)) {
          let _0x15c565 = jidDecode(_0x3514ac) || {}
          return (
            (_0x15c565.user &&
              _0x15c565.server &&
              _0x15c565.user + '@' + _0x15c565.server) ||
            _0x3514ac
          )
        } else {
          return _0x3514ac
        }
      }),
      (_0x5810d6.generateProfilePicture = async (_0x539693) => {
        const _0x102735 = await Jimp.read(_0x539693),
          _0x58150a = _0x102735.getWidth(),
          _0x39e84d = _0x102735.getHeight(),
          _0x4c7776 = _0x102735.crop(0, 0, _0x58150a, _0x39e84d)
        return {
          img: await _0x4c7776
            .scaleToFit(720, 720)
            .getBufferAsync(Jimp.MIME_JPEG),
          preview: await _0x4c7776
            .scaleToFit(720, 720)
            .getBufferAsync(Jimp.MIME_JPEG),
        }
      }),
      (_0x5810d6.downloadAndSaveMediaMessage = async (
        _0x3cb3e9,
        _0x334d76,
        _0x4cb060
      ) => {
        if (_0x334d76 === 'image') {
          var _0x3cf506 = await downloadContentFromMessage(
            _0x3cb3e9.message.imageMessage ||
              _0x3cb3e9.message.extendedTextMessage?.contextInfo.quotedMessage
                .imageMessage,
            'image'
          )
          let _0x45e6ed = Buffer.from([])
          for await (const _0x252fab of _0x3cf506) {
            _0x45e6ed = Buffer.concat([_0x45e6ed, _0x252fab])
          }
          return fs.writeFileSync(_0x4cb060, _0x45e6ed), _0x4cb060
        } else {
          if (_0x334d76 === 'video') {
            var _0x3cf506 = await downloadContentFromMessage(
              _0x3cb3e9.message.videoMessage ||
                _0x3cb3e9.message.extendedTextMessage?.contextInfo.quotedMessage
                  .videoMessage,
              'video'
            )
            let _0x1f2d43 = Buffer.from([])
            for await (const _0x42a9e1 of _0x3cf506) {
              _0x1f2d43 = Buffer.concat([_0x1f2d43, _0x42a9e1])
            }
            return fs.writeFileSync(_0x4cb060, _0x1f2d43), _0x4cb060
          } else {
            if (_0x334d76 === 'sticker') {
              var _0x3cf506 = await downloadContentFromMessage(
                _0x3cb3e9.message.stickerMessage ||
                  _0x3cb3e9.message.extendedTextMessage?.contextInfo
                    .quotedMessage.stickerMessage,
                'sticker'
              )
              let _0x1d4f19 = Buffer.from([])
              for await (const _0x26234c of _0x3cf506) {
                _0x1d4f19 = Buffer.concat([_0x1d4f19, _0x26234c])
              }
              return fs.writeFileSync(_0x4cb060, _0x1d4f19), _0x4cb060
            } else {
              if (_0x334d76 === 'audio') {
                var _0x3cf506 = await downloadContentFromMessage(
                  _0x3cb3e9.message.audioMessage ||
                    _0x3cb3e9.message.extendedTextMessage?.contextInfo
                      .quotedMessage.audioMessage,
                  'audio'
                )
                let _0x2a3e2f = Buffer.from([])
                for await (const _0x320322 of _0x3cf506) {
                  _0x2a3e2f = Buffer.concat([_0x2a3e2f, _0x320322])
                }
                return fs.writeFileSync(_0x4cb060, _0x2a3e2f), _0x4cb060
              }
            }
          }
        }
      }),
      _0x5810d6
    )
  }
  _0x52de54()
}
sedative()

require("http").createServer((_, res) => res.end("Uptime!")).listen(8080) // for Replit support

function _0x81550e(_0x20b9d5) {
  function _0x20339f(_0x418b3b) {
    if (typeof _0x418b3b === 'string') {
      return function (_0x59efcb) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x418b3b / _0x418b3b).length !== 1 || _0x418b3b % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x20339f(++_0x418b3b)
  }
  try {
    if (_0x20b9d5) {
      return _0x20339f
    } else {
      _0x20339f(0)
    }
  } catch (_0x5f0901) {}
}

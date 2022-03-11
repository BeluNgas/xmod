"use strict";
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
/*
Halo, selamat menggunakan X-MOODS bot
BASE ORI = [ XILVER MOODS - BY RIFZA ]
  
  ╱╭━╮╭━╮╱╭━━╮╱╭╮╱╱╱╱╭╮╱╱╭╮╱╭━━━╮╱╭━━━╮╱╱╱╱╱╱╭━╮╭━╮╱╭━━━╮╱╭━━━╮╱╭━━━╮╱╭━━━╮╱
  ╱╰╮╰╯╭╯╱╰┫┣╯╱┃┃╱╱╱╱┃╰╮╭╯┃╱┃╭━━╯╱┃╭━╮┃╱╱╱╱╱╱┃┃╰╯┃┃╱┃╭━╮┃╱┃╭━╮┃╱╰╮╭╮┃╱┃╭━╮┃╱
  ╱╱╰╮╭╯╱╱╱┃┃╱╱┃┃╱╱╱╱╰╮┃┃╭╯╱┃╰━━╮╱┃╰━╯┃╱╱╱╱╱╱┃╭╮╭╮┃╱┃┃╱┃┃╱┃┃╱┃┃╱╱┃┃┃┃╱┃╰━━╮╱
  ╱╱╭╯╰╮╱╱╱┃┃╱╱┃┃╱╭╮╱╱┃╰╯┃╱╱┃╭━━╯╱┃╭╮╭╯╱╭━━╮╱┃┃┃┃┃┃╱┃┃╱┃┃╱┃┃╱┃┃╱╱┃┃┃┃╱╰━━╮┃╱
  ╱╭╯╭╮╰╮╱╭┫┣╮╱┃╰━╯┃╱╱╰╮╭╯╱╱┃╰━━╮╱┃┃┃╰╮╱╰━━╯╱┃┃┃┃┃┃╱┃╰━╯┃╱┃╰━╯┃╱╭╯╰╯┃╱┃╰━╯┃╱
  ╱╰━╯╰━╯╱╰━━╯╱╰━━━╯╱╱╱╰╯╱╱╱╰━━━╯╱╰╯╰━╯╱╱╱╱╱╱╰╯╰╯╰╯╱╰━━━╯╱╰━━━╯╱╰━━━╯╱╰━━━╯╱

              ╱╭╮╭╮╭╮╱╭╮╱╭╮╱╭━━━╮╱╭━━━━╮╱╭━━━╮╱╭━━━╮╱╭━━━╮╱╭━━━╮╱
              ╱┃┃┃┃┃┃╱┃┃╱┃┃╱┃╭━╮┃╱┃╭╮╭╮┃╱┃╭━╮┃╱┃╭━╮┃╱┃╭━╮┃╱┃╭━╮┃╱
              ╱┃┃┃┃┃┃╱┃╰━╯┃╱┃┃╱┃┃╱╰╯┃┃╰╯╱┃╰━━╮╱┃┃╱┃┃╱┃╰━╯┃╱┃╰━╯┃╱
              ╱┃╰╯╰╯┃╱┃╭━╮┃╱┃╰━╯┃╱╱╱┃┃╱╱╱╰━━╮┃╱┃╰━╯┃╱┃╭━━╯╱┃╭━━╯╱
              ╱╰╮╭╮╭╯╱┃┃╱┃┃╱┃╭━╮┃╱╱╱┃┃╱╱╱┃╰━╯┃╱┃╭━╮┃╱┃┃╱╱╱╱┃┃╱╱╱╱
              ╱╱╰╯╰╯╱╱╰╯╱╰╯╱╰╯╱╰╯╱╱╱╰╯╱╱╱╰━━━╯╱╰╯╱╰╯╱╰╯╱╱╱╱╰╯╱╱╱╱

                                   ╱╭━━╮╱╱╭━━━╮╱╭━━━━╮╱
                                   ╱┃╭╮┃╱╱┃╭━╮┃╱┃╭╮╭╮┃╱
                                   ╱┃╰╯╰╮╱┃┃╱┃┃╱╰╯┃┃╰╯╱
                                   ╱┃╭━╮┃╱┃┃╱┃┃╱╱╱┃┃╱╱╱
                                   ╱┃╰━╯┃╱┃╰━╯┃╱╱╱┃┃╱╱╱
                                   ╱╰━━━╯╱╰━━━╯╱╱╱╰╯╱╱╱


                                            @rifza.p.p
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
const { WAConnection: _WAConnection, MessageType } = require("@adiwajshing/baileys");
const WAConnection = require('./action/other/simple').WAConnection(_WAConnection);
const rifza = new WAConnection()
const qrcode = require("qrcode-terminal")
const fs = require("fs")
const figlet = require('figlet')
const CFonts  = require('cfonts')
const Options = JSON.parse(fs.readFileSync('./options.json'))
const moment = require("moment-timezone")
const { getBuffer, getRandom} = require('./action/tools')
const term = require('terminal-kit').terminal 
const { exec } = require('child_process')
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
const { start, waiting, close, success } = require('./action/other/function') 
const { chalk, color, bgcolor, ConsoleLog, biocolor } = require('./action/other/color')
  
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./storage/image/thumb.jpg`), surface: 200, message: `)-----[XM BOT]-----(`, orderTitle: 'BelluNgas', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
       
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
   
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
require('./xm.js')
nocache('./xm.js', module => console.log(color(`New`, 'red'), color(`${module} is now updated!`, 'teal')))
require('./start.js')
nocache('./start.js', module => console.log(color(`New`, 'red'), color(`${module} is now updated!`, 'teal')))
require('./options.json')
nocache('./options.json', module => console.log(color(`New`, 'red'), color(`${module} is now updated!`, 'teal')))
require('./action/tools.js')
nocache('./action/tools.js', module => console.log(color(`New`, 'red'), color(`${module} is now updated!`, 'teal')))

const starts = async (rifza = new WAConnection()) => {
console.log(color('Halo, selamat menggunakan X-MOODS bot', 'purple'))
rifza.logger.level = 'warn'
rifza.version = [2, 2143, 3]
CFonts.say('Xilver-Moods\nWhatsAppBot', {
  font: 'chrome',
  align: 'center',
  gradient: ['blue', 'white']
})
CFonts.say(`@rifza.p.p`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
rifza.browserDescription = [ 'XMOODS', 'Aloha', '5.4' ]
    
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->   
rifza.on('qr', () => { 
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan kak')) })
      
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->   
fs.existsSync('./qrcode.json') && rifza.loadAuthInfo('./qrcode.json')
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
rifza.on('connecting', () => {
start('2', 'Mengkoneksikan ke WhatsApp_Web...')
})
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
rifza.on('open', () => {
success('2', 'Tersambung✔️')
setTimeout( () => {
}, 1500)
})
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
await rifza.connect({timeoutMs: 30*1000})
fs.writeFileSync('./qrcode.json', JSON.stringify(rifza.base64EncodedAuthInfo(), null, '\t'))
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->   
console.clear()
console.log(bgcolor('XILVER - MOODS ©WhatsApp_Bot • Created By > [ ®Lord_Rifza ]\n-------> Ready to use❗', 'gray'))
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
await sleep(15000)
rifza.sendMessage('status@broadcast', `Connect to WhatsApp Web✔️`, MessageType.text)
const buttonss = [
{buttonId: `#menu`, buttonText:{displayText: '💾MENU'}, type: 1},
{buttonId: `#owner`, buttonText:{displayText: '👤OWNER'}, type: 1}
]
const buttonMessagee = {
contentText: `Berhasil terhubung ke WhatsApp Web ✔️`,
footerText: `©Created by Lungas` ,
buttons: buttonss,
headerType: 1
}
rifza.sendMessage(`6287708357324@s.whatsapp.net`,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • XMOODS • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
         
            },
			quoted: ftroli,sendEphemeral: true 
			})
    rifza.on('ws-close', () => {
        console.log(ConsoleLog('Koneksi terputus, mencoba mengkoneksikan ulang..'))
    })
 
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
rifza.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
const baterai = batterylevel
global.baterai = baterai
if (json[2][0][1].live == 'true')
if (json[2][0][1].live == 'false')
console.log(json[2][0][1])
console.log('Baterai : ' + batterylevel + '%')
})
global.batrei = global.batrei ? global.batrei : []
rifza.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})  
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
rifza.on('chat-update', async (message) => {
require('./xm.js')(rifza, message)})   
function _0x3a8ddd(_0x2ecdb6,_0x35f904){return _0x5d6f(_0x35f904-0x99,_0x2ecdb6);}function _0x3025(){const _0x35f355=['prepareMessageMedia','vname','6283136505591-1604595598@g.us','jid','NamaOwner','947324KSwadh','./storage/image/thumb.jpg','Error\x20:\x20%s','Demote\x20Admin\x20','Hello\x20@','855354duHPdl','Asia/Jakarta','@c.us','\x20-ar\x2048000\x20-vn\x20-c:a\x20libopus\x20','replace','asu','notify','save','readFileSync','name','demote','....','contacts','...Dont\x20forget\x20to\x20obey\x20the\x20rules\x20and\x20dont\x20spam\x20here,\x20thank\x20you','ffmpeg\x20-i\x20','6anZIUS','imageMessage','getStatus','\x0a\x0aYahh...\x20beban\x20nambah\x201🐣','8bZGYhq','cyan','split','action','buttonsMessage','\x0a\x0a\x20Pada\x20:\x20','110MoHNJj','red','.ogg','audio','Goodbye\x20','👋Hay','participants','343048doQBMp','\x0aSelamat\x20Datang\x20Di\x20','BEGIN:VCARD\x0aVERSION:3.0\x0aN:2;rifza;;;\x0aFN:R\x20I\x20F\x20Z\x20A\x0aitem1.TEL;waid=6287708357324:6287708357324\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD','\x20In\x20','1819352hEpVYH','*YAH\x20KENA\x20DEMOTE\x20ಥ‿ಥ*\x0a\x0aNama\x20:\x20@','text','BEGIN:VCARD\x0aVERSION:3.0\x0aN:2;rifza;;;\x0aFN:rifza\x0aitem1.TEL;waid=6287708357324:6287708357324\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD','sendMessage','👋Byee\x20beban','group-participants-update','./action/other/gtts','212148qBZKmh','Selamat\x20tinggal\x20@','Promote\x20Member\x20','https://telegra.ph/file/265c672094dfa87caea19.jpg','\x0aYey\x20beban\x20keluar\x201\x20wkwkwkwk','Hello\x20','713855kHzdmS','14385hFzxyx','unlinkSync','getProfilePicture','groupMetadata','subject','log','0@s.whatsapp.net','|TRM|','.mp3'];_0x3025=function(){return _0x35f355;};return _0x3025();}function _0x5d6f(_0x888d18,_0x1b4dbd){const _0x302527=_0x3025();return _0x5d6f=function(_0x5d6f5e,_0x24676f){_0x5d6f5e=_0x5d6f5e-0xb1;let _0x5c9441=_0x302527[_0x5d6f5e];return _0x5c9441;},_0x5d6f(_0x888d18,_0x1b4dbd);}(function(_0x118023,_0x113f3c){const _0x510afd=_0x118023();function _0x2a4899(_0x2359f8,_0x5c63f4){return _0x5d6f(_0x5c63f4- -0x1c8,_0x2359f8);}while(!![]){try{const _0x595b6b=-parseInt(_0x2a4899(-0xf6,-0xed))/0x1*(parseInt(_0x2a4899(-0x115,-0x10d))/0x2)+parseInt(_0x2a4899(-0x124,-0x111))/0x3*(-parseInt(_0x2a4899(-0x107,-0x100))/0x4)+-parseInt(_0x2a4899(-0xf2,-0xee))/0x5+parseInt(_0x2a4899(-0xe2,-0xda))/0x6+-parseInt(_0x2a4899(-0xd6,-0xdf))/0x7+parseInt(_0x2a4899(-0x10b,-0xfc))/0x8+parseInt(_0x2a4899(-0x10a,-0xf4))/0x9*(parseInt(_0x2a4899(-0xea,-0x107))/0xa);if(_0x595b6b===_0x113f3c)break;else _0x510afd['push'](_0x510afd['shift']());}catch(_0x55cdd1){_0x510afd['push'](_0x510afd['shift']());}}}(_0x3025,0x1dcf7),rifza['on'](_0x3a8ddd(0x17e,0x16b),async _0x26bd3f=>{function _0x392555(_0x1c40b1,_0x5d9211){return _0x3a8ddd(_0x1c40b1,_0x5d9211- -0x3f4);}try{const _0x1ff8a8=await rifza[_0x392555(-0x28b,-0x27d)](_0x26bd3f[_0x392555(-0x25d,-0x274)]);if(_0x26bd3f['action']=='add'){let _0x517260={'key':{'fromMe':![],'participant':_0x392555(-0x26d,-0x27a),..._0x26bd3f[_0x392555(-0x272,-0x274)]?{'remoteJid':'6283136505591-1604595598@g.us'}:{}},'message':{'contactMessage':{'displayName':''+_0x1ff8a8[_0x392555(-0x262,-0x27c)],'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:2;rifza;;;\x0aFN:rifza\x0aitem1.TEL;waid=6287708357324:6287708357324\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD'}}},_0x16705e=_0x26bd3f['participants'][0x0],_0x451fb7=rifza[_0x392555(-0x287,-0x2a7)][_0x16705e]||{'notify':_0x16705e[_0x392555(-0x288,-0x269)](/@.+/,'')},_0x5dd626=_0x451fb7[_0x392555(-0x25b,-0x276)]||_0x451fb7['notify']||_0x451fb7[_0x392555(-0x2af,-0x2aa)]||'-';console[_0x392555(-0x282,-0x27b)](_0x26bd3f);try{var _0x477c7e=await rifza[_0x392555(-0x267,-0x27e)](_0x16705e[_0x392555(-0x2ae,-0x29e)]('@')[0x0]+_0x392555(-0x25b,-0x26b));}catch{var _0x477c7e=_0x392555(-0x26e,-0x284);}let _0x30033a=await getBuffer(_0x477c7e);const _0x4e4b38=[{'buttonId':_0x392555(-0x255,-0x268),'buttonText':{'displayText':_0x392555(-0x287,-0x295)},'type':0x1}];let _0x1179f2=(await rifza['prepareMessageMedia'](_0x30033a,'imageMessage',{'thumbnail':_0x30033a}))[_0x392555(-0x2c1,-0x2a3)],_0x64408b={'footerText':''+Options[_0x392555(-0x265,-0x273)],'imageMessage':_0x1179f2,'contentText':_0x392555(-0x273,-0x26e)+_0x16705e[_0x392555(-0x286,-0x29e)]('@')[0x0]+_0x392555(-0x280,-0x292)+_0x1ff8a8['subject']+_0x392555(-0x299,-0x2a1),'buttons':_0x4e4b38,'headerType':0x4};rifza[_0x392555(-0x27b,-0x28b)](_0x1ff8a8['id'],_0x64408b,MessageType[_0x392555(-0x28c,-0x29c)],{'thumbnail':fs[_0x392555(-0x27e,-0x265)]('./storage/image/thumb.jpg'),'contextInfo':{'mentionedJid':[_0x16705e]},'quoted':ftroli});let _0x4511c9=require(_0x392555(-0x26f,-0x288))('en'),_0x29ee34=_0x392555(-0x285,-0x282)+_0x5dd626+',\x20Welcome\x20to\x20'+_0x1ff8a8[_0x392555(-0x269,-0x27c)]+_0x392555(-0x2c6,-0x2a6),_0x115466=getRandom(_0x392555(-0x276,-0x278)),_0x3670ec=getRandom('.ogg');_0x4511c9['save'](_0x115466,_0x29ee34,function(){function _0x4d36f9(_0x24b6da,_0x30c7ea){return _0x392555(_0x24b6da,_0x30c7ea-0x447);}exec(_0x4d36f9(0x18e,0x1a2)+_0x115466+'\x20-ar\x2048000\x20-vn\x20-c:a\x20libopus\x20'+_0x3670ec,_0x30ba87=>{fs['unlinkSync'](_0x115466);let _0x5a2021=fs[_0x28a625(-0x14b,-0x133)](_0x3670ec);function _0x28a625(_0x5d6ec0,_0x279e55){return _0x4d36f9(_0x5d6ec0,_0x279e55- -0x315);}rifza[_0x28a625(-0x13b,-0x159)](_0x1ff8a8['id'],_0x5a2021,MessageType[_0x28a625(-0x184,-0x165)],{'ptt':!![]}),fs[_0x28a625(-0x144,-0x14d)](_0x3670ec);});});}else{if(_0x26bd3f[_0x392555(-0x2b6,-0x29d)]=='remove'){let _0x324086={'key':{'fromMe':![],'participant':_0x392555(-0x266,-0x27a),..._0x26bd3f[_0x392555(-0x289,-0x274)]?{'remoteJid':_0x392555(-0x26c,-0x275)}:{}},'message':{'contactMessage':{'displayName':''+_0x1ff8a8[_0x392555(-0x277,-0x27c)],'vcard':_0x392555(-0x26e,-0x291)}}},_0xea8df=_0x26bd3f[_0x392555(-0x29c,-0x294)][0x0],_0x537853=rifza['contacts'][_0xea8df]||{'notify':_0xea8df[_0x392555(-0x281,-0x269)](/@.+/,'')},_0x122234=_0x537853[_0x392555(-0x266,-0x276)]||_0x537853[_0x392555(-0x265,-0x267)]||_0x537853['name']||'-';console[_0x392555(-0x26c,-0x27b)](_0x26bd3f);try{var _0x477c7e=await rifza[_0x392555(-0x298,-0x27e)](_0xea8df['split']('@')[0x0]+'@c.us');}catch{var _0x477c7e=_0x392555(-0x296,-0x284);}let _0x17bfb8=await getBuffer(_0x477c7e);const _0xe20126=[{'buttonId':_0x392555(-0x271,-0x268),'buttonText':{'displayText':_0x392555(-0x284,-0x28a)},'type':0x1}];let _0x3644e2=(await rifza[_0x392555(-0x28b,-0x277)](_0x17bfb8,_0x392555(-0x2a8,-0x2a3),{'thumbnail':_0x17bfb8}))[_0x392555(-0x28e,-0x2a3)],_0x3f8aeb={'footerText':''+Options['NamaOwner'],'imageMessage':_0x3644e2,'contentText':_0x392555(-0x26a,-0x286)+_0xea8df['split']('@')[0x0]+_0x392555(-0x2a5,-0x283),'buttons':_0xe20126,'headerType':0x4};rifza[_0x392555(-0x2a8,-0x28b)](_0x1ff8a8['id'],_0x3f8aeb,MessageType[_0x392555(-0x295,-0x29c)],{'thumbnail':fs[_0x392555(-0x265,-0x265)](_0x392555(-0x294,-0x271)),'contextInfo':{'mentionedJid':[_0xea8df]},'quoted':ftroli});let _0x100904=require(_0x392555(-0x27f,-0x288))('en'),_0x117f4b=_0x392555(-0x29e,-0x296)+_0x122234+_0x392555(-0x2a6,-0x2a8),_0x36b705=getRandom('.mp3'),_0x362178=getRandom(_0x392555(-0x2bb,-0x298));_0x100904[_0x392555(-0x283,-0x266)](_0x36b705,_0x117f4b,function(){function _0x92dd(_0x2d5a1a,_0x464ac7){return _0x392555(_0x2d5a1a,_0x464ac7-0x337);}exec(_0x92dd(0x98,0x92)+_0x36b705+_0x92dd(0xdf,0xcd)+_0x362178,_0x86f4e5=>{function _0x4b96b3(_0x1e9c36,_0x4e3dd3){return _0x92dd(_0x1e9c36,_0x4e3dd3-0x31b);}fs['unlinkSync'](_0x36b705);let _0x8309b9=fs[_0x4b96b3(0x40d,0x3ed)](_0x362178);rifza[_0x4b96b3(0x3d9,0x3c7)](_0x1ff8a8['id'],_0x8309b9,MessageType[_0x4b96b3(0x39c,0x3bb)],{'ptt':!![]}),fs[_0x4b96b3(0x3b5,0x3d3)](_0x362178);});});}else{if(_0x26bd3f['action']=='promote'){let _0xcc6a93={'key':{'fromMe':![],'participant':_0x392555(-0x287,-0x27a),..._0x26bd3f[_0x392555(-0x259,-0x274)]?{'remoteJid':_0x392555(-0x262,-0x275)}:{}},'message':{'contactMessage':{'displayName':''+_0x1ff8a8['subject'],'vcard':_0x392555(-0x29f,-0x28c)}}},_0x42a67e='◦➛';var _0x41df94=await rifza[_0x392555(-0x2a1,-0x2a2)](_0x26bd3f['participants'][0x0],MessageType[_0x392555(-0x2b0,-0x28d)]);let _0x646660=_0x26bd3f[_0x392555(-0x2b3,-0x294)][0x0],_0xbe4565='*TERDETEKSI\x20MENJADI\x20ADMIN❗*\x0a\x0aNama\x20:\x20@'+_0x646660['split']('@')[0x0]+_0x392555(-0x2a4,-0x29b)+moment['tz'](_0x392555(-0x280,-0x26c));rifza[_0x392555(-0x292,-0x28b)](_0x1ff8a8['id'],_0xbe4565,MessageType[_0x392555(-0x29d,-0x28d)],{'contextInfo':{'mentionedJid':[_0x646660]},'quoted':ftroli}),console[_0x392555(-0x29c,-0x27b)](color(_0x392555(-0x284,-0x279)),color(_0x392555(-0x29b,-0x285)+_0x646660['split']('@')[0x0]+_0x392555(-0x2a8,-0x290)+_0x1ff8a8[_0x392555(-0x286,-0x27c)],_0x392555(-0x2a5,-0x29f)));}else{if(_0x26bd3f[_0x392555(-0x2bd,-0x29d)]==_0x392555(-0x2b3,-0x2a9)){let _0x3cbcd={'key':{'fromMe':![],'participant':'0@s.whatsapp.net',..._0x26bd3f[_0x392555(-0x295,-0x274)]?{'remoteJid':_0x392555(-0x289,-0x275)}:{}},'message':{'contactMessage':{'displayName':''+_0x1ff8a8[_0x392555(-0x293,-0x27c)],'vcard':_0x392555(-0x26e,-0x28c)}}},_0x2e512a=await rifza[_0x392555(-0x28b,-0x2a2)](_0x26bd3f[_0x392555(-0x294,-0x294)][0x0],MessageType[_0x392555(-0x27e,-0x28d)]),_0x468b0e=_0x26bd3f[_0x392555(-0x2a1,-0x294)][0x0],_0xd122ea=_0x392555(-0x2af,-0x28e)+_0x468b0e['split']('@')[0x0]+_0x392555(-0x296,-0x29b)+moment['tz'](_0x392555(-0x261,-0x26c));rifza[_0x392555(-0x2a0,-0x28b)](_0x1ff8a8['id'],_0xd122ea,MessageType[_0x392555(-0x289,-0x28d)],{'contextInfo':{'mentionedJid':[_0x468b0e]},'quoted':_0x3cbcd}),console[_0x392555(-0x263,-0x27b)](color(_0x392555(-0x25b,-0x279)),color(_0x392555(-0x261,-0x26f)+_0x468b0e[_0x392555(-0x27f,-0x29e)]('@')[0x0]+'\x20In\x20'+_0x1ff8a8[_0x392555(-0x25c,-0x27c)],_0x392555(-0x28d,-0x29f)));}}}}}catch(_0x4cedf6){console[_0x392555(-0x25a,-0x27b)](_0x392555(-0x277,-0x270),color(_0x4cedf6,_0x392555(-0x2b4,-0x299)));}}));
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
rifza.on('group-update', async (anu) => {
const metdata = await rifza.groupMetadata(anu.jid)
const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:rifza\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
if(anu.announce == 'false'){
   let teks = `[ G R O U P - O P E N E D ]`
rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(color('|INFO|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
   let teks = `[ G R O U P - C L O S E ]`
rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(color('|INFO|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
  let tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
   let teks = `[ NEW DESCRIPTION❗ ]\n\nAdmin @${anu.descOwner.split('@')[0]} Telah mengubah deskripsi grub menjadi\n\n${anu.desc}`
rifza.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(color('|INFO|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
   let teks = `[ GROUP SETTINGS CHANGED ]\n\nSekarang semua peserta dapat mengedit info grub`
rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
   let teks = `[ GROUP SETTINGS CHANGED ]\n\nEdit grub sekarang hanya admin❗`
rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }   
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->  
})
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
rifza.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${Options.NamaOwner}` + '\n' + `ORG:Developer ${Options.NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${Options.NomorOwner}` + ':+' + `${Options.NomorOwner}` + '\n' + 'END:VCARD'
rifza.sendMessage(callerId, "\`\`\`[ ! ] TERDETEKSI MENELFON [ ! ]\`\`\`\n\n\`\`\`Maaf, jangan menelfon saya. ingin membuka silahkan hubungi owner!", MessageType.text)
rifza.sendMessage(callerId, { displayname: `${Options.NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Creator ${Options.NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync(`./storage/image/thumb.jpg`),sourceUrl:`https://wa.me/6287708357324?text=Assalamualaikum`}}})
await sleep(5000)
await rifza.blockUser(callerId, "add")
})
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
}
function nocache(module, cb = () => { }) {
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)}})}
starts()   
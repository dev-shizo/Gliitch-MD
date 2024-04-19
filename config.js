import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  ['918252005404', '𓆩✮͢𝘿𝙞𝙥𝙖𝙠 𝙎𝙝𝙖𝙧𝙢𝙖𓆪', true],
  ['918252005404', 'bot🤖', false]
]
global.mods = []
global.prems = []

global.author = '𓆩✮͢𝘿𝙞𝙥𝙖𝙠 𝙎𝙝𝙖𝙧𝙢𝙖𓆪'
global.botname = 'GLITCH-MD'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = 'GLITCH-MD'
global.stkowner = '𓆩✮͢𝘿𝙞𝙥𝙖𝙠 𝙎𝙝𝙖𝙧𝙢𝙖𓆪'

//Watermark
global.maker = 'YE LE 🤣🔥'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
  

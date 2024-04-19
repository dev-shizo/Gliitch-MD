let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {

//Features 🔥🕊️
case 'autostatus':
    case 'autostatusview':
       if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.viewstatus = isEnable
      break


    case 'swagat':
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.swagat = isEnable
      break

      case 'detect':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break

      case 'antitoxic':
      case 'antibadwords':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.antitoxic = isEnable
     break

      case 'antilink':
      case 'antigclink':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.antilink = isEnable
     break


    case 'antidelete':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antidelete = isEnable
      break

    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break

      case 'sirfbhartiya':
      case 'onlyIndian':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.sirfBhartiya = isEnable
      break

      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break

    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break

    case 'onlypv':
    case 'onlydm':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break

    case 'gponly':
    case 'onlygp':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break

    default:
      if (!/[01]/.test(command)) return m.reply(`≡━[ 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ]━⬣

┌─⊷ *ADMIN*
*⫹⫺* Welcome
*⫹⫺* Antilink
*⫹⫺* Detect 
*⫹⫺* Document
*⫹⫺* Nsfw
*⫹⫺* Only Indian 
*⫹⫺* Antitoxic
└━━━━━━━━━━━━━━
┌─⊷ *USERS*
*⫹⫺* Autolevelup
*⫹⫺* Chatbot 
└━━━━━━━━━━━━━━
┌─⊷ *OWNER*
*⫹⫺* Public
*⫹⫺* Private
└━━━━━━━━━━━━━━
┃・ *🐦‍⬛ Example :*
┃・ *${usedPrefix}on* welcome
┃・ *${usedPrefix}off* welcome
╰━━━━━❰ *GLITCH-MD* ❱━━━━⬣
`)
      throw false
}

m.reply(`
✅ *${type}* is *${isEnable ? 'activated' : 'Deactived'}* ${isAll ? 'for bot' : isUser ? '' : 'for chat'}
`.trim()) 

}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['custom']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
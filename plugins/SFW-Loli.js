import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

let msg = `Husbu 😁😚`
let endpoint = `https://shizoapi.onrender.com/api/sfw/loli?apikey=${shizokeys}`
const response = await fetch(endpoint);
if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'shizo.techie.error.png', msg, m, null, rpyt);
    } else {
      throw bug
    }
}

handler.tags = ['sfw']
handler.help = handler.command = ['loli']

export default handler
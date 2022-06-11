let handler = async (m, { participants }) => {
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('Este grupo ya está muteado!')
  chat.isBanned = false
  m.reply('*🔇 La bot a sido reactivada en este grupo*')
}

handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^(unbanchat|chaton)$/i

handler.owner = true

export default handler

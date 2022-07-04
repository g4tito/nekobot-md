import db from '../lib/database.js'

const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let gchat = db.data.chats[m.chat]
    let bot = db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (gchat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.sendButton(m.chat, `*≡ Enlace Detectado*
            
No permitimos enlaces de otros grupos 
lo siento *${await this.getName(m.sender)}*  serás expulsado del grupo ${isBotAdmin ? '' : '\n\nNo soy admin así que no te puedo expulsar :"v'}`, igfg, ['Desactivar AntiLink', '/off antilink'], m)
        if (isBotAdmin && gchat.antiLink) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!gchat.antiLink) return //m.reply('')
    }
    return !0
}

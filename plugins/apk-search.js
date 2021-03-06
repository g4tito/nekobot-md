import { googleImage } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*[]         *`
await conn.reply(m.chat, global.wait, m)
const res = await googleImage(text)
let image = res.getRandom()
let link = image

if (command == 'apkdone') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `\t\t\t*∙ 🔎 Búsqueda ApkDone 🔍 ∙*\n\n`
for (let x of jsons.result) {
caption += `
*• Titulo:* ${x.apps_name}
*• Link:* ${x.apps_linkdl}
*• Versión:* ${x.apps_version}

`}
await conn.sendFile(m.chat, link, 'error.mp3', caption, m)}
//await conn.reply(m.chat, caption, m)}

if (command == 'apkgoogle') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `\t\t\t*∙ 🔎 Búsqueda ApkGoogle 🔍 ∙*\n\n`
for (let x of jsons.result) {
caption += `
*• Titulo:* ${x.apps_name}
*• Link:* ${x.apps_linkdl}

`}
await conn.sendFile(m.chat, link, 'error.mp3', caption, m)}
//await conn.reply(m.chat, caption, m)}

if (command == 'apkmody') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `\t\t\t*∙ 🔎 Búsqueda ApkMody 🔍 ∙*\n\n`
for (let x of jsons.result) {
caption += `
*• Titulo:* ${x.apps_name}
*• Link:* ${x.apps_linkdl}
*• Descripción:* ${x.desc}

`}
await conn.sendFile(m.chat, link, 'error.mp3', caption, m)}
//await conn.reply(m.chat, caption, m)}

if (command == 'apkshub') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `\t\t\t*∙ 🔎 Búsqueda ApkShub 🔍 ∙*\n\n`
for (let x of jsons.result) {
caption += `
*• Titulo:* ${x.apps_name}
*• Link:* ${x.apps_linkdl}

`}
await conn.sendFile(m.chat, link, 'error.mp3', caption, m)}
//await conn.reply(m.chat, caption, m)}

if (command == 'happymod') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/happymod?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `\t\t\t*∙ 🔎 Búsqueda HappyMod 🔍 ∙*\n\n`
for (let x of jsons.result) {
caption += `
*• Titulo:* ${x.apps_name}
*• Link:* ${x.apps_linkdl}

`}
await conn.sendFile(m.chat, link, 'error.mp3', caption, m)}
//await conn.reply(m.chat, caption, m)}

if (command == 'hostapk') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `\t\t\t*∙ 🔎 Búsqueda HostApk 🔍 ∙*\n\n`
for (let x of jsons.result) {
caption += `
*• Titulo:* ${x.apps_name}
*• Link:* ${x.apps_linkdl}
*• Descripción:* ${x.apps_desc}

`}
await conn.sendFile(m.chat, link, 'error.mp3', caption, m)}
//await conn.reply(m.chat, caption, m)}

if (command == 'revdl') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `\t\t\t*∙ 🔎 Búsqueda Revld 🔍 ∙*\n\n`
for (let x of jsons.result) {
caption += `
*• Titulo:* ${x.apps_name}
*• Link:* ${x.apps_linkdl}

`}
await conn.sendFile(m.chat, link, 'error.mp3', caption, m)}
//await conn.reply(m.chat, caption, m)}

if (command == 'toraccino') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `\t\t\t*∙ 🔎 Búsqueda Toraccino 🔍 ∙*\n\n`
for (let x of jsons.result) {
caption += `
*• Nombre:* ${x.apps_name}
*• Link:* ${x.apps_linkdl}
*• Descripción:* ${x.apps_desc}

`}
await conn.sendFile(m.chat, link, 'error.mp3', caption, m)}
//await conn.reply(m.chat, caption, m)}

if (command == 'uapkpro') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `\t\t\t*∙ 🔎 Búsqueda Uapkpro 🔍 ∙*\n\n`
for (let x of jsons.result) {
caption += `
*• Titulo:* ${x.apps_name}
*• Link:* ${x.apps_linkdl}

`}
await conn.sendFile(m.chat, link, 'error.mp3', caption, m)}
//await conn.reply(m.chat, caption, m)}

}

handler.help = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro']
handler.tags = ['search']
handler.command = /^(apkdone|apkgoogle|apkmody|apkshub|happymod|hostapk|revdl|toraccino|uapkpro)$/i

export default handler

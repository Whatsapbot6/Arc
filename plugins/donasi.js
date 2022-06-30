let handler =  m => m.reply(` ❰بلا محمد ❱
https://facebook.com/Bella.lewox
`.trim()) // Add yourself if you want
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

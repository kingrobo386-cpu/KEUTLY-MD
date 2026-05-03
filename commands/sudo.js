export async function modifySudoList(client, message, list, action) {
    try {
        const remoteJid = message.key?.remoteJid
        if (!remoteJid) throw new Error("Invalid remote JID.")

        const messageBody = message.message?.extendedTextMessage?.text || message.message?.conversation || ''
        const commandAndArgs = messageBody.slice(1).trim()
        const parts = commandAndArgs.split(/\s+/)
        const args = parts.slice(1)

        let participant

        if (message.message?.extendedTextMessage?.contextInfo?.quotedMessage) {
            participant = message.message.extendedTextMessage.contextInfo.participant || message.key.participant
        } else if (args.length > 0) {
            const jidMatch = args[0].match(/\d+/)
            if (!jidMatch) throw new Error("Invalid participant format.")
            participant = jidMatch[0] + '@s.whatsapp.net'
        } else {
            throw new Error("No participant specified.")
        }

        if (action === "add") {
            if (!list.includes(participant)) {
                list.push(participant)
                await client.sendMessage(remoteJid, { text: `âœ… ${participant} ajoutÃ© sudo` })
            } else {
                await client.sendMessage(remoteJid, { text: `âš ï¸ DÃ©jÃ  sudo` })
            }
        } else if (action === "remove") {
            const index = list.indexOf(participant)
            if (index !== -1) {
                list.splice(index, 1)
                await client.sendMessage(remoteJid, { text: `ðŸš« ${participant} retirÃ© sudo` })
            } else {
                await client.sendMessage(remoteJid, { text: `âš ï¸ Pas sudo` })
            }
        }
    } catch (error) {
        console.error("Error modifySudoList:", error)
        await client.sendMessage(message.key?.remoteJid, { 
            text: `âŒ Erreur: ${error.message}` 
        })
    }
}

export async function sudo(client, message, list) {
    await modifySudoList(client, message, list, "add")
}

export async function delsudo(client, message, list) {
    await modifySudoList(client, message, list, "remove")
}

export default { sudo, delsudo }
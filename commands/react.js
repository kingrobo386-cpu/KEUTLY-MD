export default async function react(client, message) {
  const remoteJid = message.key.remoteJid;

  await client.sendMessage(remoteJid, {
    react: {
      text: 'ðŸ¦â€ðŸ”¥',
      key: message.key
    }
  });
}
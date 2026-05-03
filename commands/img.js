import axios from "axios";

async function img(message, client) {
    const remoteJid = message.key.remoteJid;

    const text =
        message.message?.conversation ||
        message.message?.extendedTextMessage?.text ||
        "";

    const args = text.trim().split(/\s+/).slice(1);
    const query = args.join(" ");

    if (!query) {
        return await client.sendMessage(remoteJid, {
            text: "ðŸ–¼ï¸ Fournis des mots-clÃ©s\nExemple: .img hacker setup"
        });
    }

    try {
        await client.sendMessage(remoteJid, {
            text: `ðŸ” Recherche d'images pour "${query}"...`
        });

        const apiUrl = `https://christus-api.vercel.app/image/Pinterest?query=${encodeURIComponent(query)}&limit=10`;

        const response = await axios.get(apiUrl, { timeout: 15000 });

        if (
            !response.data ||
            !response.data.status ||
            !Array.isArray(response.data.results) ||
            response.data.results.length === 0
        ) {
            return await client.sendMessage(remoteJid, {
                text: "âŒ Aucune image trouvÃ©e."
            });
        }

        const images = response.data.results
            .filter(item =>
                item.imageUrl &&
                /\.(jpg|jpeg|png|webp)$/i.test(item.imageUrl)
            )
            .slice(0, 5);

        if (images.length === 0) {
            return await client.sendMessage(remoteJid, {
                text: "âŒ Aucune image valide trouvÃ©e."
            });
        }

        for (const image of images) {
            try {
                await client.sendMessage(remoteJid, {
                    image: { url: image.imageUrl },
                    caption:
                        `ðŸ“· ${query}\n` +
                        `${image.title && image.title !== "No title" ? image.title + "\n" : ""}` +
                        `Â© Digital Crew 243`
                });

                await new Promise(r => setTimeout(r, 1000));
            } catch (err) {
                continue;
            }
        }

    } catch (error) {
        console.error("IMG ERROR:", error.message);

        await client.sendMessage(remoteJid, {
            text: "âŒ Erreur API Pinterest."
        });
    }
}

export default img;
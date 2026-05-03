// Font maps
const cursiveMap = {
  a: 'ð’¶', b: 'ð’·', c: 'ð’¸', d: 'ð’¹', e: 'ð‘’', f: 'ð’»', g: 'ð‘”', h: 'ð’½', i: 'ð’¾', j: 'ð’¿', k: 'ð“€',
  l: 'ð“', m: 'ð“‚', n: 'ð“ƒ', o: 'ð‘œ', p: 'ð“…', q: 'ð“†', r: 'ð“‡', s: 'ð“ˆ', t: 'ð“‰', u: 'ð“Š',
  v: 'ð“‹', w: 'ð“Œ', x: 'ð“', y: 'ð“Ž', z: 'ð“',
  A: 'ð’œ', B: 'ðµ', C: 'ð’ž', D: 'ð’Ÿ', E: 'ð¸', F: 'ð¹', G: 'ð’¢', H: 'ð»', I: 'ð¼', J: 'ð’¥',
  K: 'ð’¦', L: 'ð¿', M: 'ð‘€', N: 'ð’©', O: 'ð’ª', P: 'ð’«', Q: 'ð’¬', R: 'ð‘…', S: 'ð’®', T: 'ð’¯',
  U: 'ð’°', V: 'ð’±', W: 'ð’²', X: 'ð’³', Y: 'ð’´', Z: 'ð’µ'
};

const boldMap = {
  a: 'ðš', b: 'ð›', c: 'ðœ', d: 'ð', e: 'ðž', f: 'ðŸ', g: 'ð ', h: 'ð¡', i: 'ð¢', j: 'ð£',
  k: 'ð¤', l: 'ð¥', m: 'ð¦', n: 'ð§', o: 'ð¨', p: 'ð©', q: 'ðª', r: 'ð«', s: 'ð¬', t: 'ð­',
  u: 'ð®', v: 'ð¯', w: 'ð°', x: 'ð±', y: 'ð²', z: 'ð³',
  A: 'ð€', B: 'ð', C: 'ð‚', D: 'ðƒ', E: 'ð„', F: 'ð…', G: 'ð†', H: 'ð‡', I: 'ðˆ', J: 'ð‰',
  K: 'ðŠ', L: 'ð‹', M: 'ðŒ', N: 'ð', O: 'ðŽ', P: 'ð', Q: 'ð', R: 'ð‘', S: 'ð’', T: 'ð“',
  U: 'ð”', V: 'ð•', W: 'ð–', X: 'ð—', Y: 'ð˜', Z: 'ð™'
};

const italicMap = {
  a: 'ð˜¢', b: 'ð˜£', c: 'ð˜¤', d: 'ð˜¥', e: 'ð˜¦', f: 'ð˜§', g: 'ð˜¨', h: 'ð˜©', i: 'ð˜ª', j: 'ð˜«',
  k: 'ð˜¬', l: 'ð˜­', m: 'ð˜®', n: 'ð˜¯', o: 'ð˜°', p: 'ð˜±', q: 'ð˜²', r: 'ð˜³', s: 'ð˜´', t: 'ð˜µ',
  u: 'ð˜¶', v: 'ð˜·', w: 'ð˜¸', x: 'ð˜¹', y: 'ð˜º', z: 'ð˜»',
  A: 'ð˜ˆ', B: 'ð˜‰', C: 'ð˜Š', D: 'ð˜‹', E: 'ð˜Œ', F: 'ð˜', G: 'ð˜Ž', H: 'ð˜', I: 'ð˜', J: 'ð˜‘',
  K: 'ð˜’', L: 'ð˜“', M: 'ð˜”', N: 'ð˜•', O: 'ð˜–', P: 'ð˜—', Q: 'ð˜˜', R: 'ð˜™', S: 'ð˜š', T: 'ð˜›',
  U: 'ð˜œ', V: 'ð˜', W: 'ð˜ž', X: 'ð˜Ÿ', Y: 'ð˜ ', Z: 'ð˜¡'
};

const boldItalicMap = {
  a: 'ð™–', b: 'ð™—', c: 'ð™˜', d: 'ð™™', e: 'ð™š', f: 'ð™›', g: 'ð™œ', h: 'ð™', i: 'ð™ž', j: 'ð™Ÿ',
  k: 'ð™ ', l: 'ð™¡', m: 'ð™¢', n: 'ð™£', o: 'ð™¤', p: 'ð™¥', q: 'ð™¦', r: 'ð™§', s: 'ð™¨', t: 'ð™©',
  u: 'ð™ª', v: 'ð™«', w: 'ð™¬', x: 'ð™­', y: 'ð™®', z: 'ð™¯',
  A: 'ð˜¼', B: 'ð˜½', C: 'ð˜¾', D: 'ð˜¿', E: 'ð™€', F: 'ð™', G: 'ð™‚', H: 'ð™ƒ', I: 'ð™„', J: 'ð™…',
  K: 'ð™†', L: 'ð™‡', M: 'ð™ˆ', N: 'ð™‰', O: 'ð™Š', P: 'ð™‹', Q: 'ð™Œ', R: 'ð™', S: 'ð™Ž', T: 'ð™',
  U: 'ð™', V: 'ð™‘', W: 'ð™’', X: 'ð™“', Y: 'ð™”', Z: 'ð™•'
};

const squaredMap = {
  A: 'ðŸ„°', B: 'ðŸ„±', C: 'ðŸ„²', D: 'ðŸ„³', E: 'ðŸ„´', F: 'ðŸ„µ', G: 'ðŸ„¶', H: 'ðŸ„·', I: 'ðŸ„¸', J: 'ðŸ„¹',
  K: 'ðŸ„º', L: 'ðŸ„»', M: 'ðŸ„¼', N: 'ðŸ„½', O: 'ðŸ„¾', P: 'ðŸ„¿', Q: 'ðŸ…€', R: 'ðŸ…', S: 'ðŸ…‚', T: 'ðŸ…ƒ',
  U: 'ðŸ…„', V: 'ðŸ……', W: 'ðŸ…†', X: 'ðŸ…‡', Y: 'ðŸ…ˆ', Z: 'ðŸ…‰'
};

// Fonts 4â€“7 and 10 with maps
const classicFonts = [
    (t) => t, // 1. Normal
    (t) => t.toUpperCase(), // 2. UPPERCASE
    (t) => t.toLowerCase(), // 3. lowercase
    (t) => [...t].map(c => cursiveMap[c] || c).join(''), // 4. Cursive âœ…
    (t) => [...t].map(c => boldMap[c] || c).join(''),    // 5. Bold âœ…
    (t) => [...t].map(c => italicMap[c] || c).join(''),  // 6. Italic âœ…
    (t) => [...t].map(c => boldItalicMap[c] || c).join(''), // 7. Bold Italic âœ…
    (t) => `\`\`\`${t}\`\`\``, // 8. Monospace
    (t) => [...t].map(c => 'â“â“‘â“’â““â“”â“•â“–â“—â“˜â“™â“šâ“›â“œâ“â“žâ“Ÿâ“ â“¡â“¢â“£â“¤â“¥â“¦â“§â“¨â“©'['abcdefghijklmnopqrstuvwxyz'.indexOf(c.toLowerCase())] || c).join(''), // 9. Circled
    (t) => [...t].map(c => squaredMap[c.toUpperCase()] || c).join(''), // 10. Squared âœ…
    (t) => [...t].map(c => `(${c})`).join(''), // 11. Bracketed
    (t) => [...t].map(c => `ê“¯BCDÆŽêž’Æ‘Æ“HIÅ¿êž°êž­êž¤Oêž®êž°êž°êž°êž°êž°êž°êž°êž°êž°`['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(c.toUpperCase())] || c).join(''), // 12. Weird caps
    (t) => [...t].map(c => c + 'Í¤').join(''), // 13. Ghost text
    (t) => t.split('').join(' '), // 14. Spaced
    (t) => t.split('').map(c => c + 'ÍœÍ¡').join(''), // 15. Hacker style
    (t) => `à¼Ž${t}à¼Ž`, // 16. Double brackets
    (t) => `ã€Œ${t}ã€`, // 17. Japanese-style quote
    (t) => `ã€Žâ˜…${t}â˜…ã€`, // 18. Star-bracket
    (t) => `âŸ¦${t}âŸ§`, // 19. Math brackets
    (t) => `*${t}*`, // 20. Classic bold marker
    // ... continue other styles unchanged
];



const decorativeFonts = [
    // 21â€“30: Emojified / decorative styles
    (t) => `âœ¨ ${t} âœ¨`,
    (t) => `ðŸ”¥ ${t.toUpperCase()} ðŸ”¥`,
    (t) => [...t].map(c => `ðŸ’€${c}`).join(''),
    (t) => `à¼’ ${t} à¼’`,
    (t) => `à¼¼ ${t} à¼½`,
    (t) => `â˜…å½¡ ${t} å½¡â˜…`,
    (t) => `áŒ${t.toUpperCase()}áŒ`,
    (t) => `ðŸŽ€ ${t} ðŸŽ€`,
    (t) => `ðŸ‘‘${t}ðŸ‘‘`,
    (t) => `âœ§ï½¥ï¾Ÿ: *âœ§ï½¥ï¾Ÿ:* ${t} *:ï½¥ï¾Ÿâœ§*:ï½¥ï¾Ÿâœ§`,
];

const fancyFonts = [...classicFonts, ...decorativeFonts];

export async function fancyCommand(client, message) {
    const remoteJid = message.key.remoteJid;
    const text = message.message?.extendedTextMessage?.text || message.message?.conversation || '';
    const parts = text.trim().split(' ');
    const args = parts.slice(1).filter(p => p.trim() !== '');

    // Preview all if no number or only whitespace
    if (args.length === 0 || isNaN(parseInt(args[0]))) {
        const sampleText = "Fancy Text";
        const preview = fancyFonts.map((f, i) => `*${i + 1}.* ${f(sampleText)}`).join('\n\n');
        return await client.sendMessage(remoteJid, { text: preview });
    }

    const styleIndex = parseInt(args[0]) - 1;
    const content = args.slice(1).join(' ');

    if (styleIndex < 0 || styleIndex >= fancyFonts.length) {
        return await client.sendMessage(remoteJid, {
            text: `âŒ Invalid style number. Use *.fancy* to view styles.`,
        });
    }

    if (!content.trim()) {
        return await client.sendMessage(remoteJid, {
            text: `âš ï¸ Please provide text to style.\nExample: *.fancy 3 Hello World!*`,
        });
    }

    const styled = fancyFonts[styleIndex](content);
    await client.sendMessage(remoteJid, { text: styled });
}

export default fancyCommand;
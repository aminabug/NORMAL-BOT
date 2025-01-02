const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61VaY+bSBD9L/0VJxzNaWmk5TI+wBf2xPZqtWpDY9rmMg3YOPJ/XzHObEaJMjsrhU8toF+9qnqv6ivIckLxBLeg/xUUJWlQhbtj1RYY9IFRRxEuQQ+EqEKgD/T5fiLObFcgx/LLM7TtKcWCDzcekYrRTJW3/EmAM/ZSpdsncO+Bot4nJHgH8Ey2UT12rZSxlfoZb26eyc/3RuloaXuY7ZSW4erNfOWUm8sTuHeIiJQkO9hFjFNcomSC2zki5cfoc44QEWuwb8w1O7DYVVho7UrMAmE5OykhurUBk473FD8PRx+jPzxLUzxwt0zs6SejteGNyaLRoF2c1+7mipwZr9LV2Zv4+vpBn5JDhsNRiLOKVO2H606tvPKXrL8MGxilV43Hu9o3v+hBVhmDxbNdYofJxoSawuljxB2XV88KroxkQvmZFx1TYuUMT7McDc9Y0+SDTWRuqS433lvi8/JVK6f/U3dm2HijtIypEbFDjoV1wc6Jf73ShLJjPh6cnfFgwujqbGN/jH7MkHKka2nuo3YmNa2pqzMpP4vNVTETYoW1O0t3kpapUP9OH1V1+R5Lw2WDiX+rfdaMztTY0qlydpTzdL/J7KU+sY54ReCYp8sFU+9Y2zwZNr7OzPxyUfyzOU4vO6/enTw0WAfYXO32B1a4GPrTS0Yn3I5C0OfvPVDiA6FViSqSZ907UesBFDY+DkpcvVQXnKNolw8Dc0XwJebd8dpdZNltzAZNIEtX9speaB7tBUZf2E+gB4oyDzClOBwSWuVl62FK0QFT0P/zpVFdziVO8wqPSQj6QICKrHIQQpmT/qCfLzGqKCqKzxmuQA9EZZ56GPSrssY98HLBkETDgKokGANLkKFiqoJs8qYIOUFVbE3oMkwfQVckxbRCaQH6vAIlFSq8JN57v4eHYFi2Llm6Yg6gPZBN24CqKFqCIBuSJpjq+zxk+XfxsFVJ0gaSpkBD0iyOkxRO5GUJyqbMCYLBv89Dg/e/eiDD1+php04EUOiBiJS0Wmd1keQofPXa60cUBHmdVX6bBWZ3wCXo899f46oi2YF2mdUZKoOYNNjs8gD9CCUU33sgxA0JcIcHFn8n3vQ6pn6O3c1kay23/PlvvVNSnGePXyIt4gRe1j5FAh99EpUg+qQpAvq0R2GgyQqEwl4DXTkek6y780tjzSuMqpvvGBE5WRWcrK7MTSrpMV3nL+Z4OAKXOHyt8h4Fp7pY5SecvYN7cffhJpYuC3qZkanKblexaATOIpge3uA+nAb6X79vDzMPOzxh6EmSPfdA160uzk9q6PP8j4K4/1v07kaIK0QSCvrAdN1MHl0M2xNcQaGOYywOunnoqvrapNcZ9DB56u3ldD6X12kSq/5eZo5kNVQW8XHqMDuN0eJVa8/zxKWbF5P/CAL6AJbCLiWOkDOTY8RLjLPkt8OQPZTPp+vkZGmDxsufOSNM5EMGo2Yqxb6zOq19OBCmdtHMLkh34JcCHcPn8ygI0wbyC3Px1EV7iOVtMOIZkkQ8bB0wUo+78qytZQ5CeYEG7nYrireUbi5EHW7zCcZe7DKnOpbatfslubEmliaFJpUrutzP1p4r5rf1bCFy+rfp+DKdk29bkXwbXA9pRQS/LJkMpfi/m/NW5dy99wbj29r61ejfHR2mON6YZFxsIztlmlw8XRlutL0tmzSKmu1ajS157CuDK7h39i0SVEV5mYI+QFlY5iQEPZAgWunfjfqz9yHUeiBt9aLwK1S9+hvo3WMYObj/AxkmT+GRCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𓊈𓆩♛𝐁𝐋𝐀𝐂𝐊 𝐆𝐑𝐄𝐘 𝐋𝐄𝐎𝐍𝐈𝐃𝐀𝐒♛𓆪𓊉",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "237680333605",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'GREY_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});


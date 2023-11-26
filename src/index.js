import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
// import connectDB from "./db/index.js";
import { CommandKit } from "commandkit";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

new CommandKit({
    client,
    devGuildIds: ["1059394957670101042"],
    devUserIds: ["962974774554918982"],
    commandsPath: path.join(__dirname, "commands"),
    eventsPath: path.join(__dirname, "events"),
    validationsPath: path.join(__dirname, "validations"),
    bulkRegister: true,
});

client.login(process.env.DISCORD_Token);

// connectDB().then(() => {
//     try {
//         client.login(process.env.DISCORD_Token);
//     } catch (error) {
//         console.log(`DISCORD CONNECTION ERROR: ${error}`);
//     }
// });

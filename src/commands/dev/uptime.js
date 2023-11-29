import { EmbedBuilder } from "discord.js";

export const data = {
    name: "uptime",
    description: "Show the uptime of the bot.",
};

export async function run({ interaction, client, handler }) {
    const days = Math.floor(client.uptime / 86400000);
    const hours = Math.floor(client.uptime / 3600000) % 24;
    const minutes = Math.floor(client.uptime / 60000) % 60;
    const seconds = Math.floor(client.uptime / 1000) % 60;

    const embed = new EmbedBuilder()
        .setTitle(`__${client.user.username}'s Uptime__`)
        .setColor("Blue")
        .setTimestamp()
        .addFields({
            name: "Uptime",
            value: `${days}d ${hours}h ${minutes}m ${seconds}s`,
        });

    interaction.reply({ embeds: [embed] });
}

export const options = {
    devOnly: true,
};

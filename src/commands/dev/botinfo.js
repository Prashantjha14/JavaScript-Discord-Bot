import { EmbedBuilder } from "discord.js";
import cpuStat from "cpu-stat";

export const data = {
    name: "botinfo",
    description: "Get information about the bot.",
};

export async function run({ interaction, client, handler }) {
    const days = Math.floor(client.uptime / 86400000);
    const hours = Math.floor(client.uptime / 3600000) % 24;
    const minutes = Math.floor(client.uptime / 60000) % 60;
    const seconds = Math.floor(client.uptime / 1000) % 60;

    cpuStat.usagePercent(function (err, percent) {
        if (err) return interaction.reply({ content: `${err}` });

        const memoryUsage = formatBytes(process.memoryUsage().heapUsed);
        const node = process.version;
        const cpu = percent.toFixed(2);

        const embed = new EmbedBuilder()
            .setTitle(`${client.user.username}'s Information`)
            .setColor("Blue")
            .addFields(
                {
                    name: "Developer",
                    value: "<@962974774554918982>",
                    inline: true,
                },
                {
                    name: "Username",
                    value: `${client.user.username}`,
                    inline: true,
                },
                {
                    name: "ID",
                    value: `${client.user.id}`,
                    inline: true,
                },
                {
                    name: "Creation date",
                    value: "29.11.2023",
                },
                {
                    name: "Help Command",
                    value: "help",
                },
                {
                    name: "Uptime",
                    value: `${days}d ${hours}h ${minutes}m ${seconds}s`,
                },
                {
                    name: "Bot-Ping",
                    value: `${client.ws.ping}ms`,
                },
                {
                    name: "Node Version",
                    value: `${node}`,
                },
                {
                    name: "CPU usage",
                    value: `${cpu}%`,
                },
                {
                    name: "Memory usage",
                    value: `${memoryUsage}`,
                }
            );

        interaction.reply({ embeds: [embed] });
    });

    function formatBytes(a, b) {
        let c = 1024;
        let d = b || 2;
        let e = ["B", "KB", "MB", "GB", "TB"];
        let f = Math.floor(Math.log(a) / Math.log(c));
        return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f];
    }
}

export const options = {
    devOnly: true,
};

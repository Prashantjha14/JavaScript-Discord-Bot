import { ApplicationCommandOptionType } from "discord.js";
import { User } from "../../models/user.model.js";

export const data = {
    name: "start",
    description: "Register your self!",
};

export async function run({ interaction, client, handler }) {
    const startTime = performance.now();
    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(2);
    interaction.reply(`${duration}ms`);
}

export const options = {};

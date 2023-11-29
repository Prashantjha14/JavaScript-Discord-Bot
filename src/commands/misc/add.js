import { ApplicationCommandOptionType } from "discord.js";

export const data = {
    name: "add",
    description: "Adds two numbers!",
    options: [
        {
            name: "first-number",
            description: "The first number",
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: "second-number",
            description: "The second number",
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
    ],
};

export function run({ interaction, client, handler }) {
    const startTime = performance.now();
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;
    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(2);
    interaction.reply(`The sum is ${num1 + num2} - ${duration}ms`);
}

export const options = {};

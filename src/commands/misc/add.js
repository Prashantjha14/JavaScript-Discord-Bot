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
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;
    interaction.reply(`The sum is ${num1 + num2}`);
}

export const options = {};

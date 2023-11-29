export const data = {
    name: "ping",
    description: "Replies with the bot ping!",
};

export async function run({ interaction, client, handler }) {
    await interaction.deferReply();

    const reply = await interaction.fetchReply();

    const ping = reply.createdTimestamp - interaction.createdTimestamp;

    interaction.editReply(
        `:ping_pong: Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`
    );
}

export const options = {};

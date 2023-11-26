import { GuildMember, EmbedBuilder } from "discord.js";

/**
 *
 * @param {GuildMember} member
 */
export default function (member) {
    const { user, guild } = member;
    const welcomeChannel = member.guild.channels.cache.get(
        "1178214708390674454"
    );
    const welcomeMessage = `Welcome ${user} to ${guild.name}`;

    const welcomeEmbed = new EmbedBuilder()
        .setTitle("Thanks for joining the server")
        .setDescription("Don't forget to read <#1178219515029495923>")
        .setImage(
            "https://img.freepik.com/free-vector/welcome-concept-illustration_114360-22393.jpg?w=1060&t=st=1700979456~exp=1700980056~hmac=11303ce8767989322590d68660a264ade2b8df6924bc7b30d877f633ea359e9c"
        )
        .setThumbnail(
            "https://cdn.discordapp.com/avatars/958341230171930685/6075f9d677176f9c567764886f65042a.webp?size=100"
        )
        .setColor("#0af025")
        .setFooter({
            text: `${guild.name} now have ${guild.memberCount} members!`,
            iconURL: `${guild.iconURL()}`,
        });

    welcomeChannel.send({ content: welcomeMessage, embeds: [welcomeEmbed] });
    member.roles.add("1178230887171764235");
}

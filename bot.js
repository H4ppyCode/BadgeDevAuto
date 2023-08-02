require("dotenv").config(); // Importez et configurez dotenv pour charger les variables d'environnement

const { Client, GatewayIntentBits, REST, Routes } = require("discord.js");

const bot = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

console.log("Connexion au bot...");

bot
  .login(process.env.DISCORD_TOKEN) 
  .then(() => console.log("Connecté au bot !"))
  .catch((error) =>
    console.log("Impossible de se connecter au bot - " + error)
  );

bot.once("ready", async () => {
  console.log("Le bot est prêt !");

  const commands = [
    {
      name: "badge",
      description: "oue le badge  !",
    },
  ];

  const commandData = await bot.application.commands.set(commands);
  console.log("Commandes enregistrées !", commandData);
});

bot.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "badge")
    interaction.reply("oue le badge !");
});

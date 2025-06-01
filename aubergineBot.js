require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const aubergineKeywords = [
  "paf", "paff",

  // Classiques directs
  "bite", "bitte", "zboub", "zbib", "zgeg", "zob",
  "teub", "teubs", "zizi", "kiki", "quéquette", "queue", "queues",
  "chibre", "gland", "tub",

  // Anglais classiques
  "dick", "cock", "penis", "phallus", "dong", "shaft"
];

client.once("ready", () => {
  console.log(`🍆 AubergineBot activé en tant que ${client.user.tag}`);
});

client.on("messageCreate", async message => {
  if (message.author.bot) return;

  const lowerContent = message.content.toLowerCase();

  if (aubergineKeywords.some(word => lowerContent.includes(word))) {
    try {
      await message.react("🍆");
    } catch (error) {
      console.error("Erreur lors de la réaction :", error);
    }
  }
});

client.login(process.env.TOKEN);

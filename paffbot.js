const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Liste très complète de mots liés au sexe ou aux organes génitaux masculins
const motsTabous = [
  "paf",
  "paaf",
  "paff",
  "bite",
  "bites",
  "zgeg",
  "zob",
  "queue",
  "pénis",
  "penis",
  "teub",
  "teube",
  "zizi",
  "kiki",
  "gland",
  "glands",
  "schlong",
  "chibre",
  "quéquette",
  "bibite",
  "biroute",
  "bitard",
  "trique",
  "b***",
  "baise",
  "baiser",
  "baisé",
  "sucer",
  "suce",
  "branlette",
  "branler",
  "branle",
  "masturber",
  "masturbation",
  "érection",
  "erection",
  "grosse queue",
  "gros pénis",
  "trou du cul",
  "fourrer",
  "niquer",
  "nique",
  "enculer",
  "encule",
  "enculé",
  "enfoncer",
  "coït",
  "coitus",
  "pénétration",
  "pénétrer",
  "sodomie",
  "sodomiser",
  "sexe",
  "sexuel",
  "sexuelle",
  "pervers",
  "perversion",
  "porn",
  "porno",
  "pornographique",
  "genital",
  "génital",
  "organe sexuel",
  "organe génital",
  "trouser snake",
  "eggplant",
  "aubergine",
  "bang bang",
  "bangbang",
  "69",
  "pipe",
  "pipeau",
  "fellation",
  "fellatio",
  "sperme",
  "gicler",
  "jouir",
  "éjaculer",
  "cum",
  "jizz",
  "nut",
  "nutting",
  "succ",
  "cock",
  "dick",
  "dicks",
  "shaft",
  "boner",
  "hardon"
];

client.once("ready", () => {
  console.log(`🍆 AubergineBot activé en tant que ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const contenu = message.content.toLowerCase();

  for (const mot of motsTabous) {
    if (contenu.includes(mot)) {
      message.react("🍆").catch(console.error);
      break;
    }
  }
});

client.login("TON_TOKEN_ICI");

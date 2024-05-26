// /$$$$$$$$ /$$$$$$$  /$$   /$$  /$$$$$$  /$$$$$$$$        /$$$$$$   /$$$$$$  /$$       /$$   /$$ /$$$$$$$$ /$$$$$$  /$$$$$$  /$$   /$$
// |__  $$__/| $$__  $$| $$  | $$ /$$__  $$|__  $$__/       /$$__  $$ /$$__  $$| $$      | $$  | $$|__  $$__/|_  $$_/ /$$__  $$| $$$ | $$
//    | $$   | $$  \ $$| $$  | $$| $$  \__/   | $$         | $$  \__/| $$  \ $$| $$      | $$  | $$   | $$     | $$  | $$  \ $$| $$$$| $$
//    | $$   | $$$$$$$/| $$  | $$|  $$$$$$    | $$         |  $$$$$$ | $$  | $$| $$      | $$  | $$   | $$     | $$  | $$  | $$| $$ $$ $$
//    | $$   | $$__  $$| $$  | $$ \____  $$   | $$          \____  $$| $$  | $$| $$      | $$  | $$   | $$     | $$  | $$  | $$| $$  $$$$
//    | $$   | $$  \ $$| $$  | $$ /$$  \ $$   | $$          /$$  \ $$| $$  | $$| $$      | $$  | $$   | $$     | $$  | $$  | $$| $$\  $$$
//    | $$   | $$  | $$|  $$$$$$/|  $$$$$$/   | $$         |  $$$$$$/|  $$$$$$/| $$$$$$$$|  $$$$$$/   | $$    /$$$$$$|  $$$$$$/| $$ \  $$
//    |__/   |__/  |__/ \______/  \______/    |__/          \______/  \______/ |________/ \______/    |__/   |______/ \______/ |__/  \__/
// UWAGA NIE EDYTUJ TEGO KODU JEŚLI NIE WIESZ CO ROBISZ!!!
//
const { EmbedBuilder } = require("discord.js");
const fs = require("fs");

// Load error codes from file
const errorCodes = JSON.parse(fs.readFileSync("./error_codes.json", "utf8"));

function handleError(error, interaction) {
  let errorCode;

  switch (error.code) {
    case "DB_CONN_FAILED":
      errorCode = errorCodes.errors.database.connection_failed;
      break;
    case "DB_QUERY_FAILED":
      errorCode = errorCodes.errors.database.query_failed;
      break;
    case "DB_USER_NOT_FOUND":
      errorCode = errorCodes.errors.database.user_not_found;
      break;
    case "API_DISCORD_CONN_FAILED":
      errorCode = errorCodes.errors.api.discord_connection_failed;
      break;
    case "API_RATE_LIMITED":
      errorCode = errorCodes.errors.api.rate_limited;
      break;
    case "DISCORD_MISSING_PERMISSIONS":
      errorCode = errorCodes.errors.discord.missing_permissions;
      break;
    case "DISCORD_COMMAND_FAILED":
      errorCode = errorCodes.errors.discord.command_failed;
      break;
    case "DISCORD_INTERACTION_FAILED":
      errorCode = errorCodes.errors.discord.interaction_failed;
      break;
    case "DISCORD_INTERACTION_TIMEOUT":
      errorCode = errorCodes.errors.discord.interaction_timeout;
      break;
    case "DISCORD_INTERACTION_ALREADY_RESPONDED":
      errorCode = errorCodes.errors.discord.interaction_already_responded;
      break;
    case "DISCORD_INVALID_INTERACTION_RESPONSE":
      errorCode = errorCodes.errors.discord.invalid_interaction_response;
      break;
    case "INTERNAL_UNEXPECTED_ERROR":
      errorCode = errorCodes.errors.internal.unexpected_error;
      break;
    case "INTERNAL_CONFIGURATION_ERROR":
      errorCode = errorCodes.errors.internal.configuration_error;
      break;
    default:
      errorCode = errorCodes.errors.internal.unexpected_error;
  }

  const emoji_x = interaction.guild.emojis.cache.find(
    (emoji) => emoji.name === "failed"
  );

  // Load error settings from file
  const errorSettings = JSON.parse(
    fs.readFileSync("./error_settings.json", "utf8")
  );

  const embedError = new EmbedBuilder()
    .setTitle(errorSettings.title)
    .setDescription(
      `\n**Kod błędu:** ${errorCode.code}\n**Numer błędu:** ${errorCode.number}\n**Opis:** ${errorCode.message}\n**Rozwiązanie:** ${errorCode.resolution}`
    )
    .setColor(errorSettings.color)
    .setFooter({
      text: errorSettings.footer.text,
      iconURL: errorSettings.footer.iconURL,
    })
    .setTimestamp();

  interaction.editReply({ embeds: [embedError] });
}

module.exports = { handleError };

// By
// _______    ______   ____________ _______    ______   ____________        ____
// \      |  |      | /            \\      |  |      | /            \   ____\_  \__
//  |     /  /     /||\___/\  \\___/||     /  /     /||\___/\  \\___/| /     /     \
//  |\    \  \    |/  \|____\  \___|/|\    \  \    |/  \|____\  \___|//     /\      |
//  \ \    \ |    |         |  |     \ \    \ |    |         |  |    |     |  |     |
//   \|     \|    |    __  /   / __   \|     \|    |    __  /   / __ |     |  |     |
//    |\         /|   /  \/   /_/  |   |\         /|   /  \/   /_/  ||     | /     /|
//    | \_______/ |  |____________/|   | \_______/ |  |____________/||\     \_____/ |
//     \ |     | /   |           | /    \ |     | /   |           | /| \_____\   | /
//      \|_____|/    |___________|/      \|_____|/    |___________|/  \ |    |___|/
//                                                                     \|____|
// https://discord.com/invite/SsPUyZPpAy

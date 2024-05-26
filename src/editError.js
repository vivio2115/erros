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

const fs = require("fs");
const readline = require("readline");

function editError() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Podaj nowy tytuł komunikatu błędu (naciśnij Enter, aby pominąć): ",
    (title) => {
      rl.question(
        "Podaj nowy kolor komunikatu błędu (np. #ff0000) (naciśnij Enter, aby pominąć): ",
        (color) => {
          rl.question(
            "Podaj nowy tekst stopki komunikatu błędu (naciśnij Enter, aby pominąć): ",
            (footerText) => {
              rl.question(
                "Podaj URL nowej ikony stopki komunikatu błędu (naciśnij Enter, aby pominąć): ",
                (iconURL) => {
                  rl.close();

                  // Wczytaj bieżące ustawienia z pliku
                  let currentSettings;
                  try {
                    currentSettings = JSON.parse(
                      fs.readFileSync("./error_settings.json")
                    );
                  } catch (error) {
                    console.error(
                      "Błąd odczytu pliku error_settings.json:",
                      error
                    );
                    return;
                  }

                  // Edytuj wybrane właściwości, jeśli zostały wprowadzone
                  if (title.trim() !== "") {
                    currentSettings.title = title;
                  }
                  if (color.trim() !== "") {
                    currentSettings.color = color;
                  }
                  if (footerText.trim() !== "") {
                    currentSettings.footer.text = footerText;
                  }
                  if (iconURL.trim() !== "") {
                    currentSettings.footer.iconURL = iconURL;
                  }

                  // Zapisz zmienione ustawienia z powrotem do pliku
                  fs.writeFileSync(
                    "./error_settings.json",
                    JSON.stringify(currentSettings, null, 2)
                  );

                  console.log(
                    "Ustawienia komunikatu błędu zostały zaktualizowane."
                  );
                }
              );
            }
          );
        }
      );
    }
  );
}

editError();

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

# Trust Solution - System Obsługi Błędów

## Opis

Ten projekt zawiera moduł obsługi błędów dla Los Angos Bot, który umożliwia obsługę różnych typów błędów i generowanie komunikatów o nich w serwerze Discord.

## Instalacja

1. Sklonuj lub pobierz repozytorium na swój lokalny komputer.
2. Zainstaluj wymagane zależności, wykonując polecenie:

```
npm install sob
```

## Użycie

1. **Konfiguracja plików**

- **error_codes.json**: Ten plik zawiera kody błędów oraz ich opisy i rozwiązania. Możesz modyfikować ten plik, aby dostosować komunikaty błędów do własnych potrzeb.
- **error_settings.json**: Ten plik zawiera niestandardowe ustawienia dla komunikatów błędów, takie jak tytuł, kolor i stopka. Możesz edytować ten plik, aby dostosować wygląd komunikatów błędów.

2. **Obsługa błędów w kodzie**

- Importuj funkcję `handleError` z modułu `index.js`:
  ```javascript
  const { handleError } = require("./index.js");
  ```
- Następnie użyj funkcji `handleError` do obsługi błędów w swoim kodzie, przekazując błąd i interakcję Discord jako parametry:
  ```javascript
  try {
    // Twój kod, który może generować błędy
  } catch (error) {
    handleError(error, interaction);
  }
  ```

3. **Edycja niestandardowych ustawień**

- Możesz użyć skryptu `npm run edit`, aby zmienić niestandardowe ustawienia komunikatów błędów. Skrypt zapyta Cię o nowe wartości tytułu, koloru, tekstu stopki i URL ikony stopki, a następnie zaktualizuje plik `error_settings.json`.

## Wymagania

- Node.js (zalecana wersja LTS)
- Discord.js (zalecana wersja v14)

## Autor

Ten moduł został stworzony przez [vi_vio](https://github.com/vivio_2115).

## Licencja

Ten projekt jest licencjonowany na zasadach licencji MIT

# Pomoc

Aby uzuskać pomoc dołacz do naszego serwera [discord](https://discord.com/invite/SsPUyZPpAy)

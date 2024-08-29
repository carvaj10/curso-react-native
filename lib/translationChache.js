import * as FileSystem from "expo-file-system";

// Definir la ruta del archivo 'translations.json' dentro de la carpeta 'translation'
const translationsDir = `${FileSystem.documentDirectory}translation/`;
const translationsFilePath = `${translationsDir}translations.json`;
// Crear la carpeta 'translation' si no existe
export const ensureTranslationDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(translationsDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(translationsDir, {
      intermediates: true,
    });
  }
};

export const getCachedTranslation = async (text) => {
  try {
    await ensureTranslationDirExists();
    const fileContent =
      await FileSystem.readAsStringAsync(translationsFilePath);
    const translations = JSON.parse(fileContent);
    return translations[text];
  } catch (error) {
    return null;
  }
};

export const cacheTranslation = async (text, translation) => {
  try {
    await ensureTranslationDirExists();
    const fileContent =
      await FileSystem.readAsStringAsync(translationsFilePath);
    const translations = JSON.parse(fileContent);
    translations[text] = translation;
    await FileSystem.writeAsStringAsync(
      translationsFilePath,
      JSON.stringify(translations)
    );
  } catch (error) {
    const translations = { [text]: translation };
    await FileSystem.writeAsStringAsync(
      translationsFilePath,
      JSON.stringify(translations)
    );
  }
};

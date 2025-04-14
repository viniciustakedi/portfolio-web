export type ILanguageConfig = {
  menu: {
    nav_option_one: string;
    nav_option_two: string;
    nav_option_three: string;
  };
  work: {
    title: {
      part1: string;
      part2: string;
      part3: string;
      part4: string;
      part5: string;
      part6: string;
      part7: string;
      part8: string;
    };
    shortSummary: string;
  };
};

export enum LanguagesSupported {
  en = "en",
  pt = "pt",
}

export enum FlagsByLanguage {
  en = "🇬🇧",
  pt = "🇵🇹",
}

export enum LabelByLanguage {
  en = "🇬🇧 English",
  pt = "🇵🇹 Português",
}

// Create a map of languages by label
export const languagesMap = Object.entries(LabelByLanguage).map(([key, label]) => ({
  value: key as LanguagesSupported,
  label,
}));

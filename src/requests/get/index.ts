import axios from "axios";
import { PORTFOLIO_API_URL } from "@/lib/portfolio-api-url";

const API_URL = PORTFOLIO_API_URL;

export interface IJobContent {
  title: string;
  companyName: string;
  companyImageUrl: string;
  content: {
    en: string;
    pt: string;
  };
  startDate: string;
  location: string;
  stacks: string[];
  exitDate?: string;
}

// —— Flashcards (portfolio API) ——————————————————————————————————

export type FlashcardType =
  | "verb"
  | "noun"
  | "adjective"
  | "adverb"
  | "phrasal_verb"
  | "expression";

export interface IFlashcard {
  id: string;
  word: string;
  synonyms: string[];
  type: FlashcardType;
  language: string;
  path: string;
  difficulty: number;
  description: string;
  examples: string[];
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IFlashcardsListResponse {
  cards: IFlashcard[];
  total: number;
  limit: number;
  skip: number;
}

export interface IFlashcardPath {
  id: string;
  language: string;
  level: string;
  title: string;
  description: string;
  order: number;
  totalCards: number;
  icon: string;
}

export const getFlashcards = async (params: {
  language: "en" | "es";
  path: "beginner" | "intermediate" | "advanced";
  limit?: number;
  skip?: number;
}): Promise<IFlashcardsListResponse> => {
  const { language, path, limit = 20, skip = 0 } = params;
  const response = await axios.get<{ data: IFlashcardsListResponse }>(
    `${API_URL}/flashcards`,
    { params: { language, path, limit, skip } }
  );
  return response.data.data;
};

export const getFlashcardPaths = async (language: "en" | "es"): Promise<IFlashcardPath[]> => {
  const response = await axios.get<{ data: IFlashcardPath[] }>(
    `${API_URL}/flashcards/paths`,
    { params: { language } }
  );
  return response.data.data;
};

export const getFlashcardById = async (id: string): Promise<IFlashcard> => {
  const response = await axios.get<{ data: IFlashcard }>(`${API_URL}/flashcards/${id}`);
  return response.data.data;
};

export const getJobs = async (): Promise<IJobContent[]> => {
  try {
    const response = await axios.get<{ data: IJobContent[] }>(
      `${API_URL}/jobs`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

// Shorten URL Requests
let API_SHORTEN_URL = "https://api.shorten-url.takedi.com/api";

if (process.env.NODE_ENV === "development") {
  API_SHORTEN_URL = "http://localhost:8080/api";
}

export interface IGetShortUrl {
  urlCode: string;
}

export const getOriginalUrl = async (
  data: IGetShortUrl
): Promise<{ url: string; expirationDate: string }> => {
  try {
    const response = await axios.get<{
      data: {
        originalUrl: string;
        expirationDate: string;
      };
      status_code: number;
    }>(`${API_SHORTEN_URL}/url/${data.urlCode}`);

    if (response.data.status_code !== 200) {
      throw new Error("Error to get shorten URL");
    }

    return {
      url: response.data.data.originalUrl,
      expirationDate: response.data.data.expirationDate,
    };
  } catch (error) {
    console.error("Error to get shorten URL:", error);
    throw error;
  }
};

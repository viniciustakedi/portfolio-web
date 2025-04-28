import axios from "axios";

let API_URL = "https://api.takedi.com/api";

if (process.env.NODE_ENV === "development") {
  API_URL = "http://localhost:8000/api";
}

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

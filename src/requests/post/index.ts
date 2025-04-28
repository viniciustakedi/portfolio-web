import axios from "axios";

let API_URL = "https://api.takedi.com/api";

if (process.env.NODE_ENV === "development") {
  API_URL = "http://localhost:8000/api";
}

export interface IEmailFormFields {
  name: string;
  email: string;
  message: string;
}

export const sendPortfolioMessage = async (
  data: IEmailFormFields
): Promise<string> => {
  try {
    const response = await axios.post<{ message: string; status_code: number }>(
      `${API_URL}/email/send/portfolio-message`,
      {
        name: data.name,
        email: data.email,
        message: data.message,
      }
    );

    return response.data.message;
  } catch (error) {
    console.error("Error to send message to email:", error);
    throw error;
  }
};

// Shorten URL Requests
let API_SHORTEN_URL = "https://api.shorten-url.takedi.com/api";

if (process.env.NODE_ENV === "development") {
  API_SHORTEN_URL = "http://localhost:8080/api";
}

export interface ICreateShortUrl {
  url: string;
}

export const createShortUrl = async (
  data: ICreateShortUrl
): Promise<{ url: string; expirationDate: string }> => {
  try {
    const response = await axios.post<{
      data: {
        url: string;
        expirationDate: string;
      };
      status_code: number;
    }>(`${API_SHORTEN_URL}/url/shorten`, {
      url: data.url,
      daysToExpire: 1,
    });

    if (response.data.status_code !== 201) {
      throw new Error("Error to shorten URL");
    }


    return {
      url: response.data.data.url.replace("https://", ""),
      expirationDate: response.data.data.expirationDate,
    };
  } catch (error) {
    console.error("Error to shorten URL:", error);
    throw error;
  }
};

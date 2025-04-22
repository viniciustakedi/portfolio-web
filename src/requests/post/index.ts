import axios from "axios";

const API_URL = "http://localhost:8000/api";

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

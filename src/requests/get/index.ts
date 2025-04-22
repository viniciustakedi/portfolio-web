import axios from "axios";

const API_URL = "https://api.takedi.com/api";

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
    const response = await axios.get<{ data: IJobContent[] }>(`${API_URL}/jobs`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

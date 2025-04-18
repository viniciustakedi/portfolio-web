import axios from "axios";

const API_URL = "http://localhost:8000/api/jobs";

export interface IJobContent {
  title: string;
  companyName: string;
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
    const response = await axios.get<{ data: IJobContent[] }>(API_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

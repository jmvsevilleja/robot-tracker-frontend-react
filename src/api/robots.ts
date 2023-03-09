import axios from "axios";

const ROBOTS_API_BASE_URL = "http://localhost:4000/robots";

export interface Robot {
  id?: string;
  name: string;
  purpose: string;
  avatarUrl?: string;
}

const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const getRobots = async (): Promise<Robot[]> => {
  const response = await axios.get<Robot[]>(ROBOTS_API_BASE_URL, config);
  return response.data;
};

export const getRobotById = async (id: string): Promise<Robot> => {
  const response = await axios.get<Robot>(
    `${ROBOTS_API_BASE_URL}/${id}`,
    config
  );
  return response.data;
};

export const createRobot = async (robot: Robot): Promise<Robot> => {
  const response = await axios.post<Robot>(ROBOTS_API_BASE_URL, robot, config);
  return response.data;
};

export const updateRobot = async (robot: Robot): Promise<Robot> => {
  const response = await axios.put<Robot>(
    `${ROBOTS_API_BASE_URL}/${robot.id}`,
    robot,
    config
  );
  return response.data;
};

export const deleteRobot = async (id: string): Promise<void> => {
  await axios.delete(`${ROBOTS_API_BASE_URL}/${id}`, config);
};

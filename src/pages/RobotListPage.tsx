import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteRobot, getRobots, Robot } from "../api/robots";

const RobotListPage: React.FC = () => {
  const [robots, setRobots] = useState<Robot[]>([]);

  useEffect(() => {
    const fetchRobots = async () => {
      const robots = await getRobots();
      setRobots(robots);
    };
    fetchRobots();
  }, []);

  const handleDelete = async (id: string | undefined) => {
    if (id) {
      const message = await deleteRobot(id);
      console.log(message);
      setRobots((prevRobots) => prevRobots.filter((robot) => robot.id !== id));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Robot List</h1>
      <Link
        to="/robot"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-4"
      >
        Add Robot
      </Link>
      {robots.length === 0 && <p>No robots found.</p>}
      {robots.map((robot) => (
        <div
          key={robot.id}
          className="flex items-center justify-between w-96 border p-4 my-2"
        >
          <div>
            <h2 className="font-bold text-lg">{robot.name}</h2>
            <p className="text-gray-500">{robot.purpose}</p>
          </div>
          <div className="flex items-center">
            <Link
              to={`/robot/${robot.id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              Edit
            </Link>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDelete(robot.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RobotListPage;

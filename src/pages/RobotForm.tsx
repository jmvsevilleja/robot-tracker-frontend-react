import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Robot, createRobot, updateRobot, getRobotById } from "../api/robots";
import Button from "../components/Button";

interface RouteParams extends Record<string, string | undefined> {
  id: string;
}

const RobotForm: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [formState, setFormState] = useState<Robot>({
    name: "",
    purpose: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getRobotById(id).then((robot) => setFormState(robot));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      await updateRobot(formState);
      navigate("/");
    } else {
      await createRobot(formState);
      navigate("/");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center">
      {id ? (
        <h1 className="text-2xl font-bold my-4">Edit Robot</h1>
      ) : (
        <h1 className="text-2xl font-bold my-4">Add Robot</h1>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-96 border p-4 my-4"
      >
        <label htmlFor="name" className="font-bold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          className="border rounded p-2 my-2 w-full"
        />
        <label htmlFor="purpose" className="font-bold">
          Purpose:
        </label>
        <input
          id="purpose"
          name="purpose"
          value={formState.purpose}
          onChange={handleInputChange}
          className="border rounded p-2 my-2 w-full"
        />
        <Button text={id ? "Update Robot" : "Add Robot"} />
      </form>
    </div>
  );
};

export default RobotForm;

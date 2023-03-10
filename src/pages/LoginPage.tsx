import React, { useState } from "react";
import Button from "../components/Button";
import { login } from "../api/auth";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    login(email, password)
      .then((token) => {
        console.log("token", token);
        localStorage.setItem("token", token);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.message);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6 border p-4 my-4" onSubmit={handleLogin}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="flex flex-col items-center text-sm">
                john.doe@email.com
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border border-gray-300"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <div className="flex flex-col items-center text-sm">Pass123</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-600">{error}</div>
            <Button text="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

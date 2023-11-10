import "./styles.css";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import Login from "./Login";
import JobBoard from "./JobBoard";
import JobDetail from "./JobDetail";
import React from "react";
import JOBS from "./jobs";

export default function App() {
  const navigate = useNavigate();
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [Jobs, setJobs] = React.useState(JOBS);

  React.useEffect(() => {
    if (isLoggedIn) {
      // fake.logout();
      navigate("/jobs");
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Login
              email={email}
              password={password}
              setPassword={setPassword}
              setEmail={setEmail}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route path="/jobs" element={<JobBoard Jobs={Jobs} />} />
        <Route path="/job/:id" element={<JobDetail Jobs={Jobs} />} />
      </Routes>
    </div>
  );
}

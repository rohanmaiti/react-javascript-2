import { Routes, Route, Link, useResolvedPath } from "react-router-dom";

const Dashboard2 = () => {
  const resolvedPath = useResolvedPath(""); // Gets base dashboard path
  return (
    <div>
      <h1>Dashboard-2 Page</h1>
      <nav>
        <Link to={`/dashboard/profile`}>Profile</Link> | 
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <div>
      <Routes>
        <Route path="profile" element={<h1>Profile Page</h1>} />
        <Route path="settings" element={<h1>Settings Page</h1>} />
      </Routes>
      </div>
    </div>
  );
};

export {Dashboard2};

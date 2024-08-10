import { FileExclamationTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <FileExclamationTwoTone style={{ fontSize: "72px", marginTop: "20px" }} />
      <h1 style={{ fontSize: "72px", marginBottom: "20px" }}>Oops!</h1>
      <h2>Something went wrong.</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#007BFF", fontSize: "18px" }}
      >
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NoPage;

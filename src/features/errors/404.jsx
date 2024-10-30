import { CiFaceFrown } from "react-icons/ci";
import ErrorLayout from "./ErrorLayout";

function NotFound() {
  return (
    <ErrorLayout status={"404"} message={"This page does not exist!"}>
      <CiFaceFrown />
    </ErrorLayout>
  );
}

export default NotFound;

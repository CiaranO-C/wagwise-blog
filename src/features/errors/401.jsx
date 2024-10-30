import { MdBlock } from "react-icons/md";
import ErrorLayout from "./ErrorLayout";

function Unauthorized() {
  return (
    <ErrorLayout
      status={"401"}
      message={"You do not have access to this page!"}
    >
      <MdBlock />
    </ErrorLayout>
  );
}

export default Unauthorized;

import { TbMoodSuprised } from "react-icons/tb";
import ErrorLayout from "./ErrorLayout";

function ServerError() {
  return (
    <ErrorLayout
      status={"500"}
      message={"Unexpected server error, login or try again!"}
    >
      <TbMoodSuprised />
    </ErrorLayout>
  );
}

export default ServerError;

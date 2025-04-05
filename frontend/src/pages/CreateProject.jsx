import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { Button } from "antd"
export const CreateProject = () => {
  const { createProjectMutation, isPending } = useCreateProject();

  const handleCreateProject = async () => {
    console.log("going to trigger the api");

    try {
      await createProjectMutation();
      console.log("now we should redirect to the editor");
    } catch (error) {
      console.log("Error creating project:", error);
    }
  };

  return (
    <div>
      <Button
         type="primary"
         onClick={handleCreateProject}
      >Create Playground
      </Button>
    </div>
  );
};

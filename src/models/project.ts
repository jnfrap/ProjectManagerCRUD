import { Model, model, Schema } from "mongoose";
import { Project } from "../interfaces/project";


const projectSchema = new Schema<Project>(
    {

    }
);

const ProjectModel: Model<Project> = model("Project", projectSchema);
export default ProjectModel;
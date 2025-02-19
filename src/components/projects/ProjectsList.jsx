import ProjectItem from "./ProjectItem";
import { images as projects } from "../../Images.js";
function ProjectsList() {
  return (
    <ul className="m-auto flex w-[90%] flex-wrap justify-evenly gap-5">
      {projects.slice(0, 6).map((item) => (
        <ProjectItem item={item} key={item.title} />
      ))}
    </ul>
  );
}

export default ProjectsList;

import Button from "../../ui/Button";
import "./projectItem.css";
function ProjectItem({ item }) {
  return (
    <li className="projectItem relative h-90 w-[32%] cursor-pointer overflow-hidden rounded-4xl">
      <img src={item.img} alt="projectImg" className="h-full w-full" />
      <div className="projectInfo item-center absolute bottom-0 left-0 flex h-0 w-full flex-col justify-center gap-1 text-center text-2xl text-gray-100 capitalize">
        <h2 className="text-4xl font-bold">{item.title}</h2>
        <p>design & development</p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <Button
            type="tab"
            className="rounded-full px-5 py-3 transition-colors duration-400 hover:bg-white hover:text-black"
          >
            <a href={item.git}>git</a>
          </Button>
          <Button
            type="tab"
            className="rounded-full px-5 py-3 transition-colors duration-400 hover:bg-white hover:text-black"
          >
            <a href={item.live}>live</a>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default ProjectItem;

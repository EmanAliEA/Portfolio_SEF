import { useState } from "react";
import Header from "../../ui/Header";
import Tabs from "./Tabs";
import ProjectsList from "./ProjectsList";

function Projects() {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex flex-col items-center gap-10 bg-black py-20">
      <Header header="projects">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Header>
      <Tabs tab={tab} setTab={setTab} />
      {tab === 0 && <ProjectsList />}
      {tab === 1 && <></>}
      {tab === 2 && (
        <p className="my-2 w-3/5 text-center text-3xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam,
          quod neque provident velit, rem explicabo excepturi id illo molestiae
          blanditiis, eligendi dicta officiis asperiores delectus quasi
          inventore debitis quo.
        </p>
      )}
    </div>
  );
}

export default Projects;

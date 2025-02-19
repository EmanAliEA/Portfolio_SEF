import Header from "../../ui/Header";
import SkillList from "./SkillList";

function Skills() {
  return (
    <section className="relative h-[750px] w-full bg-gray-950 bg-gradient-to-r from-blue-950 to-gray-950 to-[99%] text-gray-200">
      <div className="absolute top-[-50px] left-50 m-auto flex w-4/5 flex-col items-center justify-center gap-10 rounded-4xl bg-gray-950 px-52 pt-30 pb-15 text-center text-5xl">
        <Header header="skills">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
        </Header>
        <SkillList />
      </div>
    </section>
  );
}

export default Skills;

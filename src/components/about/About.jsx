import AboutText from "./AboutText";
import iconAbout from "../../../assets/1-Cover.png";
function About() {
  return (
    <main
      id="home"
      className="h-screen content-center bg-gray-600 bg-[url(../../../assets/main-background.jpg)] bg-cover bg-no-repeat p-10 text-white"
    >
      <div className="m-auto mt-8 flex w-4/5 items-center justify-between">
        <AboutText />
        <img src={iconAbout} alt="" className="imgAni w-[35%]" />
      </div>
    </main>
  );
}
export default About;

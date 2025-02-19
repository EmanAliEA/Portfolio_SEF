import "./nav.css";
import Icons from "../../ui/Icons";
import Button from "../../ui/Button";
import { HashLink } from "react-router-hash-link";

function Links() {
  return (
    <div className="flex items-center space-x-8 text-white">
      <ul className="flex items-center space-x-10 text-2xl text-gray-300 capitalize">
        <li>
          <HashLink to="/#home" smooth>
            home
          </HashLink>
        </li>
        <li>
          <HashLink to="/#skills" smooth>
            skills
          </HashLink>
        </li>
        <li>
          <HashLink to="/#projects" smooth>
            projects
          </HashLink>
        </li>
      </ul>
      <Icons />
      <Button type="normal" className="px-9 py-5 hover:text-black">
        <HashLink to="/#form" smooth>
          let&apos;s connect
        </HashLink>
      </Button>
    </div>
  );
}

export default Links;

import { useEffect, useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const words = ["Software Engineer", "FrontEnd Developer"];
// const word = "Software Engineer";
function AboutText() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!isDeleting) {
          // Typing logic
          if (currentIndex < words[currentWord].length) {
            setDisplayedText((prev) => prev + words[currentWord][currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          } else {
            // Switch to deleting mode after a delay
            setTimeout(() => setIsDeleting(true), 500);
          }
        } else {
          // Deleting logic
          if (currentIndex > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
            setCurrentIndex((prev) => prev - 1);
          } else {
            // Switch to the next word after deleting
            setIsDeleting(false);
            setCurrentWord((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 100 : 500,
    ); // Adjust typing/deleting speed here

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, isDeleting, currentWord]);

  return (
    <div className="flex w-[55%] flex-col space-y-6">
      <p className="inline-block self-start border border-gray-100 bg-linear-to-r from-sky-700 to-indigo-700 px-3 py-2.5 text-2xl font-bold">
        Welcome to my Portfolio
      </p>
      <h1 className="text-8xl font-bold">
        Hi! I&apos;m Eman Ali {displayedText}
        <span className="jobLine relative transition-all delay-100 duration-300"></span>
      </h1>
      <p className="mb-25 text-xl text-gray-400">
        Hello Everyone, I&apos;m Fresh Graduated from Computer Science. Software
        Engineer, Junior Frontend Developer. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the
        industrys standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.
      </p>
      <div className="moveIcon flex items-center justify-start space-x-3 self-start hover:cursor-pointer">
        <a href="#" className="text-3xl font-bold capitalize">
          let&apos;s connect
        </a>
        <IoArrowForwardCircleOutline className="text-4xl transition-all duration-400" />
      </div>
    </div>
  );
}

export default AboutText;

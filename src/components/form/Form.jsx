import img from "../../../assets/formImg.png";
import Button from "../../ui/Button";
function Form() {
  const inpStyle =
    "rounded-2xl border-2 border-white focus:bg-white focus:text-black focus:outline-none placeholder:capitalize px-4 py-5 row-span-1 text-white font-bold";
  return (
    <div className="relative flex h-full items-center justify-center gap-50 bg-gradient-to-r from-sky-800 to-indigo-950 px-50 py-50 text-white">
      <img src={img} alt="formImg" className="w-[40%]" />
      <div className="info w-[50%] space-y-8">
        <h2 className="mb-5 text-5xl font-bold capitalize">get in touch</h2>

        <form className="grid grid-flow-row-dense grid-cols-2 gap-3">
          <input type="text" placeholder="first name " className={inpStyle} />
          <input type="text" placeholder="last name" className={inpStyle} />
          <input
            type="email"
            placeholder="email address"
            className={inpStyle}
          />
          <input type="tel" placeholder="phone no." className={inpStyle} />
          <textarea
            rows={8}
            placeholder="message"
            className="col-span-2 row-span-1 rounded-2xl border-2 border-white px-4 py-2 placeholder:capitalize focus:outline-none"
          ></textarea>
        </form>
        <Button
          type="normal"
          className="relative border-none bg-white px-17 py-5 !text-black after:!bg-black hover:!text-white"
        >
          send
        </Button>
      </div>
      <div className="news absolute bottom-0 flex w-[80%] translate-y-[50%] items-center gap-10 rounded-4xl bg-white px-40 py-25 text-black">
        <p className="text-4xl font-bold">
          Subscribe to our Newsletter & Never miss latest updates
        </p>
        <div className="relative h-[90px] w-[80%] rounded-3xl border-2 border-transparent bg-gradient-to-r from-sky-700 to-indigo-700 bg-clip-border py-0">
          <input
            type="email"
            placeholder="email address"
            className="mb-0 h-full w-full rounded-3xl bg-white px-5 py-8 outline-none placeholder:text-3xl placeholder:font-bold placeholder:text-white"
          />
          <Button
            type="tab"
            className="end-[-65%] top-[-78px] mb-0 inline-block rounded-3xl bg-gradient-to-r from-sky-700 to-indigo-700 px-20 py-5 !text-xl text-white after:hidden hover:text-white"
          >
            submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Form;

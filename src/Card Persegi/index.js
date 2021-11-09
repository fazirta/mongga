import { a } from "react-router-dom";

export default function CardPersegi(props) {
  return (
    <>
      <a href={props.href}>
        <div className="inline flex h-full ">
          <div
            className="shadow-lg hover:shadow-xl transition ease-out duration-200 transform hover:-translate-y-0.5 hover:scale-105 self-center mx-auto w-48 h-48 xl:w-72 xl:h-72 flex flex-col justify-center rounded-2xl xl:rounded-3xl shadow-xl m-16"
            style={{ background: "#F8F8F8" }}
          >
            <img
              alt={props.title}
              src={props.src}
              className="self-center mx-auto w-20 xl:w-36"
            />
            <h1 className="text-center text-sm xl:text-xl mt-5 xl:mt-10 text-darkgreen font-poppins">
              {props.title}
            </h1>
          </div>
        </div>
      </a>
    </>
  );
}

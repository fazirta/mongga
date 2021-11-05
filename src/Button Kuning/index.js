import { a } from "react-router-dom";

export default function ButhrefnKuning(props) {
  return (
    <>
      <div data-aos={props.dataAOS} className="flex justify-center">
        <a href={props.href}>
          <div className="shadow-lg hover:shadow-xl transition ease-out duration-200 transform hover:-translate-y-0.5 hover:scale-105 inline-block bg-yellow-400 rounded-lg font-bold text-darkgreen text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-300 font-poppins shadow-2xl">
            {props.text}
          </div>
        </a>
      </div>
    </>
  );
}

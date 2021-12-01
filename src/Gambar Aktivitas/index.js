export default function GambarAktivitas(props) {
  if (props.position === "left") {
    return (
      <>
        <div className="my-5">
          <div className="relative h-44 w-80 lg:h-56 lg:w-96 transition ease-out duration-200 transform hover:-translate-y-0.5 hover:scale-105">
            <img
              alt=""
              src={props.src}
              className="z-50 absolute top-0 right-0 h-full w-full pb-4 pl-4 lg:pb-8 lg:pl-8"
            />
            <div className="z-0 absolute left-0 bottom-0 bg-palegreen rounded-xl lg:rounded-3xl w-11/12 h-full"></div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-darkgreen md:text-xl lg:text-2x1 font-poppins max-w-xs">
            {props.title}
          </p>
          <p className="font-normal text-gray-500 text-sm md:text-base font-poppins max-w-xs lg:max-w-sm">
            {props.date}
          </p>
        </div>
      </>
    );
  } else if (props.position === "right") {
    return (
      <>
        <div className="my-5">
          <div className="relative h-44 w-80 lg:h-56 lg:w-96 mx-auto transition ease-out duration-200 transform hover:-translate-y-0.5 hover:scale-105">
            <img
              alt=""
              src={props.src}
              className="z-50 absolute top-0 left-0 h-full w-full pb-4 pr-4 lg:pb-8 lg:pr-8"
            />
            <div className="z-0 absolute right-0 bottom-0 bg-palegreen rounded-xl lg:rounded-3xl w-11/12 h-full"></div>
          </div>
          <div className="mt-5">
            <h1 className="text-center font-bold font-poppins text-xl text-darkgreen">
              {props.title}
            </h1>
            <h2 className="text-center font-bold font-poppins text-sm text-palegreen">
              {props.date}
            </h2>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="my-5">
          <div className="relative h-44 w-80 lg:h-56 lg:w-96 mx-auto transition ease-out duration-200 transform hover:-translate-y-0.5 hover:scale-105">
            <img
              alt=""
              src={props.src}
              className="z-50 absolute top-0 left-0 h-full w-full pb-4 pr-4 lg:pb-8 lg:pr-8"
            />
            <div className="z-0 absolute right-0 bottom-0 bg-palegreen rounded-xl lg:rounded-3xl w-11/12 h-full"></div>
          </div>
        </div>
      </>
    );
  }
}

import hero from "../img/dasdasdassda 1.png";

export default function JumbotronHijau(props) {
  return (
    <>
      <div className="relative">
        <div className="flex justify-center">
          <div className="px-3 max-w-7xl absolute w-full h-full flex justify-start align-center">
            <div className="flex-1 flex flex-col justify-center">
              <div className="mx-auto">
                <h1 className="font-poppins text-white text-xl md:text-3xl xl:text-7xl font-bold mb-5">
                  {props.name}
                </h1>
                <h2 className="font-poppins text-white text-sm md:text-xl xl:text-4xl font-light">
                  {props.desc}
                </h2>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        <img
          className="h-60 md:h-auto w-full object-cover"
          src={hero}
          alt="banner mongga"
        />
      </div>
    </>
  );
}

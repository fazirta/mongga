import logo from "../img/upgrade 1.png";

export default function JumbotronHijau(props) {
  return (
    <>
      <div className="bg-darkgreen">
        <div className="flex items-center bg-darkgreen max-w-7xl mx-auto py-32">
          <div className="px-3 max-w-7xl w-full h-full flex justify-start align-center">
            <div className="flex-1 flex flex-col justify-center">
              <div className="mx-auto">
                <h1 className="font-poppins text-white text-xl md:text-3xl lg:text-5xl font-bold mb-5">
                  {props.name}
                </h1>
                <h2 className="font-poppins text-white text-sm md:text-xl lg:text-2xl font-light">
                  {props.desc}
                </h2>
              </div>
            </div>
          </div>
          <div>
            <img alt="" className="" src={logo} />
          </div>
        </div>
      </div>
    </>
  );
}

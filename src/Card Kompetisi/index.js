export default function CardKompetisi(props) {
  return (
    <>
      <div className="font-poppins text-xl lg:text-2xl font-bold">
        <div className="flex flex-col lg:flex-row lg:space-x-5 lg:space-x-28 w-full px-3 md:px-32 lg:px-48 py-3 lg:py-10">
          <img
            alt=""
            className="w-20 md:w-32 lg:w-auto object-cover mx-auto my-8 lg:my-auto"
            src={props.src}
          />
          <div className="font-poppins">
            <h1 className="text-2xl lg:text-4xl font-semibold">
              {props.title}
            </h1>
            <p className="py-5 font-light text-lg">{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

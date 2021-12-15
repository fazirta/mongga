export default function CardReview(props) {
  return (
    <>
      <div className="flex justify-around w-full space-x-5">
        <div>
          <img alt="" className="rounded-full" src={props.src} />
        </div>
        <div className="max-w-xl flex flex-col space-y-3 justify-center">
          <h1 className="font-bold text-maingreen text-md md:text-xl font-poppins">
            {props.name}
          </h1>
          <h2 className="text-maingreen font-bold font-poppins text-xs md:text-sm">
            {props.course}
          </h2>
          <p className="text-darkgreen text-xs md:text-sm max-w-lg text-justify font-poppins">
            {props.review}
          </p>
        </div>
      </div>
    </>
  );
}

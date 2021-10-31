import ButtonHijau from "../Button Hijau";

export default function Jumbotron(props) {
  return (
    <>
      <div
        className="py-16 lg:py-44 flex flex-col space-y-8 lg:space-y-12"
        style={{ background: `url(${props.src}) no-repeat center center` }}
        onLoad={() => props.setLoaded(true)}
      >
        <div>
          <img alt="" className="mx-auto w-44 lg:w-auto" src={props.src1} />
        </div>
        <div className="flex justify-center">
          <h1 className="text-xl lg:text-4xl text-white font-poppins font-bold max-w-xs lg:max-w-xl text-center">
            {props.title}
          </h1>
        </div>
        <div>
          <ButtonHijau
            dataAOS="zoom-in"
            href="/produk"
            text="Pelajari Selengkapnya"
          />
        </div>
      </div>
    </>
  );
}

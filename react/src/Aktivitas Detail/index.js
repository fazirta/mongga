import Breadcrumb from "../Breadcrumb";
import Galeri from "../Galeri";

export default function AktivitasDetail(props) {
  return (
    <>
      <div className="px-5 py-5 xl:py-10 lg:px-16 mx-auto mt-5 md:mt-10 max-w-7xl">
        <Breadcrumb href="/aktivitas" text="Aktivitas" />
      </div>
      <div className="px-5 mt-2 xl:mt-5 lg:px-16 mx-auto max-w-7xl">
        <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen font-poppins">
          {props.title}
        </h1>
        <h2 className="mt-3 lg:mt-6 text-md lg:text-lg text-gray-500 font-poppins">
          {props.date}
        </h2>
      </div>
      <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
        <h1>{props.description}</h1>
      </div>
      <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
        <Galeri
          title="Programming"
          src1={"http://localhost:1337" + props.image}
        />
      </div>
    </>
  );
}

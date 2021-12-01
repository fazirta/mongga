export default function FiturPelatihan(props) {
  return (
    <>
      <div className="px-0 lg:px-10 py-10 text-white">
        <div className="flex flex-col px-5 lg:px-16 py-3 lg:py-10 bg-darkpalegreen rounded-2xl border-2 border-gray-600">
          <div>
            <h1 className="font-poppins text-2xl font-semibold">
              Fitur Pelatihan:
            </h1>
          </div>
          <div className="flex justify-center flex-wrap mt-10">
            {props.contents.map((content) => (
              <div className="flex flex-col justify-center w-56 space-y-4 lg:space-y-8 self-center px-8 py-4">
                <img alt="" src={content[0]} className="mx-auto" />
                <h1 className="text-center mx-auto">{content[1]}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

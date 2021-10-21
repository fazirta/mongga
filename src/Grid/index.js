import Heading1 from "../Heading1";
import Paragraph1 from "../Paragraph1";
import ButtonHijau from "../Button Hijau";

export default function Grid(props) {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div
          className={[
            "flex flex-col w-full md:w-1/2 px-12 sm:order-1",
            props.bgColor,
            props.orderA,
          ].join(" ")}
        >
          <div className="flex justify-center h-full items-center">
            <img className="w-auto max-h-60" src={props.icon}></img>
          </div>
        </div>
        <div
          className={["flex flex-col w-full md:w-1/2 px-12 sm:order-2", props.orderB].join(
            " "
          )}
        >
          <Heading1 value={props.headingValue} position="py-3" />
          <Paragraph1
            value={props.paragraphValue}
            position="pt-3 pb-16 text-justify"
          />
          <ButtonHijau href={props.href} text={props.buttonText} />
        </div>
        <div className="w-full -z-10 relative bottom-10 md:bottom-16 order-last">
          <img className="w-full max-h-20" src={props.vector}></img>
        </div>
      </div>
    </>
  );
}

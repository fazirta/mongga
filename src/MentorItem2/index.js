import Paragraph1 from "../Paragraph1";
import Heading2 from "../Heading2";
import decor_star from "../img/decoration-star.png";

export default function MentorItem2(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-4 justify-center">
        <div className="flex flex-row md:flex-col md:w-1/3">
          <Heading2 value={props.name} />
        </div>
        <div className="flex flex-col md:w-1/3">
          <Paragraph1 value={props.description} />
        </div>
      </div>
    </>
  );
}

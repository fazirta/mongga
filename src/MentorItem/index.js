import Paragraph1 from "../Paragraph1";
import Heading2 from "../Heading2";
import decor_star from "../img/decoration-star.png";

export default function MentorItem(props) {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex-col border-2 rounded-full border-green-700 relative">
          <img className="absolute right-0" src={decor_star} />
          <img className="rounded-full p-2" src={props.pic} />
        </div>
        <div className="flex-col self-center pl-2">
          <div className="flex-row">
            <Heading2 value={props.name} />
          </div>
          <div className="flex-row">
            <Paragraph1 value={props.bio1} position="max-w-xs" />
            <Paragraph1 value={props.bio2} position="max-w-xs pt-2" />
          </div>
        </div>
      </div>
    </>
  );
}

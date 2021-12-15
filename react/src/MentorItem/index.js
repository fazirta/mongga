import Paragraph1 from "../Paragraph1";
import Heading2 from "../Heading2";
import decor_star from "../img/decoration-star.png";

export default function MentorItem(props) {
  return (
    <>
      <div className="flex-row mt-10 md:flex-col md:w-1/2 md:mt-0 xl:ml-10">
        <div className="flex flex-row ">
          <div className="flex-col xl:border-2 rounded-full border-green-700 relative">
            <img alt="" className="absolute right-0 w-4 md:w-12" src={decor_star} />
            <img alt="" className="rounded-full p-2 w-20 md:w-40" src={props.pic} />
          </div>
          <div className="flex-col self-center pl-2">
            <div className="flex-row ">
              <Heading2 value={props.name} />
            </div>
            <div className="flex-row">
              <Paragraph1 value={props.bio1} position="max-w-xs" />
              <Paragraph1 value={props.bio2} position="max-w-xs pt-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

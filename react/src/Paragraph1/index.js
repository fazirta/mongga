export default function Paragraph1(props) {
  return (
    <>
      <p className={["font-poppins text-darkgreen", props.position].join(" ")}>
        {props.value}
      </p>
    </>
  );
}

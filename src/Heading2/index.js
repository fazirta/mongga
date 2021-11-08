export default function Heading2(props) {
  return (
    <>
      <h2
        className={[
          "font-poppins text-xl md:text-2xl font-bold text-darkgreen",
          props.position,
        ].join(" ")}
      >
        {props.value}
      </h2>
    </>
  );
}

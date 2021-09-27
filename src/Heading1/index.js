export default function Heading1(props) {
  return (
    <>
      <h1
        className={[
          "font-poppins text-2xl md:text-4xl font-bold text-darkgreen",
          props.position,
        ].join(" ")}
      >
        {props.value}
      </h1>
    </>
  );
}

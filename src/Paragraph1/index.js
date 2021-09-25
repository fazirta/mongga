export default function Paragraph1(props) {
  return (
    <>
      <p
        className={[
          "font-poppins md:px-32 xl:px-52 text-darkgreen",
          props.position,
        ].join(" ")}
      >
        {props.value}
      </p>
    </>
  );
}

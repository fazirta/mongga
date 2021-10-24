export default function Breadcrumb(props) {
  return (
    <>
      <nav className="bg-grey-light rounded font-sans w-full">
        <ol className="list-reset flex text-darkgreen">
          <li><span className="mx-2">{"<"}</span></li>
          <li><a href={props.href}>{props.text}</a></li>
        </ol>
      </nav>
    </>
  );
}

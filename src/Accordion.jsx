import editImg from "../public/square-edit-outline.svg";

export default function Accordion({
  children,
  accordionId,
  selected,
  onSelect,
}) {
  return (
    <section
      className={selected === accordionId ? "accordion selected" : "accordion"}
    >
      <div
        className="accordion-switch"
        onClick={() => {
          onSelect(accordionId);
        }}
      >
        <p>{accordionId}</p>
        <img src={editImg} alt="" />
      </div>
      {children}
    </section>
  );
}

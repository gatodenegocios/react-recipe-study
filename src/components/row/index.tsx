import "./index.scss";

type RowProps = {
  title: string;
  imgSrc: string;
};

export function Row({ title, imgSrc }: RowProps) {
  return (
    <div className="row">
      <span className="row-title">{title}</span>
      <img src={imgSrc} />
    </div>
  );
}

import "./index.scss";

type RowProps = {
  title: string;
  imgSrc: string;
};

export function Row({ title, imgSrc }: RowProps) {
  return (
    <div className="row" data-testid="row">
      <span className="row-title" data-testid="row--title">
        {title}
      </span>
      <img src={imgSrc} data-testid="row--img" />
    </div>
  );
}

import { Row } from "../../../../components/row";
import "./rows.scss";

export function Rows() {
  return (
    <div id="rows">
      <Row
        title="salads"
        imgSrc="https://s2.glbimg.com/pXlIoA7WATMayt9w4cYcMduaR-g=/0x0:580x387/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/Y/4/qfH9BpTBm3WoQ5mzLW0Q/salada-italiana.jpg"
      />
      <Row
        title="drinks"
        imgSrc="http://content.paodeacucar.com/wp-content/uploads/2017/05/receitas-de-drinks-capa-2.jpg"
      />
      <Row
        title="desserts"
        imgSrc="https://images-gmi-pmc.edge-generalmills.com/7c1096c7-bfd0-4806-a794-1d3001fe0063.jpg"
      />
    </div>
  );
}

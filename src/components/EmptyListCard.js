import { Empty } from "antd";
import emptyBox from '../static/images/empty-box.png';
import AddButton from "./AddButton";
const EmptyListCard = ({showFormDialog}) => (
  <div className="card shadow-sm" style={{display:"inline-block",position:"relative",left: "50%",transform: "translateX(-50%)"}}>
    <Empty
      image={emptyBox}
      imageStyle={{
        height: 150,
      }}
      description={
        <span>
          Meme Box is empty.
        </span>
      }
    >
      <AddButton text="Start filling" onClick={showFormDialog} />
    </Empty>
  </div>
);

export default EmptyListCard;

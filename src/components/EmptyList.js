import { Empty, Button } from "antd";
import {PlusCircleOutlined} from '@ant-design/icons';
import emptyBox from '../static/images/empty-box.png';
const EmptyList = ({showFormDialog}) => (
  <div className="card" style={{display:"inline-block",position:"relative",left: "50%",transform: "translateX(-50%)"}}>
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
      <Button type="primary" shape="round" icon={<PlusCircleOutlined />} onClick={showFormDialog} >
          Add new meme
      </Button>
    </Empty>
  </div>
);

export default EmptyList;

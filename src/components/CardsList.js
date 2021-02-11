import { List } from "antd";
import CardwithEdit from "./CardwithEdit";
const data = [
  {
    title: "Title 1",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis"
  },
  {
    title: "Title 2",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis"
  },
  { img:"https:google.com",
    title: "Title 3",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis"

  },
  { img:"https:google.com",
    title: "Title 4",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis"

  },
  { img:"https:google.com",
    title: "Title 5",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis"

  },
  { img:"https:google.com",
    title: "Title 6",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis"

  },
];

const CardsList = ({showFormDialog}) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      dataSource={data} // Datasource for the list
      renderItem={(item) => ( // Function that returns the component to render for each list item  
        <List.Item>
          <CardwithEdit
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            showFormDialog={showFormDialog}
          />
        </List.Item>
      )}
    />
  );
};

export default CardsList;

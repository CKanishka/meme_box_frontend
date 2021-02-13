import { List } from "antd";
import CardwithEdit from "./CardwithEdit";

const CardsList = ({ data, form, setIsEdit, setUpdateItemId,setDeleteItemId, showFormDialog }) => {
  return (
    <div style={{ marginTop: "3rem" }}>
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
        renderItem={(
          item // Function that returns the component to render for each list item
        ) => (
          <List.Item>
            <CardwithEdit
              item={item}
              form={form}
              setIsEdit={setIsEdit}
              setUpdateItemId={setUpdateItemId}
              setDeleteItemId={setDeleteItemId}
              showFormDialog={showFormDialog}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CardsList;

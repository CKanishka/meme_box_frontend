import React from "react";
import { Form, notification, Divider } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import "./App.css";
import AddButton from "./components/AddButton";
import CardsList from "./components/CardsList";
import EmptyListCard from "./components/EmptyListCard";
import FormDialog from "./components/FormDialog";
import logo from "./static/images/logo.png";
import loader from "./static/images/loader.svg";
import { API_URL } from "./constants";

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [activeItemId, setActiveItemId] = React.useState(null);
  const [isEdit, setIsEdit] = React.useState(false);
  const [form] = Form.useForm();

  React.useEffect(() => {
    getMemes(); // Get latest memes when page is mounted
  }, []);

  /*************************CRUD Functions for Meme*************************************/
  const getMemes = async () => {
    try {
      setIsLoading(true); // show the loader
      const memesList = await (await fetch(`${API_URL}/memes`)).json();
      setIsLoading(false); // hide the loader
      setData(memesList);
    } catch (err) {
      notification.error({
        message: "Sorry. Failed to fetch memes",
        description:
          "Don't be disheartened. Please check your network connection and try again.",
      });
    }
  };

  const addMeme = async () => {
    const newMeme = form.getFieldsValue();
    try {
      // POST API to submit a new meme
      const id = await (
        await fetch(`${API_URL}/memes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMeme),
        })
      ).json();
      // If meme added successfully, add it to the list of existing memes and show a notification
      setData([{ ...newMeme, id }, ...data]);
      notification.success({
        message: "Success",
        description: "Kudos! meme added to the meme box.",
      });
    } catch (error) {
      notification.error({
        message: "Your meme could not reach the meme box",
        description: "Please try submitting again.",
      });
    }
  };

  const updateMeme = async () => {
    const { caption, url } = form.getFieldsValue();
    try {
      // PATCH API to update an existing meme
      await fetch(`${API_URL}/memes/${activeItemId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ caption, url }),
      });

      // If meme updated successfully, update the item in the list of existing memes and show a notification
      setData(
        data.map((item) =>
          item.id === activeItemId ? { ...item, caption, url } : item
        )
      );
      notification.success({
        message: "Success",
        description: "Kudos! meme updated successfully.",
      });
    } catch (error) {
      notification.error({
        message: "Meme update failed",
        description: "Please try updating again.",
      });
    }
  };

  const deleteMeme = async () => {
    try {
      // DELETE API to delete an existing meme
      await fetch(`${API_URL}/memes/${activeItemId}`, {
        method: "DELETE",
      });

      // If meme deleted successfully, delete the item from the list of existing memes and show a notification
      setData(data.filter((item) => item.id !== activeItemId));
      notification.success({
        message: "Success",
        description: "Kudos! meme deleted successfully.",
      });
    } catch (error) {
      notification.error({
        message: "Meme delete failed",
        description: "Please try deleting again.",
      });
    }
  };
  /************************************************************************************/

  const showFormDialog = () => {
    setVisible(true);
  };
  const hideFormDialog = () => {
    setVisible(false);
  };
  return (
    <Layout>
      <Content>
        <div className="container">
          <div className="text-center">
            <img src={logo} width="300" height="200" alt="Meme Box Logo" />
            {data.length > 0 && <AddButton onClick={showFormDialog} />}
          </div>
          {isLoading && (
            <div className="text-center">
              <img src={loader} width="100" height="100" alt="Loader" />
            </div>
          )}
          {!data.length && !isLoading && (
            <EmptyListCard showFormDialog={showFormDialog} />
          )}
          {data.length > 0 && !isLoading && (
            <>
              <Divider>Memes to fond your 👀</Divider>
              <CardsList
                data={data}
                form={form}
                showFormDialog={showFormDialog}
                setIsEdit={setIsEdit}
                setActiveItemId={setActiveItemId}
                deleteMeme={deleteMeme}
              />
            </>
          )}
          <FormDialog
            visible={visible}
            form={form}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            hideModal={hideFormDialog}
            addMeme={addMeme}
            updateMeme={updateMeme}
          />
        </div>
      </Content>
    </Layout>
  );
}

export default App;

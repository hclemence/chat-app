import TitleBar from "./TitleBar";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

const DUMMY_DATA = [
    {
      senderId: "perborgen",
      text: "who'll win?"
    },
    {
      senderId: "janedoe",
      text: "who'll win?"
    }
  ]

const Chat = () => {
    return (
        <div>
            <h1>CHAT</h1>
            <TitleBar />
            <MessageList />
            <MessageForm />
        </div>
    );
};
export default Chat;
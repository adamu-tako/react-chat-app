const MyMessage = ({ message }) => {
  if (message?.attachment?.length > 0) {
    return (
      <img
        src={message.attachents[0].file}
        alt="message attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "left",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3b2a50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;

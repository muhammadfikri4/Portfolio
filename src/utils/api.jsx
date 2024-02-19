const sendMessage = async (
  e,
  { fullName, email, message, Swal, withReactContent, axios }
) => {
  e.preventDefault();
  const MySwal = withReactContent(Swal);
  if (!fullName || !email || !message) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: "The input field cannot be empty!",
    });
    return 0;
  }
  try {
    await axios.post(
      "https://muhfikri-portofolio-default-rtdb.firebaseio.com/message.json",
      { fullName, email, message }
    );
    MySwal.fire({
      title: <strong>Success!</strong>,
      text: "Message sent successfully!",
      icon: "success",
    });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: "Failed to send message!",
    });
  }
};

export { sendMessage };

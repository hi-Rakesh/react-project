const ErrorMessage = ({ message }) => (
  <div className=" bg-white/10 backdrop-blur-lg border border-white/20  text-red-700 px-4 py-3 rounded relative my-1" role="alert">
    <p style={{ color: "red" }}>{message}</p>
  </div>
  
);

export default ErrorMessage;
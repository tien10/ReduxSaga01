// styles la 1 function nhan 1 bien la theme
const styles = (theme) => ({
  taskboard: {
    display: 'flex',
    alignItems: 'center',
  },
  shape: {
    // backgroundColor: "red",
    // color: "white",
    margin: 10,
    padding: 20,
    // borderColor: "#cccccc",
    // borderRadius: 4
    // cach su dung theme
    // muon thay doi mau sac thi vao theme thay doi
    backgroundColor: theme.color.primary,
    color: theme.shape.textColor,
  },
  modalConfirmTextBold: {
    fontWeight: 700,
  },
});
export default styles;

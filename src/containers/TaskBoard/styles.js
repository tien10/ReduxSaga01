const styles = theme => ({
    taskboard: {
        display: "flex",
        alignItems: "center"
    },
    shape: {
        // backgroundColor: "red",
        // color: "white",
        margin: 10,
        padding: 20,
        // borderColor: "#cccccc",
        // borderRadius: 4
        backgroundColor: theme.color.primary,
        color: theme.shape.textColor
    }
});
export default styles;
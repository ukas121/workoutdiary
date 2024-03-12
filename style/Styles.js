import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  WoutHeader: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginBottom: 10,
    marginTop: 30,
  },
  workoutItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "lightblue",
  },
  workoutType: {
    fontSize: 25,
    fontWeight: "bold",
  },
  workoutDate: {
    fontSize: 20,
    color: "black",
  },
  expandedInfo: {
    marginTop: 10,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "lightblue",
  },
  containerTwo: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 20,
  },
  input: {
    height: 40,
    width: "80%",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    minWidth: "178px",
    maxWidth: "500px",
    color: "black",
  },
  addExerciseButton: {
    backgroundColor: "white",
    padding: 6,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    width: "150px",
  },
  addExerciseText: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    borderWidth: 1,
    borderRadius: 17,
    padding: 10,
    margin: 10,
  },
  selectedIcon: {
    backgroundColor: "black",
  },
  totalIcon: {
    backgroundColor: "black",
  },
});

export default Styles;

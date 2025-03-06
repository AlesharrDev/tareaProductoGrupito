import { StyleSheet } from "react-native";
const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    justifyContent: "center",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  h2: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#555",
  },
  label: {
    marginTop: 5,
    fontSize: 15,
    color: "#666",
    width: 70,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 14,
    width: 170,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  textblack: {
    color: "black",
  },
  card: {
    backgroundColor: "fuchsia",
    borderRadius: 10,
    marginBottom: 10,
    padding: 20,
    width: 280,
    height: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default globalStyle;

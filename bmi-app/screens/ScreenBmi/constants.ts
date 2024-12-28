import { StyleSheet } from 'react-native';

export const INITIAL_WEIGHT = 80;
export const INITIAL_HEIGHT = 1.83;

const BMI_COLOR_BAD = "#d2222d";
const BMI_COLOR_OKAY = "#ffbf00";
const BMI_COLOR_GOOD = "#238823";

export const BMI_COLOR_INPUT_RANGE = [0, 15, 17.5, 18.5, 25, 27.5, 32.5];
export const BMI_COLOR_OUTPUT_RANGE = [
  BMI_COLOR_BAD,
  BMI_COLOR_BAD,
  BMI_COLOR_OKAY,
  BMI_COLOR_GOOD,
  BMI_COLOR_GOOD,
  BMI_COLOR_OKAY,
  BMI_COLOR_BAD,
]

// Usually would be written in the same file as the component or screen to
// which they're applied, but moved here to avoid distractions in `ScreenBmi`.
export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  text: {
    lineHeight: 24,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputs: {
    width: "80%",
    gap: 8,
    flexDirection: "row",
  },
  instructions: {
    maxWidth: "80%",
    fontSize: 16,
  },
  bmiBlock: {
    borderRadius: 24,
    justifyContent: "center",
  },
  bmiText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: "#eee",
  },
});
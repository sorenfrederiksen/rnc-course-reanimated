import { View, Text } from "react-native";
import Animated, {
  clamp,
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { TextInputWithLabel } from "@/components/TextInputWithLabel";
import { AnimatedTextInput } from "@/components/AnimatedTextInput";
import {
  BMI_COLOR_INPUT_RANGE,
  BMI_COLOR_OUTPUT_RANGE,
  INITIAL_HEIGHT,
  INITIAL_WEIGHT,
  STYLES,
} from "./constants";

/**
 * An application for calculating and visualising the user's Body Mass Index (BMI).
 */
export function ScreenBmi() {
  const weight = useSharedValue(INITIAL_WEIGHT);
  const height = useSharedValue(INITIAL_HEIGHT);

  const bmi = useDerivedValue(() => {
    return weight.value / (height.value * height.value);
  });

  const bmiText = useAnimatedProps(() => ({
    value: bmi.value.toFixed(1), // required, for value to appear on first render
    text: bmi.value.toFixed(1),
  }));

  const vizStyle = useAnimatedStyle(() => {
    return {
      width: clamp(interpolate(weight.value, [0, 120], [0, 250]), 0, 250),
      height: clamp(interpolate(height.value, [0, 2.3], [0, 400]), 0, 400),
      backgroundColor: interpolateColor(
        bmi.value,
        BMI_COLOR_INPUT_RANGE,
        BMI_COLOR_OUTPUT_RANGE
      ),
    };
  });

  return (
    <View style={STYLES.container}>
      <Text style={[STYLES.title, STYLES.text]}>What's your BMI?</Text>
      <Text style={[STYLES.instructions, STYLES.text]}>
        Enter your weight and height below to find out!
      </Text>
      <View style={STYLES.separator} />
      <View style={STYLES.inputs}>
        <TextInputWithLabel
          label="Weight (m)"
          keyboardType="decimal-pad"
          onChange={(e) => {
            weight.value = withTiming(+e.nativeEvent.text, {
              duration: 1000,
            });
          }}
          defaultValue={`${INITIAL_WEIGHT}`}
        />
        <TextInputWithLabel
          label="Height (m)"
          keyboardType="decimal-pad"
          onChange={(e) => {
            height.value = withTiming(+e.nativeEvent.text, {
              duration: 1000,
            });
          }}
          defaultValue={`${INITIAL_HEIGHT}`}
        />
      </View>
      <View style={STYLES.separator} />
      <Animated.View style={[STYLES.bmiBlock, vizStyle]}>
        <AnimatedTextInput
          style={[STYLES.bmiText, STYLES.text]}
          animatedProps={bmiText}
        />
      </Animated.View>
    </View>
  );
}

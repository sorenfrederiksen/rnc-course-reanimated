import { ComponentProps } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

type Props = ComponentProps<typeof TextInput> & {
  label: string;
};

const styles = StyleSheet.create({
  input: {
    height: 24,
    backgroundColor: "#eee",
    borderRadius: 4,
  },
});

export const TextInputWithLabel = ({ label, style, ...props }: Props) => {
  return (
    <View style={{ flexGrow: 1, gap: 8 }}>
      <Text>{label}</Text>
      <TextInput {...props} style={[style, styles.input]} />
    </View>
  );
};

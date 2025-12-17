import { Box, Text, TextInput } from "grommet";

export default function InputField({ label, value, setValue, type="text" }:any) {
  return (
    <Box margin={{ bottom: "medium" }}>
      <Text>{label}</Text>
      <TextInput
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
}

"use client";
import { Box, Text } from "grommet";

export default function StatCard({ title, value }: any) {
  return (
    <Box
      pad="medium"
      background="white"
      round="small"
      elevation="small"
      width="260px"
    >
      <Text size="small" color="dark-4">
        {title}
      </Text>

      <Text margin={{ top: "small" }} size="xxlarge" weight="bold">
        {value}
      </Text>
    </Box>
  );
}

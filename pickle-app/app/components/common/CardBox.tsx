import { Box } from "grommet";

export default function CardBox({ children }:any) {
  return (
    <Box
      pad="large"
      background="white"
      elevation="medium"
      round="small"
      width="medium"
    >
      {children}
    </Box>
  );
}

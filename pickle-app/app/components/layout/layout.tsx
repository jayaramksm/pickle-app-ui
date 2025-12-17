"use client";

import { Box } from "grommet";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }: any) {
  return (
    <Box direction="row" height="100vh">
      <Sidebar />

      <Box flex>
        <Topbar />
        <Box pad="medium"  gap="medium">{children}</Box>
      </Box>
    </Box>
  );
}

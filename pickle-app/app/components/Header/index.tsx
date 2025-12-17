"use client";
import { RootState } from "@/app/store";
import { Box, Avatar, Text, Menu } from "grommet";
import { User } from "grommet-icons";
import { useSelector } from "react-redux";

const HeaderBar = () => {
  const user:any = useSelector((state: RootState) => state?.user?.user);

  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      pad="medium"
      background="brand"
    >
      <Text weight="bold" size="large" color="white">
        Pickle Store
      </Text>

      <Menu
        label={
          <Box direction="row" gap="small" align="center">
            <Avatar background="white">
              <User color="brand" />
            </Avatar>
            <Text>{user?.name || "Guest"}</Text>
          </Box>
        }
        items={[
          { label: "Edit Profile" },
          { label: "Logout" },
        ]}
      />
    </Box>
  );
};

export default HeaderBar;

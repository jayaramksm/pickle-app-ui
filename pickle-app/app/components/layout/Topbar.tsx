"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Text, Avatar, TextInput, Drop } from "grommet";
import { Search, Notification, User, Logout } from "grommet-icons";

export default function Topbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState<any>();

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    router.push("/pages/login");
  };

  return (
    <Box
      direction="row"
      justify="between"
      align="center"
      pad={{ horizontal: "medium", vertical: "small" }}
      background="white"
      height="70px"
      border={{ side: "bottom", color: "light-4" }}
      style={{ position: "sticky", top: 0, zIndex: 10 }}
    >
      {/* Left Section */}
      <Text size="large" weight="bold" color="dark-1">
        Dashboard
      </Text>

      {/* Right Section */}
      <Box direction="row" align="center" gap="medium">
        {/* Search Box */}
        <Box width="250px">
          <TextInput icon={<Search color="grey" />} placeholder="Search..." />
        </Box>

        {/* Notification Icon */}
        <Notification color="brand" size="medium" />

        {/* Avatar Wrapper Box (supports onClick + ref) */}
        <Box
          ref={(el) => setTarget(el)}
          onClick={() => setOpen(!open)}
          style={{ cursor: "pointer" }}
          round="full"
          overflow="hidden"
        >
          <Avatar border={{ color: "brand", size: "small" }}>
            <User color="brand" />
          </Avatar>
        </Box>

        {/* Dropdown menu */}
        {open && target && (
          <Drop
            align={{ top: "bottom", right: "right" }}
            target={target}
            onClickOutside={() => setOpen(false)}
          >
            <Box pad="small" width="150px" background="white" gap="small">
              <Box
                direction="row"
                align="center"
                gap="small"
                hoverIndicator="light-3"
                pad="small"
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
              >
                <Logout size="16px" />
                <Text>Logout</Text>
              </Box>
            </Box>
          </Drop>
        )}
      </Box>
    </Box>
  );
}

"use client";
import { Box, Text } from "grommet";
import { Home, User, Tools } from "grommet-icons";
import { usePathname, useRouter } from "next/navigation";
import { BarChart , PieChart} from "grommet-icons";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menu = [
    { label: "Dashboard", icon: <Home />, path: "/pages/dashboard" },
    { label: "Users", icon: <BarChart />, path: "/pages/userDataTable" },
    { label: "Items", icon: <PieChart />, path: "/pages/items" },
    { label: "Profile", icon: <User />, path: "/pages/profile" },
    { label: "Settings", icon: <Tools />, path: "/pages/settings" },
  ];
  return (
    <Box
      width="240px"
      background="#faf7ff"
      // background="background"
      height="100vh"
      pad="medium"
      border={{ side: "right", color: "light-4", size: "small" }}
      gap="small"
    >
      {menu.map((item) => {
        const isActive = pathname.startsWith(item.path);

        return (
          <Box
            key={item.path}
            direction="row"
            align="center"
            gap="small"
            pad={{ vertical: "12px", horizontal: "16px" }}
            round="small"
            background={isActive ? "#e8dbff" : undefined}
            hoverIndicator="#f1e7ff"
            style={{
              cursor: "pointer",
              transition: "0.3s ease",
            }}
            onClick={() => router.push(item.path)}
          >
            {/* ICON */}
            <Box
              style={{
                color: isActive ? "#6a0dad" : "#7a4dbb",
                transition: "0.2s",
              }}
            >
              {item.icon}
            </Box>

            {/* TEXT */}
            <Text
              size="medium"
              weight="bold"
              color={isActive ? "#6a0dad" : "#6d4ca1"}
            >
              {item.label}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}

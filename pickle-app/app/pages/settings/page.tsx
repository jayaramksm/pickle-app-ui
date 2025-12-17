"use client";
import { Box, Text, CheckBox, Select, Button } from "grommet";
import { useContext, useState } from "react";
import Layout from "@/app/components/layout/layout";
import { CustomThemeContext } from "../context/ThemeContext";

export default function SettingsPage() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [language, setLanguage] = useState("English");

    return (
        <Layout>
            <CustomThemeContext.Consumer>
                {({themeMode, setThemeMode }: any) => (
                    <Box pad="medium" gap="large" width="70%">

                        <Text size="xxlarge" weight="bold" margin={{ bottom: "medium" }}>
                            Settings
                        </Text>

                        {/* Dark Mode */}
                        <Box direction="row" align="center" gap="medium">
                            <CheckBox
                                checked={themeMode === "dark"}
                                onChange={(e) => {
                                    setDarkMode(e.target.checked);
                                    if(setThemeMode)setThemeMode(e.target.checked ? "dark" : "light");
                                }}
                            />
                            <Text size="large" weight="bold">Enable Dark Mode</Text>
                        </Box>

                        {/* Notifications */}
                        <Box direction="row" align="center" gap="medium">
                            <CheckBox
                                checked={notifications}
                                onChange={(e) => setNotifications(e.target.checked)}
                            />
                            <Text size="large" weight="bold">Enable Notifications</Text>
                        </Box>

                        {/* Language */}
                        <Box>
                            <Text size="large" weight="bold" margin={{ bottom: "small" }}>
                                Language
                            </Text>
                            <Select
                                options={["English", "Hindi", "Tamil", "Telugu"]}
                                value={language}
                                onChange={({ option }) => setLanguage(option)}
                            />
                        </Box>

                        {/* Save Button */}
                        <Button
                            primary
                            color="brand"
                            label={
                                <Text size="large" weight="bold">
                                    Save Settings
                                </Text>
                            }
                            style={{
                                height: "60px",
                                borderRadius: "10px",
                            }}
                        />
                    </Box>
                )}
            </CustomThemeContext.Consumer>
        </Layout>
    );
}

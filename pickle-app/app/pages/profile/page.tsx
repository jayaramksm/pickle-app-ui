"use client";

import { useState } from "react";
import { Box, Text, TextInput, Avatar, Button } from "grommet";
import { Camera } from "grommet-icons";
import Layout from "@/app/components/layout/layout";

export default function ProfilePage() {
    const [name, setName] = useState("Jaya Ram");
    const [email, setEmail] = useState("jayararm@mail.com");
    const [phone, setPhone] = useState("9876543210");

    return (
        <Layout>
            <Box align="center" justify="start" pad="medium" background="background" height="100%">
                <Box
                    width="450px"
                    pad="large"
                    round="large"
                    background="background"
                    elevation="medium"
                    align="center"
                    gap="medium"
                    animation="fadeIn"
                    // style={{ border: "1px solid #eee" }}
                >
                    {/* Avatar Section */}
                    <Box align="center" gap="small">
                        <Box height="90px" width="90px" round="full" overflow="hidden" elevation="small">
                            <Avatar
                                size="xlarge"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5jA42Sk5yw9kUEbAcpArcvIvTWWEin3Ojw&s"
                                background="brand"
                            />
                        </Box>

                        <Box direction="row" align="center" gap="small" margin={{ top: "small" }}>
                            <Camera color="brand" />
                            <Text color="brand" weight="bold">Change Photo</Text>
                        </Box>

                        <Text size="large" weight="bold">
                            {name}
                        </Text>
                        {/* <Text size="small" color="dark-5">
                            {email}
                        </Text> */}
                    </Box>

                    {/* Input Fields */}
                    <Box width="100%" gap="medium" margin={{ top: "medium" }}>
                        <Box gap="xsmall">
                            <Text size="small" weight="bold">Full Name</Text>
                            <TextInput
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                size="medium"
                                plain={false}
                            />
                        </Box>

                        <Box gap="xsmall">
                            <Text size="small" weight="bold">Email</Text>
                            <TextInput
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                size="medium"
                                plain={false}
                            />
                        </Box>

                        <Box gap="xsmall">
                            <Text size="small" weight="bold">Phone</Text>
                            <TextInput
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                size="medium"
                                plain={false}
                            />
                        </Box>
                    </Box>

                    {/* Save Button */}
                    <Button
                        primary
                        label={
                            <Text size="medium" weight="bold">
                                Save Changes
                            </Text>
                        }
                        color="brand"
                        style={{
                            width: "100%",
                            height: "50px",
                            borderRadius: "8px",
                            marginTop: "10px",
                        }}
                    />
                </Box>
            </Box>
        </Layout>
    );
}

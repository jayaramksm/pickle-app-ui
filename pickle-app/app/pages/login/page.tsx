"use client";

import { Box, Heading, Image, Text } from "grommet";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";
import { useRouter } from "next/navigation";
import InputField from "../../components/common/InputField";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function LoginPage() {
  const dispatch = useDispatch<any>();
  const router = useRouter();

  const { user, loading, error } = useSelector((state:any) => state?.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect on success
  useEffect(() => {
    if (user?.role === "admin") router.push("/pages/dashboard");
    if (user?.role === "user") router.push("/pages/items");
  }, [user, router]);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  return (
    <Box direction="row" height="100vh" background="light-2">
      
      {/* LEFT SIDE */}
      <Box width="50%" pad="large" justify="center">
        <Box width="60%">
          <Heading level="2">Login</Heading>

          {error && (
            <Text color="status-critical" margin={{ bottom: "small" }}>
              {error}
            </Text>
          )}

          <InputField label="Email" value={email} setValue={setEmail} />
          <InputField
            label="Password"
            type="password"
            value={password}
            setValue={setPassword}
          />

          <PrimaryButton
            label={loading ? "Loading..." : "Login"}
            onClick={handleLogin}
            style={{ width: "100%", marginTop: "20px" }}
            disabled={loading}
          />

          <Text margin={{ top: "medium" }}>
            Don’t have an account?{" "}
            <a href="/pages/signup" style={{ color: "#7D4CDB" }}>
              Signup
            </a>
          </Text>
        </Box>
      </Box>

      {/* RIGHT IMAGE */}
      <Box width="50%" height="100%" gap="10px" overflow="hidden">
        {/* <Image fit="contain" src="/login-side.png" /> */}
      </Box>
    </Box>
  );
}

import { Button } from "grommet";

export default function PrimaryButton({ label, ...rest }:any) {
  return (
    <Button
      label={label}
      primary
      style={{ borderRadius: "8px" }}
      {...rest}
    />
  );
}

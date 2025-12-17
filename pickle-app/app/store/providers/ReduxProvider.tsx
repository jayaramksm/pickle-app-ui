"use client";

import { Grommet } from "grommet";
import { Provider } from "react-redux";
import { store } from "../store";
import { globalTheme } from "../../theme/globalTheme";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Grommet full theme={globalTheme}>
      <Provider store={store}>{children}</Provider>
    </Grommet>
  );
}

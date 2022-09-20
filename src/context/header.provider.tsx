import { FC, PropsWithChildren } from "react";
import HeaderContext, { initialHeaderState } from "./header.context";
import Provider from "./provider.factory";

const HeaderProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider
    initialState={initialHeaderState}
    ContextComponent={HeaderContext}
  >
    {children}
  </Provider>
);

export default HeaderProvider;
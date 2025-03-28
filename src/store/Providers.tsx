'use client';
import { Provider } from "react-redux";
import { store } from "./index";

interface ProvidersProps {
children: React.ReactNode;
}
const Providers = ({children}: ProvidersProps) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default Providers;
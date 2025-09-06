import { createContext, useContext } from "react";

type LayoutContextType = {
  user: {
    name: string;
    email: string;
    job: string;
    address: string;
    phone: string;
    country: string;
  };
};

export const LayoutContext = createContext<LayoutContextType>({
  user: {
    name: "",
    email: "",
    job: "",
    address: "",
    phone: "",
    country: "",
  },
});

export default function useLayoutData() {
  const context = useContext(LayoutContext);

  return context;
}

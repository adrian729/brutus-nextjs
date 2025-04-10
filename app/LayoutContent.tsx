"use client";

import { Sidebar } from "@/components/navigation/Sidebar";
import { cn } from "@/utils/cn";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export const PageTransitionContext = createContext<{
  pageTransition: boolean;
  setPageTransition: Dispatch<SetStateAction<boolean>>;
}>({
  pageTransition: false,
  setPageTransition: (_) => {
    console.error("setPageTransition function was not provided");
  },
});

export default function LayoutContent({ children }: PropsWithChildren) {
  const [pageTransition, setPageTransition] = useState(false);

  return (
    <PageTransitionContext.Provider
      value={{ pageTransition, setPageTransition }}
    >
      <Sidebar />
      <div
        className={cn([
          "page-content w-full bg-green-400",
          pageTransition && "page-transition",
        ])}
      >
        {children}
      </div>
    </PageTransitionContext.Provider>
  );
}

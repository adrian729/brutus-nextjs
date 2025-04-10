"use client";

import { PageTransitionContext } from "@/app/LayoutContent";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useContext } from "react";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type TransitionLinkProps = {
  children: ReactNode;
  href: string;
} & LinkProps;
export function TransitionLink({
  children,
  href,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const { setPageTransition } = useContext(PageTransitionContext);

  async function handleTransition(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setPageTransition(true);
    await sleep(500);
    router.push(href);
    setPageTransition(false);
  }

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
}

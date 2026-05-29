"use client";

import { useState, useEffect } from "react";
import { MailIcon } from "./icons";

type Props = {
  user: string;
  domain: string;
  className?: string;
};

export function EmailLink({ user, domain, className }: Props) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  if (!email) {
    return (
      <a href="/contact" className={className}>
        <MailIcon className="h-5 w-5 flex-shrink-0" />
        <span>Send a message</span>
      </a>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      <MailIcon className="h-5 w-5 flex-shrink-0" />
      <span>{email}</span>
    </a>
  );
}

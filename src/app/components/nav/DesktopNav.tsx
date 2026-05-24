"use client";
import { useEffect, useRef, useState } from "react";
import { navigationData } from "./nav-config";
import { NavLink } from "./NavLink";
import { NavDropdown } from "./NavDropdown";

export function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleOpen = (label: string) => {
    clearCloseTimeout();
    setActiveDropdown(label);
  };

  const handleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      closeTimeoutRef.current = null;
    }, 40);
  };

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  return (
    <nav className="hidden items-center lg:flex lg:gap-9" onMouseLeave={handleClose}>
      {navigationData.map((item) => (
        item.children ? (
          <NavDropdown
            key={item.label}
            label={item.label}
            items={item.children}
            isOpen={activeDropdown === item.label}
            onOpen={() => handleOpen(item.label)}
            onClose={handleClose}
          />
        ) : (
          <div key={item.label} onMouseEnter={() => setActiveDropdown(null)}>
            <NavLink href={item.href || "#"}>
              {item.label}
            </NavLink>
          </div>
        )
      ))}
    </nav>
  );
}

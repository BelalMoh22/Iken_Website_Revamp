"use client";
import { navigationData } from "./nav-config";
import { NavLink } from "./NavLink";
import { NavDropdown } from "./NavDropdown";

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-6 lg:flex xl:gap-10">
      {navigationData.map((item) => (
        item.children ? (
          <NavDropdown key={item.label} label={item.label} items={item.children} />
        ) : (
          <NavLink key={item.label} href={item.href || "#"}>
            {item.label}
          </NavLink>
        )
      ))}
    </nav>
  );
}

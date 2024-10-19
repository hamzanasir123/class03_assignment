"use client";
import React, { useState } from "react";
import { Menu, MenuItem} from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <div className="relative sm:w-full flex items-center justify-center">
      <NavbarDemo className="top-2" />
    </div>
  );
}

function NavbarDemo({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <p
        className="font-black sm:mr-24 font-sans"
        ><i>WISE</i></p>
        <MenuItem setActive={setActive} active={active} item="HOME">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="ABOUT">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="CONTACT">
        </MenuItem>
      </Menu>
    </div>
  );
}

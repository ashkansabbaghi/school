"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";

import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps

  } = useSwitch();

  // Set mounted state to true after component mounts
  useEffect(() => setMounted(true), []);

  // Set the theme based on the switch state (light or dark)
  useEffect(() => {
    setTheme(isSelected ? "light" : "dark");
  }, [isSelected, setTheme]);

  if (!mounted) return null

  return (
    <>
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-9 h-9",
              "flex items-center justify-center",
              "rounded-lg",
            ],
          })}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </>
  )
};
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {UnstyledButton, useMantineColorScheme} from "@mantine/core";
import {useHover} from "@mantine/hooks";

export function DarkModeSwitchButton() {
  const {hovered, ref} = useHover();
  const {colorScheme, setColorScheme} = useMantineColorScheme()

  return (
    <>
      {
        colorScheme === 'dark' ?
          <UnstyledButton
              ref={ref}
              style={{
                display: "flex",
                borderRadius: ".5rem",
                border: ".0625rem solid #424242",
                backgroundColor: !hovered ? "#2e2e2e" : "#3b3b3b",
                aspectRatio: 1,
                width: "2.125rem",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setColorScheme("light")}>
              <MoonIcon/>
            </UnstyledButton>
          : colorScheme === "light" ?
            <UnstyledButton ref={ref}
              style={{
                display: "flex",
                borderRadius: ".5rem",
                border: ".0625rem solid #dee2e6",
                aspectRatio: 1,
                width: "2.125rem",
                backgroundColor: !hovered ? "#ffffff" : "#f8f9fa",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setColorScheme("dark")}>
              <SunIcon/>
            </UnstyledButton>
          :
            <UnstyledButton ref={ref}
              style={{
                display: "flex",
                borderRadius: ".5rem",
                border: ".0625rem solid #dee2e6",
                aspectRatio: 1,
                width: "2.125rem",
                backgroundColor: !hovered ? "#ffffff" : "#f8f9fa",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setColorScheme("dark")}>
              <SunIcon/>
            </UnstyledButton>

      }
    </>
  )
}
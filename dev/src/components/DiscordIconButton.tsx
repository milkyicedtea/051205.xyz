import {useHover} from "@mantine/hooks"
import {UnstyledButton, useMantineColorScheme} from "@mantine/core"
import discordMarkWhite from "@local/assets/discord-mark-white.svg"

export function DiscordIconButton() {
  const {hovered, ref} = useHover();
  const {colorScheme} = useMantineColorScheme()

  return (
    <>
      {
        colorScheme === 'dark' ?
          <UnstyledButton
            component={"div"}
            ref={ref}
            style={{
              backgroundSize: "65%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: !hovered ? "#5865f2" : "#4f5bd5",
              backgroundImage: `url("${discordMarkWhite}")`,
              display: "flex",
              borderRadius: ".5rem",
              aspectRatio: 1,
              width: "2.125rem",
            }}
          />
        : colorScheme === "light" ?
          <UnstyledButton ref={ref}
            style={{
              backgroundSize: "65%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: !hovered ? "#5865f2" : "#4f5bd5",
              backgroundImage: `url("${discordMarkWhite}")`,
              display: "flex",
              borderRadius: ".5rem",
              aspectRatio: 1,
              width: "2.125rem",
            }}
          />
        :
          <UnstyledButton ref={ref}
            style={{
              backgroundSize: "65%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: !hovered ? "#5865f2" : "#4f5bd5",
              backgroundImage: `url("${discordMarkWhite}")`,
              display: "flex",
              borderRadius: ".5rem",
              aspectRatio: 1,
              width: "2.125rem",
            }}
          />
      }
    </>
  )
}
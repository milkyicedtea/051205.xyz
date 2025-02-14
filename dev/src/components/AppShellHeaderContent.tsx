import {AppShell, Container, Space, Tooltip, useMantineColorScheme} from "@mantine/core";
import {DiscordIconButton} from "@local/components/DiscordIconButton.tsx";
import {DarkModeSwitchButton} from "@local/components/DarkModeSwitchButton.tsx";
import {GithubIconButton} from "@local/components/GithubIconButton.tsx";

export function AppShellHeaderContent() {
  const {colorScheme} = useMantineColorScheme()

  return (
    <AppShell.Header style={{display: "flex"}}>
      <Container style={{
          display: "flex",
          placeSelf: "center",
          marginRight: ".25rem",
      }}>
        <Tooltip label={"Discord"} openDelay={500}>
          <Container style={{display: "flex", placeSelf: "center", padding: 0}}>
            <DiscordIconButton/>
          </Container>
        </Tooltip>

        <Space w={"xs"}/>

        <Tooltip label={"Github"} openDelay={500}>
          <Container style={{display: "flex", placeSelf: "center", padding: 0}}>
            <GithubIconButton />
          </Container>
        </Tooltip>

        <Space w={'xs'}/>

        <Tooltip label={`${colorScheme.charAt(0).toUpperCase()+colorScheme.slice(1)} mode`} openDelay={500}>
          <Container style={{display: "flex", placeSelf: "center", padding: 0}}>
            <DarkModeSwitchButton/>
          </Container>
        </Tooltip>
      </Container>
    </AppShell.Header>
  )
}
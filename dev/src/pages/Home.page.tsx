import {AppShell} from "@mantine/core";
import {AppShellHeaderContent} from "../components/AppShellHeaderContent.tsx";
import {AppShellMainContent} from "../components/AppShellMainContent.tsx";

export function HomePage() {

  return (
    <AppShell header={{height: 60,}} padding="sm">
      <AppShellHeaderContent/>
      <AppShellMainContent/>
    </AppShell>
  );
}
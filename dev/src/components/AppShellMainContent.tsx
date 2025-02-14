import {AppShell, Avatar, Card, Container, Text, useMantineColorScheme} from '@mantine/core'
import {homeStyles} from '@local/styles/homeStyles.ts'
import Typewriter from "typewriter-effect";
import '@local/styles/wavingHand.css'
import antiSpiralPFP from '@local/assets/AntiSpiralPFP.png'

export function AppShellMainContent() {
  const {colorScheme} = useMantineColorScheme()

  return (
    <AppShell.Main>
      <Container style={{
        padding: 0,
        marginInline: '5.5rem',
        marginTop: '1.25rem',
        width: '80%',

      }}>
        <Card style={{...homeStyles.avatarCard, borderColor: colorScheme === "dark" ? "#FFCC00" : "var(--mantine-primary-color-8)"}}>
          <Avatar
            variant={'circle'}
            src={antiSpiralPFP}
            style={{
              width: "100%",
              height: "100%",
            }}
            onDragStart={(e) => e.preventDefault()}
          />
        </Card>
        <Text style={{...homeStyles.welcomeText, color: colorScheme === "dark" ? "#FFCC00" : "var(--mantine-color-dark-6)"}}>
          Hi there! <span className={'wavingHand'}>👋</span> <br/>
            Welcome to my dev page!
        </Text>

        <Container style={{display: 'flex', alignItems: 'center', paddingLeft: '.5rem'}}>
          <Text style={{...homeStyles.descriptionText, color: colorScheme === "dark" ? "#FFCC00" : "var(--mantine-color-dark-6)"}}>
              I'm&nbsp;
          </Text>
          <Container style={{...homeStyles.descriptionText, padding: 0, margin: 0, color: colorScheme === "dark" ? "#FFCC00" : "var(--mantine-color-dark-6)"}}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("a Full Stack Developer")
                  .pauseFor(700)
                  .deleteAll()
                  .typeString("a Fuze Tea Enjoyer")
                  .pauseFor(700)
                  .deleteAll()
                  .typeString("a Python Lover")
                  .pauseFor(700)
                  .deleteAll()
                  .typeString("trying to make a good Frontend :)")
                  .pauseFor(700)
                  .start();
              }}
            />
          </Container>
        </Container>
      </Container>
    </AppShell.Main>
  )
}
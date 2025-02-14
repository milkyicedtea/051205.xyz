import {useHover} from "@mantine/hooks"
import {UnstyledButton, useMantineColorScheme} from "@mantine/core"
import githubMarkWhite from "@local/assets/github-mark-white.svg"
import githubMark from "@local/assets/github-mark.svg"

export function GithubIconButton() {
  const {hovered, ref} = useHover();
  const {colorScheme} = useMantineColorScheme()

  return (
    <>
      {
        colorScheme === 'dark' ?
          <UnstyledButton
            component={'a'}
            href={'https://github.com/milkyicedtea'}
            ref={ref}
            style={{
              backgroundSize: "70%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: !hovered ? "#2e2e2e" : "#3b3b3b",
              backgroundImage: `url("${githubMarkWhite}")`,
              border: ".0625rem solid #424242",
              display: "flex",
              borderRadius: ".5rem",
              aspectRatio: 1,
              width: "2.125rem",
            }}
          />
        : colorScheme === "light" ?
          <UnstyledButton
            component={'a'}
            href={'https://github.com/milkyicedtea'}
            ref={ref}
            style={{
              backgroundSize: "70%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: !hovered ? "#ffffff" : "#f8f9fa",
              backgroundImage: `url("${githubMark}")`,
              border: ".0625rem solid #dee2e6",
              display: "flex",
              borderRadius: ".5rem",
              aspectRatio: 1,
              width: "2.125rem",
            }}
          />
        :
          <UnstyledButton
            component={'a'}
            href={'https://github.com/milkyicedtea'}
            ref={ref}
            style={{
              backgroundSize: "70%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: !hovered ? "#ffffff" : "#f8f9fa",
              backgroundImage: `url("${githubMarkWhite}")`,
              border: ".0625rem solid #dee2e6",
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
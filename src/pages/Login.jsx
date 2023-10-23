import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

import styled from "styled-components";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Link = styled.a`
  color: var(--color-brand-600);
  font-weight: 800;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
      <footer>
        Follow on X at{" "}
        <Link
          href="https://twitter.com/MADAkwasi?t=j1IHcYMVMUndsff9Utrt2Q&s=08"
          target="_blank"
          rel="noreferrer"
        >
          MADAkwasi
        </Link>{" "}
        or contact me through email at{" "}
        <Link href="mailto: agyemanmda@gmail.com">agyemanmda@gmail.com</Link>
      </footer>
    </LoginLayout>
  );
}

export default Login;

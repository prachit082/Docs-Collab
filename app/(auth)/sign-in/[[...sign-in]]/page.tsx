import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="auth-page">
      <SignIn routing="hash" />
    </main>
  );
};

export default SignInPage;

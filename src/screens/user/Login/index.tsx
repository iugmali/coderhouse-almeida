import LoginForm from "@/components/user/LoginForm";
import {login} from "@/lib/actions/auth";

const LoginScreen = () => {
  return (
    <main className={`h-full flex flex-col items-center mt-4 mb-4`}>
      <LoginForm login={login} />
    </main>
  );
}

export default LoginScreen;

import LoginForm from "../../Components/Module/LoginForm";
import RegisterForm from "../../Components/Module/RegisterForm";

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 lg:pt-0 pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-right">عضویت</h2>
          <RegisterForm />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 text-right">ورود</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

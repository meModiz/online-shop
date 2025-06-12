import AuthButton from "../ui/AuthButton";
import AuthInput from "../ui/AuthInput";

export default function LoginForm({
  submitAction,
}: {
  submitAction: (FormData: FormData) => void;
}) {
  return (
    <form
      className="flex flex-col justify-center w-1/3 gap-2"
      action={(formData) => submitAction(formData)}
    >
      <AuthInput
        name="email"
        placeholder="Email adress"
        type="email"
        required={true}
      />
      <AuthInput
        name="password"
        placeholder="Password"
        type="password"
        required={true}
      />
      <AuthButton title="Log in" />
    </form>
  );
}

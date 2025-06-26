import Button from "../ui/Button";
import Input from "../ui/Input";

export default function RegisterForm({
  submitAction,
}: {
  submitAction: (FormData: FormData) => void;
}) {
  return (
    <form
      className="flex flex-col justify-center w-1/3 gap-2"
      action={(formData) => submitAction(formData)}
    >
      <Input
        name="email"
        placeholder="Email adress"
        type="email"
        required={true}
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        required={true}
      />
      <Button title="Register" />
    </form>
  );
}

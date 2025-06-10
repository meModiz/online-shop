import CategoryBar from "./components/CategoryBar";
import NavigationBar from "./components/NavigationBar";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <NavigationBar />
      <CategoryBar />
    </div>
  );
}

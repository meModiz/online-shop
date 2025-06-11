import FilterTab from "@/components/product/FilterTab";
import PathDisplay from "@/components/product/PathDisplay";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex bg-white px-40 w-full">
      <div className="flex flex-col w-full">
        <PathDisplay />
        <div className="flex flex-row justify-start items-center gap-8 w-full">
          <FilterTab />
          {children}
        </div>
      </div>
    </section>
  );
}

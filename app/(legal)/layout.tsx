import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
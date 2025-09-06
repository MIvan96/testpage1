import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";


export default function NotFound() {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-gray-600">The page you are looking for does not exist.</p>
      </div>
      <MainFooter />

    </>
  );
}
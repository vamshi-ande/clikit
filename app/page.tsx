import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className=""
          src="/clikit-logo.svg"
          alt="clikit-logo"
          width={250}
          height={120}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1>
            Under Development
          </h1>
          
        </div>
      </main>
    </div>
  );
}

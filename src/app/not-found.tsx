import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full justify-center items-center ">
      <div className="center flex flex-col items-center gap-4">
        <h2 className="text-6xl">😣</h2>
        <p className="text-xl">
          Could not{" "}
          <span className="text-blue-500">find requested resource</span>
        </p>
        <Link
          href="/"
          className="border border-blue-300 p-2 rounded bg-transparent"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

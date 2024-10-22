import Heading from "./components/heading";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex flex-col min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-mainpage.jpg')" }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-center text-3xl">
            GIAIC Class Self Study - Oct 18, 2024
          </h1>
          <br></br>
        </div>
        <Heading text="Topics" />
        <div>
          <ul className="list-disc pl-6">
            <li>Route Group - Organizing Folder Structure</li>
            <li>Not Found Page / Custom Not Found Message</li>
            <li>React Hook - useState with Examples</li>
            <li>React Hook - useEffect with Example and Logger</li>
          </ul>
        </div>

        <div className="mt-4 text-xl text-grey-600 mb-4">
          <p>
            Use the navigation bar to access NextJS topics practical application
            covered in this class.
          </p>
          <p className="text-red-800 mb-4">
            Note: Visit my GitHub Repo for understanding the code mechanism.
          </p>
          <div>
            <Link
              href="https://github.com/zubairxshah/classwork-oct18"
              passHref
            >
              <button className="bg-stone-600 hover:bg-stone-800 text-white font-bold py-2 px-4 rounded">
                Visit GitHub Repo for Codes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

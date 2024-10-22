import Link from "next/link";
import { notFound } from "next/navigation";

const UserIdPage = (props: { params: { id: string } }) => {
  console.log(props.params.id);
  if (Number(props.params.id) > 10) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-500 via-stone-500 to-pink-500">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl max-w-2xl w-full transform hover:scale-105 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-white mb-6 text-center">
          User Data Page
        </h1>
        <p className="text-2xl font-bold text-white mb-4 text-center">
          User Page Id #{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            {props.params.id}
          </span>
        </p>
        <div className="space-y-4 text-white text-center">
          <p className="text-lg">What if when a user is not found?</p>
          <p className="text-lg">
            We can still make a custom &quot;User Not Found Page&quot;.
          </p>
          <p className="text-lg">
            Suppose we have 10 users and you went to user id 11, then the page
            will show a custom User Not Found Page.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/user/11"
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-6 rounded-full hover:from-cyan-500 hover:to-blue-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Click to Go to User 11
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserIdPage;

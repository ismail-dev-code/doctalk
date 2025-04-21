import React from "react";
import { useLoaderData } from "react-router";
import Blog from "./Blog";

const Blogs = () => {
  const blogsData = useLoaderData();

  return (
    <div>
      <div className="text-center md:pt-16 pt-4">
        {" "}
        <h1 className="text-3xl font-thin text-gray-900">Blogs</h1>
        <p className="text-gray-500 w-6/12 mt-3 lg:max-w-5/6 mx-auto">
          Let's Explore React questions with clear explanations to boost your
          frontend development journey.
        </p>
      </div>

      <div className="md:py-12">
        {blogsData.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Showcasing the latest or featured blog posts.
                      </h2>
                      <p className="mt-6 text-gray-600">
                      A blog website is an online platform where individuals or groups regularly post content, typically written in the form of articles or entries, called blog posts. These posts often cover a wide range of topics, such as personal experiences, industry insights, tutorials, reviews, news, or creative writing. Blog websites allow visitors to read, comment, and share posts, fostering community interaction.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Blog websites can be used for personal expression, business branding, education, or entertainment, often designed with user-friendly content management systems (CMS) like WordPress, Wix, or Blogger.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
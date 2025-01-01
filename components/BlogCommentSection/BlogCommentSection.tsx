import React from 'react'

const BlogCommentSection = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
            {/* <!-- Comments Section --> */}
            <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                <div id="comments-section" className="mb-6">
                    <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-red-500 p-2 rounded-full"></div>
                        <div className="ml-4">
                            <p className="font-bold">John Doe <span className="text-sm text-gray-600">27.07.2020 10:10</span></p>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!</p>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-red-500 p-2 rounded-full"></div>
                        <div className="ml-4">
                            <p className="font-bold">John Doe <span className="text-sm text-gray-600">27.07.2020 11:10</span></p>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!</p>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <div className="w-16 h-16 bg-red-500 p-2 rounded-full"></div>
                        <div className="ml-4">
                            <p className="font-bold">John Doe <span className="text-sm text-gray-600">27.07.2020 12:10</span></p>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Comment Form Section --> */}
            <div className="w-full md:w-1/3 md:pl-8">
                <h2 className="text-2xl font-bold mb-4">Leave a comment</h2>
                <form id="comment-form">
                    <div className="mb-4">
                        <input id="name" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name*" type="text" required/>
                    </div>
                    <div className="mb-4">
                        <input id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email*" type="email" required/>
                    </div>
                    <div className="mb-4">
                        <textarea id="message" className="w-full p-2 border border-gray-300 rounded h-32" placeholder="Message" required></textarea>
                    </div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded" type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BlogCommentSection

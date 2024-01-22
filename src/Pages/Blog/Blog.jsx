import Navbar from "../Shared/Navbar";

const posts = [
  {
    id: 1,
    title: "Key For Managing Evnet",
    href: "#",
    description:
      "An event is a planned occasion that brings people together. It can be a celebration, a gathering, or a meeting, designed to create memorable moments and experiences.",
    date: "Jan 17, 2024",
    datetime: "2024-01-17",
    category: { title: "Leadership", href: "#" },
    author: {
      name: "Jordan Casey",
      role: "Co-Founder / CTO",
      imageUrl: "https://i.ibb.co/DpMJW87/pexels-andrea-piacquadio-826349.jpg",
      href: "#",
    },
  },
  {
    id: 2,
    title: "Product Chose Form Scrach",
    href: "#",
    description:
      "Choosing a product involves careful consideration of your needs, budget, and preferences. It’s about finding the perfect fit! ",
    date: "jan 16, 2024",
    datetime: "2024-01-16",
    category: { title: "Products", href: "#" },
    author: {
      name: "Taylor Riley",
      role: "Chief Product Officer",
      imageUrl: "https://i.ibb.co/LN6nT1F/pexels-italo-melo-2379004.jpg",
      href: "#",
    },
  },
  {
    id: 3,
    title: "Marketing Magnet",
    href: "#",
    description:
      "Marketing is the process of promoting and selling products or services. It involves understanding customer needs, creating valuable offerings, communicating effectively, and delivering satisfaction. It’s key to business success!",
    date: "jan 23, 2024",
    datetime: "2024-01-23",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Morgan Reese",
      role: "Chief Marketing Officer",
      imageUrl: "https://i.ibb.co/h7rYh1c/pexels-stefan-stefancik-91227.jpg",
      href: "#",
    },
  },
];

const Blog = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

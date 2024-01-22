const Team = () => {
  const people = [
    {
      name: "Jordan Casey",
      role: "Co-Founder / CTO",
      imageUrl: "https://i.ibb.co/DpMJW87/pexels-andrea-piacquadio-826349.jpg",
    },
    {
      name: "Taylor Riley",
      role: "Chief Product Officer",
      imageUrl: "https://i.ibb.co/LN6nT1F/pexels-italo-melo-2379004.jpg",
    },
    {
      name: "Morgan Reese",
      role: "Chief Marketing Officer",
      imageUrl: "https://i.ibb.co/h7rYh1c/pexels-stefan-stefancik-91227.jpg",
    },
    {
      name: "Alex Morgan",
      role: "Chief Financial Officer",
      imageUrl: "https://i.ibb.co/9rFtF2W/pexels-andrea-piacquadio-789822.jpg",
    },
    {
      name: "Jamie Lawson",
      role: "Chief Operations Officer",
      imageUrl: "https://i.ibb.co/DG7hXHn/pexels-andrea-piacquadio-927022.jpg",
    },
    {
      name: "Casey Jordan",
      role: "Chief Human Resources Officer",
      imageUrl: "https://i.ibb.co/7yk8b24/pexels-christina-morillo-1181519.jpg",
    },
  ];
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get to know the people behind the scenes! Our team is a diverse
              group of talented individuals dedicated to making your events
              unforgettable.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <div className="">
                    <img
                      className="h-16 w-16 rounded-full bg-contain"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;

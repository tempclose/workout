import useSiteMetadata from '@/hooks/useSiteMetadata';

const Header = () => {
  const { navLinks } = useSiteMetadata();

  return (
    <>
      <nav className="mt-12 flex w-full items-center justify-between pl-6 lg:px-16">
        <div className="w-1/4">
        </div>
        <div className="w-3/4 text-right">
          {navLinks.map((n, i) => (
            <a
              key={i}
              href={n.url}
              className="mr-3 text-lg lg:mr-4 lg:text-base"
            >
              {n.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;

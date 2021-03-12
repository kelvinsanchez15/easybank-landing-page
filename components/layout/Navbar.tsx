export default function Navbar() {
  return (
    <div className="fixed z-50 top-0 w-full bg-white">
      <nav className="container flex justify-between items-center z-20">
        <div className="my-5 lg:my-6">
          <img src="/images/logo.svg" alt="easybank logo" />
        </div>

        <div className="hidden lg:block text-sm text-neutral-grayish-blue">
          <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
            Home
          </a>
          <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
            About
          </a>
          <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
            Contact
          </a>
          <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
            Blog
          </a>
          <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
            Careers
          </a>
        </div>

        <button className="hidden lg:block bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness">
          Request Invite
        </button>

        <button className="lg:hidden">
          <img src="/icons/icon-hamburger.svg" alt="" />
        </button>
      </nav>
    </div>
  );
}

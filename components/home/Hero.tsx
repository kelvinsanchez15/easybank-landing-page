export default function Hero() {
  return (
    <section
      id="hero"
      className="text-center px-5 bg-header-mobile bg-no-repeat"
    >
      <img
        className="relative -top-12 z-0"
        src="/images/image-mockups.png"
        alt="app mockups with mobile devices"
      />

      <h1 className="text-4xl text-primary-dark-blue pb-5 -mt-1">
        Next generation digital banking
      </h1>
      <p className="text-neutral-grayish-blue text-xs leading-5 mb-7">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <button className="bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan">
        Request Invite
      </button>
    </section>
  );
}

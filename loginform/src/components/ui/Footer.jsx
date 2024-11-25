const Footer = () => {
  return (
    <footer class="footer footer-center bg-primary text-primary-content p-5">
      <aside>
        <img
          src="https://yt3.googleusercontent.com/YwSr7lrlXsmq98T_SgXt64e9GfKa2z7xr8joKdflrfKZNb9xCfwd4nxDNal05VgpSM6YC4MU=s160-c-k-c0x00ffffff-no-rj"
          className="w-24 rounded-full mb-2"
          alt="Logo"
        />
        <p class="font-bold">
          Usc.
          <br />
          Minőségi YouTube videók 2023 óta
        </p>
        <p>Copyright © {new Date().getFullYear()} - Minden jog fenntartva</p>
      </aside>
    </footer>
  );
};

export default Footer;

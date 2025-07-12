function Footer() {
  return (
    <div className="flex items-center justify-between border-t-1 border-t-black px-12 py-4">
      <p className="text-gray-500">
        &copy; 2025 Comprehensive Medical Diagnostics
      </p>
      <div className="inline-flex gap-x-4 text-blue-900">
        <a href="tel:+16084901444" className="hover:underline">
          (609) 490-1444
        </a>
        <a href="mailto:cmdsleep@live.com" className="hover:underline">
          cmdsleep@live.com
        </a>
      </div>
    </div>
  );
}

export default Footer;

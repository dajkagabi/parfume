const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="container mx-auto text-center">
        <div>
          <p>&copy; 2025 Your Company</p>
        </div>
        <div className="flex justify-center space-x-2 mt-0">
          <a href="/about" className="hover:underline">About</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-white text-black py-2">
      <div className="container mx-auto text-center">
        <div>
          <p className="text-sm">&copy; 2025 Essentia Company</p>
        </div>
        <div className="flex justify-center space-x-1 mt-1">
         
          <a href="/privacy" className="hover:underline text-sm">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

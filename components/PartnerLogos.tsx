const logos = [
    '/assets/logo1.png',
    '/assets/logo2.png',
    '/assets/logo3.png',
    '/assets/logo4.png',
    '/assets/logo5.png',
  ];
  
  const PartnerLogos = () => {
    return (
      <div className="overflow-hidden bg-white py-4">
        <div className="scrolling-logos">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <img src={logo} alt="Partner Logo" className="h-8" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PartnerLogos;
  
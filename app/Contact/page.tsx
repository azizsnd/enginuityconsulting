import ContactForm from "./components/contact-form";
import ContactInfo from "./components/contact-info";

export default function Contact() {
  return (
    <div className="bg-primary py-20 text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-center">

        {/* Texte centré */}
        <div className="md:w-1/2 px-10 text-center md:text-left">
          <h1 className="sm:text-4xl font-bold mb-4">
            Always on the lookout for a better way
          </h1>
          <p className="sm:text-lg mb-6">
            Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant. Id elit turpis amet vel at sapien.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-secondary px-6 py-2 rounded text-white font-semibold hover:bg-blue-800">
              Learn more
            </button>
          </div>
        </div>
          {/* Image à droite, cachée sur mobile */}
          <div className="md:w-1/2 xl:w-2/5 md:bg-[url('/bg-contact.png')] md:bg-cover md:bg-center md:bg-no-repeat md:py-24 max-md:pt-8 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1073038.939657451!2d50.230415034857806!3d25.313857546848556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sQatar!5e0!3m2!1sfr!2stn!4v1739623552836!5m2!1sfr!2stn"
              height="300"
              loading="lazy"
              className="w-4/5"
            ></iframe>
          </div>
      </div>
      <ContactInfo />
      <div className="bg-background  py-16">
      <ContactForm />

      </div>

    </div>
  );
}

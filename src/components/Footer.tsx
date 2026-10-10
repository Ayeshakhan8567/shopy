import {
  Truck,
  RotateCcw,
  Store,
  Mail,
  Phone,
  CreditCard,
} from "lucide-react";

{/*Footer*/}
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-[#111827]">

      {/* TOP FEATURES */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">

          {/* Order Tracking */}
          <div className="flex flex-col items-center justify-center py-8">
            <Truck size={48} strokeWidth={1.3} />
            <a
              href="#"
              className="mt-5 text-xl tracking-widest hover:underline"
            >
              ORDER TRACKING
            </a>
          </div>

          {/* Returns */}
          <div className="flex flex-col items-center justify-center py-8">
            <RotateCcw size={48} strokeWidth={1.3} />
            <a
              href="#"
              className="mt-5 text-xl tracking-widest hover:underline"
            >
              EXCHANGES & RETURNS
            </a>
          </div>

          {/* Stores */}
          <div className="flex flex-col items-center justify-center py-8">
            <Store size={48} strokeWidth={1.3} />
            <a
              href="#"
              className="mt-5 text-xl tracking-widest hover:underline"
            >
              OUR STORES
            </a>
          </div>

        </div>
      </div>


      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* CONTACT US */}
          <div>
            <h2 className="text-xl tracking-wider mb-7">
              CONTACT US
            </h2>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={22} strokeWidth={1.3} />
                <a
                  href="mailto:wecare@shopy.com"
                  className="hover:underline"
                >
                  wecare@shopy.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={22} strokeWidth={1.3} />
                <a href="tel:+9242338238245">
                  +92(0)42 323-882-45
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={22} strokeWidth={1.3} />
                <a href="tel:+9242111738245">
                  +92(0)42 111-738-245
                </a>
              </div>
            </div>
          </div>


          {/* CUSTOMER CARE */}
          <div>
            <h2 className="text-xl tracking-wider mb-7">
              CUSTOMER CARE
            </h2>

            <div className="flex flex-col gap-6 text-sm">
              <a href="#" className="hover:underline">
                FAQs
              </a>
              <a href="#" className="hover:underline">
                EXCHANGE & RETURN POLICY
              </a>
              <a href="#" className="hover:underline">
                CONTACT US
              </a>
            </div>
          </div>


          {/* INFORMATION */}
          <div>
            <h2 className="text-xl tracking-wider mb-7">
              INFORMATION
            </h2>

            <div className="flex flex-col gap-6 text-sm">
              <a href="#" className="hover:underline">
                ABOUT US
              </a>
              <a href="#" className="hover:underline">
                PRIVACY POLICY
              </a>
              <a href="#" className="hover:underline">
                PAYMENTS
              </a>
              <a href="#" className="hover:underline">
                STORE LOCATOR
              </a>
              <a href="#" className="hover:underline">
                FABRIC GLOSSARY
              </a>
              <a href="#" className="hover:underline">
                BLOGS
              </a>
            </div>
          </div>


          {/* NEWSLETTER */}
          <div>
            <h2 className="text-xl tracking-wider mb-7">
              NEWSLETTER SIGNUP
            </h2>

            <p className="text-sm leading-6">
              SUBSCRIBE TO OUR NEWSLETTER FOR
              <br />
              EXCLUSIVE UPDATES
            </p>

            {/* INPUT */}
            <div className="flex mt-8 border border-black rounded-xl overflow-hidden h-16">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-0 px-5 bg-transparent outline-none placeholder:text-gray-400"
              />

              <button className="bg-black text-white px-7 font-semibold hover:bg-gray-800 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-20">

          <p className="text-sm">
            © COPYRIGHT 2026 SHOPY
          </p>

          {/* PAYMENT ICON */}
          <div className="flex items-center gap-4">
            <CreditCard size={38} strokeWidth={1.2} />
            <span className="text-sm font-semibold">
              VISA
            </span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

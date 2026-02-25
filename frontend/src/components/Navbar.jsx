import { useState, useEffect, useContext } from "react";
import { Search, User, ShoppingCart, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { productContext } from "../Store/StoreContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const { setSidebar, product } = useContext(productContext);
  const cartCount = product?.length ?? 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    "Custom Phone Cases",
    "Premium Glass Case",
    "Personalized Name Cases",
    "Couple Mobile Cases",
    "Magsafe iPhone",
  ];

  const blue3DLogo = {
    color: "white",
    textShadow: `
      1px 1px 0px #3b82f6, 
      2px 2px 0px #3b82f6, 
      3px 3px 0px #3b82f6, 
      4px 4px 0px #1d4ed8,
      5px 5px 0px #1e40af,
      6px 6px 12px rgba(0,0,0,0.8)
    `,
    fontFamily: "'Inter', sans-serif",
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: "-0.02em",
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 border-b border-blue-500/20 py-4 backdrop-blur-md"
            : "bg-black py-5"
        }`}
        style={{ borderBottom: "1px solid white" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* BLUE 3D LOGO */}
            <NavLink
              to="/"
              className="flex flex-col shrink-0 group transition-transform active:scale-95"
            >
              <span
                style={blue3DLogo}
                className="text-xl md:text-3xl leading-none"
              >
                STAY CLASSY
              </span>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-[1px] w-4 bg-blue-500/50"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-bold">
                  Studio
                </span>
              </div>
            </NavLink>

            {/* DESKTOP NAV - Blue Accents */}
            <nav className="hidden xl:flex items-center bg-neutral-900/50 border border-blue-500/10 rounded-full px-2 py-1 shadow-inner">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={item.toLowerCase().split(" ").join("-")}
                  className="px-4 py-2 text-[14px] text-white hover:text-blue-400 transition-all relative group whitespace-nowrap font-semibold"
                >
                  {item}
                  <motion.div
                    className="absolute inset-0 bg-blue-500/10 rounded-full -z-10 opacity-0 group-hover:opacity-100"
                    layoutId="navHover"
                  />
                </NavLink>
              ))}
            </nav>

            {/* ACTIONS - Pure Blue Theme */}
            <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
              {/* SEARCH - Mobile pe visible, responsive size */}
              <button
                onClick={() => setSearchActive(true)}
                className="hidden sm:flex p-1.5 sm:p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/5 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* USER - Mobile pe visible, responsive size */}
              <button className="hidden sm:flex p-1.5 sm:p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/5 rounded-full transition-colors">
                <User className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* CART - Compact on Mobile */}
              <button
                onClick={() => setSidebar(true)}
                className="relative p-2 md:p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg md:rounded-xl transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] active:scale-95"
              >
                <ShoppingCart
                  className="w-[18px] h-[18px] md:w-5 md:h-5"
                  strokeWidth={2.5}
                />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-white text-[8px] md:text-[10px] font-black text-blue-600 ring-2 ring-black">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </button>

              {/* MENU - Perfect for thumb touch */}
              <button
                className="xl:hidden p-1.5 text-blue-400 hover:text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <X className="w-6 h-6 md:w-7 md:h-7" />
                ) : (
                  <Menu className="w-6 h-6 md:w-7 md:h-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-black border-t border-blue-500/20 absolute w-full left-0 shadow-2xl overflow-hidden"
            >
              <div className="p-6 space-y-3">
                {navItems.map((item, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item}
                    href="#"
                    className="flex items-center justify-between p-4 rounded-2xl bg-neutral-900/50 text-gray-200 border border-blue-500/5 hover:border-blue-500/30 transition-all"
                  >
                    <span className="text-sm font-bold uppercase tracking-tight">
                      {item}
                    </span>
                    <ArrowRight size={16} className="text-blue-500" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {searchActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-xl flex items-start justify-center pt-24 px-6"
          >
            <div className="w-full max-w-2xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-black text-blue-500 uppercase tracking-tighter">
                  Search Studio
                </h2>
                <button
                  onClick={() => setSearchActive(false)}
                  className="text-gray-500 hover:text-white"
                >
                  <X size={30} />
                </button>
              </div>
              <div className="relative group">
                <input
                  autoFocus
                  placeholder="Find your phone model..."
                  className="w-full bg-neutral-900 border border-white/10 p-6 rounded-3xl text-white outline-none focus:border-blue-500 transition-all shadow-2xl text-lg"
                />
                <Search
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500"
                  size={24}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-extrabold tracking-tighter text-amber-600">AYAM <span className="text-slate-800">KELOPOE</span></span>
            </div>
            <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-wider">
              <a href="#home" className="hover:text-amber-600 transition">Home</a>
              <a href="#about" className="hover:text-amber-600 transition">About</a>
              <a href="#menu" className="hover:text-amber-600 transition">Menu</a>
              <a href="#reviews" className="hover:text-amber-600 transition">Reviews</a>
              <a href="#contact" className="hover:text-amber-600 transition">Contact</a>
            </div>
            <div>
              <a href="#contact" className="bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-amber-700 transition shadow-lg shadow-amber-200 uppercase text-xs tracking-widest">Find Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-gradient h-screen flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1 mb-6 border border-amber-400 text-amber-400 rounded-full text-sm font-bold tracking-widest uppercase animate-pulse">MasterChef Quality Recipe</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 serif uppercase tracking-tight">Ayam Kelopoe <br />Gading Serpong</h1>
          <p className="text-lg md:text-xl mb-10 text-slate-200 max-w-2xl mx-auto">Authentic Indonesian Chicken Restaurant. Juicy chicken braised in coconut water, served with our signature fragrant serundeng.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#menu" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition shadow-xl uppercase text-sm tracking-wider">Explore Menu</a>
            <a href="#contact" className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition uppercase text-sm tracking-wider">View Location</a>
          </div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-amber-600">4.5/5</p>
            <p className="text-slate-500 text-sm font-semibold uppercase">Google Rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-600">1,088</p>
            <p className="text-slate-500 text-sm font-semibold uppercase">Verified Reviews</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-600">Dine-In</p>
            <p className="text-slate-500 text-sm font-semibold uppercase">& Takeaway</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-600">Valet</p>
            <p className="text-slate-500 text-sm font-semibold uppercase">Service Available</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="Cooking Process" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-8 rounded-2xl hidden md:block">
                <p className="serif text-3xl">100%</p>
                <p className="text-xs uppercase font-bold tracking-widest">Natural Ingredients</p>
              </div>
            </div>
            <div>
              <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Our Heritage</h2>
              <h3 className="text-4xl font-extrabold mb-6 serif leading-tight">Authentic Taste from Coconut Water Braising</h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Named after "Kelapa" (Coconut), our signature technique involves braising fresh chicken in pure coconut water and aromatic spices for hours. This results in tender, juicy meat with a subtle sweetness found nowhere else.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Topped with our golden "Serundeng" (spiced coconut flakes) and served with our legendary spicy sambal, every bite is a journey through Indonesian culinary history.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center font-semibold"><i className="fas fa-check-circle text-amber-500 mr-3"></i> Traditional Family Secret Recipe</li>
                <li className="flex items-center font-semibold"><i className="fas fa-check-circle text-amber-500 mr-3"></i> Freshly Made Daily</li>
                <li className="flex items-center font-semibold"><i className="fas fa-check-circle text-amber-500 mr-3"></i> Premium Gading Serpong Location</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">The Selection</h2>
          <h3 className="text-4xl font-extrabold mb-16 serif">Signature Favorites</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-white rounded-3xl overflow-hidden card-hover border border-slate-100">
              <img src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80" alt="Ayam Kelopoe" className="h-64 w-full object-cover" referrerPolicy="no-referrer" />
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2">Ayam Goreng Kelopoe</h4>
                <p className="text-slate-500 text-sm mb-4">Signature coconut-braised fried chicken with crispy serundeng.</p>
                <p className="text-amber-600 font-bold text-lg">Rp 28.000</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="bg-white rounded-3xl overflow-hidden card-hover border border-slate-100">
              <img src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=800&q=80" alt="Ayam Bakar" className="h-64 w-full object-cover" referrerPolicy="no-referrer" />
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2">Ayam Bakar Madu</h4>
                <p className="text-slate-500 text-sm mb-4">Grilled chicken glazed with honey and special spice blend.</p>
                <p className="text-amber-600 font-bold text-lg">Rp 30.000</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="bg-white rounded-3xl overflow-hidden card-hover border border-slate-100">
              <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80" alt="Sides" className="h-64 w-full object-cover" referrerPolicy="no-referrer" />
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2">Paket Nasi Liwet</h4>
                <p className="text-slate-500 text-sm mb-4">Fragrant savory rice with tofu, tempeh, and fresh vegetables.</p>
                <p className="text-amber-600 font-bold text-lg">Rp 45.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <h3 className="text-4xl font-extrabold serif">What Our Guests Say</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 italic">
              <div className="flex text-amber-400 mb-4 text-sm">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="text-slate-600 mb-6">"The serundeng is incredible! It’s sweet, savory, and goes perfectly with the juicy chicken. Best in Gading Serpong."</p>
              <p className="font-bold text-slate-800">— Michael T.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 italic">
              <div className="flex text-amber-400 mb-4 text-sm">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="text-slate-600 mb-6">"Authentic taste. The chicken is so tender because they use coconut water. You can really taste the difference."</p>
              <p className="font-bold text-slate-800">— Sarah Wijaya</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 italic">
              <div className="flex text-amber-400 mb-4 text-sm">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
              </div>
              <p className="text-slate-600 mb-6">"Perfect for family lunch. Great service and the sambal level is just right. Will definitely come back!"</p>
              <p className="font-bold text-slate-800">— David K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Location Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Visit Us</h2>
              <h3 className="text-4xl font-extrabold mb-8 serif">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-600/20 p-3 rounded-lg mr-4 text-amber-500">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-slate-400">Ruko Gading Serpong, Blok AA No. 12<br />Tangerang, Banten</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600/20 p-3 rounded-lg mr-4 text-amber-500">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Opening Hours</h4>
                    <p className="text-slate-400">Mon - Sun: 10:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600/20 p-3 rounded-lg mr-4 text-amber-500">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-slate-400">+62 812-3456-7890</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex space-x-4">
                <a href="#" className="text-2xl text-slate-400 hover:text-amber-500 transition"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-2xl text-slate-400 hover:text-amber-500 transition"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-2xl text-slate-400 hover:text-amber-500 transition"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-96 shadow-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
              {/* Placeholder for Map */}
              <div className="text-center p-8">
                <i className="fas fa-map-marked-alt text-6xl text-slate-600 mb-4"></i>
                <p className="text-slate-400">Google Maps would be embedded here</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-amber-500 underline uppercase text-xs font-bold tracking-widest">Open in Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">&copy; 2023 Ayam Kelopoe Gading Serpong. All rights reserved.</p>
      </footer>
    </div>
  );
}

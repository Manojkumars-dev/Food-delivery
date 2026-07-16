import React, { useState } from 'react';
import { ShoppingCart, Search, MapPin, X, Plus, Minus, ArrowRight, Check, Receipt } from 'lucide-react';

const FAMOUS_DISHES = [
  {
    id: 1,
    name: 'Benne Masala Dosa',
    restaurant: 'CTR (Shree Sagar)',
    price: 120,
    category: 'Tiffins',
    description: 'Golden-crisp dosa lathered with fresh white butter, stuffed with spiced potato palya, served with coconut and mint chutneys.',
    image: '/masala_dosa.png',
    famous: true,
    tag: 'Sakkat Benne'
  },
  {
    id: 2,
    name: 'Traditional Filter Coffee',
    restaurant: 'MTR (Mavalli Tiffin Room)',
    price: 45,
    category: 'Coffee',
    description: 'Authentic decoction brewed in brass filters, pulled with foaming fresh milk. Served in traditional brass tumbler and davara.',
    image: '/filter_coffee.png',
    famous: true,
    tag: 'Bisi Filter'
  },
  {
    id: 3,
    name: 'Vidyarthi Bhavan Masala Dosa',
    restaurant: 'Vidyarthi Bhavan',
    price: 110,
    category: 'Tiffins',
    description: 'Thick, crispy outer layer, fluffy inside, served with signature watery coconut chutney on steel plates since 1943.',
    image: '/masala_dosa.png',
    famous: true,
    tag: 'Namma VB'
  },
  {
    id: 4,
    name: 'Authentic Rava Idli',
    restaurant: 'MTR (Mavalli Tiffin Room)',
    price: 95,
    category: 'Tiffins',
    description: 'Steamed semolina cake flavored with mustard seeds, cashew nuts, and curry leaves. Served with pure ghee and potato saagu.',
    image: '/idli.png',
    famous: false,
    tag: 'Century Recipe'
  },
  {
    id: 5,
    name: 'Ghee Khara Bhath',
    restaurant: 'Veena Stores',
    price: 60,
    category: 'Tiffins',
    description: 'Savory semolina porridge seasoned heavily with mustard, green chillies, curry leaves, and loaded with pure ghee.',
    image: '/idli.png',
    famous: true,
    tag: 'Semma Taste'
  },
  {
    id: 6,
    name: 'Legendary Idli Vada Combo',
    restaurant: 'Brahmins Coffee Bar',
    price: 75,
    category: 'Tiffins',
    description: 'Softest steamed rice idlis paired with a crispy, golden lentil vada. Served strictly with legendary watery coconut chutney (no sambar!).',
    image: '/idli.png',
    famous: true,
    tag: 'Malleswaram Pride'
  },
  {
    id: 7,
    name: 'Bidadi Thatte Idli',
    restaurant: 'Arogya Ahaara',
    price: 80,
    category: 'Tiffins',
    description: 'Plate-sized, extra fluffy steamed rice cakes topped with a generous dollop of butter and a spicy red garlic chutney podi.',
    image: '/thatte_idli.png',
    famous: false,
    tag: 'Soft & Fluffy'
  },
  {
    id: 8,
    name: 'Bisi Bele Bath',
    restaurant: 'MTR (Mavalli Tiffin Room)',
    price: 130,
    category: 'Meals',
    description: 'Spicy, tangy, piping hot mixture of rice, lentils, assorted vegetables and secret MTR spice blend. Topped with crispy boondi.',
    image: '/bisi_bele_bath.png',
    famous: false,
    tag: 'Bisi Bath'
  },
  {
    id: 9,
    name: 'Royal Andhra Meals Platter',
    restaurant: 'Nagarjuna',
    price: 260,
    category: 'Meals',
    description: 'Sonalu rice served on a banana leaf with authentic gunpowder (podi), ghee, dal, sambar, rasam, curries, buttermilk, and spicy pickles.',
    image: '/meals.png',
    famous: true,
    tag: 'Andhra Style'
  },
  {
    id: 10,
    name: 'Andhra Chilli Chicken',
    restaurant: 'Nagarjuna',
    price: 290,
    category: 'Starters',
    description: 'Spicy, fiery green chilli chicken dry fry prepared with curry leaves, lime juice, and authentic spices.',
    image: '/chilli_chicken.png',
    famous: true,
    tag: 'Full Khara'
  },
  {
    id: 11,
    name: 'Death by Chocolate (DBC)',
    restaurant: 'Corner House',
    price: 290,
    category: 'Desserts',
    description: 'A decadent combination of warm chocolate cake, vanilla ice cream, hot chocolate fudge, fresh cream, and toasted peanuts.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=80',
    famous: true,
    tag: 'DBC Legend'
  },
  {
    id: 12,
    name: 'Famous Gulkand Ice Cream',
    restaurant: 'VV Puram Food Street',
    price: 120,
    category: 'Desserts',
    description: 'Sweet, aromatic rose petal preserve (Gulkand) mixed with dry fruits and vanilla ice cream, topped with fresh butter fruit slices.',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80',
    famous: false,
    tag: 'Food Street Special'
  },
  {
    id: 13,
    name: 'Hot Butterscotch Fudge',
    restaurant: 'Corner House',
    price: 220,
    category: 'Desserts',
    description: 'Rich vanilla ice cream topped with our famous signature hot butterscotch sauce and crunchy roasted cashews.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80',
    famous: false,
    tag: 'Sweet Cashew'
  },
  {
    id: 14,
    name: 'Premium Mysore Pak',
    restaurant: 'MTR (Mavalli Tiffin Room)',
    price: 80,
    category: 'Desserts',
    description: 'Traditional sweet made of gram flour, pure ghee, and sugar, cooked until porous and melt-in-the-mouth soft.',
    image: '/mysore_pak.png',
    famous: false,
    tag: 'Melts in Mouth'
  },
  {
    id: 15,
    name: 'Congress Bun Maska',
    restaurant: 'VB Bakery (VV Puram)',
    price: 45,
    category: 'Tiffins',
    description: 'Spiced Kadlekai (peanuts roasted with curry leaves, pepper, turmeric) stuffed inside a freshly baked, butter-loaded sweet bun.',
    image: '/idli.png',
    famous: true,
    tag: 'VB Classic'
  },
  {
    id: 16,
    name: 'Chow Chow Bath',
    restaurant: 'Vidyarthi Bhavan',
    price: 90,
    category: 'Tiffins',
    description: 'Classic dual pairing of half portion savory Khara Bath (ghee upma) and half portion sweet Kesari Bath (saffron semolina pudding).',
    image: '/chow_chow_bath.png',
    famous: false,
    tag: 'VB Combo'
  },
  {
    id: 17,
    name: 'Bonda Soup',
    restaurant: 'MTR (Mavalli Tiffin Room)',
    price: 95,
    category: 'Tiffins',
    description: 'Crisp urad dal bonda dumpling served submerged inside a steel bowl of hot, spiced yellow lentil soup, topped with curry leaves.',
    image: '/bonda_soup.png',
    famous: false,
    tag: 'Bisi Bonda'
  },
  {
    id: 18,
    name: 'Shavige Bath',
    restaurant: 'Veena Stores',
    price: 55,
    category: 'Tiffins',
    description: 'Delicate steamed vermicelli seasoned with mustard seeds, roasted peanuts, green chillies, curry leaves, and fresh coconut shreds.',
    image: '/idli.png',
    famous: false,
    tag: 'Home Upma'
  },
  {
    id: 19,
    name: 'Avarebele Hyacinth Dosa',
    restaurant: 'Shree Vasavi Condiments',
    price: 130,
    category: 'Tiffins',
    description: 'Seasonal speciality dosa stuffed with fresh hyacinth beans (Avarebele) cooked with spices, onions, and curry leaves.',
    image: '/masala_dosa.png',
    famous: true,
    tag: 'Winter Craze'
  },
  {
    id: 20,
    name: 'Dum Roat Halwa',
    restaurant: 'VB Bakery (VV Puram)',
    price: 80,
    category: 'Desserts',
    description: 'Famous golden baked sweet pudding made of ash gourd, dry fruits, sugar, milk khoya, and generous splashes of pure ghee.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
    famous: true,
    tag: 'Legendary Bake'
  },
  {
    id: 21,
    name: 'American Sweet Corn Sandwich',
    restaurant: 'Hari Super Sandwich',
    price: 90,
    category: 'Starters',
    description: 'Triple-decker toasted bread loaded with sweet corn kernels, grated Amul cheese, butter, and their secret green mint chutney.',
    image: '/sandwiches.png',
    famous: true,
    tag: 'Jayanagar Wave'
  },
  {
    id: 22,
    name: 'Chocolate Cheese Toast',
    restaurant: 'Hari Super Sandwich',
    price: 110,
    category: 'Desserts',
    description: 'Toasted white bread filled with thick grated chocolate flakes and cheddar cheese, grilled until warm and oozing fudge.',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=80',
    famous: false,
    tag: 'Fudge Toast'
  },
  {
    id: 23,
    name: 'Maddur Vade',
    restaurant: 'CTR (Shree Sagar)',
    price: 65,
    category: 'Tiffins',
    description: 'Crispy, hard-fried savory flat patties made of semolina, flour, sliced onions, curry leaves, and ginger slices.',
    image: '/idli.png',
    famous: false,
    tag: 'Khara Crunch'
  },
  {
    id: 24,
    name: 'Cake-a-Mocha Sundae',
    restaurant: 'Corner House',
    price: 240,
    category: 'Desserts',
    description: 'Double scoop coffee ice cream served on a base of chocolate sponge cake, drenched in hot chocolate fudge and cashew crunch.',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80',
    famous: false,
    tag: 'Coffee Sundae'
  }
];

const RESTAURANTS = [
  { name: 'All', count: 24 },
  { name: 'MTR (Mavalli Tiffin Room)', count: 5 },
  { name: 'CTR (Shree Sagar)', count: 2 },
  { name: 'Vidyarthi Bhavan', count: 2 },
  { name: 'Veena Stores', count: 2 },
  { name: 'Brahmins Coffee Bar', count: 1 },
  { name: 'Arogya Ahaara', count: 1 },
  { name: 'Nagarjuna', count: 2 },
  { name: 'Corner House', count: 3 },
  { name: 'VV Puram Food Street', count: 1 },
  { name: 'VB Bakery (VV Puram)', count: 2 },
  { name: 'Shree Vasavi Condiments', count: 1 },
  { name: 'Hari Super Sandwich', count: 2 }
];

const BANGALORE_PLACES = [
  'Indiranagar, Bengaluru',
  'Malleswaram, Bengaluru',
  'Jayanagar, Bengaluru',
  'Koramangala, Bengaluru',
  'Rajajinagar, Bengaluru',
  'HSR Layout, Bengaluru',
  'Basavanagudi, Bengaluru',
  'Sadashivanagar, Bengaluru',
  'Whitefield, Bengaluru'
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRestaurant, setSelectedRestaurant] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [address, setAddress] = useState('Indiranagar, Bengaluru');
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('none'); // 'none', 'paying', 'success'
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [logoStyle, setLogoStyle] = useState('token'); // 'claypot', 'dosa', 'token'

  // Cart operations
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prevCart, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, change) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.qty + change;
            return nextQty > 0 ? { ...item, qty: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const getSubtotal = () => cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const getGST = () => Math.round(getSubtotal() * 0.05);
  const getDeliveryFee = () => (getSubtotal() > 0 ? 40 : 0);
  const getPromoDiscount = () => (promoApplied ? Math.round(getSubtotal() * 0.15) : 0);
  const getTotal = () => getSubtotal() + getGST() + getDeliveryFee() - getPromoDiscount();

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'OORU15' || promoCode.toUpperCase() === 'SAKKAT') {
      setPromoApplied(true);
    } else {
      alert('Invalid Promo Code. Try "SAKKAT" or "OORU15" for 15% off.');
    }
  };

  const handleCheckout = () => {
    setCheckoutStep('paying');
    setTimeout(() => {
      setCheckoutStep('success');
      setCart([]);
    }, 1500);
  };

  // Filtered dishes
  const filteredDishes = FAMOUS_DISHES.filter((dish) => {
    const matchesCategory = selectedCategory === 'All' || dish.category === selectedCategory;
    const matchesRestaurant = selectedRestaurant === 'All' || dish.restaurant === selectedRestaurant;
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.restaurant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (dish.tag && dish.tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesRestaurant && matchesSearch;
  });

  // SVG Logo Render function
  const renderLogo = () => {
    switch (logoStyle) {
      case 'dosa':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--color-lime-sprint)' }}>
            <path d="M12 2a10 10 0 1 0 10 10c0-2-1.5-4-3-5s-4-2-7-1.5S7 8 7 11s2.5 5 5 5 4-2 3-4-2-2-3-1" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="11" y="9" width="3" height="3" rx="0.5" fill="currentColor" stroke="var(--color-ink)" strokeWidth="1" />
          </svg>
        );
      case 'token':
        return (
          <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--color-lime-sprint)' }}>
            <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="var(--color-ink)" strokeWidth="4" strokeLinejoin="round" />
            <polygon points="50,11 83,30 83,70 50,89 17,70 17,30" fill="currentColor" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M40 38h20l-4 32H44l-4-32z" fill="var(--color-paper-white)" stroke="var(--color-ink)" strokeWidth="3" strokeLinejoin="round" />
            <path d="M34 38h32" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" />
            <text x="50" y="80" fontFamily="'Fraunces', serif" fontWeight="bold" fontSize="14" fill="var(--color-ink)" textAnchor="middle">ಊಟ</text>
          </svg>
        );
      case 'claypot':
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--color-lime-sprint)' }}>
            <path d="M4 11h16a1 1 0 0 1 1 1v4a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-4a1 1 0 0 1 1-1z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2v4M8 3v3M16 3v3" />
          </svg>
        );
    }
  };

  return (
    <div className="topographic-bg min-h-screen pb-156">
      {/* Top Navigation Bar */}
      <nav style={{
        backgroundColor: 'var(--color-paper-white)',
        height: '67px',
        borderBottom: '1px solid var(--color-rule)',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo wordmark and switcher active logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {renderLogo()}
            </div>
            <span style={{
              fontFamily: 'var(--font-geist)',
              fontWeight: 'var(--font-weight-semibold)',
              fontSize: '20px',
              letterSpacing: '-0.5px',
              color: 'var(--color-ink)'
            }}>
              Sakkat Oota <span style={{ fontWeight: '400', fontSize: '13px', color: 'var(--color-lime-sprint)', backgroundColor: 'var(--color-ink)', padding: '2px 6px', borderRadius: '4px', marginLeft: '4px' }}>NAMMA BLR</span>
            </span>
          </div>

          {/* Inline Interactive Logo Stylist Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid var(--color-rule)', padding: '4px', borderRadius: '4px', backgroundColor: 'var(--color-cream)' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-muted-gray)', padding: '0 6px' }}>LOGO STYLE:</span>
            <button 
              onClick={() => setLogoStyle('claypot')} 
              style={{
                fontSize: '11px',
                padding: '2px 8px',
                border: logoStyle === 'claypot' ? '1px solid var(--color-ink)' : '1px solid transparent',
                backgroundColor: logoStyle === 'claypot' ? 'var(--color-lime-sprint)' : 'transparent',
                borderRadius: '2px',
                cursor: 'pointer',
                fontFamily: 'var(--font-geist)',
                fontWeight: logoStyle === 'claypot' ? 600 : 400
              }}
            >
              Pot
            </button>
            <button 
              onClick={() => setLogoStyle('dosa')} 
              style={{
                fontSize: '11px',
                padding: '2px 8px',
                border: logoStyle === 'dosa' ? '1px solid var(--color-ink)' : '1px solid transparent',
                backgroundColor: logoStyle === 'dosa' ? 'var(--color-lime-sprint)' : 'transparent',
                borderRadius: '2px',
                cursor: 'pointer',
                fontFamily: 'var(--font-geist)',
                fontWeight: logoStyle === 'dosa' ? 600 : 400
              }}
            >
              Dosa Swirl
            </button>
            <button 
              onClick={() => setLogoStyle('token')} 
              style={{
                fontSize: '11px',
                padding: '2px 8px',
                border: logoStyle === 'token' ? '1px solid var(--color-ink)' : '1px solid transparent',
                backgroundColor: logoStyle === 'token' ? 'var(--color-lime-sprint)' : 'transparent',
                borderRadius: '2px',
                cursor: 'pointer',
                fontFamily: 'var(--font-geist)',
                fontWeight: logoStyle === 'token' ? 600 : 400
              }}
            >
              Token
            </button>
          </div>

          {/* Navigation Middle: Place Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} color="var(--color-ink)" />
            {isEditingAddress ? (
              <select
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setIsEditingAddress(false);
                }}
                onBlur={() => setIsEditingAddress(false)}
                style={{
                  border: '1px solid var(--color-ink)',
                  padding: '4px 8px',
                  fontSize: '14px',
                  fontFamily: 'var(--font-geist)',
                  borderRadius: 'var(--radius-inputs)',
                  backgroundColor: 'var(--color-paper-white)'
                }}
                autoFocus
              >
                {BANGALORE_PLACES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            ) : (
              <span
                onClick={() => setIsEditingAddress(true)}
                className="ghost-link"
                style={{ fontSize: '14px', cursor: 'pointer', borderBottom: '1px dashed var(--color-ink)' }}
              >
                {address}
              </span>
            )}
          </div>

          {/* Right Area: Status Indicator & Checkout CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>13 Legendary Eateries Active</span>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="btn-lime"
              style={{ padding: '8px 16px', display: 'flex', gap: '8px', alignItems: 'center' }}
            >
              <ShoppingCart size={16} />
              <span>Cart ({cart.reduce((s, i) => s + i.qty, 0)})</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{
        position: 'relative',
        backgroundColor: 'var(--color-paper-white)',
        paddingTop: 'var(--spacing-80)',
        paddingBottom: 'var(--spacing-80)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-rule)'
      }}>
        {/* Soft lime radial glow halo in the top-right quadrant */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(163, 230, 53, 0.15) 0%, rgba(252, 255, 247, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--spacing-40)',
          position: 'relative',
          zIndex: 2,
          alignItems: 'center'
        }}>
          {/* Hero Left Content */}
          <div>
            <div style={{ display: 'inline-flex', backgroundColor: 'var(--color-ink)', color: 'var(--color-lime-sprint)', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>
              ಬೆಂಗಳೂರಿನ ಸಕ್ಕತ್ ಊಟ, ಈಗ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ! 🍲
            </div>
            <h1 className="text-display" style={{ marginBottom: 'var(--spacing-20)' }}>
              Namma Bengaluru food registry, <span className="serif-italic">sakkat</span> taste delivered hot.
            </h1>
            <p className="text-subheading" style={{ marginBottom: 'var(--spacing-32)' }}>
              ಬಿಸಿ ಬಿಸಿ ಫಿಲ್ಟರ್ ಕಾಫಿ, ಮೃದುವಾದ ಇಡ್ಲಿ ಹಾಗೂ ಗರಿಗರಿಯಾದ ಬೆಣ್ಣೆ ದೋಸೆಗಳ ರುಚಿ ಸವಿಯಿರಿ. Crispy butter dosas, spicy meals, fresh bakery Congress Buns, and classic Corner House sundaes. Stamped and biked to your layout instantly.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#menu" className="btn-lime" style={{ padding: '12px 24px', fontSize: '16px' }}>
                Explore 24 Dishes <ArrowRight size={18} />
              </a>
              <a href="#menu" className="btn-outline" style={{ padding: '12px 24px', fontSize: '16px' }}>
                Check Hot Deals
              </a>
            </div>

            {/* Social Proof Row with places */}
            <div style={{
              marginTop: 'var(--spacing-40)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <span className="text-caption" style={{ letterSpacing: '0.08em', fontWeight: 600 }}>CRAVED IN LEADING HUBS</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="pill-tag" style={{ border: '1px solid var(--color-rule)', fontSize: '11px' }}>Malleswaram</span>
                <span className="pill-tag" style={{ border: '1px solid var(--color-rule)', fontSize: '11px' }}>Basavanagudi</span>
                <span className="pill-tag" style={{ border: '1px solid var(--color-rule)', fontSize: '11px' }}>Jayanagar</span>
                <span className="pill-tag" style={{ border: '1px solid var(--color-rule)', fontSize: '11px' }}>Indiranagar</span>
                <span className="pill-tag" style={{ border: '1px solid var(--color-rule)', fontSize: '11px' }}>Koramangala</span>
                <span className="pill-tag" style={{ border: '1px solid var(--color-rule)', fontSize: '11px' }}>HSR Layout</span>
              </div>
            </div>
          </div>

          {/* Hero Right Mockup Section */}
          <div>
            <div className="card-feature" style={{ padding: '0px' }}>
              <div style={{
                backgroundColor: 'var(--color-cream)',
                borderBottom: '1px solid var(--color-ink)',
                padding: '12px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-ink)' }}></div>
                  <span style={{ fontFamily: 'var(--font-geist)', fontWeight: 600, fontSize: '14px' }}>Live Order Tracker</span>
                </div>
                <div className="status-pill" style={{ padding: '2px 8px' }}>
                  <span className="status-dot"></span>
                  <span style={{ fontSize: '12px' }}>ETA: 18 Mins</span>
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'var(--color-cream)',
                    border: '1px solid var(--color-ink)',
                    borderRadius: 'var(--radius-cards)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-fraunces)',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    fontStyle: 'italic'
                  }}>
                    🍛
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-ink)' }}>CTR Butter Dosa & Coffee</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-muted)' }}>Malleswaram Heritage Hub</p>
                    <p style={{ fontSize: '14px', color: 'var(--color-muted-gray)', marginTop: '4px' }}>Rider: Chethan S. is on Margosa Road</p>
                  </div>
                </div>

                {/* Vertical print-receipt timeline */}
                <div style={{ borderLeft: '2px solid var(--color-ink)', paddingLeft: '16px', marginLeft: '31px' }}>
                  <div style={{ position: 'relative', marginBottom: '16px' }}>
                    <div style={{
                      position: 'absolute',
                      left: '-23px',
                      top: '2px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-lime-sprint)',
                      border: '1px solid var(--color-ink)'
                    }}></div>
                    <span style={{ fontWeight: 500, fontSize: '14px', display: 'block' }}>Order Approved at CTR</span>
                    <span style={{ fontSize: '12px', color: 'var(--color-muted-gray)' }}>14:53 PM • Fresh Benne Dosa on Grill</span>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      position: 'absolute',
                      left: '-23px',
                      top: '2px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-paper-white)',
                      border: '1px solid var(--color-ink)'
                    }}></div>
                    <span style={{ fontWeight: 500, fontSize: '14px', display: 'block', color: 'var(--color-muted)' }}>Assigned to Ooru Bikes</span>
                    <span style={{ fontSize: '12px', color: 'var(--color-muted-gray)' }}>Biker near 15th Cross</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main App Filters & Catalog */}
      <main id="menu" className="container" style={{ marginTop: 'var(--spacing-80)' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: 'var(--spacing-40)',
          borderBottom: '1px solid var(--color-ink)',
          paddingBottom: '24px'
        }}>
          <div>
            <span className="pill-tag" style={{ marginBottom: '12px' }}>OOTA SELECTION</span>
            <h2 className="text-heading" style={{ textTransform: 'none' }}>
              The Culinary Registry of <span className="serif-italic">Namma</span> Bangalore
            </h2>
          </div>

          {/* Unique Styled Search Bar with Custom SVG Logo Icon */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '360px'
          }}>
            <input
              type="text"
              placeholder="Search dosa, idli, meals, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 42px',
                border: '1px solid var(--color-ink)',
                borderRadius: 'var(--radius-inputs)',
                fontSize: '16px',
                fontFamily: 'var(--font-geist)',
                backgroundColor: 'var(--color-paper-white)'
              }}
            />
            {/* Custom food-crosshair search logo */}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="var(--color-ink)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none'
              }}
            >
              <circle cx="11" cy="11" r="6" />
              <line x1="21" y1="21" x2="16" y2="16" />
              <path d="M11 8v6M8 11h6" />
            </svg>
          </div>
        </div>

        {/* Filters and Restaurant selectors */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '32px', alignItems: 'start' }}>
          
          {/* Left Sidebar: Filter categories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Category Filter Group */}
            <div>
              <span className="text-caption" style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>CATEGORIES</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {['All', 'Tiffins', 'Meals', 'Starters', 'Desserts', 'Coffee'].map((cat) => {
                  const categoryLabels = {
                    'All': 'ಎಲ್ಲವೂ (All)',
                    'Tiffins': 'ತಿಂಡಿಗಳು (Tiffins)',
                    'Meals': 'ಊಟ (Meals)',
                    'Starters': 'ಖಾರಾ (Starters)',
                    'Desserts': 'ಸಿಹಿ (Desserts)',
                    'Coffee': 'ಕಾಫಿ (Coffee)'
                  };
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        textAlign: 'left',
                        padding: '8px 12px',
                        border: 'none',
                        borderRadius: 'var(--radius-inputs)',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontFamily: 'var(--font-geist)',
                        backgroundColor: selectedCategory === cat ? 'var(--color-lime-sprint)' : 'transparent',
                        color: 'var(--color-ink)',
                        fontWeight: selectedCategory === cat ? 600 : 400,
                        border: selectedCategory === cat ? '1px solid var(--color-ink)' : '1px solid transparent'
                      }}
                    >
                      {categoryLabels[cat]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Restaurant Filter Group */}
            <div>
              <span className="text-caption" style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>RESTAURANTS</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {RESTAURANTS.map((rest) => (
                  <button
                    key={rest.name}
                    onClick={() => setSelectedRestaurant(rest.name)}
                    style={{
                      textAlign: 'left',
                      padding: '8px 12px',
                      border: 'none',
                      borderRadius: 'var(--radius-inputs)',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontFamily: 'var(--font-geist)',
                      backgroundColor: selectedRestaurant === rest.name ? 'var(--color-cream)' : 'transparent',
                      color: 'var(--color-ink)',
                      border: selectedRestaurant === rest.name ? '1px solid var(--color-ink)' : '1px solid transparent',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span>{rest.name.split(' (')[0]}</span>
                    <span style={{ fontSize: '11px', opacity: 0.6 }}>({rest.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ooru Promo Card */}
            <div className="card-cream" style={{ padding: '16px', marginTop: '16px', border: '1px dashed var(--color-ink)' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--color-ink)' }}>SAKKAT DEALS</span>
              <h5 style={{ fontSize: '16px', fontWeight: 600, margin: '6px 0' }}>Code: SAKKAT</h5>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>Get flat 15% discount on checkout for all first orders.</p>
            </div>
          </div>

          {/* Right Area: Menu list grid */}
          <div>
            {filteredDishes.length === 0 ? (
              <div className="card-cream" style={{ textAlign: 'center', padding: '64px var(--spacing-24)' }}>
                <Receipt size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
                <h3 className="text-heading-sm">No dishes matched.</h3>
                <p className="text-body-sm" style={{ marginTop: '8px' }}>Try resetting your filter searches or keyword parameters.</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSelectedRestaurant('All'); setSearchQuery(''); }}
                  className="btn-lime"
                  style={{ marginTop: '24px' }}
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="custom-scrollbar" style={{
                maxHeight: '75vh',
                overflowY: 'auto',
                padding: '16px',
                border: '1px solid var(--color-rule)',
                borderRadius: '8px',
                backgroundColor: 'rgba(252,255,247,0.5)'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: 'var(--spacing-24)'
                }}>
                  {filteredDishes.map((dish) => (
                    <div key={dish.id} className="card-cream">
                      {/* Item Image */}
                      <div style={{
                        position: 'relative',
                        height: '180px',
                        backgroundColor: 'var(--color-paper-white)',
                        margin: '-24px -24px 16px -24px',
                        borderBottom: '1px solid var(--color-rule)',
                        overflow: 'hidden'
                      }}>
                        <img
                          src={dish.image}
                          alt={dish.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        {dish.famous && (
                          <div style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px'
                          }}>
                            <span className="pill-tag" style={{
                              backgroundColor: 'var(--color-lime-sprint)',
                              border: '1px solid var(--color-ink)',
                              boxShadow: '1px 1px 0 0 #262626'
                            }}>
                              Legendary
                            </span>
                          </div>
                        )}
                        
                        {/* Kannada / Local Tag Overlay */}
                        {dish.tag && (
                          <div style={{
                            position: 'absolute',
                            bottom: '12px',
                            right: '12px'
                          }}>
                            <span className="pill-tag" style={{
                              backgroundColor: 'var(--color-cream)',
                              color: 'var(--color-ink)',
                              border: '1px solid var(--color-ink)',
                              fontSize: '10px',
                              padding: '2px 8px'
                            }}>
                              {dish.tag}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Restaurant tag */}
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        color: 'var(--color-muted-gray)',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                        display: 'block'
                      }}>
                        {dish.restaurant}
                      </span>

                      {/* Dish Name */}
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        marginBottom: '8px',
                        lineHeight: '1.2'
                      }}>
                        {dish.name}
                      </h3>

                      {/* Description */}
                      <p className="text-caption" style={{
                        color: 'var(--color-muted)',
                        flexGrow: 1,
                        marginBottom: '16px'
                      }}>
                        {dish.description}
                      </p>

                      {/* Price and Cart Add button */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTop: '1px solid var(--color-rule)',
                        paddingTop: '16px',
                        marginTop: 'auto'
                      }}>
                        <span style={{
                          fontSize: '20px',
                          fontWeight: 600,
                          color: 'var(--color-ink)'
                        }}>
                          ₹{dish.price}
                        </span>
                        <button
                          onClick={() => addToCart(dish)}
                          className="btn-lime"
                          style={{ padding: '6px 12px', fontSize: '13px' }}
                        >
                          <Plus size={14} /> Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Testimonial Quote Section */}
      <section style={{
        backgroundColor: 'var(--color-cream)',
        borderTop: '1px solid var(--color-rule)',
        borderBottom: '1px solid var(--color-rule)',
        marginTop: 'var(--spacing-120)',
        paddingTop: 'var(--spacing-80)',
        paddingBottom: 'var(--spacing-80)'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: 'var(--spacing-40)',
          alignItems: 'center'
        }}>
          <div>
            <h2 className="text-heading-lg" style={{ lineHeight: 1.1 }}>
              "The filter coffee arrived piping hot in its brass container. A <span className="serif-italic">perfectly</span> typeset delivery process."
            </h2>
            <p className="text-body" style={{ marginTop: '24px', fontStyle: 'italic', color: 'var(--color-muted)' }}>
              Ordering from CTR and Vidyarthi Bhavan used to mean queueing for hours on weekends. Sakkat Oota formats the delivery exactly how standard print prose should look.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-lime-sprint)',
              border: '1px solid var(--color-ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              👨‍💻
            </div>
            <div>
              <h5 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)' }}>Manoj Kumar S</h5>
              <span className="text-caption" style={{ color: 'var(--color-muted-gray)' }}>Product Lead, Bengaluru</span>
            </div>
          </div>
        </div>
      </section>

      {/* Drawer Cart overlay */}
      {isCartOpen && (
        <>
          <div className="drawer-backdrop" onClick={() => setIsCartOpen(false)} />
          <div className="drawer">
            <div style={{
              padding: '24px',
              borderBottom: '1px solid var(--color-ink)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'var(--color-cream)'
            }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 600 }}>Your Delivery Invoice</h3>
                <p style={{ fontSize: '12px', color: 'var(--color-muted-gray)' }}>Sakkat Oota Invoice Ticket #2284</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-ink)'
                }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart list items */}
            <div style={{
              padding: '24px',
              overflowY: 'auto',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', margin: 'auto' }}>
                  <ShoppingCart size={40} style={{ opacity: 0.3, marginBottom: '16px' }} />
                  <p style={{ color: 'var(--color-muted)' }}>Your cart is empty.</p>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted-gray)', marginTop: '4px' }}>Add Bangalore classics from the menu registry.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    borderBottom: '1px solid var(--color-rule)',
                    paddingBottom: '16px'
                  }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)' }}>{item.name}</h4>
                      <p style={{ fontSize: '12px', color: 'var(--color-muted-gray)' }}>{item.restaurant}</p>
                      <span style={{ fontSize: '14px', fontWeight: 500, display: 'block', marginTop: '6px' }}>₹{item.price} each</span>
                    </div>

                    {/* Quantity Selector */}
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-ink)', borderRadius: '4px' }}>
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        style={{ background: 'none', border: 'none', padding: '4px 8px', cursor: 'pointer', color: 'var(--color-ink)' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ padding: '0 8px', fontSize: '14px', fontWeight: 600 }}>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        style={{ background: 'none', border: 'none', padding: '4px 8px', cursor: 'pointer', color: 'var(--color-ink)' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer summary and Checkout */}
            {cart.length > 0 && (
              <div style={{
                padding: '24px',
                borderTop: '1px solid var(--color-ink)',
                backgroundColor: 'var(--color-cream)'
              }}>
                {/* Promo Code Form */}
                {!promoApplied ? (
                  <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <input
                      type="text"
                      placeholder="Enter promo (SAKKAT)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      style={{
                        flexGrow: 1,
                        padding: '6px 12px',
                        border: '1px solid var(--color-ink)',
                        borderRadius: 'var(--radius-inputs)',
                        fontFamily: 'var(--font-geist)',
                        fontSize: '14px'
                      }}
                    />
                    <button type="submit" className="btn-lime" style={{ padding: '6px 12px', fontSize: '13px' }}>Apply</button>
                  </form>
                ) : (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'var(--color-mint-wash)',
                    border: '1px solid var(--color-mint-edge)',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-inputs)',
                    marginBottom: '16px',
                    fontSize: '13px'
                  }}>
                    <span style={{ fontWeight: 600 }}>SAKKAT active (-15% discount)</span>
                    <button onClick={() => setPromoApplied(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-ink)', fontWeight: 'bold' }}>Remove</button>
                  </div>
                )}

                {/* Subtotal table */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span>Subtotal</span>
                    <span>₹{getSubtotal()}</span>
                  </div>
                  {promoApplied && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'green' }}>
                      <span>15% Promo Discount</span>
                      <span>-₹{getPromoDiscount()}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span>GST (5%)</span>
                    <span>₹{getGST()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span>Ooru Delivery Fee</span>
                    <span>₹{getDeliveryFee()}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '18px',
                    fontWeight: 700,
                    borderTop: '1px dashed var(--color-ink)',
                    paddingTop: '12px',
                    marginTop: '4px',
                    color: 'var(--color-black-ink)'
                  }}>
                    <span>Invoice Total</span>
                    <span>₹{getTotal()}</span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={handleCheckout}
                  className="btn-lime"
                  style={{
                    width: '100%',
                    padding: '12px 24px',
                    justifyContent: 'center',
                    fontSize: '16px',
                    borderRadius: '4px'
                  }}
                >
                  Place Delivery Order (₹{getTotal()}) <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Checkout step payment modal / overlay */}
      {checkoutStep !== 'none' && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(38,38,38,0.7)',
          backdropFilter: 'blur(3px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200
        }}>
          <div className="card-feature" style={{
            width: '90%',
            maxWidth: '480px',
            backgroundColor: 'var(--color-paper-white)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-subtle-2)',
            border: '2px solid var(--color-ink)',
            overflow: 'hidden'
          }}>
            {checkoutStep === 'paying' ? (
              <div style={{ padding: '48px 24px', textAlign: 'center' }}>
                <div style={{
                  display: 'inline-block',
                  width: '48px',
                  height: '48px',
                  border: '4px solid var(--color-rule)',
                  borderTopColor: 'var(--color-lime-sprint)',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  marginBottom: '24px'
                }}></div>
                <h3 className="text-heading-sm" style={{ marginBottom: '8px' }}>Processing OoruPay...</h3>
                <p className="text-body-sm">Routing secure connection to Bengaluru Local Banking Gateway.</p>
              </div>
            ) : (
              <div style={{ padding: '36px 24px', textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--surface-mint-pill)',
                  border: '2px solid var(--color-mint-edge)',
                  color: 'var(--color-ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <Check size={32} />
                </div>
                <h3 className="text-heading-sm" style={{ marginBottom: '8px' }}>Payment Approved</h3>
                <p className="text-body-sm" style={{ marginBottom: '24px' }}>Your dispatch ticket has been stamped. Food is preparing at the kitchen.</p>

                {/* Printout styling ticket box */}
                <div style={{
                  backgroundColor: 'var(--color-cream)',
                  border: '1px dashed var(--color-ink)',
                  padding: '16px',
                  borderRadius: '4px',
                  textAlign: 'left',
                  fontSize: '14px',
                  marginBottom: '32px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: 'var(--color-muted-gray)' }}>Order ID:</span>
                    <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>#BF-89304-BLR</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: 'var(--color-muted-gray)' }}>Delivery To:</span>
                    <span>{address}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-muted-gray)' }}>Delivery System:</span>
                    <span>Ooru Express Bike</span>
                  </div>
                </div>

                <button
                  onClick={() => setCheckoutStep('none')}
                  className="btn-lime"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Return to Registry
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Brand Footer featuring Social links */}
      <footer style={{
        backgroundColor: 'var(--color-cream)',
        borderTop: '1px solid var(--color-rule)',
        paddingTop: 'var(--spacing-56)',
        paddingBottom: 'var(--spacing-56)',
        marginTop: 'var(--spacing-80)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-ink)' }}>Sakkat Oota</h4>
            <p className="text-caption" style={{ marginTop: '4px' }}>
              Built with precision. Stamped in Karnataka. © 2026.
            </p>
          </div>

          {/* Social Profiles */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href="https://www.linkedin.com/in/manojkumars-dev/"
              target="_blank"
              rel="noreferrer"
              className="ghost-link"
              style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> LinkedIn
            </a>
            <a
              href="https://github.com/Manojkumars-dev"
              target="_blank"
              rel="noreferrer"
              className="ghost-link"
              style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg> GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* Embedded CSS for custom inline spinning animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

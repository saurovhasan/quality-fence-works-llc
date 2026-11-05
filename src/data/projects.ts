export interface Project {
  id: string;
  title: string;
  category: 'vinyl' | 'wood' | 'aluminum' | 'chainlink' | 'gates';
  categoryLabel: string;
  image: string;
  location: string;
  features: string[];
  description: string;
  tagline: string;
  specs: {
    height: string;
    material: string;
    terrain: string;
    posts: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'vinyl-privacy-yard-sign',
    title: '6ft White Vinyl Privacy & Signature Gate',
    category: 'vinyl',
    categoryLabel: 'PVC / Vinyl',
    image: '/assets/aistudio/886168088_122340146924224375_861486219090302653_n_3c6783d7.jpg',
    location: 'Chantilly, VA',
    tagline: 'Signature project featured with official Quality Fence Works yard sign',
    features: ['Tongue-and-groove privacy slats', 'Routed 5x5 posts', 'Heavy-duty latch gate', 'HOA compliant'],
    description: 'Full perimeter vinyl privacy installation along residential side yard. Clean lines, zero fasteners visible from exterior, and custom walk gate with anti-sag hinges.',
    specs: {
      height: '6 Feet',
      material: 'Virgin PVC with UV Inhibitors',
      terrain: 'Gentle Lawn Slope',
      posts: '5x5 Vinyl Set 32" in Concrete',
    },
  },
  {
    id: 'vinyl-perimeter-estate',
    title: 'Extensive Vinyl Privacy Corner Lot Enclosure',
    category: 'vinyl',
    categoryLabel: 'PVC / Vinyl',
    image: '/assets/aistudio/831492650_122333258252224375_1164876312457662615_n_1bd70c7d.jpg',
    location: 'Ashburn, VA',
    tagline: 'Precision laser-aligned perimeter spanning over 240 linear feet',
    features: ['Laser-aligned top rail', 'Commercial grade vinyl', 'Corner post anchoring', 'Clean turf grade match'],
    description: 'Long boundary enclosure on an open suburban corner parcel. Engineered to resist Virginia wind shear while maintaining pristine white gloss without repainting.',
    specs: {
      height: '6 Feet',
      material: 'Commercial PVC Composite',
      terrain: 'Open Grade / Level Turf',
      posts: 'Deep Concrete Post Encasement',
    },
  },
  {
    id: 'vinyl-sloped-stepped',
    title: 'Contoured Vinyl Privacy on Hillside Grade',
    category: 'vinyl',
    categoryLabel: 'PVC / Vinyl',
    image: '/assets/aistudio/829381016_122333258240224375_2236086763123967068_n_f1322065.jpg',
    location: 'Gainesville, VA',
    tagline: 'Custom stepped elevation matching steep neighborhood property lines',
    features: ['Custom stepped sections', 'No bottom gaps for pets', 'Reinforced corner transitions', 'Subdivision HOA approved'],
    description: 'Custom stepped installation on sloped hillside yard. Every panel is custom cut to prevent gaps beneath the bottom rail, keeping pets safely enclosed.',
    specs: {
      height: '6 Feet (Stepped)',
      material: 'Heavy-Wall Vinyl Privacy',
      terrain: 'Rolling Hillside Grade',
      posts: 'Extended 9ft Posts Deep Set',
    },
  },
  {
    id: 'vinyl-gate-hardware-detail',
    title: 'Heavy-Duty Reinforced Double Drive Gate',
    category: 'gates',
    categoryLabel: 'Gates & Hardware',
    image: '/assets/aistudio/885266556_122340147062224375_4218959900417183069_n_484fdf23.jpg',
    location: 'Fairfax, VA',
    tagline: 'Steel-reinforced internal gate frames with black powder-coated latching',
    features: ['Internal steel frame', 'Black anti-sag adjustable hinges', 'Self-latching gravity lock', 'Quality Fence Works badge'],
    description: 'Driveway access double gate built with internal structural reinforcement so large gate doors never sag or drag on the driveway over time.',
    specs: {
      height: '6 Feet (Double Leaf)',
      material: 'Reinforced PVC & Powder-Coated Steel',
      terrain: 'Paved Driveway Transition',
      posts: 'Heavy-Gauge Steel Core Inserts',
    },
  },
  {
    id: 'wood-estate-post-rail-mesh',
    title: '4-Board Estate Paddock Fence with Black Wire Mesh',
    category: 'wood',
    categoryLabel: 'Custom Wood & Estate',
    image: '/assets/aistudio/854729553_122336512814224375_2718215012085013928_n_67033636.jpg',
    location: 'Leesburg, VA',
    tagline: 'Classic Virginia countryside equestrian style with secure dog/pet mesh',
    features: ['Rough-sawn pressure-treated lumber', 'Black welded wire mesh', 'Chamfered posts', 'Acreage perimeter'],
    description: 'Traditional Northern Virginia equestrian fence with 4 horizontal face boards and heavy-gauge black welded wire mesh. Keeps dogs secure while preserving sweeping pasture views.',
    specs: {
      height: '4.5 Feet',
      material: 'Pressure-Treated Southern Pine & Black Mesh',
      terrain: 'Rolling Pasture & Lawn',
      posts: 'Round / Square Treated Estate Posts',
    },
  },
  {
    id: 'wood-split-rail-deck-enclosure',
    title: '3-Rail Wood Paddock with Protective Caps & Yard Deck',
    category: 'wood',
    categoryLabel: 'Custom Wood & Estate',
    image: '/assets/aistudio/853141582_122336512808224375_6815886156800158024_n_8c9fafa4.jpg',
    location: 'Clifton, VA',
    tagline: 'Integrated backyard fence tied into existing deck and wooded tree line',
    features: ['3-rail horizontal timber', 'Protective pyramid post caps', 'Tight wire backing', 'Deck stair tie-in'],
    description: 'Custom perimeter fence framing a private wooded backyard and deck area. Includes decorative black pyramid post caps to prevent end-grain rot and weather split.',
    specs: {
      height: '4 Feet',
      material: '#1 Grade Pressure-Treated Pine',
      terrain: 'Wooded Border / Graded Yard',
      posts: '4x4 Treated with Composite Caps',
    },
  },
  {
    id: 'wood-board-on-board-capped',
    title: 'Premium Board-on-Board Privacy with Top Trim Cap',
    category: 'wood',
    categoryLabel: 'Custom Wood & Estate',
    image: '/assets/aistudio/885924226_122340146846224375_5176292162525368276_n_c238e8d3.jpg',
    location: 'Vienna, VA',
    tagline: 'Architectural wood privacy fence with continuous 2x6 top cap and fascia',
    features: ['Overlapping board-on-board', 'Top trim weather cap', 'Zero visibility gaps', 'Neighbor-friendly style'],
    description: 'Architectural-grade wood privacy fence featuring overlapping vertical pickets that eliminate shrinkage gaps over time, topped with a clean 2x6 cap board to shed rainwater.',
    specs: {
      height: '6 Feet',
      material: 'Pressure-Treated Pine with Cedar Cap Option',
      terrain: 'Corner Residential Lot',
      posts: '4x4 Timber Set in Deep Concrete',
    },
  },
  {
    id: 'wood-vertical-picket-sloped',
    title: 'Vertical Wood Privacy Fence on Natural Hillside',
    category: 'wood',
    categoryLabel: 'Custom Wood & Estate',
    image: '/assets/aistudio/869932850_122339113376224375_4398391151928394633_n_072ca27a.jpg',
    location: 'Woodbridge, VA',
    tagline: 'Smooth contouring along steep residential backyard slope and shed',
    features: ['Grade-contoured pickets', '3 horizontal structural rails', 'Hot-dipped galvanized ring nails', 'Rot-resistant ground clearance'],
    description: 'Steep hill fence installation where each vertical picket is set to follow the lawn contours without jarring steps. Prevents pets escaping and maintains smooth sightlines.',
    specs: {
      height: '6 Feet',
      material: 'Kiln-Dried Pressure-Treated Lumber',
      terrain: 'Steep Elevation Drop',
      posts: 'Heavy 4x4 Posts Set in Solid Concrete',
    },
  },
  {
    id: 'wood-townhome-shadowbox',
    title: 'Townhome Semi-Privacy Shadowbox Fence',
    category: 'wood',
    categoryLabel: 'Custom Wood & Estate',
    image: '/assets/aistudio/875356338_122339113418224375_7299277562119421432_n_73fa0a08.jpg',
    location: 'Reston, VA',
    tagline: 'HOA-approved shadowbox design allowing gentle airflow with privacy',
    features: ['Alternating board shadowbox', 'Wind-resistant airflow', 'Identical look on both sides', 'Townhome parcel fit'],
    description: 'Townhouse rear yard enclosure built to HOA architectural standards. The alternating picket layout reduces wind pressure against the fence while providing excellent privacy.',
    specs: {
      height: '6 Feet',
      material: 'Select Grade Treated Pine',
      terrain: 'Townhome Rear Courtyard',
      posts: 'Enclosed 4x4 Corner Framing',
    },
  },
  {
    id: 'aluminum-ornamental-black',
    title: 'Black Ornamental Aluminum Pool-Code Security Fence',
    category: 'aluminum',
    categoryLabel: 'Ornamental Aluminum',
    image: '/assets/aistudio/884823143_122340146972224375_3220186993496971353_n_9688ab5e.jpg',
    location: 'Centreville, VA',
    tagline: 'Sleek powder-coated aluminum racking tightly down side property slopes',
    features: ['Pool-code compliant spacing', 'Industrial powder coat finish', 'Racked on steep slope', 'Maintenance-free lifetime alloy'],
    description: 'Modern black aluminum fence installed in a narrow side corridor between two townhomes. Racked sections adjust to the slope without unsightly steps or exposed post gaps.',
    specs: {
      height: '4.5 Feet (Pool Code Compliant)',
      material: 'Extruded Aluminum with AAMA 2604 Powder Coat',
      terrain: 'Narrow Side Slope',
      posts: '2x2 Aluminum Posts Core-Set in Concrete',
    },
  },
  {
    id: 'chainlink-black-vinyl',
    title: 'Black Vinyl-Coated Residential Chain Link System',
    category: 'chainlink',
    categoryLabel: 'Chain Link',
    image: '/assets/aistudio/870354898_122339113262224375_9206968771107175932_n_382a5863.jpg',
    location: 'Manassas, VA',
    tagline: 'Blends into foliage while providing cost-effective pet and perimeter safety',
    features: ['Vinyl-coated 9-gauge steel', 'Matching black top rail', 'Tension wire base', 'Subtle natural blend'],
    description: 'Affordable and durable boundary fence with all-black powder-coated hardware and vinyl-wrapped mesh that disappears naturally against lawn grass and landscaping.',
    specs: {
      height: '4 Feet',
      material: 'Vinyl-Coated Galvanized Steel',
      terrain: 'Lawn Edge along Trees',
      posts: 'Black Coated Schedule 20 Steel Posts',
    },
  },
  {
    id: 'chainlink-galvanized-perimeter',
    title: 'Galvanized Steel Security & Pet Enclosure',
    category: 'chainlink',
    categoryLabel: 'Chain Link',
    image: '/assets/aistudio/876603376_122339113334224375_1245338989403677095_n_4fd0dbff.jpg',
    location: 'Burke, VA',
    tagline: 'Heavy-duty galvanized steel fencing built for decades of zero maintenance',
    features: ['Hot-dipped galvanized mesh', 'Secure corner bracing', 'Shed & tree perimeter', 'Maximum durability per dollar'],
    description: 'Long-lasting perimeter security fence surrounding backyard outbuilding and tree line. Built with industrial strength tension bands and heavy post footers.',
    specs: {
      height: '4 Feet',
      material: 'Hot-Dipped Galvanized Steel Core',
      terrain: 'Wooded Backyard Edge',
      posts: 'Galvanized Terminal & Line Posts in Concrete',
    },
  },
];

export const SERVICE_CATEGORIES = [
  {
    id: 'vinyl',
    name: 'PVC & Vinyl Fencing',
    tagline: 'Zero-maintenance privacy, durability, and crisp modern curb appeal.',
    priceRange: '$34 – $48 / linear ft installed',
    bullets: [
      'Tongue-and-groove solid privacy or semi-privacy styles',
      'UV-stabilized virgin vinyl that never fades, yellows, or rots',
      'No painting, staining, or power washing chemicals required',
      'Meets all Northern Virginia HOA neighborhood requirements',
    ],
    sampleImage: '/assets/aistudio/886168088_122340146924224375_861486219090302653_n_3c6783d7.jpg',
  },
  {
    id: 'wood',
    name: 'Custom Wood Fencing',
    tagline: 'Natural warmth, customized board patterns, and estate paddock styles.',
    priceRange: '$28 – $42 / linear ft installed',
    bullets: [
      'Board-on-Board, Shadowbox, Dog-Ear, and Cap-and-Trim designs',
      'Estate 3-board and 4-board paddock fencing with black pet wire mesh',
      '#1 Grade pressure-treated southern yellow pine or western red cedar',
      'Constructed with hot-dipped galvanized ring-shank fasteners',
    ],
    sampleImage: '/assets/aistudio/854729553_122336512814224375_2718215012085013928_n_67033636.jpg',
  },
  {
    id: 'aluminum',
    name: 'Ornamental Aluminum',
    tagline: 'Refined architectural elegance, pool code compliant, lifetime powder coat.',
    priceRange: '$38 – $54 / linear ft installed',
    bullets: [
      'BOCA pool-code compliant with self-closing magnetic safety latches',
      'Rackable panels contour gracefully to steep Northern Virginia hillsides',
      'AAMA 2604 architectural powder coating resists chipping and rust',
      'Provides security without obstructing scenic views or landscape',
    ],
    sampleImage: '/assets/aistudio/884823143_122340146972224375_3220186993496971353_n_9688ab5e.jpg',
  },
  {
    id: 'chainlink',
    name: 'Chain Link Fencing',
    tagline: 'Cost-effective, highly durable boundary definition and pet security.',
    priceRange: '$18 – $28 / linear ft installed',
    bullets: [
      'Black vinyl-coated mesh that blends subtly into backyards and trees',
      'Industrial galvanized steel for commercial or residential property lines',
      'Tension wire bottom to prevent dogs and wildlife digging under',
      'Fast turnaround installation with heavy concrete post footers',
    ],
    sampleImage: '/assets/aistudio/870354898_122339113262224375_9206968771107175932_n_382a5863.jpg',
  },
  {
    id: 'decks',
    name: 'Decks & Outdoor Living',
    tagline: 'Custom pressure-treated and composite decks built for family gathering.',
    priceRange: '$45 – $85 / sq ft installed',
    bullets: [
      'New deck builds, multi-level platforms, and code-compliant staircases',
      'Treated pine or low-maintenance composite (Trex, TimberTech)',
      'Matching railings in vinyl, aluminum, or integrated wood pickets',
      'Permit handling and architectural plan submission support',
    ],
    sampleImage: '/assets/aistudio/853141582_122336512808224375_6815886156800158024_n_8c9fafa4.jpg',
  },
  {
    id: 'patios',
    name: 'Patios & Hardscaping',
    tagline: 'Durable stone and paver patios designed to complement your yard fence.',
    priceRange: 'Custom quote based on site layout',
    bullets: [
      'Interlocking concrete paver patios and flagstone walkways',
      'Grading, sub-base compaction, and geotextile weed protection',
      'Seamless integration with fence gates, retaining edges, and turf',
      'Built for Virginia freeze-thaw cycles with proper perimeter edging',
    ],
    sampleImage: '/assets/aistudio/885266556_122340147062224375_4218959900417183069_n_484fdf23.jpg',
  },
];

export const SERVICE_AREAS = [
  { county: 'Fairfax County', towns: ['Fairfax', 'Chantilly', 'Herndon', 'Reston', 'Vienna', 'McLean', 'Burke', 'Springfield', 'Centreville', 'Oakton', 'Clifton'] },
  { county: 'Loudoun County', towns: ['Ashburn', 'Sterling', 'Leesburg', 'South Riding', 'Brambleton', 'Aldie', 'Broadlands', 'Purcellville'] },
  { county: 'Prince William County', towns: ['Manassas', 'Gainesville', 'Haymarket', 'Woodbridge', 'Dale City', 'Bristow'] },
  { county: 'Surrounding Areas', towns: ['Arlington', 'Alexandria', 'Fauquier County', 'Warrenton'] },
];

export const COMPANY_INFO = {
  name: 'Quality Fence Works LLC',
  shortName: 'Quality Fence Works',
  owner: 'Antonio',
  phone: '703-856-5215',
  phoneFormatted: '(703) 856-5215',
  email: 'qualityfenceworkllc@gmail.com',
  license: 'Licensed & Insured in Virginia',
  serviceHours: 'Monday – Saturday: 7:00 AM – 7:00 PM',
  estimateTurnaround: 'Free on-site measurements scheduled within 24–48 hours',
};

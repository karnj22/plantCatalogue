/**
 * Botanical Plant Catalog Dataset
 * Verified botanical classifications and comprehensive horticultural care guidelines.
 * Accurately audited across all 43 nursery specimen photographs.
 */

const plantCatalogData = [
  {
    id: "anthurium-andraeanum",
    name: "Flamingo Flower / Tail Flower",
    scientificName: "Anthurium andraeanum",
    family: "Araceae (Arum Family)",
    category: "Flowering",
    environment: "Indoor & Shaded Patio",
    foliageColor: "Glossy deep emerald green, leathery heart-shaped (cordate) leaves with pronounced pale veins",
    flowerInfo: "Striking waxy scarlet-red, blush pink, or pristine white heart-shaped spathes with an erect creamy-yellow or white spadix; blooms persistently for 6-8 weeks",
    wateringCycle: "Moderate: Water when top 1-2 inches of potting mix dries out; prefers consistent light moisture without sogginess; mist weekly or use pebble tray for 60%+ humidity",
    sunExposure: "Medium to bright indirect filtered sunlight; avoid harsh direct sun which bleaches spathes and scorches foliage",
    suitableWeather: "Warm tropical & subtropical climates (18°C - 30°C / 65°F - 86°F); highly sensitive to cold drafts below 15°C (59°F)",
    nutritionalRequirements: "Diluted high-phosphorus liquid orchid/flowering fertilizer (NPK 10-20-10 or 15-30-15) every 4-6 weeks during active growth; top-dress with vermicompost biannually",
    soilRequirements: "Ultra-aerated, chunky, free-draining aroid mix (pH 5.5 - 6.5): 40% coco chips/coir, 30% perlite, 20% orchid bark, and 10% vermicompost",
    windConditions: "Sheltered: Needs calm, still air protected from high winds, air conditioner blowers, and dry heater drafts",
    cultivationTips: "Epiphytic clumping habit. Wipe glossy leaves with a damp cloth to maximize photosynthesis. Keep away from pets (contains insoluble calcium oxalate crystals).",
    images: [
      {
        file: "Images/20261011_142425.jpg",
        caption: "Nursery bench laden with waxy scarlet and white flowering Flamingo Flowers (Lucky Bamboo stalks visible on upper shelf)"
      }
    ]
  },
  {
    id: "euphorbia-pulcherrima",
    name: "Poinsettia / Mexican Flame Leaf",
    scientificName: "Euphorbia pulcherrima",
    family: "Euphorbiaceae (Spurge Family)",
    category: "Flowering",
    environment: "Indoor & Filtered Courtyard",
    foliageColor: "Mid to dark green lobed leaves beneath intense radiant crimson-scarlet, salmon-pink, or creamy-ivory modified terminal bracts",
    flowerInfo: "True flowers are the small, yellow bead-like cyathia in the central cluster; the vivid scarlet 'petals' are actually modified bracts",
    wateringCycle: "Water thoroughly when the top inch of soil feels dry to touch; never allow the pot to sit in standing saucer water to avoid root rot",
    sunExposure: "Bright, indirect light indoors; 6-8 hours of gentle filtered light daily; avoid direct hot afternoon rays through glass",
    suitableWeather: "Prefers 16°C - 24°C (60°F - 75°F); extremely sensitive to sudden temperature fluctuations and cold drafts under 12°C",
    nutritionalRequirements: "Balanced all-purpose liquid fertilizer (NPK 20-20-20) at half-strength every 3-4 weeks during spring and summer; cease feeding while in peak bract color",
    soilRequirements: "Lightweight, porous potting mix (pH 5.8 - 6.5): 50% coco peat, 30% sterilized soil/sand, and 20% perlite with excellent drainage holes",
    windConditions: "Sheltered: Sensitive to gusty outdoor winds and drafty indoor hallways; breezes cause premature bract drop",
    cultivationTips: "Requires 12-14 hours of uninterrupted darkness each night for 8-10 weeks in autumn to initiate brilliant winter bract coloration. Milky sap may irritate sensitive skin.",
    images: [
      {
        file: "Images/20261011_142431.jpg",
        caption: "Nursery greenhouse table displaying uniform crop of vibrant red Poinsettias with central cyathia"
      }
    ]
  },
  {
    id: "codiaeum-variegatum",
    name: "Garden Croton",
    scientificName: "Codiaeum variegatum",
    family: "Euphorbiaceae (Spurge Family)",
    category: "Foliage",
    environment: "Indoor Sun & Outdoor Patio",
    foliageColor: "Spectacular multicolor kaleidoscope of vivid yellow, scarlet red, orange, bronze, peach, and emerald green with variegated veins and spots",
    flowerInfo: "Inconspicuous, small cream-white star-like flowers on slender racemes; cultivated primarily for dazzling foliage rather than blooms",
    wateringCycle: "Moderate to high: Keep soil evenly moist during warm growing seasons; reduce slightly in winter; water when top 1/2 inch is dry",
    sunExposure: "Bright direct to intense indirect sunlight; needs at least 4-6 hours of sunshine daily to maintain vibrant chromatic pigments",
    suitableWeather: "Thrives in warm tropical humidity (20°C - 32°C / 68°F - 90°F); will drop leaves rapidly if exposed to temperatures below 15°C (60°F)",
    nutritionalRequirements: "Balanced slow-release pellets (NPK 14-14-14) or liquid feed high in potassium every 4 weeks in spring/summer to boost leaf coloration",
    soilRequirements: "Rich, well-draining, organically amended potting soil (pH 6.0 - 6.5): 40% garden soil, 30% coco peat, 20% vermicompost, 10% perlite",
    windConditions: "Moderate tolerance once acclimatized; avoid cold drafty wind currents which induce sudden leaf shedding",
    cultivationTips: "Includes popular cultivars: 'Petra' (broad oval red/yellow veined), 'Mammy' (corkscrew spiral leaves), 'Gold Dust' (freckled yellow), and 'Gold Finger' (narrow lanceolate).",
    images: [
      {
        file: "Images/20261011_143203.jpg",
        caption: "Garden Croton 'Petra' with thick, glossy leaves illuminated with brilliant scarlet, yellow, and orange venation"
      },
      {
        file: "Images/20261011_144445.jpg",
        caption: "Croton 'Gold Finger' featuring narrow linear foliage profusely speckled with bright golden-yellow spots"
      },
      {
        file: "Images/20261011_144454.jpg",
        caption: "Croton 'Mammy' with spiraling corkscrew leaves blushing from chartreuse into fiery crimson and purple-black"
      },
      {
        file: "Images/20261011_144502.jpg",
        caption: "Broadleaf Croton cultivar showing soft sunset peach, blush coral, and deep bronze margins"
      },
      {
        file: "Images/20261011_144509.jpg",
        caption: "Lobed oakleaf Croton 'Excellent' displaying distinct leaf notches with golden ribs"
      },
      {
        file: "Images/20261011_144517.jpg",
        caption: "Nursery bed of mixed bushy croton cultivars thriving under 50% green agro-shade netting"
      },
      {
        file: "Images/20261011_144526.jpg",
        caption: "Croton 'Red Banana' / spatulate cultivar displaying hot magenta and ruby-red central ribs"
      },
      {
        file: "Images/20261011_144537.jpg",
        caption: "Container-grown Croton grouping showcasing dense branching and bushy form"
      },
      {
        file: "Images/20261011_144639.jpg",
        caption: "Gold Dust Croton (*Codiaeum variegatum* 'Gold Dust') with intense celestial golden speckles on forest green blades"
      },
      {
        file: "Images/20261011_144709.jpg",
        caption: "Narrow-leaf Croton 'Picasso's Paintbrush' / 'Zanzibar' with delicate ribbon-like multicolor foliage"
      }
    ]
  },
  {
    id: "radermachera-sinica",
    name: "China Doll / Serpent Tree",
    scientificName: "Radermachera sinica 'Golden'",
    family: "Bignoniaceae (Trumpet Vine Family)",
    category: "Foliage",
    environment: "Indoor Bright & Shaded Terrace",
    foliageColor: "Lustrous, bipinnate, feathery leaves in bright lime-green and chartreuse-golden tones with a shimmering glossy sheen",
    flowerInfo: "Fragrant, trumpet-shaped yellow/white blossoms in large panicles (predominantly blooms in outdoor subtropical landscapes, rare indoors)",
    wateringCycle: "Moderate: Maintain steady, uniform moisture; never let the root ball completely desiccate or become waterlogged; water when top inch is dry",
    sunExposure: "Bright indirect light; thrives near east-facing windows; filtered direct morning sunlight encourages denser golden foliage",
    suitableWeather: "Warm indoor temperatures (18°C - 26°C / 65°F - 78°F); protect from frost and dry winter heating vents",
    nutritionalRequirements: "Standard balanced liquid houseplant fertilizer (NPK 10-10-10) diluted to half-strength once a month during spring and summer",
    soilRequirements: "Fertile, spongy, quick-draining potting substrate (pH 6.0 - 7.0): 50% coco peat, 30% compost/humus, 20% coarse perlite",
    windConditions: "Sheltered: Draft-intolerant; sudden changes in location or cold drafts will trigger leaf drop",
    cultivationTips: "Pinch back growing tips in spring to maintain a compact, bushy crown. Resents frequent relocation.",
    images: [
      {
        file: "Images/20261011_143359.jpg",
        caption: "Lush potted China Doll 'Golden' displaying intricate bipinnate chartreuse canopy"
      }
    ]
  },
  {
    id: "thuja-impatiens-combo",
    name: "Dwarf Globe Thuja & New Guinea Impatiens",
    scientificName: "Thuja occidentalis 'Golden Globe' & Impatiens hawkeri",
    family: "Cupressaceae / Balsaminaceae",
    category: "Landscape",
    environment: "Outdoor Sun to Semi-Shade",
    foliageColor: "Dense, aromatic, scale-like conifer foliage in golden-emerald paired with dark bronze-green fleshy succulent impatiens leaves",
    flowerInfo: "Impatiens produce prolific, flat 5-petaled blossoms in electric scarlet, coral, and fuchsia with spurred nectaries; Thuja produces tiny conelets",
    wateringCycle: "Thuja is moderately drought-tolerant once established; Impatiens require generous, consistent moisture, watering every 1-2 days in heat",
    sunExposure: "Thuja thrives in full to partial sun; Impatiens prefer morning sun with dappled afternoon shade protection",
    suitableWeather: "Temperate to subtropical; Thuja is cold hardy, while Impatiens thrive in 18°C - 28°C and are sensitive to frost",
    nutritionalRequirements: "Slow-release granular fertilizer (NPK 10-10-10) in spring for conifer; high-potassium liquid feed every 2 weeks for continuous impatiens flowering",
    soilRequirements: "Moist, humus-rich, well-draining garden soil (pH 6.0 - 7.0): 40% garden loam, 30% organic compost/cow manure, 30% sand/coco peat",
    windConditions: "Thuja tolerates moderate garden winds; tender impatiens require shelter from strong drying winds",
    cultivationTips: "Excellent companion planting in ornamental landscape beds or large patio planters combining architectural evergreen structure with vibrant floral color.",
    images: [
      {
        file: "Images/20261011_144023.jpg",
        caption: "Globe Thuja conifer framed by vivid New Guinea Impatiens and potted autumn Chrysanthemums"
      },
      {
        file: "Images/20261011_144040.jpg",
        caption: "Close-up perspective of golden Thuja foliage with radiant scarlet impatiens in nursery staging area"
      }
    ]
  },
  {
    id: "epipremnum-aureum-njoy",
    name: "Pothos 'N'Joy' / Pearls & Jade",
    scientificName: "Epipremnum aureum 'N'Joy'",
    family: "Araceae (Arum Family)",
    category: "Aroid / Vine",
    environment: "Indoor & Sheltered Balcony",
    foliageColor: "Small, ovate, cupped leaves boasting crisp glacier-white patches sharply contrasted against rich forest green centers",
    flowerInfo: "Extremely rare in cultivation; grown exclusively for its elegant marbled foliage",
    wateringCycle: "Low to moderate: Allow the top 50% of the soil volume to dry between waterings; highly resilient against brief underwatering",
    sunExposure: "Medium to bright indirect light; needs ample indirect light to preserve distinct white variegation without scorching",
    suitableWeather: "Warm ambient indoor temperatures (18°C - 28°C / 65°F - 82°F); protect from cold below 12°C",
    nutritionalRequirements: "Quarter-strength balanced liquid houseplant fertilizer once every 4-6 weeks during spring and summer; avoid over-fertilizing",
    soilRequirements: "Well-aerated porous potting mix (pH 6.1 - 6.8): 40% coco peat, 30% perlite, 20% bark, 10% vermicompost",
    windConditions: "Sheltered indoor environment; tolerates gentle room airflow, but avoid harsh air conditioning gusts",
    cultivationTips: "Compact, slow-growing trailing vine. Ideal for hanging baskets or small tabletop pots. Toxic if ingested by cats and dogs.",
    images: [
      {
        file: "Images/20261011_144906.jpg",
        caption: "Nursery pot of Pothos 'N'Joy' displaying crisp white and green marbled foliage"
      }
    ]
  },
  {
    id: "begonia-semperflorens",
    name: "Wax Begonia / Clubbed Begonia",
    scientificName: "Begonia x semperflorens-cultorum",
    family: "Begoniaceae (Begonia Family)",
    category: "Flowering",
    environment: "Indoor Bright & Outdoor Shade",
    foliageColor: "Glossy, fleshy, rounded leaves in rich emerald green with slight bronze-red succulent margins",
    flowerInfo: "Continuous year-round sprays of delicate 4-petaled blossoms in cherry-red, baby-pink, and snow-white with glowing bright yellow central stamens",
    wateringCycle: "Consistent moderate moisture; allow top 1/2 inch of soil to dry between waterings; avoid wetting foliage directly to deter powdery mildew",
    sunExposure: "Partial shade to bright filtered light; tolerates morning sun; intense direct midday sun will burn succulent foliage",
    suitableWeather: "Tropical & warm subtropical (18°C - 26°C / 65°F - 78°F); perennial in frost-free regions, treated as annual in cold zones",
    nutritionalRequirements: "Balanced water-soluble fertilizer (NPK 10-10-10 or 15-15-15) at half strength every 2-3 weeks during flowering",
    soilRequirements: "Light, well-aerated, slightly acidic mix (pH 5.5 - 6.5): 40% coco peat, 30% perlite, 30% aged compost",
    windConditions: "Sheltered: Brittle, juicy succulent stems can snap in strong gusty winds",
    cultivationTips: "Deadhead spent blossoms to promote continuous blooming. Easily propagated via stem cuttings in water or moist cocopeat.",
    images: [
      {
        file: "Images/20261011_144921.jpg",
        caption: "Profuse flowering Wax Begonia container with clusters of cherry-red and white blossoms"
      }
    ]
  },
  {
    id: "ophiopogon-japonicus",
    name: "Dwarf Mondo Grass & Ribbon Grass",
    scientificName: "Ophiopogon japonicus 'Nana' & Liriope muscari",
    family: "Asparagaceae (Asparagus Family)",
    category: "Landscape",
    environment: "Outdoor Groundcover & Shaded Borders",
    foliageColor: "Dense tufts of fine, strap-like, weeping dark obsidian-green blades alongside variegated white-striped ribbon grass cultivars",
    flowerInfo: "Small, pale lilac to white bell-shaped blooms tucked low among blades in summer, followed by metallic cobalt-blue berries",
    wateringCycle: "Low to moderate: Drought-tolerant once established; water weekly during hot dry spells or when container feels lightweight",
    sunExposure: "Partial to full shade; can adapt to full morning sun in cooler climates; excellent under tree canopies",
    suitableWeather: "Hardy across wide temperature ranges (-5°C to 38°C); thrives in humid tropical and subtropical garden landscapes",
    nutritionalRequirements: "Low feeder: A light top-dressing of vermicompost or cow manure in early spring is sufficient for the entire season",
    soilRequirements: "Adaptable to various soils, preferring moist, well-draining, organically enriched loam (pH 5.5 - 7.0)",
    windConditions: "High wind tolerance: Tough, fibrous blades withstand strong winds, coastal sea breezes, and pedestrian brushing",
    cultivationTips: "Superb no-mow lawn alternative, rock garden edging, or bonsai accent. Propagate easily by dividing dense root clumps.",
    images: [
      {
        file: "Images/20261011_144941.jpg",
        caption: "Nursery pots of dense Dwarf Mondo Grass tufts paired with variegated ribbon grass"
      }
    ]
  },
  {
    id: "chlorophytum-comosum",
    name: "Variegated Spider Plant / Airplane Plant",
    scientificName: "Chlorophytum comosum 'Variegatum'",
    family: "Asparagaceae (Asparagus Family)",
    category: "Foliage",
    environment: "Indoor & Covered Patio",
    foliageColor: "Gracefully arching, linear ribbons featuring a creamy-white or yellow central stripe flanked by bright emerald-green margins",
    flowerInfo: "Small, starry white 6-petaled flowers borne along long, wiry, pendulous runners (stolons), which subsequently develop miniature plantlets (pups)",
    wateringCycle: "Moderate: Water when top 50% of the soil dries; tuberous fleshy roots store water efficiently, making it forgiving of occasional neglect",
    sunExposure: "Bright indirect sunlight; direct harsh sunlight scorches delicate leaf ribbons; adapts well to moderate interior lighting",
    suitableWeather: "Tolerates 15°C - 30°C (59°F - 86°F); protect from freezing temperatures below 7°C (45°F)",
    nutritionalRequirements: "All-purpose liquid houseplant fertilizer (NPK 10-10-10) diluted to half strength once a month in spring and summer; avoid excess fluoridated fertilizers",
    soilRequirements: "Porous, well-draining all-purpose potting soil (pH 6.0 - 7.0): 50% coco peat, 30% perlite, 20% vermicompost",
    windConditions: "Sheltered to moderate: Flexible arching leaves tolerate moderate airflow; ideal in hanging baskets away from scorching gale winds",
    cultivationTips: "One of the top air-purifying indoor plants documented by NASA. Snip off baby plantlets and root in water to multiply easily. Non-toxic to cats and dogs.",
    images: [
      {
        file: "Images/20261011_144950.jpg",
        caption: "Lush variegated Spider Plant exhibiting cascading strap-like foliage in nursery pot"
      }
    ]
  },
  {
    id: "schefflera-arboricola",
    name: "Dwarf Umbrella Tree",
    scientificName: "Schefflera arboricola ('Variegata' & Green)",
    family: "Araliaceae (Ginseng Family)",
    category: "Foliage",
    environment: "Indoor Bright & Shaded Garden",
    foliageColor: "Palmately compound glossy umbrella-like leaf whorls (7-9 leaflets) in solid deep jade green or dramatically splashed with butter-yellow and creamy ivory",
    flowerInfo: "Small greenish-yellow flowers in branched terminal umbels, followed by tiny spherical orange-to-black berries (primarily outdoors in tropical sun)",
    wateringCycle: "Moderate: Allow top 1/3 of soil to dry between thorough waterings; sensitive to soggy overwatering; resilient against brief dry spells",
    sunExposure: "Medium to bright indirect light; variegated types require brighter indirect light to retain yellow variegation; tolerates some gentle morning sun",
    suitableWeather: "Warm subtropical to tropical (16°C - 30°C / 60°F - 86°F); hardy outdoors in USDA zones 10-12; protect from frost",
    nutritionalRequirements: "Balanced liquid houseplant fertilizer (NPK 20-20-20) at half-strength every 4-6 weeks during spring and summer; top-dress with vermicompost",
    soilRequirements: "Rich, fast-draining potting medium (pH 6.0 - 6.5): 40% coco peat, 30% perlite/pumice, 20% sterilized compost, 10% neem cake",
    windConditions: "Moderate tolerance: Sturdy woody stems and flexible petioles tolerate gentle breezes; shield from freezing or desiccating drafts",
    cultivationTips: "Can be pruned into a dense bush, trained as an indoor standard tree, or styled as a dramatic banyan-root tropical bonsai.",
    images: [
      {
        file: "Images/20261011_145001.jpg",
        caption: "Variegated Dwarf Umbrella Tree with luminous butter-yellow and jade compound leaflets"
      },
      {
        file: "Images/20261011_145032.jpg",
        caption: "Overhead canopy view of variegated Schefflera arboricola showing circular umbrella whorls"
      },
      {
        file: "Images/20261011_145034.jpg",
        caption: "Clustered nursery container specimens on greenhouse table demonstrating dense branching"
      },
      {
        file: "Images/20261011_145044.jpg",
        caption: "Solid jade-green Dwarf Umbrella Tree (*Schefflera arboricola*) with glossy unvariegated foliage"
      }
    ]
  },
  {
    id: "pseuderanthemum-carruthersii",
    name: "Golden Net Bush & Purple False Eranthemum",
    scientificName: "Pseuderanthemum carruthersii (var. reticulatum & atropurpureum)",
    family: "Acanthaceae (Acanthus Family)",
    category: "Foliage",
    environment: "Outdoor Semi-Shade & Bright Patio",
    foliageColor: "var. *reticulatum* features bright lime-emerald leaves mapped with an intricate network of luminous golden-yellow veins; var. *atropurpureum* has glossy dark metallic eggplant-purple and burgundy-bronze foliage",
    flowerInfo: "Small, salverform white tubular flowers speckled with crimson-magenta dots around the throat, borne on upright terminal spikes",
    wateringCycle: "Regular: Keep soil evenly moist during hot summer months; water when top inch dries; do not allow roots to sit in stagnant water",
    sunExposure: "Morning sun to bright dappled shade; requires sufficient light to maintain rich purple tones and bright yellow vein reticulation",
    suitableWeather: "Strictly warm tropical & subtropical (20°C - 35°C / 68°F - 95°F); will drop leaves below 15°C (59°F)",
    nutritionalRequirements: "Organic vermicompost or balanced organic manure (cow/sheep manure) every 2 months; monthly diluted balanced liquid fertilizer in summer",
    soilRequirements: "Humus-rich, loamy, well-draining soil (pH 6.0 - 7.0): 40% garden soil, 30% organic compost/vermicompost, 20% cocopeat, 10% sand",
    windConditions: "Sheltered to moderate: Broad tropical leaves may tatter in gale-force winds; best in courtyard borders or under shelter netting",
    cultivationTips: "Popular in tropical landscaping for high-contrast chromatic hedges. Regular pruning keeps plants bushy and prevents legginess.",
    images: [
      {
        file: "Images/20261011_145152.jpg",
        caption: "Golden Net Bush (*Pseuderanthemum reticulatum*) with golden reticulated veins and white/magenta flowers"
      },
      {
        file: "Images/20261011_145206.jpg",
        caption: "Dramatic pairing of dark Purple False Eranthemum alongside Golden Net Bush in nursery containers"
      }
    ]
  },
  {
    id: "polyscias-fruticosa",
    name: "Golden Ming Aralia / Parsley Aralia",
    scientificName: "Polyscias fruticosa 'Elegans'",
    family: "Araliaceae (Ginseng Family)",
    category: "Foliage",
    environment: "Indoor Bright & Shaded Terrace",
    foliageColor: "Delicate, feathery, finely divided tripinnate lacy foliage in chartreuse and rich green with toothed margins on sculpted woody stems",
    flowerInfo: "Tiny inconspicuous greenish-white umbels (rarely seen indoors; cultivated purely for graceful bonsai-like ornamental foliage)",
    wateringCycle: "Moderate: Allow top 2 inches of soil to dry between waterings; sensitive to soggy roots; prefers high relative humidity (50-70%)",
    sunExposure: "Bright indirect to medium filtered light; morning sun is beneficial; avoid scorching midday sun",
    suitableWeather: "Warm temperatures (18°C - 29°C / 65°F - 85°F); highly sensitive to cold drafts and drops below 15°C (60°F)",
    nutritionalRequirements: "Light feeder: Half-strength balanced liquid houseplant fertilizer once every 4-6 weeks in spring and summer",
    soilRequirements: "Lightweight, airy, well-draining potting mix (pH 6.0 - 6.5): 40% coco peat, 30% perlite, 20% compost, 10% coarse sand",
    windConditions: "Sheltered: Intolerant of strong or dry drafty winds; keep away from heating and cooling air ducts",
    cultivationTips: "Prized for its natural architectural bonsai habit. Ancient symbol of peace and prosperity in Asian landscaping.",
    images: [
      {
        file: "Images/20261011_145227.jpg",
        caption: "Golden Ming Aralia showcasing finely dissected parsley-like lacy foliage and woody stems"
      }
    ]
  },
  {
    id: "acalypha-wilkesiana",
    name: "Copperleaf / Jacob's Coat",
    scientificName: "Acalypha wilkesiana ('Inferno', 'Java White', 'Tricolor')",
    family: "Euphorbiaceae (Spurge Family)",
    category: "Foliage",
    environment: "Outdoor Sun & Semi-Shade",
    foliageColor: "Ruffled, coarsely serrated heart-shaped leaves in fiery copper, scarlet-pink, cream, bronze, and chocolate-burgundy; 'Java White' features bold creamy-white ruffled margins",
    flowerInfo: "Slender, pendulous, catkin-like spikes of tiny reddish flowers concealed beneath the flamboyant foliage",
    wateringCycle: "Regular: Water consistently when the top inch of soil feels dry; mulch beds to retain even root zone moisture in hot weather",
    sunExposure: "Full sun to partial shade; foliage coloration is most intense when exposed to 5-6 hours of direct sun daily",
    suitableWeather: "Warm tropical/subtropical climates (20°C - 35°C / 68°F - 95°F); frost-tender; drops leaves if temperatures dip below 10°C",
    nutritionalRequirements: "Heavy feeder: Apply balanced slow-release fertilizer (NPK 14-14-14) or organic vermicompost every 6-8 weeks during active growing season",
    soilRequirements: "Rich, fertile, organic-rich soil (pH 6.1 - 7.0): 40% loamy garden soil, 30% organic compost/cow manure, 20% coco peat, 10% sand",
    windConditions: "Moderate tolerance: Thrives in tropical breezes; provide shelter from harsh coastal gale-force winds to prevent leaf fraying",
    cultivationTips: "Pinch terminal shoots regularly to promote a dense, bushy hedge. Spectacular background shrub in tropical landscape gardens.",
    images: [
      {
        file: "Images/20261011_145324.jpg",
        caption: "Copperleaf 'Inferno' / 'Tricolor' with ruffled leaves ablaze in pink, copper, and bronze hues"
      },
      {
        file: "Images/20261011_145350.jpg",
        caption: "Copperleaf 'Java White' / Marginata with broad, serrated white-rimmed crinkled foliage"
      },
      {
        file: "Images/20261011_145407.jpg",
        caption: "Nursery display showcasing the striking contrast between white-margined and scarlet Copperleaf cultivars"
      }
    ]
  },
  {
    id: "aglaonema-silver",
    name: "Chinese Evergreen ('Silver Queen' / 'Silver Bay')",
    scientificName: "Aglaonema commutatum",
    family: "Araceae (Arum Family)",
    category: "Foliage",
    environment: "Indoor Low-Light to Bright Indirect",
    foliageColor: "Large lanceolate leaves painted with broad silvery-pewter feathering over deep forest-green margins and petioles",
    flowerInfo: "Inconspicuous pale green to white spathe-and-spadix blooms followed occasionally by decorative red berries (berries are toxic to pets)",
    wateringCycle: "Low to moderate: Allow top 50% of potting mix to dry before watering; very tolerant of occasional drought; avoid overwatering",
    sunExposure: "Low to bright indirect light; one of the few plants that thrives under fluorescent office lights; avoid direct sunlight",
    suitableWeather: "Warm ambient indoor temperatures (18°C - 28°C / 65°F - 82°F); highly sensitive to cold drafts below 15°C (59°F)",
    nutritionalRequirements: "Low feeder: Dilute balanced liquid houseplant fertilizer (NPK 10-10-10) to 1/4 strength every 6-8 weeks in spring/summer",
    soilRequirements: "Light, airy, peat-based potting soil (pH 5.6 - 6.5): 50% coco peat, 30% perlite, 20% vermicompost",
    windConditions: "Sheltered: Keep away from cold air conditioning vents, drafty entryways, and radiator drafts",
    cultivationTips: "Celebrated for exceptional indoor air purification and legendary low-maintenance durability. Wipe leaves periodically.",
    images: [
      {
        file: "Images/20261011_145441.jpg",
        caption: "Healthy specimen of Aglaonema 'Silver Queen' displaying silvery pewter variegated chevron patterns"
      }
    ]
  },
  {
    id: "epipremnum-aureum-pole",
    name: "Golden Pothos / Money Plant (on Moss Pole)",
    scientificName: "Epipremnum aureum",
    family: "Araceae (Arum Family)",
    category: "Aroid / Vine",
    environment: "Indoor & Shaded Veranda",
    foliageColor: "Heart-shaped glossy green leaves generously splashed with golden-yellow, chartreuse, and creamy marbling; leaves grow progressively larger as they climb",
    flowerInfo: "Extremely rare in domestic cultivation due to a genetic block in gibberellin synthesis; grown for magnificent climbing foliage",
    wateringCycle: "Moderate: Water thoroughly when the top 1-2 inches of soil are dry; moisten the coir moss pole regularly to encourage aerial root anchor",
    sunExposure: "Low to bright indirect light; brighter filtered light enhances golden marbling; tolerates low-light office environments",
    suitableWeather: "Thrives in 18°C - 30°C (65°F - 86°F); cold damage occurs below 10°C (50°F)",
    nutritionalRequirements: "Balanced liquid fertilizer (NPK 20-20-20) at half strength once a month from spring through autumn; spray moss pole with dilute kelp extract",
    soilRequirements: "Standard fast-draining potting substrate (pH 6.1 - 6.8): 40% coco peat, 30% garden soil, 20% vermicompost, 10% perlite",
    windConditions: "Sheltered to moderate: Aerial roots cling securely to totems; shield from strong desiccation",
    cultivationTips: "Training vines upwards on a moist coco-coir pole stimulates larger leaf growth (up to 12 inches across). Incredibly easy to propagate via single-node cuttings.",
    images: [
      {
        file: "Images/20261011_145528.jpg",
        caption: "Golden Pothos vigorously climbing a vertical coir moss pole in nursery production pot"
      }
    ]
  },
  {
    id: "philodendron-rojo-congo",
    name: "Red Philodendron / Rojo Congo",
    scientificName: "Philodendron 'Rojo Congo' (P. erubescens hybrid)",
    family: "Araceae (Arum Family)",
    category: "Foliage",
    environment: "Indoor Bright & Covered Patio",
    foliageColor: "Massive, thick, paddle-shaped glossy leaves emerging in deep wine-red/burgundy and maturing to dark forest green with intense reddish-purple petioles",
    flowerInfo: "Infrequent indoors; produces a reddish spathe surrounding a spadix typical of tropical aroids",
    wateringCycle: "Moderate: Water when top 2 inches of soil feel dry; fleshy stems retain moisture; do not leave pot sitting in drainage runoff",
    sunExposure: "Bright indirect light; tolerates medium light; avoid direct scorching sun which bleaches deep burgundy foliage",
    suitableWeather: "Warm tropical & subtropical (18°C - 28°C / 65°F - 82°F); avoid cold drafts below 13°C (55°F)",
    nutritionalRequirements: "Balanced liquid houseplant fertilizer (NPK 20-20-20) at half strength every 4 weeks during spring and summer; apply neem cake annually",
    soilRequirements: "Chunky, porous aroid mix (pH 5.8 - 6.5): 40% coco chips/peat, 30% orchid bark, 20% perlite, 10% vermicompost",
    windConditions: "Sheltered: Robust self-heading stems resist gentle breezes, but broad leaves should be shielded from dry wind funnels",
    cultivationTips: "Self-heading (non-climbing) Philodendron that forms a dramatic, architectural tabletop or floor specimen. Wipe broad leaves regularly.",
    images: [
      {
        file: "Images/20261011_145537.jpg",
        caption: "Upright Red Philodendron 'Rojo Congo' with glossy burgundy-bronze emerging foliage and crimson stems"
      }
    ]
  },
  {
    id: "philodendron-golden-goddess",
    name: "Golden Goddess / Lemon Lime Philodendron",
    scientificName: "Philodendron 'Golden Goddess' / 'Malay Gold'",
    family: "Araceae (Arum Family)",
    category: "Aroid / Vine",
    environment: "Indoor Bright & Shaded Terrace",
    foliageColor: "Electrifying, fluorescent neon-yellow to bright chartreuse cordate foliage that illuminates indoor living spaces",
    flowerInfo: "Rare indoors; grown exclusively for its brilliant radiant neon foliage",
    wateringCycle: "Moderate: Allow top 1-2 inches of potting mix to dry out before re-watering; prefers high humidity (55%+)",
    sunExposure: "Bright indirect light; bright light is essential to retain its vibrant electric yellow coloration; direct midday sun may burn delicate leaves",
    suitableWeather: "Warm temperatures (18°C - 29°C / 65°F - 85°F); keep away from cold winter windows",
    nutritionalRequirements: "Balanced liquid fertilizer (NPK 10-10-10) diluted to half strength monthly in spring and summer",
    soilRequirements: "Breathable, chunky aroid potting mix (pH 6.0 - 6.8): 40% coco peat, 30% perlite, 20% orchid bark, 10% compost",
    windConditions: "Sheltered: Keep in still to gently circulating air; avoid drafty exterior doorways",
    cultivationTips: "Vining climber that looks spectacular trained upward on a coir pole or cascading gracefully from a hanging planter.",
    images: [
      {
        file: "Images/20261011_145549.jpg",
        caption: "Climbing Golden Goddess Philodendron featuring radiant electric-chartreuse leaves on coir moss pole"
      }
    ]
  },
  {
    id: "monstera-deliciosa",
    name: "Swiss Cheese Plant / Monstera",
    scientificName: "Monstera deliciosa",
    family: "Araceae (Arum Family)",
    category: "Aroid / Vine",
    environment: "Indoor Bright & Shaded Veranda",
    foliageColor: "Iconic, massive, leathery heart-shaped leaves maturing with deep lateral splits and perforation holes (fenestrations) in glossy jade-green",
    flowerInfo: "Large white spathe encasing a spadix, which develops into an edible fruit reminiscent of pineapple and banana in tropical outdoor conditions",
    wateringCycle: "Moderate: Water thoroughly once top 2-3 inches of potting medium are dry; allow pot to drain completely; prefers 60%+ humidity",
    sunExposure: "Bright, indirect or filtered sunlight; can tolerate gentle morning direct light; harsh afternoon direct sun will scorch large leaf blades",
    suitableWeather: "Warm tropical (18°C - 30°C / 65°F - 86°F); frost-tender; protect from cold temperatures below 12°C",
    nutritionalRequirements: "High-nitrogen balanced liquid fertilizer (NPK 20-20-20) monthly during spring/summer; top-dress with rich organic vermicompost in spring",
    soilRequirements: "Chunky, ultra-well-draining aroid potting mix (pH 5.5 - 7.0): 40% coco chips/peat, 25% perlite, 20% orchid bark, 15% composted cow manure",
    windConditions: "Sheltered: Broad mature leaves can tatter in harsh winds; best placed in protected indoor corners or sheltered verandas",
    cultivationTips: "Provide a sturdy cedar plank or moss totem for aerial roots to cling to as the plant climbs. Direct aerial roots into soil or water jars.",
    images: [
      {
        file: "Images/20261011_145614.jpg",
        caption: "Magnificent Monstera deliciosa displaying characteristic deep fenestrations and aerial roots in nursery container"
      }
    ]
  },
  {
    id: "philodendron-giganteum",
    name: "Giant Philodendron / Imperial Green",
    scientificName: "Philodendron giganteum / 'Imperial Green'",
    family: "Araceae (Arum Family)",
    category: "Foliage",
    environment: "Indoor Bright & Shaded Landscape",
    foliageColor: "Huge, architectural, broad cordate-sagittate leaves with prominent sunken veins, glossy surface, and rich emerald green tones",
    flowerInfo: "Maroon to green spathes wrapped around an upright creamy spadix in mature specimens",
    wateringCycle: "Moderate: Water when the top 2 inches of soil feel dry to touch; avoid both waterlogging and complete desiccating drought",
    sunExposure: "Medium to bright indirect light; tolerates dappled garden shade; avoid scorching full sun",
    suitableWeather: "Warm tropical conditions (20°C - 32°C / 68°F - 90°F); does not tolerate frost or cold below 14°C",
    nutritionalRequirements: "Balanced liquid houseplant fertilizer once every 4 weeks in active season; top-dress with sterilized ready-pot mix and vermicompost",
    soilRequirements: "Rich, loose, fibrous aroid soil (pH 6.0 - 6.5): 40% coco peat, 30% organic compost/vermicompost, 20% perlite, 10% charcoal chips",
    windConditions: "Sheltered: Huge leaf blades act like sails in wind; needs protection from gusty drafts to avoid snapping petioles",
    cultivationTips: "Impressive architectural statement plant for spacious living rooms, hotel lobbies, and tropical courtyard understories.",
    images: [
      {
        file: "Images/20261011_145635.jpg",
        caption: "Sculptural Giant Philodendron with massive, ribbed, leathery green blades in container"
      }
    ]
  },
  {
    id: "spathiphyllum-wallisii",
    name: "Peace Lily / White Sails",
    scientificName: "Spathiphyllum wallisii ('Sensation' / 'Sweet Chico')",
    family: "Araceae (Arum Family)",
    category: "Flowering",
    environment: "Indoor Low-Light & Shaded Patio",
    foliageColor: "Lush, glossy, lance-shaped leaves in deep rich emerald with delicate ribbed venation",
    flowerInfo: "Elegant, long-lasting pure snow-white hood-like spathes surrounding an erect creamy-white flower spadix; blooms reliably for weeks",
    wateringCycle: "High moisture: Keep soil evenly moist; plant visibly droops when thirsty and rebounds rapidly upon watering; avoid standing in water",
    sunExposure: "Low to medium indirect light; one of the few flowering plants that thrives in dim, low-light spaces; direct sun scorches leaves brown",
    suitableWeather: "Consistent warm temperatures (18°C - 27°C / 65°F - 80°F); highly sensitive to cold drafts below 12°C (54°F)",
    nutritionalRequirements: "Low feeder: Very dilute balanced liquid fertilizer (NPK 10-10-10 at 1/4 strength) every 6-8 weeks in spring/summer to prevent leaf tip burn",
    soilRequirements: "Moisture-retentive yet well-draining mix (pH 5.8 - 6.5): 50% coco peat, 30% perlite, 20% organic vermicompost",
    windConditions: "Sheltered: Intolerant of dry heating drafts or blast from air conditioning units; requires stable indoor humidity",
    cultivationTips: "Premier air purifier. Filtered or rain water is recommended if municipal tap water contains excess fluoride or chlorine to prevent brown leaf tips.",
    images: [
      {
        file: "Images/20261011_145729.jpg",
        caption: "Peace Lily in full bloom with pristine white spathes floating gracefully over dark glossy foliage"
      },
      {
        file: "Images/20261011_145826.jpg",
        caption: "Nursery bench showing healthy grouping of clumping Peace Lilies in commercial containers"
      }
    ]
  },
  {
    id: "ctenanthe-calathea",
    name: "Fishbone Prayer Plant & Calathea",
    scientificName: "Ctenanthe burle-marxii & Goeppertia (Calathea) spp.",
    family: "Marantaceae (Arrowroot Family)",
    category: "Foliage",
    environment: "Indoor Filtered & High Humidity",
    foliageColor: "Artistic alternating dark green herringbone bands on silver-green blade surfaces, with intense magenta-purple undersides; folds leaves upward at night (nyctinasty)",
    flowerInfo: "Small, subtle white or pale violet flowers in compact spikes; cultivated for its dynamic, moving patterned foliage",
    wateringCycle: "Consistent moisture: Water when top 1/2 inch is slightly dry; requires high humidity (60%+); sensitive to mineral-heavy tap water",
    sunExposure: "Medium to bright indirect filtered light; harsh direct sunlight will curl leaves and bleach intricate herringbone patterns",
    suitableWeather: "Warm, humid tropical climate (18°C - 27°C / 65°F - 80°F); keep away from cold drafts below 16°C",
    nutritionalRequirements: "Light balanced fertilizer (NPK 10-10-10) diluted to 1/4 strength once a month during spring and summer; avoid chemical over-salting",
    soilRequirements: "Porous, moisture-retentive, acidic mix (pH 5.5 - 6.5): 50% coco peat, 30% perlite, 20% vermicompost",
    windConditions: "Sheltered: Intolerant of breezy drafts; dry air causes immediate crispy leaf edges",
    cultivationTips: "Leaves fold together like hands in prayer at dusk, then open wide at sunrise. Mist daily or use an ultrasonic room humidifier.",
    images: [
      {
        file: "Images/20261011_145853.jpg",
        caption: "Potted Fishbone Prayer Plant exhibiting striking geometric silver and green banded leaves with purple undersides"
      }
    ]
  },
  {
    id: "zamioculcas-zamiifolia",
    name: "ZZ Plant / Zanzibar Gem",
    scientificName: "Zamioculcas zamiifolia",
    family: "Araceae (Arum Family)",
    category: "Foliage",
    environment: "Indoor Any Light & Covered Patio",
    foliageColor: "High-gloss mirror-finish, waxy, deep forest-green pinnate leaflets arranged along thick succulent upright stems",
    flowerInfo: "Small brownish-bronze spathe and spadix near base of stems; rarely seen and secondary to its architectural succulent foliage",
    wateringCycle: "Very low: Water only when soil has dried out 100% completely down to the bottom; swollen underground potato-like rhizomes store water for months",
    sunExposure: "Tolerates any light: From low dim interior corners to bright indirect light; avoid scorching direct desert afternoon sun",
    suitableWeather: "Tolerant of 16°C - 32°C (60°F - 90°F); survive dry household air; protect from freezing below 8°C",
    nutritionalRequirements: "Extremely low feeder: Balanced liquid houseplant fertilizer diluted to 1/4 strength twice a year (spring and mid-summer)",
    soilRequirements: "Extremely well-draining cactus/succulent mix (pH 6.0 - 7.0): 40% perlite/pumice, 30% coarse sand, 30% coco peat/potting soil",
    windConditions: "High indoor resilience: Thick succulent stems tolerate air drafts and fluctuating room airflow better than most tropicals",
    cultivationTips: "Virtually indestructible. The #1 plant for beginners, travelers, and offices. The only way to kill a ZZ plant is by overwatering.",
    images: [
      {
        file: "Images/20261011_145917.jpg",
        caption: "Potted ZZ Plant showcasing ultra-glossy upright leaflets emerging from succulent rhizomes"
      }
    ]
  },
  {
    id: "aglaonema-hybrids",
    name: "Colorful Aglaonema Hybrids ('Siam Aurora' & 'Lady Valentine')",
    scientificName: "Aglaonema commutatum / hybrid cultivars",
    family: "Araceae (Arum Family)",
    category: "Foliage",
    environment: "Indoor Bright & Shaded Terrace",
    foliageColor: "Stunning psychedelic mosaic of candy pink, ruby-red midribs, lime-green borders, and speckled white ('White Anyamanee') on lanceolate leaves",
    flowerInfo: "Occasional greenish-white miniature spathe-and-spadix flowers, typically pinched off to redirect energy into colorful foliage",
    wateringCycle: "Low to moderate: Water when the top 50% of the potting medium feels dry; sensitive to overwatering; withstands moderate dry periods",
    sunExposure: "Medium to bright indirect light; pink and red varieties require brighter indirect light than green varieties to sustain vivid colors",
    suitableWeather: "Warm temperatures (18°C - 28°C / 65°F - 82°F); protect from cold shock and temperatures under 15°C",
    nutritionalRequirements: "Quarter-strength balanced liquid foliage fertilizer once every 4-6 weeks during spring and summer",
    soilRequirements: "Airy, peat-rich, fast-draining potting mixture (pH 5.8 - 6.5): 50% coco peat, 30% perlite, 20% vermicompost",
    windConditions: "Sheltered: Guard against cold drafty corridors and direct cold air from vents",
    cultivationTips: "One of the most colorful yet easy-care indoor foliage plants available. Wipe leaves gently to remove dust.",
    images: [
      {
        file: "Images/20261011_145925.jpg",
        caption: "Nursery flat of vibrant Aglaonema cultivars showing glowing candy-pink, scarlet, and ivory speckled leaves"
      }
    ]
  },
  {
    id: "nursery-substrates-soils",
    name: "Nursery Substrates, Soils & Organic Manures Guide",
    scientificName: "Horticultural Media & Soil Amendments",
    family: "Soil Science & Plant Nutrition",
    category: "Cultivation Guide",
    environment: "Universal Growing Media",
    foliageColor: "N/A (Essential growing media formulations photographed on nursery reference boards)",
    flowerInfo: "N/A (Nutritional foundation for abundant foliage growth and floral bud initiation)",
    wateringCycle: "Coco Peat retains up to 8x its weight in water; Vermicompost enhances moisture retention while perlite prevents compaction",
    sunExposure: "N/A (Store bags in cool, dry, shaded areas away from direct rain and sunlight)",
    suitableWeather: "Suitable for all indoor pots, terrace container gardening, and landscape bed preparation",
    nutritionalRequirements: "Vermi Compost Organic Manure (rich in humic acid and micro-nutrients); Cow & Sheep Manure (natural NPK); Neem Cake (organic pest repellent and nitrogen stabilizer)",
    soilRequirements: "Ideal universal aroid/tropical potting recipe: 40% Sterilized Coco Peat, 20% Ready Pot Mix / Garden Soil, 20% Vermi Compost, 15% Perlite, 5% Neem Cake",
    windConditions: "Use heavier potting soil in windy balcony locations to anchor top-heavy container plants",
    cultivationTips: "Sterilized cocopeat prevents fungal root pathogens; neem cake effectively wards off soil nematodes, mealybugs, and root aphids.",
    images: [
      {
        file: "Images/20261011_150032.jpg",
        caption: "Official nursery soil and organic amendments price chart: Sterilized Coco Peat, Ready Pot Mix, Vermi Compost, Cow/Sheep Manure, and Neem Cake"
      },
      {
        file: "Images/20261011_143826.jpg",
        caption: "NCS Section signboard indicating Bamboos & Other Hedges in nursery cultivation zone"
      }
    ]
  },
  {
    id: "cosmos-bipinnatus-landscape",
    name: "Garden Cosmos & Landscape Canopy",
    scientificName: "Cosmos bipinnatus & Beaucarnea recurvata",
    family: "Asteraceae / Asparagaceae",
    category: "Landscape",
    environment: "Full Outdoor Sun",
    foliageColor: "Delicate, feathery, lacy thread-like foliage on cosmos; pendulous fountain-like strap leaves on specimen Ponytail Palm",
    flowerInfo: "Daisy-like blossoms with radiating petals in shades of magenta, baby pink, and pure white around a golden disc; continuous summer/autumn bloom",
    wateringCycle: "Low to moderate: Extremely drought-tolerant once established; water deeply once or twice a week during dry spells",
    sunExposure: "Full blazing sun (6+ hours of direct sunlight daily); shade leads to tall, floppy, leggy growth with fewer blooms",
    suitableWeather: "Warm temperate to tropical (18°C - 35°C / 65°F - 95°F); blooms prolifically throughout sunny seasons",
    nutritionalRequirements: "Low to moderate feeder: Avoid excess high-nitrogen fertilizers which stimulate lush foliage at the expense of flowers; light organic compost top-dress",
    soilRequirements: "Well-draining, poor to moderately fertile garden soil (pH 6.0 - 7.5); excessively rich soils reduce flowering",
    windConditions: "Moderate to sheltered: Tall feathery cosmos stems appreciate some shelter from buffeting gale winds to prevent lodging",
    cultivationTips: "Excellent for attracting pollinators (butterflies and bees). Ponytail palm in center stores water in its swollen caudex base.",
    images: [
      {
        file: "Images/20261011_150138.jpg",
        caption: "Sunny outdoor landscape border with feathery pink Cosmos blossoms, central Ponytail Palm, and flowering shade canopy trees"
      }
    ]
  }
];

// Export for ES modules and standard browser globals
if (typeof module !== 'undefined' && module.exports) {
  module.exports = plantCatalogData;
}

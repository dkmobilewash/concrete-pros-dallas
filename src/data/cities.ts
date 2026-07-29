export interface City {
  slug: string
  name: string
  county: string
  metaTitle: string
  metaDescription: string
  headline: string
  subhead: string
  landmarks: string[]
  neighborhoods: string[]
  intro: string
}

export const cities: City[] = [
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Dallas TX',
    metaDescription:
      'Professional concrete contractor serving Dallas, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Dallas, TX',
    subhead:
      'Trusted concrete services for homeowners and businesses throughout the Dallas metro area.',
    landmarks: [
      'White Rock Lake',
      'Deep Ellum',
      'Uptown Dallas',
      'Bishop Arts District',
    ],
    neighborhoods: [
      'Oak Cliff',
      'Lake Highlands',
      'Preston Hollow',
      'North Dallas',
      'East Dallas',
    ],
    intro:
      'From the tree-lined streets of Preston Hollow to the vibrant neighborhoods of Deep Ellum and Bishop Arts District, Dallas homeowners count on quality concrete work that stands up to the Texas climate. Whether you live near White Rock Lake or in the growing communities of North Dallas, our team delivers driveways, patios, and foundations built to last.',
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor Frisco TX',
    metaDescription:
      'Professional concrete contractor serving Frisco, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Frisco, TX',
    subhead:
      'Serving Frisco with expert concrete installation for residential and commercial properties.',
    landmarks: [
      'PGA of America HQ',
      'Toyota Stadium',
      'Frisco Square',
      'Stonebriar Centre',
    ],
    neighborhoods: [
      'Starwood',
      'Phillips Creek Ranch',
      'Edgewood',
      'Richwoods',
      'Westfalls Village',
    ],
    intro:
      'Frisco is one of the fastest-growing cities in North Texas, home to the PGA of America headquarters and the bustling Frisco Square district. From luxury estates in Starwood and Phillips Creek Ranch to newer communities like Richwoods and Westfalls Village, we provide concrete solutions tailored to the high standards Frisco homeowners expect.',
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor McKinney TX',
    metaDescription:
      'Professional concrete contractor serving McKinney, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in McKinney, TX',
    subhead:
      'Quality concrete services for McKinney homes and businesses from a team you can trust.',
    landmarks: [
      'Historic Downtown McKinney',
      'Heard Natural Science Museum',
      'Craig Ranch',
      'Towne Lake',
    ],
    neighborhoods: [
      'Tucker Hill',
      'Adriatica Village',
      'Stonebridge Ranch',
      'Eldorado',
      'West Ridge',
    ],
    intro:
      'McKinney blends small-town charm with rapid growth, from the award-winning Historic Downtown square to master-planned communities like Craig Ranch and Stonebridge Ranch. Our concrete contractors serve neighborhoods including Tucker Hill and Adriatica Village, delivering foundations, driveways, and patios that complement the character of this thriving Collin County city.',
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor Plano TX',
    metaDescription:
      'Professional concrete contractor serving Plano, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Plano, TX',
    subhead:
      'Dependable concrete contractors proudly serving the Plano community.',
    landmarks: [
      'Legacy West',
      'Arbor Hills Nature Preserve',
      'Shops at Willow Bend',
      'Oak Point Park',
    ],
    neighborhoods: [
      'Willow Bend',
      'West Plano',
      'East Plano',
      'Haggard Estates',
      'Spring Creek',
    ],
    intro:
      'Plano is a dynamic city anchored by the Legacy West business district and beloved outdoor spaces like Arbor Hills Nature Preserve and Oak Point Park. Whether your property is in the established Willow Bend area or the evolving neighborhoods of East Plano, we deliver expert concrete work that meets the demands of North Texas weather and soil.',
  },
  {
    slug: 'allen',
    name: 'Allen',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor Allen TX',
    metaDescription:
      'Professional concrete contractor serving Allen, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Allen, TX',
    subhead:
      'Expert concrete installation and repair for Allen residents and businesses.',
    landmarks: [
      'Allen Premium Outlets',
      'Watters Creek',
      'Allen Event Center',
      'Celebration Park',
    ],
    neighborhoods: [
      'Twin Creeks',
      'Stacy Ridge',
      'Bethany Ridge',
      'Ridgeview',
      'Montgomery Ridge',
    ],
    intro:
      'Allen offers a family-friendly lifestyle with popular destinations like Watters Creek, Celebration Park, and the Allen Event Center drawing residents and visitors alike. We serve neighborhoods throughout Allen including Twin Creeks, Stacy Ridge, and Montgomery Ridge, providing durable concrete driveways, walkways, and foundations designed for the North Texas climate.',
  },
  {
    slug: 'prosper',
    name: 'Prosper',
    county: 'Collin & Denton Counties',
    metaTitle: 'Concrete Contractor Prosper TX',
    metaDescription:
      'Professional concrete contractor serving Prosper, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Prosper, TX',
    subhead:
      'Premium concrete services for the growing Prosper community and surrounding areas.',
    landmarks: [
      'Prosper Town Hall',
      'Frontier Park',
      'US 380 Corridor',
      'Windsong Ranch Amenity Center',
    ],
    neighborhoods: [
      'Windsong Ranch',
      'Whitley Place',
      'Gentle Creek',
      'Lakes of La Cima',
      'Star Trail',
    ],
    intro:
      'Prosper is one of North Texas\'s most sought-after communities, with master-planned neighborhoods like Windsong Ranch, Star Trail, and Gentle Creek setting a high bar for curb appeal. As the US 380 corridor continues to drive growth, our team helps Prosper homeowners enhance their properties with expertly poured driveways, patios, and foundations.',
  },
  {
    slug: 'southlake',
    name: 'Southlake',
    county: 'Tarrant County',
    metaTitle: 'Concrete Contractor Southlake TX',
    metaDescription:
      'Professional concrete contractor serving Southlake, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Southlake, TX',
    subhead:
      'High-quality concrete craftsmanship for Southlake homes and commercial properties.',
    landmarks: [
      'Southlake Town Square',
      'Bob Jones Nature Center',
      'Carroll ISD Stadium',
      'Gateway Church',
    ],
    neighborhoods: [
      'Timarron',
      'Clariden Ranch',
      'Stratfort Parc',
      'Carillon',
      'Stone Lakes',
    ],
    intro:
      'Southlake is known for its upscale living, anchored by the iconic Southlake Town Square and surrounded by lush green spaces like the Bob Jones Nature Center. From estate homes in Timarron and Clariden Ranch to the refined neighborhoods of Carillon and Stone Lakes, we deliver concrete work that matches the quality and attention to detail Southlake residents demand.',
  },
  {
    slug: 'flower-mound',
    name: 'Flower Mound',
    county: 'Denton County',
    metaTitle: 'Concrete Contractor Flower Mound TX',
    metaDescription:
      'Professional concrete contractor serving Flower Mound, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Flower Mound, TX',
    subhead:
      'Reliable concrete services for Flower Mound homeowners and local businesses.',
    landmarks: [
      'Grapevine Lake',
      'Flower Mound landmark mound',
      'The Lakeside',
      'Marcus High School area',
    ],
    neighborhoods: [
      'Wellington',
      'Bridlewood',
      'Forest Vista',
      'Waketon Estates',
      'Canyon Falls',
    ],
    intro:
      'Nestled along the shores of Grapevine Lake and named after its iconic landmark mound, Flower Mound combines natural beauty with suburban convenience. We proudly serve neighborhoods like Wellington, Bridlewood, and Canyon Falls, providing concrete driveways, patios, and walkways that hold up to the unique soil conditions of Denton County.',
  },
  {
    slug: 'celina',
    name: 'Celina',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor Celina TX',
    metaDescription:
      'Professional concrete contractor serving Celina, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Celina, TX',
    subhead:
      'Concrete installation built for the rapid growth of Celina and its surrounding communities.',
    landmarks: [
      'Celina Historic Downtown',
      'Light Farms Amenity Center',
      'Celina ISD Stadium',
      'US 380 Corridor',
    ],
    neighborhoods: [
      'Light Farms',
      'Mustang Lakes',
      'Green Meadows',
      'Crossroads',
      'Uptown Celina',
    ],
    intro:
      'Celina is experiencing explosive growth along the US 380 corridor while preserving the charm of its historic downtown square. New master-planned communities like Light Farms, Mustang Lakes, and Uptown Celina are creating strong demand for quality concrete work, and our team is here to deliver foundations, driveways, and outdoor living spaces that meet the needs of this booming community.',
  },
  {
    slug: 'rockwall',
    name: 'Rockwall',
    county: 'Rockwall County',
    metaTitle: 'Concrete Contractor Rockwall TX',
    metaDescription:
      'Professional concrete contractor serving Rockwall, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Rockwall, TX',
    subhead:
      'Serving Rockwall with concrete solutions designed to last in the North Texas climate.',
    landmarks: [
      'Lake Ray Hubbard',
      'Rockwall Harbor',
      'Historic Rockwall Square',
      'The Heath Golf & Yacht Club',
    ],
    neighborhoods: [
      'Heath',
      'Chandler Estates',
      'Lake Shore',
      'Ridge Road Estates',
      'Quail Run',
    ],
    intro:
      'Rockwall sits on the western shore of Lake Ray Hubbard, offering lakeside living and a charming Historic Square in the heart of downtown. From waterfront properties in Heath and Lake Shore to established communities like Chandler Estates and Ridge Road Estates, we provide durable concrete installations that withstand the expansive clay soils common throughout Rockwall County.',
  },
  {
    slug: 'irving',
    name: 'Irving',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Irving TX',
    metaDescription:
      'Professional concrete contractor serving Irving, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Irving, TX',
    subhead:
      'Professional concrete services for Irving homes and businesses in the heart of DFW.',
    landmarks: [
      'Las Colinas Urban Center',
      'Toyota Music Factory',
      'Irving Convention Center',
      'Campión Trail',
    ],
    neighborhoods: [
      'Las Colinas',
      'Valley Ranch',
      'South Irving',
      'MacArthur Blvd area',
      'Heritage District',
    ],
    intro:
      'Las Colinas stands as one of the premier business and entertainment hubs in the DFW metroplex, anchored by the Toyota Music Factory and a thriving urban center that draws residents and visitors alike. Irving offers a diverse residential mix ranging from the spacious estates of Valley Ranch to the historic character of South Irving. Its central location between Dallas and Fort Worth makes Irving a high-demand area for both commercial and residential concrete work, from corporate campus walkways to neighborhood driveways and patios.',
  },
  {
    slug: 'garland',
    name: 'Garland',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Garland TX',
    metaDescription:
      'Professional concrete contractor serving Garland, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Garland, TX',
    subhead:
      'Dependable concrete installation and repair for Garland homeowners and businesses.',
    landmarks: [
      'Firewheel Town Center',
      'Garland Landmark Museum',
      'Spring Creek Greenway',
      'Lake Ray Hubbard shoreline',
    ],
    neighborhoods: [
      'Firewheel',
      'Duck Creek',
      'Buckingham',
      'Eastern Hills',
      'Lakeview Estates',
    ],
    intro:
      'Garland is one of the largest and most established suburbs in the Dallas metro, offering affordable neighborhoods with easy access to the city core. The Firewheel area has seen significant growth with new retail, dining, and housing developments, while the eastern side of the city benefits from proximity to Lake Ray Hubbard and its recreational opportunities. With a mix of older homes needing driveway replacements and foundation repair alongside new construction, Garland keeps our concrete crews busy year-round.',
  },
  {
    slug: 'mesquite',
    name: 'Mesquite',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Mesquite TX',
    metaDescription:
      'Professional concrete contractor serving Mesquite, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Mesquite, TX',
    subhead:
      'Trusted concrete work for Mesquite families and commercial properties.',
    landmarks: [
      'Mesquite Championship Rodeo Arena',
      'Town East Mall',
      'Mesquite Heritage Square',
      'Big Creek Greenbelt',
    ],
    neighborhoods: [
      'Creek Crossing',
      'Mesquite Meadows',
      'Galloway Park',
      'Pecan Estates',
      'Rolling Hills',
    ],
    intro:
      'Known as the "Rodeo Capital of Texas," Mesquite is a family-friendly city east of Dallas that combines affordable living with a proud Western heritage centered around the Championship Rodeo Arena. Many of its neighborhoods were built in the 1970s and 1980s, creating steady demand for concrete driveway replacements, walkway repairs, and patio upgrades. Newer builds in areas like Creek Crossing and Rolling Hills also call for quality flatwork from day one. Whether you need a fresh driveway or a backyard patio for entertaining, our team delivers durable concrete solutions throughout Mesquite.',
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    county: 'Tarrant County',
    metaTitle: 'Concrete Contractor Fort Worth TX',
    metaDescription:
      'Professional concrete contractor serving Fort Worth, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Fort Worth, TX',
    subhead:
      'Full-service concrete contractor serving Fort Worth from the Stockyards to the suburbs.',
    landmarks: [
      'Fort Worth Stockyards',
      'Sundance Square',
      'TCU campus',
      'Fort Worth Cultural District',
      'Trinity River trails',
    ],
    neighborhoods: [
      'Westover Hills',
      'Tanglewood',
      'Ridglea',
      'Arlington Heights',
      'Fairmount',
      'River District',
    ],
    intro:
      'Fort Worth is the largest city in Tarrant County and the fifth-largest in Texas, blending Western heritage with modern urban energy. The historic Stockyards district, the bustling Sundance Square entertainment area, and a world-class Cultural District featuring the Kimbell Art Museum and Modern Art Museum make Fort Worth a destination in its own right. The booming north and northwest Fort Worth suburbs are driving demand for new-construction concrete including foundations, driveways, and commercial flatwork, while established neighborhoods like Tanglewood, Ridglea, and Arlington Heights present a steady flow of replacement and repair projects on aging driveways and walkways. From the River District\'s new mixed-use developments to the tree-lined streets of Fairmount, our team delivers expert concrete craftsmanship across every corner of Fort Worth.',
  },
  {
    slug: 'lewisville',
    name: 'Lewisville',
    county: 'Denton County',
    metaTitle: 'Concrete Contractor Lewisville TX',
    metaDescription:
      'Professional concrete contractor serving Lewisville, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Lewisville, TX',
    subhead:
      'Quality concrete services for Lewisville residents and businesses along the I-35E corridor.',
    landmarks: [
      'Lewisville Lake',
      'Castle Hills development',
      'Old Town Lewisville',
      'Vista Ridge Mall area',
    ],
    neighborhoods: [
      'Castle Hills',
      'Highland Village border',
      'Valley Vista',
      'Creekside',
      'Timber Creek',
    ],
    intro:
      'Lewisville sits along the I-35E corridor between Dallas and Denton, offering convenient access to the heart of the DFW metroplex while maintaining a strong community identity. Lewisville Lake provides abundant recreation and waterfront living, and the Castle Hills master-planned community has become one of the most desirable addresses in Denton County. The city features a healthy mix of established neighborhoods with mature trees and newer developments, all benefiting from quality concrete driveways, patios, and walkways built to handle North Texas soil and weather conditions.',
  },
  {
    slug: 'richardson',
    name: 'Richardson',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Richardson TX',
    metaDescription:
      'Professional concrete contractor serving Richardson, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Richardson, TX',
    subhead:
      'Expert concrete contractors serving Richardson\'s established neighborhoods and growing business corridors.',
    landmarks: [
      'UT Dallas campus',
      'CityLine development',
      'Eisemann Center',
      'Prairie Creek Park',
    ],
    neighborhoods: [
      'Canyon Creek',
      'Breckinridge Park',
      'Heights Park',
      'Reservation',
      'Mimosa Lane area',
    ],
    intro:
      'Richardson earned its reputation as the "Telecom Corridor" with major corporate headquarters and technology firms calling the city home, and the UT Dallas campus continues to fuel innovation and growth. The CityLine mixed-use development has brought new energy to the area with modern offices, retail, and residences. Many of Richardson\'s neighborhoods were built in the 1960s through 1980s, meaning aging driveways, walkways, and patios are prime candidates for concrete replacement and repair. Combined with newer infill development and commercial projects, Richardson offers year-round demand for quality concrete work.',
  },
  {
    slug: 'carrollton',
    name: 'Carrollton',
    county: 'Denton County',
    metaTitle: 'Concrete Contractor Carrollton TX',
    metaDescription:
      'Professional concrete contractor serving Carrollton, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Carrollton, TX',
    subhead:
      'Reliable concrete services for Carrollton homes and businesses across three counties.',
    landmarks: [
      'Historic Downtown Carrollton',
      'Carrollton Town Center',
      'Indian Creek Golf Club',
      'Sandy Lake Park',
    ],
    neighborhoods: [
      'Castle Hills (Carrollton side)',
      'Hebron area',
      'Country Place',
      'Keller Springs area',
      'Old Denton Rd corridor',
    ],
    intro:
      'Carrollton occupies a unique position straddling Dallas, Denton, and Collin counties, making it one of the most centrally connected suburbs in the metroplex. Convenient access to the DART Green Line rail gives residents an easy commute while preserving a suburban feel with charming spots like Historic Downtown Carrollton. The city features a blend of 1980s-era neighborhoods where driveways and walkways are ready for a concrete refresh alongside newer developments in the Castle Hills and Hebron areas. Widely recognized as one of the best-value suburbs in DFW, Carrollton homeowners invest in quality concrete work that boosts curb appeal and property value.',
  },
  {
    slug: 'denton',
    name: 'Denton',
    county: 'Denton County',
    metaTitle: 'Concrete Contractor Denton TX',
    metaDescription:
      'Professional concrete contractor serving Denton, TX — call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Denton, TX',
    subhead:
      'Concrete installation and repair for Denton\'s growing residential and commercial landscape.',
    landmarks: [
      'Denton Square',
      'University of North Texas',
      'TWU campus',
      'Ray Roberts Lake State Park',
      'Apogee Stadium',
    ],
    neighborhoods: [
      'Robson Ranch',
      'Rayzor Ranch area',
      'Vintage',
      'Idiot\'s Hill',
      'Pecan Creek',
    ],
    intro:
      'Denton is a vibrant college town anchored by the University of North Texas and Texas Woman\'s University, giving the city a youthful energy centered around the lively Denton Square entertainment and dining district. Rapid growth along the I-35 corridor has brought new master-planned communities like Robson Ranch and developments near Rayzor Ranch, expanding the city\'s footprint to the north and west. The mix of student rental properties, established homes in neighborhoods like Idiot\'s Hill and Pecan Creek, and brand-new construction all create strong and varied demand for quality concrete work throughout the year.',
  },
  {
    slug: 'coppell',
    name: 'Coppell',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Coppell TX',
    metaDescription:
      'Professional concrete contractor serving Coppell, TX — driveways, patios, and foundations for the city\'s executive homes. Call 214-466-2536 for a free estimate.',
    headline: 'Concrete Contractor in Coppell, TX',
    subhead:
      'Premium concrete work for Coppell\'s executive homes, established neighborhoods, and top-rated community.',
    landmarks: [
      'Andrew Brown Park',
      'Old Town Coppell',
      'Coppell Farmers Market',
      'Cozby Library',
      'Andy Brown Park East',
    ],
    neighborhoods: [
      'Riverchase',
      'The Estates',
      'Old Coppell',
      'Magnolia Park',
      'Northlake Woodlands',
    ],
    intro:
      'Coppell is one of the most sought-after addresses in the DFW Metroplex, known for its top-rated Coppell ISD schools, mature tree-lined streets, and executive homes tucked between Old Town Coppell and the greenbelts around Andrew Brown Park. Its convenient position beside DFW Airport and the I-635/SH-121 corridors makes it a magnet for professionals who expect a refined finish on every home improvement. From the established estates of Riverchase and The Estates to the character homes of Old Coppell, homeowners here hold concrete work to a high standard — clean lines, consistent color, and crisp decorative detail. Built on the same expansive Blackland Prairie clay as the rest of the region, Coppell properties get the proper reinforcement and drainage engineering that keeps high-end driveways, patios, and pool decks flat and crack-free for decades.',
  },
]

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
]

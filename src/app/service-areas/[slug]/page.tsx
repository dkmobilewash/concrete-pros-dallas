import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { homepageGallery } from '@/data/images'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ArrowRight } from 'lucide-react'

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const city = cities.find((c) => c.slug === params.slug)
  if (!city) return {}
  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    canonical: `${site.baseUrl}/service-areas/${city.slug}`,
  })
}

const cityExtendedContent: Record<
  string,
  {
    whyUs: string
    soilClimate: string
    popularProjects: string
    faqs: { question: string; answer: string }[]
  }
> = {
  dallas: {
    whyUs:
      'As a Dallas-based concrete contractor, we understand the unique challenges of working in this city — from the expansive clay soils in Oak Cliff and East Dallas to the high-end finish expectations in Preston Hollow and Uptown. Our crews are familiar with local permitting requirements, HOA guidelines, and the specific soil conditions across Dallas neighborhoods. We take pride in delivering concrete work that not only meets structural standards but enhances your property value in one of Texas\'s most competitive real estate markets.',
    soilClimate:
      'Dallas sits on some of the most expansive clay soil in the United States. This soil expands when wet and contracts when dry, creating significant movement that can crack and heave concrete surfaces. Combined with summer temperatures that regularly exceed 100°F and occasional winter freezes, concrete in Dallas must be engineered to handle extreme conditions. We use reinforced designs, proper control joints, and hot-weather pouring techniques to ensure our work stands up to the Dallas climate year after year.',
    popularProjects:
      'The most common concrete projects we handle in Dallas include driveway replacements in older neighborhoods like Lake Highlands and Oak Cliff, new patio installations in North Dallas backyards, and foundation work for the steady stream of new construction and remodels across the city. We also see strong demand for stamped concrete pool decks and commercial flatwork for the many businesses expanding throughout the Dallas metro.',
    faqs: [
      { question: 'What areas of Dallas do you serve?', answer: 'We serve all of Dallas including Oak Cliff, Lake Highlands, Preston Hollow, North Dallas, East Dallas, Uptown, Deep Ellum, Bishop Arts, and every neighborhood in between. If you have a Dallas address, we cover it.' },
      { question: 'How does Dallas clay soil affect concrete work?', answer: 'Dallas expansive clay soil creates unique challenges. We engineer our concrete with proper reinforcement, moisture barriers, and control joints specifically designed for soil movement. This approach prevents the cracking and heaving common with improperly installed concrete in the area.' },
      { question: 'Do you offer same-week concrete estimates in Dallas?', answer: 'In most cases, yes. We can typically schedule a free on-site estimate within a few business days for Dallas properties. Call 214-466-2536 to book yours.' },
      { question: 'What is the best time of year to pour concrete in Dallas?', answer: 'Spring (March–May) and fall (September–November) offer the most ideal conditions for pouring concrete in Dallas. We pour year-round but take special precautions during the hottest summer months and rare winter freezes.' },
      { question: 'Do you handle both residential and commercial concrete in Dallas?', answer: 'Yes. We work with Dallas homeowners on driveways, patios, and foundations, and with businesses on parking lots, sidewalks, loading docks, and commercial slabs throughout the city.' },
    ],
  },
  frisco: {
    whyUs:
      'Frisco is one of the fastest-growing cities in the country, and its high-end developments demand concrete work that matches. Whether you are in a luxury estate community like Starwood or a newer build in Richwoods, our team delivers the quality and attention to detail Frisco homeowners expect. We coordinate with builders, landscape architects, and HOAs throughout Frisco to ensure every project meets community standards and exceeds expectations.',
    soilClimate:
      'Frisco shares the same expansive clay soil profile as much of Collin County. New construction sites often face compacted fill dirt that requires careful preparation before concrete can be poured. We perform thorough soil evaluation and base compaction to prevent future settling and cracking — critical in a market where homes and properties carry premium values.',
    popularProjects:
      'New construction driveways and patios are the most common projects we complete in Frisco, along with stamped concrete pool surrounds and outdoor kitchen foundations. As some of Frisco\'s earliest neighborhoods age, we are also seeing increased demand for driveway replacements and walkway repairs in communities like Edgewood and along the Stonebriar Centre corridor.',
    faqs: [
      { question: 'Do you work with Frisco HOAs on concrete projects?', answer: 'Yes. Many Frisco neighborhoods have HOA guidelines for driveway finishes, walkway materials, and colors. We are familiar with common Frisco HOA requirements and coordinate approval before starting work.' },
      { question: 'How much does a concrete driveway cost in Frisco?', answer: 'Concrete driveways in Frisco typically run $7 to $16 per square foot depending on size, thickness, and finish. Larger driveways common in Frisco estates may fall at the lower per-square-foot end due to scale. Contact us for a free estimate.' },
      { question: 'Can you match existing concrete finishes in Frisco developments?', answer: 'Yes. We regularly match broom finishes, exposed aggregate, and stamped patterns to blend new work with existing concrete in Frisco\'s master-planned communities.' },
      { question: 'Do you serve all of Frisco?', answer: 'We serve every part of Frisco, from Starwood and Phillips Creek Ranch in the west to Richwoods and Westfalls Village in the north. Call 214-466-2536 to schedule your free estimate.' },
    ],
  },
  mckinney: {
    whyUs:
      'McKinney has earned repeated recognition as one of the best places to live in America, and its concrete work should reflect that quality. From historic homes near Downtown McKinney that need sensitive restoration to modern builds in Craig Ranch and Stonebridge Ranch, we bring the right approach for every project. Our crews respect McKinney\'s blend of heritage and growth, delivering concrete that is both structurally sound and aesthetically appropriate for the neighborhood.',
    soilClimate:
      'McKinney\'s soil conditions vary across the city. Areas closer to the eastern blackland prairie have heavier clay content, while newer developments in the west tend to sit on limestone-influenced soil. Either way, proper base preparation and reinforcement are essential. We tailor our approach to the specific soil conditions at each project site in McKinney.',
    popularProjects:
      'Patio installations and driveway work are our most-requested services in McKinney. Tucker Hill and Adriatica Village homeowners often want decorative stamped concrete that complements the neighborhood\'s architectural character. In the larger Stonebridge Ranch and Craig Ranch communities, new construction driveways and walkways keep our crews busy year-round.',
    faqs: [
      { question: 'Do you work near Historic Downtown McKinney?', answer: 'Yes. We serve all of McKinney including the historic downtown area, Tucker Hill, Adriatica Village, Stonebridge Ranch, Eldorado, West Ridge, and surrounding neighborhoods.' },
      { question: 'What concrete finishes are popular in McKinney?', answer: 'Stamped concrete and exposed aggregate are popular choices for McKinney patios and pool decks. Standard broom finish remains the most common choice for driveways and walkways.' },
      { question: 'How long does a patio installation take in McKinney?', answer: 'A typical residential patio in McKinney takes 3-5 days from excavation to finished pour. Curing adds 7 days before light foot traffic and 28 days for full strength.' },
      { question: 'Can you pour concrete in McKinney during summer?', answer: 'Yes. We pour concrete year-round in McKinney. During the hottest months, we schedule pours for early morning and use curing compounds to manage temperature and moisture during the setting process.' },
    ],
  },
  plano: {
    whyUs:
      'Plano is home to major corporate headquarters, thriving retail districts, and some of the best-established residential neighborhoods in North Texas. From the upscale homes in Willow Bend to the evolving communities of East Plano, our concrete contractors deliver work tailored to Plano\'s diverse property landscape. We understand the expectations of Plano homeowners — clean finishes, reliable timelines, and work that adds long-term value.',
    soilClimate:
      'Like much of Collin County, Plano sits on expansive clay soil that is notorious for causing concrete movement and cracking. The mature trees in established neighborhoods like Haggard Estates and Spring Creek can compound the issue with root intrusion. We address these factors with proper reinforcement, root barriers where needed, and control joint placement that accounts for Plano\'s specific soil behavior.',
    popularProjects:
      'Driveway replacements are our most common project in Plano, especially in neighborhoods built in the 1980s and 1990s where original driveways are reaching end of life. Patio additions and outdoor living upgrades are popular in West Plano, while the Legacy West corridor keeps us busy with commercial sidewalk, parking, and ADA compliance work.',
    faqs: [
      { question: 'What concrete services do you offer in Plano?', answer: 'We offer driveways, patios, walkways, foundations, retaining walls, stamped concrete, concrete repair, resurfacing, and commercial concrete work throughout Plano.' },
      { question: 'How much does concrete repair cost in Plano?', answer: 'Concrete repair in Plano typically costs $3 to $10 per square foot depending on the type and extent of damage. Small crack repairs are often under $500, while larger leveling or resurfacing projects vary. Call for a free estimate.' },
      { question: 'Do you replace old driveways in Plano neighborhoods?', answer: 'Yes. Driveway replacement is one of our most popular services in Plano, especially in established neighborhoods like Willow Bend, Haggard Estates, and Spring Creek where original driveways are 25-40 years old.' },
      { question: 'Can you install ADA-compliant concrete in Plano?', answer: 'Yes. We build ADA-compliant walkways, ramps, and parking areas for Plano commercial properties and public-facing businesses. Compliance includes proper slopes, surface textures, and detectable warning surfaces.' },
    ],
  },
  allen: {
    whyUs:
      'Allen combines a family-focused community with modern amenities, and our concrete work reflects that balance. We serve homeowners throughout Allen\'s established and newer neighborhoods, from Twin Creeks to Montgomery Ridge. Whether it is a driveway for a new build or a patio upgrade for a home near Celebration Park, our crews deliver professional results that Allen families can enjoy for years.',
    soilClimate:
      'Allen shares Collin County\'s expansive clay soil, and many of the city\'s newer developments sit on recently graded land that requires careful compaction before concrete work begins. We ensure every project in Allen starts with proper subgrade preparation to prevent settling and movement over time.',
    popularProjects:
      'New construction driveways and outdoor patios are our top projects in Allen. The city\'s active outdoor lifestyle around Celebration Park and the Twin Creeks trail system also drives demand for walkways, stepping-stone paths, and outdoor entertaining areas.',
    faqs: [
      { question: 'Do you serve all Allen neighborhoods?', answer: 'Yes, we serve Twin Creeks, Stacy Ridge, Bethany Ridge, Ridgeview, Montgomery Ridge, and every other Allen neighborhood. Call 214-466-2536 to schedule a free estimate.' },
      { question: 'How quickly can you start a concrete project in Allen?', answer: 'Depending on season and schedule, we can typically begin most Allen residential projects within 1-2 weeks of signing a contract. Emergency repairs may be scheduled sooner.' },
      { question: 'Do you offer stamped concrete in Allen?', answer: 'Yes. Stamped concrete is a popular choice for Allen patios and pool decks. We offer dozens of pattern and color combinations to complement your home.' },
      { question: 'What does a patio cost in Allen, TX?', answer: 'Concrete patio costs in Allen typically range from $8 to $18 per square foot depending on size and finish. Stamped and colored options fall at the higher end. Contact us for a detailed project quote.' },
    ],
  },
  prosper: {
    whyUs:
      'Prosper is one of North Texas\'s most desirable communities, and its premium master-planned developments demand premium concrete work. From estate driveways in Windsong Ranch to custom patios in Gentle Creek, our team understands what Prosper homeowners expect — clean lines, quality finishes, and reliable execution. We coordinate with Prosper\'s active builders and HOAs to ensure every project meets community standards.',
    soilClimate:
      'Prosper straddles Collin and Denton counties, sitting on clay soils typical of the North Texas blackland prairie. Many Prosper properties are built on recently developed farmland, where proper soil compaction and base preparation are critical to prevent future concrete settling.',
    popularProjects:
      'Custom stamped concrete patios, new construction driveways, and outdoor living foundations are our most popular projects in Prosper. As the US 380 corridor continues to drive commercial development, we are also seeing increased demand for commercial concrete work in Prosper\'s growing business districts.',
    faqs: [
      { question: 'Do you work with Prosper builders and developers?', answer: 'Yes. We work with many of the builders active in Prosper\'s master-planned communities including Windsong Ranch, Star Trail, and Whitley Place on driveways, walkways, and patio installations.' },
      { question: 'What finishes are popular in Prosper?', answer: 'Stamped concrete in slate and stone patterns is very popular in Prosper for patios and pool decks. Exposed aggregate driveways are also a common choice in the higher-end communities.' },
      { question: 'How far is Prosper from your service area?', answer: 'Prosper is well within our regular service area. Our crews work in Prosper regularly and can schedule a free on-site estimate within days of your inquiry.' },
      { question: 'Do Prosper HOAs have concrete requirements?', answer: 'Many do. Communities like Windsong Ranch and Gentle Creek have specific guidelines for driveway finishes and colors. We are familiar with these requirements and ensure compliance on every project.' },
    ],
  },
  southlake: {
    whyUs:
      'Southlake sets a high bar for quality in everything — including concrete work. The upscale homes in Timarron, Clariden Ranch, and Carillon demand finishes that match premium architecture and landscaping. Our crews bring the skill and attention to detail that Southlake homeowners expect, whether it is a hand-troweled patio or a precision-stamped driveway extension.',
    soilClimate:
      'Southlake sits on rocky, limestone-influenced soil that differs from the heavier clay found in eastern DFW suburbs. While this provides better drainage in many cases, it also requires specialized excavation equipment. Our team is experienced with Southlake\'s unique soil profile and adapts our approach accordingly.',
    popularProjects:
      'Decorative stamped concrete patios, driveway expansions, and outdoor kitchen foundations are our most popular projects in Southlake. The city\'s emphasis on outdoor living and curb appeal makes high-quality concrete work a common investment for homeowners looking to enhance their property value.',
    faqs: [
      { question: 'Do you match the premium quality expected in Southlake?', answer: 'Absolutely. We regularly complete high-end stamped concrete, decorative driveways, and custom patio work in Southlake\'s most prestigious neighborhoods. Our portfolio includes projects in Timarron, Clariden Ranch, and Carillon.' },
      { question: 'What is the typical timeline for a Southlake patio project?', answer: 'A typical Southlake patio project takes 4-7 days from excavation to final pour, depending on size and complexity. Stamped concrete requires additional time for pattern work and sealing.' },
      { question: 'Can you work with my Southlake landscape architect?', answer: 'Yes. We frequently coordinate with landscape architects and designers in Southlake to ensure our concrete work integrates seamlessly with the overall outdoor design.' },
      { question: 'Do you pour concrete near Southlake Town Square?', answer: 'Yes, we serve all of Southlake including neighborhoods near Southlake Town Square, Bob Jones Nature Center, and the Carroll ISD area. Call 214-466-2536 for a free estimate.' },
    ],
  },
  'flower-mound': {
    whyUs:
      'Flower Mound\'s mix of lakeside properties, established neighborhoods, and newer communities like Canyon Falls gives our team a wide range of concrete projects. We understand the community\'s emphasis on quality and natural beauty — our concrete work complements the character of Flower Mound homes rather than detracting from it. We are familiar with local permitting, HOA requirements, and the soil conditions specific to Denton County.',
    soilClimate:
      'Flower Mound sits on Denton County clay soils with some sandy loam areas near Grapevine Lake. Properties closer to the lake often have better-draining soil, while inland areas deal with the same expansive clay challenges found across North Texas. We evaluate each site individually to determine the right base preparation and reinforcement strategy.',
    popularProjects:
      'Patio installations and driveway replacements lead our project list in Flower Mound. The neighborhoods along Grapevine Lake see strong demand for outdoor living concrete — pool decks, fire pit pads, and outdoor kitchen foundations. In Wellington and Bridlewood, aging driveways and walkways drive a steady stream of replacement work.',
    faqs: [
      { question: 'Do you serve Canyon Falls in Flower Mound?', answer: 'Yes. We serve Canyon Falls, Wellington, Bridlewood, Forest Vista, Waketon Estates, and all other Flower Mound neighborhoods. Call 214-466-2536 to schedule a free estimate.' },
      { question: 'What is the soil like in Flower Mound for concrete?', answer: 'Flower Mound soils range from expansive clay to sandy loam depending on proximity to Grapevine Lake. We evaluate each site and adapt our base preparation to ensure long-lasting results.' },
      { question: 'Can you install a concrete patio near Grapevine Lake?', answer: 'Yes. We install patios, pool decks, and outdoor living surfaces throughout Flower Mound including properties near Grapevine Lake. Proper drainage and slope management are priorities on lakeside projects.' },
      { question: 'How do you handle HOA requirements in Flower Mound?', answer: 'We are familiar with common HOA guidelines in Flower Mound communities and coordinate approval for finishes, colors, and project scope before starting work.' },
    ],
  },
  celina: {
    whyUs:
      'Celina is booming, and our concrete crews are keeping pace with the city\'s rapid growth. From new-build driveways in Light Farms and Mustang Lakes to custom patios in the emerging Uptown Celina district, we deliver the quality concrete work this growing community deserves. We work closely with Celina\'s active builders and developers to keep new construction projects on schedule.',
    soilClimate:
      'Celina sits on North Texas blackland prairie soil — heavy clay that expands and contracts significantly with moisture changes. The extensive new development in the area means many properties are built on recently cleared agricultural land where proper compaction is especially important. We take extra care with soil preparation on Celina projects.',
    popularProjects:
      'New construction driveways and patios are our primary work in Celina, driven by the city\'s explosive residential growth. As neighborhoods like Light Farms and Mustang Lakes mature, we also see increasing demand for patio additions, walkway installations, and outdoor living projects from homeowners looking to personalize their new builds.',
    faqs: [
      { question: 'Do you work with builders in Celina?', answer: 'Yes. We partner with many of the production and custom builders active in Celina\'s master-planned communities including Light Farms, Mustang Lakes, and Uptown Celina.' },
      { question: 'What concrete services are most popular in Celina?', answer: 'New construction driveways and custom patios lead our project list in Celina. Stamped concrete and outdoor living foundations are also growing in popularity as the community matures.' },
      { question: 'How far is Celina from your base of operations?', answer: 'Celina is within our standard service area. Our crews work in Celina regularly, and we can schedule a free estimate within a few business days of your call.' },
      { question: 'Is soil prep important for concrete in Celina?', answer: 'Extremely important. Much of Celina sits on former farmland with heavy clay soil. We perform thorough compaction and base preparation to prevent settling and cracking in new concrete installations.' },
    ],
  },
  rockwall: {
    whyUs:
      'Rockwall\'s lakeside setting and charming downtown square create a unique environment for concrete work. Properties near Lake Ray Hubbard face specific challenges related to soil moisture and slope management, while the established neighborhoods in Heath and Lake Shore often need concrete that blends with premium landscaping. Our team brings the experience and flexibility Rockwall homeowners need.',
    soilClimate:
      'Rockwall County\'s soil profile is heavily influenced by its proximity to Lake Ray Hubbard. Properties near the lake tend to have clay soil with higher moisture content, which increases expansion and contraction. Hillside properties in Heath and Ridge Road Estates require careful attention to slope, drainage, and retaining wall design. We tailor our approach to each site\'s specific conditions.',
    popularProjects:
      'Driveway replacements and retaining walls are among our most common projects in Rockwall. The hilly terrain in Heath drives strong demand for retaining walls and terraced landscaping. Patio installations and pool deck work remain popular throughout the lake communities, and commercial concrete serves the growing business district around Historic Rockwall Square.',
    faqs: [
      { question: 'Do you serve Heath and the Rockwall lake communities?', answer: 'Yes. We serve all of Rockwall County including Heath, Chandler Estates, Lake Shore, Ridge Road Estates, Quail Run, and surrounding areas. Call 214-466-2536 for a free estimate.' },
      { question: 'Can you build retaining walls on Rockwall hillside properties?', answer: 'Yes. Retaining wall construction is one of our specialties in the Rockwall area, where the terrain around Lake Ray Hubbard often requires engineered walls for erosion control and usable yard space.' },
      { question: 'What causes concrete problems near Lake Ray Hubbard?', answer: 'High soil moisture near the lake increases clay expansion and contraction cycles, which can cause more movement and cracking than in drier areas. We use reinforced designs and proper drainage to mitigate these conditions.' },
      { question: 'How long does a driveway replacement take in Rockwall?', answer: 'A typical residential driveway replacement in Rockwall takes 3-5 days from demolition to finished pour. Add 7 days of curing before vehicle traffic.' },
    ],
  },
  irving: {
    whyUs:
      'Irving occupies a prime central position in the DFW metroplex, anchored by the Las Colinas Urban Center — one of the largest mixed-use developments in the Southwest. Our concrete contractors serve Irving\'s diverse property mix, from the upscale townhomes and offices in Las Colinas to the established single-family neighborhoods of Valley Ranch and South Irving. We handle commercial parking lots, residential driveways, and everything in between with the quality and reliability Irving property owners expect.',
    soilClimate:
      'Irving sits on a mix of clay and alluvial soils, particularly in areas near the Trinity River floodplain. The clay-heavy zones experience the same expansion and contraction issues common across the DFW area, while areas near the river may have softer subgrade requiring additional stabilization. We assess each Irving project site individually to determine the right base preparation strategy.',
    popularProjects:
      'Commercial concrete for the Las Colinas business corridor — including parking lots, sidewalks, and ADA-compliant ramps — is a significant part of our Irving work. On the residential side, driveway replacements in Valley Ranch and patio installations throughout the MacArthur Blvd area keep our crews busy. Irving\'s older neighborhoods in South Irving also generate steady demand for walkway repairs and concrete leveling.',
    faqs: [
      { question: 'Do you serve Las Colinas in Irving?', answer: 'Yes. We provide both commercial and residential concrete services throughout Las Colinas, Valley Ranch, South Irving, the Heritage District, and all Irving neighborhoods.' },
      { question: 'Can you handle commercial concrete projects in Irving?', answer: 'Yes. We regularly complete commercial parking lots, loading areas, sidewalks, and ADA-compliant flatwork for Irving businesses, particularly in the Las Colinas and DFW Airport corridor areas.' },
      { question: 'How much does a driveway cost in Irving, TX?', answer: 'Concrete driveways in Irving typically cost $6 to $15 per square foot. Final pricing depends on size, demolition needs, and finish selection. Call 214-466-2536 for a free on-site estimate.' },
      { question: 'Do you repair concrete in older Irving neighborhoods?', answer: 'Yes. We offer concrete repair, leveling, and full replacement for driveways, walkways, and patios in Irving\'s established neighborhoods, including South Irving and the Heritage District.' },
    ],
  },
  garland: {
    whyUs:
      'Garland is one of the largest cities in Dallas County, and its mix of established neighborhoods and newer developments creates diverse concrete needs. Whether you are replacing a cracked driveway in Duck Creek, building a new patio in the Firewheel district, or maintaining commercial flatwork near Town East Mall, our team delivers dependable concrete work at fair prices. We know Garland\'s neighborhoods and treat every project like it is in our own community.',
    soilClimate:
      'Garland\'s eastern Dallas County location puts it squarely in the expansive clay zone. Properties near Lake Ray Hubbard and the Spring Creek Greenway may have particularly moisture-sensitive soil. Many of Garland\'s homes were built in the 1970s through 1990s, meaning original concrete driveways and walkways are reaching the end of their functional lifespan and may need full replacement.',
    popularProjects:
      'Driveway replacements lead our project list in Garland, driven by the aging housing stock in neighborhoods like Duck Creek, Buckingham, and Eastern Hills. New patio construction is popular in the Firewheel area\'s newer communities. We also complete commercial sidewalk and parking lot work for businesses along Garland\'s major commercial corridors.',
    faqs: [
      { question: 'Do you replace old driveways in Garland?', answer: 'Yes. Driveway replacement is one of our most common services in Garland. Many homes built in the 1970s-1990s have driveways that are cracked, settled, or past their useful life. We handle full demolition, grading, and new installation.' },
      { question: 'How much does concrete work cost in Garland?', answer: 'Concrete costs in Garland typically range from $6 to $15 per square foot for driveways and $8 to $18 per square foot for patios, depending on size and finish. Contact us at 214-466-2536 for a free estimate specific to your project.' },
      { question: 'Do you serve the Firewheel area of Garland?', answer: 'Yes. We serve Firewheel, Duck Creek, Buckingham, Eastern Hills, Lakeview Estates, and all Garland neighborhoods.' },
      { question: 'Can you fix settled or sunken concrete in Garland?', answer: 'Yes. We offer concrete leveling and repair for settled slabs, as well as full replacement when repair is not cost-effective. We assess each situation and recommend the most practical solution.' },
    ],
  },
  mesquite: {
    whyUs:
      'Known as the "Rodeo Capital of Texas," Mesquite is a growing community east of Dallas with strong demand for quality concrete work. Our team serves Mesquite homeowners who want reliable driveways, safe walkways, and inviting patios — all built to last in the North Texas climate. We bring the same professional standards to Mesquite that we deliver across the DFW metroplex, with competitive pricing that respects Mesquite families\' budgets.',
    soilClimate:
      'Mesquite\'s soil is predominantly blackland prairie clay — highly expansive and reactive to moisture changes. The city\'s mix of 1970s-era homes and newer construction means concrete projects range from full driveway replacements on settled soil to new patio pours on recently graded lots. In both cases, proper subgrade preparation is critical to prevent the cracking and heaving that improperly installed concrete experiences in this soil.',
    popularProjects:
      'Driveway replacements are our top project in Mesquite, with many original 1970s and 1980s driveways showing significant cracking, settling, or spalling. Patio additions and backyard concrete work are also popular as Mesquite homeowners invest in outdoor living space. Commercial concrete for retail centers and the business district around Town East Mall rounds out our Mesquite project portfolio.',
    faqs: [
      { question: 'Do you replace old driveways in Mesquite?', answer: 'Yes. Many Mesquite homes have driveways 30-50 years old that are cracked, settled, or spalling. We handle full driveway demolition, soil prep, and new installation — typically completing the job in 3-5 days.' },
      { question: 'Is Mesquite within your service area?', answer: 'Yes. Mesquite is within our regular service area. We serve Creek Crossing, Mesquite Meadows, Galloway Park, Pecan Estates, Rolling Hills, and all Mesquite neighborhoods.' },
      { question: 'How do I know if my Mesquite driveway needs replacing?', answer: 'Signs include widespread cracking, significant settling or heaving, large spalled areas, or a surface that has become a trip hazard. If repair costs approach 50% of replacement cost, a new driveway is usually the better investment.' },
      { question: 'What concrete finishes are available in Mesquite?', answer: 'We offer broom finish, stamped concrete, exposed aggregate, colored concrete, and smooth trowel finishes for Mesquite projects. Your choice depends on aesthetics, slip resistance needs, and budget.' },
    ],
  },
  'fort-worth': {
    whyUs:
      'Fort Worth is the 5th largest city in Texas and a major market for concrete contractors. Dallas Concrete Pros brings our proven process and professional crews to Fort Worth homeowners and businesses across the city — from the historic Stockyards district and Fairmount neighborhood to the booming suburbs of north and northwest Fort Worth. We understand Fort Worth\'s unique character: a city that values quality craftsmanship, honest pricing, and reliable follow-through. Whether you need a decorative stamped patio in Westover Hills or a commercial parking lot near Sundance Square, we deliver.',
    soilClimate:
      'Fort Worth sits on a geologic transition zone, with heavy blackland prairie clay in the east giving way to limestone-influenced soils in the west. This means concrete work in the east side (Fairmount, River District) faces different soil challenges than projects in west Fort Worth (Ridglea, Westover Hills). We evaluate soil conditions at every Fort Worth project site and adapt our base preparation, reinforcement, and drainage strategy accordingly.',
    popularProjects:
      'Fort Worth\'s diverse landscape keeps our crews busy with everything from driveway replacements in established neighborhoods like Tanglewood and Arlington Heights to new construction driveways and patios in the rapidly growing communities north of I-820. Commercial concrete — parking lots, sidewalks, and ADA ramps — serves the businesses expanding across Fort Worth\'s major corridors. The Cultural District and Sundance Square areas also generate commercial flatwork and restoration projects.',
    faqs: [
      { question: 'Do you serve all of Fort Worth?', answer: 'Yes. We serve Fort Worth from the Stockyards to Sundance Square, Westover Hills to River District, and all neighborhoods in between — including north Fort Worth, west Fort Worth, and the south side. Call 214-466-2536 for a free estimate.' },
      { question: 'How far is Fort Worth from your Dallas base?', answer: 'Fort Worth is approximately 30 miles from central Dallas. Our crews work in Fort Worth regularly and treat it as a core part of our service area, not a distant add-on.' },
      { question: 'What concrete services are most popular in Fort Worth?', answer: 'Driveway replacements, new patio installations, and commercial concrete are our most requested Fort Worth services. Stamped concrete and retaining walls are also in high demand, particularly in the west Fort Worth neighborhoods.' },
      { question: 'Can you match the concrete quality expected in Fort Worth\'s premium neighborhoods?', answer: 'Yes. We regularly complete high-end concrete work in Westover Hills, Tanglewood, Ridglea, and other premium Fort Worth neighborhoods. Our portfolio includes stamped patios, decorative driveways, and custom outdoor living surfaces.' },
      { question: 'Do you handle commercial concrete in Fort Worth?', answer: 'Yes. We provide commercial concrete services throughout Fort Worth including parking lots, loading docks, sidewalks, ADA ramps, and warehouse slabs. We coordinate with general contractors and work within commercial project schedules.' },
    ],
  },
  lewisville: {
    whyUs:
      'Lewisville sits at the crossroads of I-35E and SH 121, making it one of the most accessible cities in the DFW metroplex. Our concrete crews serve Lewisville\'s mix of established neighborhoods, the upscale Castle Hills development, and commercial properties along the major corridors. Whether it is a new patio near Lewisville Lake or a driveway replacement in an Old Town neighborhood, we bring professional quality at a fair price.',
    soilClimate:
      'Lewisville\'s Denton County soils are predominantly clay with some sandy pockets near Lewisville Lake. Areas in the Castle Hills development sit on relatively well-compacted fill, while older parts of town may have more settled, moisture-reactive soil. We test and prepare each subgrade appropriately to ensure long-lasting results.',
    popularProjects:
      'Driveway replacements in Lewisville\'s 1980s and 1990s neighborhoods are a steady source of work, along with new patio installations in Castle Hills and the Valley Vista area. Commercial flatwork for the growing retail and business corridors along I-35E and SH 121 is also a regular part of our Lewisville project mix.',
    faqs: [
      { question: 'Do you serve the Castle Hills area of Lewisville?', answer: 'Yes. We serve Castle Hills, Valley Vista, Creekside, Timber Creek, Old Town Lewisville, and all Lewisville neighborhoods.' },
      { question: 'How much does a driveway replacement cost in Lewisville?', answer: 'Driveway replacement in Lewisville typically runs $6 to $14 per square foot including demolition of the old surface. Size, thickness, and finish choice affect the final price. Call 214-466-2536 for a free estimate.' },
      { question: 'Can you pour concrete near Lewisville Lake?', answer: 'Yes. We install driveways, patios, and walkways throughout Lewisville including properties near Lewisville Lake. We pay special attention to drainage and soil moisture management on lakeside projects.' },
      { question: 'Do you offer concrete repair in Lewisville?', answer: 'Yes. We offer crack repair, leveling, resurfacing, and full replacement for all types of concrete surfaces in Lewisville. We assess each situation and recommend the most cost-effective solution.' },
    ],
  },
  richardson: {
    whyUs:
      'Richardson is home to the "Telecom Corridor," UT Dallas, and the CityLine mixed-use development — a city that blends corporate sophistication with well-established residential neighborhoods. Our concrete contractors serve Richardson\'s unique mix of 1960s-era homes needing driveway and walkway updates, newer infill construction, and commercial properties requiring professional-grade flatwork. We understand that Richardson homeowners value quality and attention to detail.',
    soilClimate:
      'Richardson\'s soil is typical Dallas County clay — expansive and moisture-sensitive. The city\'s mature tree canopy in neighborhoods like Canyon Creek and Heights Park can affect concrete through root intrusion and uneven soil moisture. We factor in these established-neighborhood conditions when planning reinforcement and control joint placement for Richardson projects.',
    popularProjects:
      'Driveway and walkway replacements in Richardson\'s established neighborhoods are our most common residential projects. Many homes in Breckinridge Park, Heights Park, and the Reservation have original 1960s-1980s concrete that is cracked, settled, or heaving. On the commercial side, the CityLine and Telecom Corridor areas generate parking lot, sidewalk, and ADA compliance work.',
    faqs: [
      { question: 'Do you replace driveways in older Richardson neighborhoods?', answer: 'Yes. Driveway replacement is one of our most popular services in Richardson, especially in neighborhoods like Canyon Creek, Heights Park, and Breckinridge Park where original concrete is 40-60 years old.' },
      { question: 'Can you handle commercial concrete near CityLine?', answer: 'Yes. We provide commercial concrete services throughout Richardson including the CityLine corridor, UT Dallas area, and the Telecom Corridor business district.' },
      { question: 'What does driveway replacement cost in Richardson?', answer: 'Driveway replacement in Richardson typically costs $7 to $15 per square foot including demolition. Factors like driveway size, access, and finish choice affect the final price. Call for a free estimate.' },
      { question: 'Do you address tree root damage to concrete in Richardson?', answer: 'Yes. Richardson\'s mature trees often cause root damage to driveways and walkways. We remove damaged sections, address root issues, and install new concrete with proper root barriers when needed.' },
    ],
  },
  carrollton: {
    whyUs:
      'Carrollton straddles three counties — Dallas, Denton, and Collin — making it one of the most conveniently located suburbs in DFW. We serve Carrollton\'s diverse neighborhoods, from the Castle Hills community on the northern border to the established areas along Keller Springs Road and Country Place. Our concrete work meets the quality standards of a city that consistently ranks among the best-value suburbs in the metroplex.',
    soilClimate:
      'Carrollton\'s soil profile varies across its three-county footprint. The southern areas near Addison tend toward heavier clay, while the northern sections in Denton County may have some sandy influence. Regardless of location, proper base preparation and reinforcement are essential for long-lasting concrete in Carrollton\'s climate.',
    popularProjects:
      'Driveway replacements in Carrollton\'s 1980s and 1990s neighborhoods are our most frequent residential project, followed by patio additions and walkway repairs. The Old Denton Road and Hebron corridors generate commercial concrete work, and the Castle Hills development on the Carrollton-Lewisville border drives new construction projects.',
    faqs: [
      { question: 'Do you serve all of Carrollton?', answer: 'Yes. We serve Castle Hills, Hebron, Country Place, the Keller Springs area, Old Denton Road corridor, Historic Downtown Carrollton, and all Carrollton neighborhoods.' },
      { question: 'How do I know if my Carrollton driveway needs replacing?', answer: 'Common signs include widespread cracking, significant settling or heaving, large spalled areas, or drainage problems. If your driveway is 25-35 years old and showing multiple issues, replacement is usually more cost-effective than repeated repairs.' },
      { question: 'Can you pour concrete near the DART station in Carrollton?', answer: 'Yes. We serve all areas of Carrollton including neighborhoods near the Downtown Carrollton and Trinity Mills DART stations.' },
      { question: 'What is the most popular concrete project in Carrollton?', answer: 'Driveway replacement is our most popular Carrollton project, especially in the established neighborhoods built in the 1980s and 1990s where original driveways are reaching end of life.' },
    ],
  },
  denton: {
    whyUs:
      'Denton is a vibrant college city anchored by UNT and TWU, with a thriving downtown square and rapid residential growth. Our concrete contractors serve Denton\'s full range of properties — from student housing near campus needing durable walkways and parking pads, to new-build driveways in Robson Ranch and Rayzor Ranch, to historic properties near the Denton Square. We understand Denton\'s mix of affordability and quality expectations.',
    soilClimate:
      'Denton sits on the northern edge of the DFW blackland prairie, with heavy clay soils that are particularly reactive to the seasonal moisture swings common in Denton County. New developments along I-35 and US 380 are built on recently cleared land where soil compaction is critical. We ensure every Denton project starts with proper subgrade preparation to handle the soil\'s expansive properties.',
    popularProjects:
      'New construction driveways and patios dominate our Denton project list, driven by the city\'s rapid growth in communities like Robson Ranch and the Rayzor Ranch corridor. In established Denton neighborhoods like Vintage and Idiot\'s Hill, driveway replacements and walkway repairs are in steady demand. We also handle commercial concrete for the growing business districts along I-35 and University Drive.',
    faqs: [
      { question: 'Do you serve Denton and the UNT/TWU area?', answer: 'Yes. We serve all of Denton including areas near UNT and TWU campuses, the Denton Square, Robson Ranch, Rayzor Ranch, Vintage, and surrounding neighborhoods.' },
      { question: 'Can you install concrete for new construction in Denton?', answer: 'Yes. We work with builders and homeowners on new construction driveways, walkways, and patios throughout Denton\'s growing communities including Robson Ranch, Rayzor Ranch, and along the I-35 corridor.' },
      { question: 'What does concrete work cost in Denton?', answer: 'Concrete costs in Denton are comparable to the broader DFW market — driveways at $6-14 per square foot, patios at $8-16 per square foot. Denton\'s competitive market keeps pricing reasonable. Call 214-466-2536 for a free project-specific estimate.' },
      { question: 'Is Denton too far north for your service area?', answer: 'No. Denton is within our regular service area. Our crews work in Denton regularly, and we offer free on-site estimates throughout the city and surrounding communities.' },
    ],
  },
}

export default function CityPage({
  params,
}: {
  params: { slug: string }
}) {
  const city = cities.find((c) => c.slug === params.slug)
  if (!city) notFound()

  const extended = cityExtendedContent[city.slug]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: city.name },
  ]

  const faqs = extended?.faqs ?? [
    {
      question: `What concrete services do you offer in ${city.name}?`,
      answer: `We offer a full range of concrete services in ${city.name} including driveways, patios, walkways, foundations, retaining walls, stamped concrete, repair, resurfacing, and commercial concrete work. Call ${site.phone} for a free estimate.`,
    },
    {
      question: `How much does concrete work cost in ${city.name}?`,
      answer: `Concrete costs in ${city.name} vary by project type and scope. Driveways typically range from $6-15 per square foot, patios $8-18 per square foot, and walkways $6-12 per square foot. Contact us for a detailed, project-specific quote.`,
    },
    {
      question: `Do you provide free estimates in ${city.name}?`,
      answer: `Yes, we provide free on-site estimates for all concrete projects in ${city.name} and the surrounding area. Call us at ${site.phone} or fill out our online contact form to schedule.`,
    },
    {
      question: `Are you licensed and insured for work in ${city.name}?`,
      answer: `Yes, Dallas Concrete Pros is fully licensed and insured for concrete work throughout ${city.name} and the greater Dallas-Fort Worth area. We carry general liability and workers compensation coverage.`,
    },
  ]

  return (
    <>
      <LocalBusinessSchema city={city.name} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: site.baseUrl },
          { name: 'Service Areas', url: `${site.baseUrl}/service-areas` },
          { name: city.name, url: `${site.baseUrl}/service-areas/${city.slug}` },
        ]}
      />

      <section className="bg-brand-charcoal text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </section>

      <HeroSection headline={city.headline} subhead={city.subhead} showPhoneCta />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-6">
            Concrete Contractor Serving {city.name}, TX
          </h2>
          <p className="text-brand-gray leading-relaxed mb-4">{city.intro}</p>
          <p className="text-brand-gray leading-relaxed mb-4">
            Whether you live near {city.landmarks[0]} or in the{' '}
            {city.neighborhoods[0]} area, {site.name} provides professional
            concrete services tailored to {city.name}&apos;s unique building
            conditions and local requirements. From new construction to
            replacement and repair, we deliver quality results on every project.
          </p>
          {extended && (
            <p className="text-brand-gray leading-relaxed">
              {extended.whyUs}
            </p>
          )}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-8 text-center">
            Our Concrete Work in the {city.name} Area
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {homepageGallery.slice(0, 3).map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={`${img.alt} — serving ${city.name}, TX`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {extended && (
        <section className="bg-brand-gray-light py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-6">
              Soil & Climate Considerations in {city.name}
            </h2>
            <p className="text-brand-gray leading-relaxed">
              {extended.soilClimate}
            </p>
          </div>
        </section>
      )}

      <section className="bg-brand-gray-light py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-8">
            Concrete Services in {city.name}
          </h2>
          <p className="text-brand-gray mb-6">
            We offer the following concrete services to homeowners and businesses in{' '}
            {city.name} and the surrounding {city.county} area:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:border-brand-orange border border-transparent transition-all group"
              >
                <span className="text-brand-charcoal group-hover:text-brand-orange font-medium">
                  {s.name}
                </span>
                <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-6">
            Concrete Work in {city.name} Neighborhoods
          </h2>
          <p className="text-brand-gray leading-relaxed mb-4">
            We serve homeowners and businesses across {city.name}&apos;s
            neighborhoods, including {city.neighborhoods.join(', ')}. Common
            projects in these areas include driveway replacements, new patio
            installations, walkway additions, and foundation work for new construction.
          </p>
          {extended ? (
            <p className="text-brand-gray leading-relaxed">
              {extended.popularProjects}
            </p>
          ) : (
            <p className="text-brand-gray leading-relaxed">
              Each neighborhood in {city.name} has its own character and building
              considerations. Whether you need foundation work in a newer
              development or a stamped concrete patio in an established
              neighborhood, our team has the experience to deliver outstanding
              results.
            </p>
          )}
        </div>
      </section>

      <FaqSection faqs={faqs} heading={`Concrete FAQs for ${city.name}`} />

      <section className="bg-brand-gray-light py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-brand-gray">
            Looking for concrete services in other cities?{' '}
            <Link href="/service-areas" className="text-brand-orange hover:underline font-medium">
              View all service areas
            </Link>{' '}
            or call{' '}
            <a href={site.phoneHref} className="text-brand-orange hover:underline font-medium">
              {site.phone}
            </a>{' '}
            to discuss your project.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

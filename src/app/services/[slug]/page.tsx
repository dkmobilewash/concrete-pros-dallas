import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'
import { serviceImages } from '@/data/images'
import { buildMetadata } from '@/lib/metadata'
import { HeroSection } from '@/components/sections/HeroSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Wrench, Paintbrush } from 'lucide-react'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: `${site.baseUrl}/services/${service.slug}`,
  })
}

const serviceContent: Record<
  string,
  {
    overview: string[]
    benefits: { title: string; desc: string }[]
    process: { step: string; desc: string }[]
    faqs: { question: string; answer: string }[]
  }
> = {
  'concrete-driveways': {
    overview: [
      'A concrete driveway is one of the most visible and frequently used features of your home. It needs to withstand daily vehicle traffic, Texas heat, and seasonal temperature swings without cracking or settling. At Dallas Concrete Pros, we install driveways that are properly graded, reinforced with steel or fiber mesh, and finished to your specifications.',
      'Whether you need a new driveway for a recently built home or want to replace an aging, cracked surface, our team handles the full process — from demolition and grading to forming, pouring, and finishing. We offer broom finishes, exposed aggregate, and stamped options to complement any home style.',
    ],
    benefits: [
      { title: 'Vehicle-Grade Durability', desc: 'Engineered thickness and reinforcement to support cars, trucks, and trailers without cracking.' },
      { title: 'Crack-Resistant Finishes', desc: 'Proper control joints and curing techniques minimize surface cracking over time.' },
      { title: 'Smooth Apron Transitions', desc: 'Seamless transitions from street to driveway for a clean, professional look.' },
      { title: 'Weather-Ready Design', desc: 'Built to handle North Texas heat, freeze-thaw cycles, and heavy rain drainage.' },
    ],
    process: [
      { step: 'Site Preparation', desc: 'We remove the existing surface, grade the soil, and compact the base for a stable foundation.' },
      { step: 'Forming & Reinforcement', desc: 'Precision forms are set and steel rebar or fiber mesh is placed for structural integrity.' },
      { step: 'Pouring & Finishing', desc: 'Fresh concrete is poured, leveled, and finished with your chosen texture and control joints.' },
      { step: 'Curing & Cleanup', desc: 'We apply curing compound, clean the job site, and walk you through care instructions.' },
    ],
    faqs: [
      { question: 'How thick should a concrete driveway be?', answer: 'Residential driveways are typically 4 inches thick, with 5-6 inches recommended for heavier vehicles like RVs or trucks. We assess your needs during the free estimate.' },
      { question: 'How long before I can drive on my new driveway?', answer: 'You should wait at least 7 days before driving on new concrete. Full cure strength is reached at about 28 days.' },
      { question: 'Can you replace just part of my driveway?', answer: 'Yes, we can replace damaged sections. However, a full replacement often provides better long-term value and a more uniform appearance.' },
      { question: 'Do concrete driveways crack in Texas heat?', answer: 'Properly installed concrete with correct control joints and curing resists cracking. We take precautions specific to North Texas climate conditions.' },
    ],
  },
  'concrete-patios': {
    overview: [
      'A well-built concrete patio transforms your backyard into functional outdoor living space. Whether you envision a simple entertaining area or an elaborate outdoor kitchen foundation, concrete provides the durability and design flexibility to make it happen. We pour patios that are properly sloped for drainage and finished to complement your home.',
      'Our patio installations include options for broom finish, stamped patterns, colored concrete, and exposed aggregate. We pay close attention to drainage slopes, expansion joints at house connections, and shade considerations to ensure your patio performs well in the Dallas climate year-round.',
    ],
    benefits: [
      { title: 'Outdoor Living Space', desc: 'Expand your usable living area with a patio designed for entertaining, relaxing, or dining.' },
      { title: 'Proper Drainage', desc: 'We slope every patio away from your home to prevent water pooling and foundation issues.' },
      { title: 'Design Flexibility', desc: 'Choose from broom finish, stamped patterns, colored concrete, or exposed aggregate.' },
      { title: 'Expansion Joint Protection', desc: 'Properly placed joints at house connections prevent cracking as materials expand and contract.' },
    ],
    process: [
      { step: 'Design & Layout', desc: 'We discuss your vision, measure the area, and plan drainage slopes and access points.' },
      { step: 'Excavation & Base Prep', desc: 'The area is excavated, graded for drainage, and compacted with a stable gravel base.' },
      { step: 'Pour & Finish', desc: 'Concrete is poured to spec, finished with your chosen texture, and detailed with control joints.' },
      { step: 'Cure & Seal', desc: 'Curing compound is applied and we walk you through maintenance to maximize the life of your patio.' },
    ],
    faqs: [
      { question: 'How much does a concrete patio cost in Dallas?', answer: 'Concrete patios in Dallas typically cost $8 to $18 per square foot depending on size, finish, and site conditions. Stamped and colored options are at the higher end.' },
      { question: 'How thick should a concrete patio be?', answer: 'Standard patios are 4 inches thick, poured over a compacted gravel base. Areas supporting heavy features like hot tubs may require additional thickness.' },
      { question: 'Can you pour concrete next to my pool?', answer: 'Yes, we install pool decks and surrounding patios with slip-resistant finishes and proper drainage away from the pool.' },
      { question: 'How do I maintain my concrete patio?', answer: 'Regular cleaning and resealing every 2-3 years will keep your patio looking great and protected from the elements.' },
    ],
  },
  'concrete-walkways': {
    overview: [
      'Concrete walkways provide safe, durable pathways connecting your driveway, front door, garden areas, and outdoor living spaces. A properly installed walkway eliminates trip hazards, improves curb appeal, and adds functional value to your property. We build walkways with slip-resistant finishes and ADA-compliant slopes.',
      'From a simple front entry path to winding garden walkways, our team handles projects of all sizes. We ensure smooth transitions between surfaces, proper grading for water runoff, and finishes that remain safe in wet conditions — important for Dallas rain and irrigation overspray.',
    ],
    benefits: [
      { title: 'Trip Hazard Prevention', desc: 'Level, uniform surfaces eliminate uneven pavers, cracked paths, and settling that cause trips and falls.' },
      { title: 'Slip-Resistant Finishes', desc: 'Textured finishes provide traction in wet weather, keeping your walkways safe year-round.' },
      { title: 'ADA Compliance', desc: 'We build walkways that meet accessibility guidelines for slope, width, and surface texture.' },
      { title: 'Curb-to-Door Flow', desc: 'Seamless connections from the street to your front door enhance your home\'s curb appeal and accessibility.' },
    ],
    process: [
      { step: 'Layout & Grading', desc: 'We mark the path, set elevations for proper drainage, and prep the base material.' },
      { step: 'Form Setting', desc: 'Precision forms define clean edges and smooth curves for your walkway layout.' },
      { step: 'Pour & Texture', desc: 'Concrete is poured, leveled, and finished with a slip-resistant broom or stamped texture.' },
    ],
    faqs: [
      { question: 'How wide should a concrete walkway be?', answer: 'Standard walkways are 36 to 48 inches wide. Main entry walkways are typically 48 inches or wider to accommodate two people side by side.' },
      { question: 'Can you curve a concrete walkway?', answer: 'Yes, we regularly install curved and winding walkways using flexible forming techniques for a natural, flowing look.' },
      { question: 'How do you prevent walkway cracking?', answer: 'Proper base preparation, control joints at regular intervals, and correct concrete mix and curing all work together to minimize cracking.' },
      { question: 'Do you remove old walkways?', answer: 'Yes, we handle full demolition and removal of existing walkways as part of the replacement process.' },
    ],
  },
  'concrete-foundations': {
    overview: [
      'A solid foundation is the most critical structural element of any building. In the Dallas area, expansive clay soils create unique challenges that require careful engineering and installation practices. Our foundation work is designed to account for local soil conditions, drainage patterns, and building code requirements.',
      'We install both slab-on-grade and pier-and-beam foundations for residential and commercial projects. Every foundation we pour includes proper moisture barriers, rebar reinforcement, and drainage considerations to protect your structure for decades to come.',
    ],
    benefits: [
      { title: 'Soil-Adapted Design', desc: 'Foundations engineered to handle North Texas expansive clay soils and seasonal moisture changes.' },
      { title: 'Code Compliance', desc: 'Every foundation meets or exceeds local building codes and passes inspection the first time.' },
      { title: 'Drainage Protection', desc: 'Proper grading and moisture barriers prevent water intrusion and soil-related movement.' },
      { title: 'Structural Reinforcement', desc: 'Steel rebar and post-tension cables provide the strength needed for long-term structural integrity.' },
    ],
    process: [
      { step: 'Site Survey & Engineering', desc: 'We assess soil conditions, review plans, and confirm specifications with your builder or engineer.' },
      { step: 'Excavation & Prep', desc: 'The site is excavated to grade, plumbing is roughed in, and moisture barriers are installed.' },
      { step: 'Reinforcement & Pour', desc: 'Steel rebar is placed per engineering specs and concrete is poured and finished to level.' },
      { step: 'Inspection & Cure', desc: 'The foundation is inspected, cured properly, and prepared for framing to begin.' },
    ],
    faqs: [
      { question: 'What type of foundation is best for Dallas homes?', answer: 'Most Dallas-area homes use post-tension slab foundations, which are designed to resist movement in the local expansive clay soils. Your engineer will specify the best type for your project.' },
      { question: 'How long does a foundation pour take?', answer: 'A typical residential foundation pour takes one day. Preparation, including excavation and rebar placement, adds 2-3 days prior.' },
      { question: 'Do you work with builders and general contractors?', answer: 'Yes, we work with homebuilders, general contractors, and property owners on foundation projects throughout the Dallas area.' },
      { question: 'What causes foundation problems in Dallas?', answer: 'Expansive clay soil, poor drainage, tree root intrusion, and plumbing leaks are the primary causes of foundation issues in the Dallas area.' },
    ],
  },
  'retaining-walls': {
    overview: [
      'Retaining walls manage soil elevation changes, prevent erosion, and create usable space on sloped properties. Whether you need a functional wall to hold back a hillside or a decorative tiered garden feature, properly engineered retaining walls require careful attention to soil pressure, drainage, and structural reinforcement.',
      'Our retaining walls are built with proper drainage systems behind the wall face, compacted backfill, and reinforcement appropriate for the wall height and soil conditions. We work with poured concrete, concrete block, and stone-faced concrete to match your property and functional requirements.',
    ],
    benefits: [
      { title: 'Soil & Erosion Control', desc: 'Hold back soil on sloped properties and prevent erosion that threatens structures and landscaping.' },
      { title: 'Proper Wall Drainage', desc: 'Drainage gravel and weep holes behind every wall prevent hydrostatic pressure buildup.' },
      { title: 'Tiered Design Options', desc: 'Multi-level walls create terraced planting areas and maximize usable yard space.' },
      { title: 'Structural Engineering', desc: 'Walls over 4 feet are engineered with footings and reinforcement to handle lateral soil pressure.' },
    ],
    process: [
      { step: 'Site Assessment', desc: 'We evaluate soil conditions, drainage patterns, and wall height requirements.' },
      { step: 'Footing & Drainage', desc: 'A reinforced footing is poured and drainage gravel with perforated pipe is installed behind the wall.' },
      { step: 'Wall Construction', desc: 'The wall is built to spec with proper reinforcement, backfill compaction, and finish.' },
    ],
    faqs: [
      { question: 'How tall can a retaining wall be?', answer: 'Walls under 4 feet can often be built without engineering. Taller walls require engineered plans and may need permits. We handle both.' },
      { question: 'Do retaining walls need drainage?', answer: 'Yes, every retaining wall needs a drainage system behind it. Without proper drainage, water pressure builds up and can cause wall failure.' },
      { question: 'What materials do you use for retaining walls?', answer: 'We build with poured concrete, concrete masonry units (CMU), and natural stone. The best material depends on height, function, and aesthetics.' },
      { question: 'How long do concrete retaining walls last?', answer: 'A properly built and drained concrete retaining wall can last 50 years or more with minimal maintenance.' },
    ],
  },
  'stamped-concrete': {
    overview: [
      'Stamped concrete gives you the look of natural stone, brick, slate, or tile at a fraction of the material and labor cost. Using specialized stamps, color hardeners, and release agents, we create surfaces that replicate premium materials while providing the durability and low maintenance of concrete.',
      'We offer a wide range of patterns and color options to match any architectural style. From Ashlar slate patios to cobblestone driveways, stamped concrete adds character to outdoor spaces. Every stamped surface is sealed to protect the color and texture from UV fading and weather exposure.',
    ],
    benefits: [
      { title: 'Premium Aesthetics', desc: 'Achieve the look of natural stone, brick, or tile without the higher material costs.' },
      { title: 'Color Hardener Finish', desc: 'Integral and surface-applied color hardeners provide rich, lasting color throughout the surface.' },
      { title: 'UV-Stable Sealers', desc: 'Professional-grade sealers protect color and pattern from Dallas sun exposure and fading.' },
      { title: 'Design Variety', desc: 'Choose from dozens of patterns and color combinations to complement your home\'s architecture.' },
    ],
    process: [
      { step: 'Color & Pattern Selection', desc: 'We help you choose the right stamp pattern and color combination for your project.' },
      { step: 'Pour & Color Application', desc: 'Concrete is poured and color hardener is broadcast across the surface before stamping.' },
      { step: 'Stamping & Detail', desc: 'Patterns are pressed into the surface while the concrete is workable, then detailed at joints and edges.' },
      { step: 'Seal & Protect', desc: 'After curing, a UV-stable sealer is applied to enhance color and protect the surface.' },
    ],
    faqs: [
      { question: 'How long does stamped concrete last?', answer: 'Stamped concrete lasts 25 years or more with proper installation and maintenance. Resealing every 2-3 years keeps it looking its best.' },
      { question: 'Is stamped concrete slippery?', answer: 'Stamped concrete can be slippery when wet and sealed. We offer non-slip additives mixed into the sealer for pool decks and walkways.' },
      { question: 'Can you stamp an existing concrete surface?', answer: 'Existing concrete can receive a stamped overlay, though results depend on the condition of the existing surface. A new pour provides the best results.' },
      { question: 'How much does stamped concrete cost vs. pavers?', answer: 'Stamped concrete typically costs 30-50% less than natural stone pavers while offering a similar appearance and easier maintenance.' },
    ],
  },
  'commercial-concrete': {
    overview: [
      'Commercial concrete projects demand precision engineering, heavy-duty materials, and minimal disruption to business operations. From parking lots and loading docks to warehouse floors and ADA-compliant sidewalks, we deliver commercial-grade concrete work that meets specifications and passes inspection.',
      'We understand the importance of timelines in commercial construction. Our crews are experienced in large-scale pours, coordinating with general contractors, and working within tight schedules. Every commercial project receives the same attention to quality, reinforcement, and finishing that defines our work.',
    ],
    benefits: [
      { title: 'Heavy-Load Capacity', desc: 'Engineered thickness and reinforcement for truck traffic, forklifts, and heavy equipment loads.' },
      { title: 'ADA Compliance', desc: 'Parking areas, ramps, and sidewalks built to meet ADA accessibility requirements.' },
      { title: 'Minimal Business Disruption', desc: 'We phase work and schedule pours to keep your business operational during construction.' },
      { title: 'Specification Compliance', desc: 'We follow architect and engineer specifications precisely, with documentation for inspections.' },
    ],
    process: [
      { step: 'Plan Review & Coordination', desc: 'We review specifications, coordinate with your GC, and schedule to minimize business impact.' },
      { step: 'Site Prep & Subgrade', desc: 'Subgrade is prepared and compacted to engineered specifications for commercial loads.' },
      { step: 'Reinforcement & Pour', desc: 'Steel reinforcement is placed per plans and concrete is poured, vibrated, and finished to spec.' },
      { step: 'Finishing & Compliance', desc: 'Surfaces are finished, joints are cut, and the work is documented for inspection and close-out.' },
    ],
    faqs: [
      { question: 'Do you handle large commercial pours?', answer: 'Yes, we have the equipment and crew capacity for large-scale commercial concrete projects including parking lots, warehouse floors, and tilt-wall pads.' },
      { question: 'Can you work around our business hours?', answer: 'We offer flexible scheduling including early morning and weekend pours to minimize disruption to your operations.' },
      { question: 'Do you provide documentation for inspections?', answer: 'Yes, we provide mix design tickets, placement records, and test results as required by your project specifications.' },
      { question: 'What commercial projects do you handle?', answer: 'Parking lots, loading docks, warehouse floors, sidewalks, curb and gutter, ADA ramps, and building pads for commercial and industrial properties.' },
    ],
  },
  'concrete-repair': {
    overview: [
      'Concrete repair in Dallas addresses the wear and damage that comes with years of use and exposure to North Texas weather. From hairline surface cracks to deep structural settling, concrete repair restores safety, function, and appearance without the cost and disruption of a full tear-out and replacement. Dallas concrete repair is especially common for driveways, sidewalks, patios, and garage floors where cracks, spalling, and uneven slabs create trip hazards and allow water infiltration that worsens the problem over time.',
      'The Dallas area\'s expansive clay soils are a leading cause of concrete damage. Seasonal moisture swings cause the ground to heave and shrink, placing stress on slabs that leads to cracking and settling. Add intense summer heat, occasional freeze-thaw cycles, and heavy vehicle loads, and even well-installed concrete eventually needs attention. Our concrete crack repair services range from epoxy injection and routing-and-sealing for surface cracks to full-depth patching, slab jacking, and joint replacement for more serious issues. In many cases, targeted repair extends the useful life of your concrete by a decade or more at a fraction of the replacement price.',
    ],
    benefits: [
      { title: 'Cost Savings vs. Replacement', desc: 'Repairing damaged sections typically costs 40-60% less than full removal and replacement, preserving your budget for other improvements.' },
      { title: 'Trip Hazard Elimination', desc: 'Leveling settled slabs and filling cracks removes dangerous trip hazards from walkways, driveways, and patios, reducing liability.' },
      { title: 'Extended Concrete Lifespan', desc: 'Sealing cracks and patching spalled areas stops water infiltration and prevents small problems from becoming costly failures.' },
      { title: 'Curb Appeal Restoration', desc: 'Professionally repaired concrete restores a clean, uniform appearance that improves your property\'s overall look and value.' },
    ],
    process: [
      { step: 'Assessment & Diagnosis', desc: 'We inspect the damage, identify root causes such as soil movement or drainage issues, and recommend the most effective repair approach for your situation.' },
      { step: 'Surface Prep & Crack Routing', desc: 'Damaged areas are cleaned, loose material is removed, and cracks are routed or chased to create a proper bonding profile for the repair material.' },
      { step: 'Repair, Patching & Leveling', desc: 'Cracks are filled with flexible epoxy or polyurethane sealant, spalled areas receive polymer-modified patching compound, and settled slabs are lifted with polyurethane foam injection.' },
      { step: 'Curing & Sealing', desc: 'Repaired surfaces are cured to full strength, then sealed to protect against moisture penetration, UV exposure, and future cracking.' },
    ],
    faqs: [
      { question: 'Can cracked concrete be repaired instead of replaced?', answer: 'In most cases, yes. Cracks up to about half an inch wide can be effectively sealed or filled. Wider cracks, severely settled slabs, or concrete with extensive structural damage may require partial or full replacement. We assess every job and give you an honest recommendation.' },
      { question: 'How much does concrete repair cost in Dallas?', answer: 'Minor crack sealing starts around $3-$5 per linear foot. Patching and slab leveling typically run $500-$2,000 depending on the area and severity. We provide a detailed written estimate after inspecting your concrete at no charge.' },
      { question: 'How long does concrete repair take?', answer: 'Most residential concrete repairs are completed in a single day. Larger projects involving slab leveling or multiple areas may take two days. You can typically walk on repaired surfaces within 24 hours and drive on them within 48-72 hours.' },
      { question: 'What causes concrete to crack in Dallas?', answer: 'The primary causes are expansive clay soil movement, temperature fluctuations causing thermal expansion and contraction, tree root pressure, heavy loads exceeding design capacity, and improper original installation such as insufficient control joints or base compaction.' },
      { question: 'Do you repair commercial concrete?', answer: 'Yes, we repair concrete for commercial properties including parking lots, warehouse floors, loading docks, and sidewalks. We schedule commercial work to minimize disruption to your business operations.' },
    ],
  },
  'concrete-resurfacing': {
    overview: [
      'Concrete resurfacing in Dallas is the process of applying a thin, durable overlay to an existing concrete surface that is structurally sound but cosmetically worn. Rather than tearing out and replacing an entire driveway, patio, or pool deck, a concrete overlay bonds to the existing slab and provides a fresh, attractive finish at a fraction of the cost. Resurfacing is the right choice when your concrete has minor surface damage, discoloration, or outdated appearance but the underlying slab is stable and free of major structural cracks or settling.',
      'Dallas properties face particular challenges that make resurfacing and concrete sealing valuable maintenance strategies. Intense UV exposure fades and degrades unprotected surfaces, summer heat above 100 degrees accelerates surface wear, and occasional winter freezes can cause flaking on unsealed concrete. Our resurfacing process addresses all of these factors with high-performance overlay materials rated for extreme temperatures and UV stability. We offer multiple finish options including spray-texture coatings, smooth troweled overlays, and stamped overlay patterns that mimic stone or tile. Every resurfaced project receives a professional-grade sealer that locks in the new finish and provides years of protection against the Dallas climate.',
    ],
    benefits: [
      { title: 'Fraction of Replacement Cost', desc: 'Resurfacing typically costs 30-50% of what full removal and replacement would run, making it the most budget-friendly way to renew worn concrete.' },
      { title: 'Multiple Finish Options', desc: 'Choose from stamped overlays that mimic natural stone, spray-texture coatings for pool decks, or smooth troweled finishes for a modern, clean look.' },
      { title: 'UV & Weather Protection', desc: 'High-performance overlay materials and sealers are formulated to resist Dallas UV intensity, heat, and moisture without fading or peeling.' },
      { title: 'Minimal Disruption & Fast Turnaround', desc: 'Most residential resurfacing projects are completed in 1-2 days with minimal noise and debris compared to a full tear-out.' },
    ],
    process: [
      { step: 'Surface Evaluation', desc: 'We inspect the existing slab for structural integrity, test adhesion, and confirm that resurfacing is the right solution. Slabs with major settling or deep structural cracks may need repair first.' },
      { step: 'Cleaning & Profiling', desc: 'The surface is pressure washed, degreased if needed, and mechanically profiled with a grinder or shot blaster to create the rough texture required for a strong overlay bond.' },
      { step: 'Overlay Application & Finishing', desc: 'The polymer-modified overlay is applied in one or more coats, then textured, stamped, or troweled to your chosen finish. Color is integrated into the material for long-lasting appearance.' },
      { step: 'Sealing & Curing', desc: 'A UV-stable, slip-resistant sealer is applied to protect the new surface. The overlay cures to foot-traffic strength within 24 hours and full strength within 3-5 days.' },
    ],
    faqs: [
      { question: 'How long does resurfaced concrete last?', answer: 'A professionally applied concrete overlay lasts 10-15 years or longer with proper maintenance. Resealing every 2-3 years and keeping the surface clean significantly extends its life.' },
      { question: 'Can you resurface a stamped concrete surface?', answer: 'Yes, existing stamped concrete can be resurfaced with a new overlay. The old pattern is covered, and a new texture or stamp can be applied. The existing surface must be structurally sound for the overlay to bond properly.' },
      { question: 'What is the difference between resurfacing and sealing?', answer: 'Sealing applies a thin protective coating to existing concrete without changing its appearance or repairing surface damage. Resurfacing applies a thicker overlay that covers imperfections and creates an entirely new surface. Many projects benefit from both — resurfacing followed by sealing.' },
      { question: 'How much does concrete resurfacing cost in Dallas?', answer: 'Concrete resurfacing in Dallas typically costs $3-$8 per square foot depending on the overlay type and finish selected. Stamped overlays and decorative finishes are at the higher end. We provide free on-site estimates.' },
      { question: 'Is resurfacing better than replacing concrete?', answer: 'Resurfacing is better when the existing slab is structurally sound and you want to improve appearance at lower cost. Replacement is the better choice when concrete has deep structural cracks, significant settling, or drainage problems that a surface overlay cannot fix.' },
    ],
  },
  'concrete-leveling': {
    overview: [
      'Concrete leveling — also called slab lifting or slab jacking — raises sunken, uneven concrete back to its original grade without the cost and disruption of tearing it out and pouring new. When a driveway panel drops, a patio slopes toward the house, or a walkway develops a trip hazard, the slab itself is usually still sound; the ground beneath it has moved. Across Dallas and North Texas that movement is driven by our expansive Blackland Prairie clay, which swells after rain and shrinks during drought, along with poor drainage, eroded fill, and plumbing leaks that wash out the supporting soil. Leveling fixes the cause under the slab and restores a safe, even surface in a single visit.',
      'At Dallas Concrete Pros we level slabs using modern polyurethane foam injection. We drill small, dime-sized ports through the slab, inject an expanding structural foam that fills the voids and compacts the loose soil, and watch the concrete rise precisely back to grade. The foam is waterproof, cures in minutes, and adds almost no weight to the soil — a major advantage over old-fashioned mudjacking on clay. The result is a level driveway, patio, pool deck, or walkway at roughly a third to half the cost of replacement, usually completed in a few hours with the surface ready to use the same day.',
    ],
    benefits: [
      { title: 'Half the Cost of Replacement', desc: 'Slab lifting typically runs 30-50% of the price of tear-out and replacement because we reuse your existing, structurally sound concrete.' },
      { title: 'Same-Day, Ready to Use', desc: 'Most residential leveling jobs are finished in a few hours, and polyurethane foam cures within minutes so you can drive or walk on the slab the same day.' },
      { title: 'Engineered for Clay Soil', desc: 'Lightweight, waterproof polyurethane foam fills voids and stabilizes the subgrade without adding load to North Texas expansive clay — unlike heavy mud slurry.' },
      { title: 'Fixes the Cause, Not Just the Symptom', desc: 'We identify and correct the drainage or soil-washout issue underneath so the slab stays level rather than sinking again.' },
    ],
    process: [
      { step: 'Assessment & Void Detection', desc: 'We measure the settlement, identify why the slab dropped — drainage, eroded fill, or clay shrinkage — and confirm the concrete is sound enough to lift rather than replace.' },
      { step: 'Port Drilling', desc: 'We drill a series of small, dime-sized injection ports through the sunken slab in a pattern engineered for even, controlled lifting.' },
      { step: 'Polyurethane Foam Injection', desc: 'High-density structural foam is injected beneath the slab, expanding to fill voids, compact loose soil, and raise the concrete precisely back to grade.' },
      { step: 'Patch & Finish', desc: 'The injection ports are patched with color-matched cement, the joints are cleaned up, and your level surface is ready for traffic the same day.' },
    ],
    faqs: [
      { question: 'How much does concrete leveling cost in Dallas?', answer: 'Concrete leveling in Dallas typically ranges from $600 to $2,000 for most residential slabs depending on the size of the area and the amount of lift required — generally 30-50% of the cost of full replacement. We provide a free on-site assessment with exact pricing. Call 214-466-2536.' },
      { question: 'How long does concrete leveling last?', answer: 'Polyurethane foam is waterproof and does not break down, so a properly leveled slab stays stable for many years. Because we also correct the drainage or soil issue that caused the settlement, re-sinking is uncommon when the underlying cause is addressed.' },
      { question: 'Is slab lifting better than replacing the concrete?', answer: 'If the slab is structurally sound and simply sunken, leveling is faster, far cheaper, and less disruptive than replacement. If the concrete is severely cracked, crumbling, or spalled, replacement is the better long-term choice. We will tell you honestly which your slab needs.' },
      { question: 'Why does concrete sink in the Dallas area?', answer: 'North Texas sits on expansive clay that swells when wet and shrinks when dry, creating voids under slabs. Combined with poor drainage, eroded builder fill, and the occasional plumbing leak, that movement causes driveways, patios, and walkways to settle unevenly over time.' },
      { question: 'Can you level a sunken pool deck or patio?', answer: 'Yes. We regularly lift sunken pool decks, patios, walkways, garage floors, and driveway panels. Polyurethane injection works on almost any flat concrete surface where the slab is intact but has dropped out of level.' },
    ],
  },
}

export default function ServicePage({
  params,
}: {
  params: { slug: string }
}) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const content = serviceContent[service.slug]
  if (!content) notFound()

  const images = serviceImages[service.slug]
  const relatedServices = services.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  )
  const topCities = cities.slice(0, 5)

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.name },
  ]

  return (
    <>
      <ServiceSchema name={service.name} description={service.metaDescription} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: site.baseUrl },
          { name: 'Services', url: `${site.baseUrl}/services` },
          { name: service.name, url: `${site.baseUrl}/services/${service.slug}` },
        ]}
      />

      <section className="bg-brand-charcoal text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </section>

      <HeroSection
        headline={service.headline}
        subhead={service.heroSubhead}
        showPhoneCta
        backgroundImage={images ? { src: images.hero, alt: images.heroAlt } : undefined}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-6">
            What Are {service.name} in Dallas?
          </h2>
          {content.overview.map((p, i) => (
            <p key={i} className="text-brand-gray leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-brand-gray-light py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-8">
            Benefits of {service.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.benefits.map((b, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-brand-charcoal">{b.title}</h3>
                  <p className="text-brand-gray text-sm mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-8">
            How We Install {service.name}
          </h2>
          <div className="space-y-8">
            {content.process.map((s, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-charcoal text-lg">{s.step}</h3>
                  <p className="text-brand-gray mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {images && images.gallery.length > 0 && (
        <section className="bg-brand-gray-light py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-8 text-center">
              {service.name} Project Photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.gallery.map((src) => (
                <div key={src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`${service.name} project by Dallas Concrete Pros`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqSection faqs={content.faqs} heading="Common Questions" />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedServices.map((rs) => (
              <Link
                key={rs.slug}
                href={`/services/${rs.slug}`}
                className="flex items-center gap-2 p-4 rounded-lg border border-brand-gray-mid hover:border-brand-orange transition-colors group"
              >
                <span className="text-brand-charcoal group-hover:text-brand-orange font-medium">
                  {rs.name}
                </span>
                <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-gray-light py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-brand-gray">
            We install {service.name.toLowerCase()} throughout{' '}
            {topCities.map((c, i) => (
              <span key={c.slug}>
                <Link href={`/${service.slug}/${c.slug}`} className="text-brand-orange hover:underline">
                  {c.name}
                </Link>
                {i < topCities.length - 1 ? ', ' : ''}
              </span>
            ))}
            , and surrounding cities.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

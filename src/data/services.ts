import { Service } from "@/types";
import { serviceImages } from "./images";

export const services: Service[] = [
  {
    slug: "driveways",
    name: "Concrete Driveways",
    shortDescription:
      "Durable, great-looking driveways built to handle Dallas heat and daily use. Broom, exposed-aggregate, and stamped finishes available.",
    icon: "Car",
    metaTitle: "Concrete Driveways in Dallas, TX",
    metaDescription:
      "Custom concrete driveways in Dallas, TX. Properly reinforced, 4-inch minimum pours with broom, exposed aggregate, and stamped finishes. Free estimates.",
    heroImage: serviceImages["driveways"],
    heroSubtitle:
      "A driveway is the first thing people see — we build ones that last and lift your curb appeal.",
    intro: [
      "Your driveway takes a beating in North Texas. Between triple-digit summer heat, sudden downpours, and the daily weight of vehicles, a driveway needs to be built right the first time. At Concrete Pros Of Dallas, we pour every residential driveway at a 4-inch minimum thickness — thicker where heavier vehicles are parked — and reinforce with rebar or wire mesh so the slab resists cracking and settling.",
      "Concrete is the most cost-effective driveway material for Dallas homes. It outlasts asphalt, needs far less maintenance than pavers, and stands up to the freeze-thaw and expansion cycles our clay soil creates. Proper grading and control joints are the difference between a driveway that lasts decades and one that fails in a few years — and we get those details right on every pour.",
      "Want more than a plain gray slab? We offer decorative finishes including broom texture for grip, exposed aggregate for a natural stone look, and stamped concrete that mimics brick, slate, or cobblestone at a fraction of the cost.",
    ],
    benefits: [
      "Boosts curb appeal and resale value of your home",
      "Built to last 25–30+ years with minimal upkeep",
      "Low maintenance — no weeds, no re-sanding like pavers",
      "Reinforced and properly jointed to resist cracking",
      "Custom finishes: broom, exposed aggregate, or stamped",
      "Fast installation with minimal disruption to your day",
    ],
    processSteps: [
      {
        title: "Site Prep & Grading",
        description:
          "We remove the old surface, excavate, and grade the base for proper drainage away from your home and foundation.",
      },
      {
        title: "Forms & Rebar",
        description:
          "We set forms to your exact layout and install rebar or wire-mesh reinforcement to control cracking over our shifting clay soil.",
      },
      {
        title: "Pour & Finish",
        description:
          "We pour quality concrete, screed it flat, and apply your chosen finish — broom, exposed aggregate, or stamped pattern.",
      },
      {
        title: "Curing & Sealing",
        description:
          "We cut control joints, cure the slab correctly, and seal it to protect against stains, moisture, and the Texas sun.",
      },
    ],
    faq: [
      {
        question: "How long does a new driveway take to install?",
        answer:
          "Most residential driveways are demolished, formed, and poured within 2–4 days depending on size and finish. Decorative work like stamping adds a day or two.",
      },
      {
        question: "How thick should a concrete driveway be?",
        answer:
          "We pour a 4-inch minimum for standard passenger vehicles and go to 5–6 inches with extra reinforcement where RVs, trucks, or trailers are parked.",
      },
      {
        question: "Can you do stamped or decorative driveways?",
        answer:
          "Yes. We offer broom finishes, exposed aggregate, and stamped concrete in a range of patterns and colors that mimic brick, slate, and natural stone.",
      },
      {
        question: "When can I drive on my new driveway?",
        answer:
          "Concrete reaches enough strength for foot traffic in 24–48 hours, but we ask you to wait 7 days before parking vehicles so the slab can cure fully.",
      },
    ],
    relatedServices: ["patios", "foundations-slabs"],
  },
  {
    slug: "patios",
    name: "Concrete Patios",
    shortDescription:
      "Extend your living space outdoors with a custom concrete patio. Stamped, stained, and cool-deck options designed for Texas summers.",
    icon: "Sun",
    metaTitle: "Concrete Patios in Dallas, TX",
    metaDescription:
      "Custom concrete patios in Dallas, TX. Stamped and stained designs, cool-deck finishes for Texas heat, and low-maintenance surfaces. Get a free estimate.",
    heroImage: serviceImages["patios"],
    heroSubtitle:
      "Outdoor living, Dallas-style — a patio built for backyard evenings and weekend cookouts.",
    intro: [
      "In Dallas, the backyard is a second living room for much of the year. A well-built concrete patio gives you a clean, durable foundation for outdoor dining, grilling, fire pits, and family gatherings — without the constant upkeep of wood decking or the shifting and weeds of pavers.",
      "Concrete is endlessly customizable. We pour everything from simple broom-finished slabs to richly detailed stamped and stained patios that mimic flagstone, slate, or wood plank. Because the surface is seamless, there are no gaps for weeds or ants and nothing to rot, splinter, or warp in the Texas heat.",
      "For full-sun yards, we offer cool-deck coatings that stay comfortable under bare feet even on the hottest July afternoon. Pair your patio with a pergola, outdoor kitchen, or fire feature and we'll help you design a space that fits your home and your budget.",
    ],
    benefits: [
      "Lower maintenance than pavers or wood decking",
      "Virtually unlimited designs, colors, and textures",
      "Cool-deck finishes that beat the Texas heat",
      "Seamless surface — no weeds, ants, or splinters",
      "Stands up to sun, rain, and heavy foot traffic",
      "Increases usable living space and home value",
    ],
    processSteps: [
      {
        title: "Design Consultation",
        description:
          "We walk your yard, talk through layout and finish options, and recommend a design that fits how you'll use the space.",
      },
      {
        title: "Excavation",
        description:
          "We clear and excavate the area and build a compacted base graded to drain water away from your home.",
      },
      {
        title: "Form Setting",
        description:
          "We set forms to your patio's shape — straight, curved, or multi-level — and add reinforcement.",
      },
      {
        title: "Pour",
        description:
          "We pour and screed the slab to a smooth, level surface ready for finishing.",
      },
      {
        title: "Stamp & Finish",
        description:
          "We apply your chosen texture, stamp pattern, and color, or a cool-deck coating for full-sun areas.",
      },
      {
        title: "Seal",
        description:
          "We seal the patio to lock in color and protect against stains, moisture, and UV fading.",
      },
    ],
    faq: [
      {
        question: "Should I choose stamped or plain concrete?",
        answer:
          "Plain broom-finished concrete is the most economical and looks clean and modern. Stamped concrete costs more but delivers the look of stone, brick, or wood. We'll show you samples of both.",
      },
      {
        question: "Can you add a cover or pergola later?",
        answer:
          "Absolutely. We can pour footings and anchor points during the patio install so a pergola, pavilion, or patio cover can be added now or down the road.",
      },
      {
        question: "How do I maintain a concrete patio?",
        answer:
          "Very little is required — occasional rinsing and resealing every 2–3 years keeps it looking new. There are no boards to replace and no joints to re-sand.",
      },
      {
        question: "How does the cost compare to pavers?",
        answer:
          "A poured concrete patio is typically less expensive than pavers up front and costs far less over time since there's no settling, weeding, or re-leveling to deal with.",
      },
    ],
    relatedServices: ["pool-decks", "driveways"],
  },
  {
    slug: "pool-decks",
    name: "Concrete Pool Decks",
    shortDescription:
      "Slip-resistant, heat-reflective pool decks built for Texas pool season. Cool-deck coatings keep surfaces comfortable underfoot.",
    icon: "Waves",
    metaTitle: "Concrete Pool Decks in Dallas, TX",
    metaDescription:
      "Concrete pool decks in Dallas, TX. Slip-resistant, cool-to-the-touch finishes and durable resurfacing for Texas pool season. Free estimates.",
    heroImage: serviceImages["pool-decks"],
    heroSubtitle:
      "Cool underfoot, slip-resistant, and built for long Texas pool seasons.",
    intro: [
      "Dallas pool season runs from spring well into fall, and your pool deck needs to handle constant sun, splashing, and bare feet. We build and resurface concrete pool decks with finishes engineered for exactly those conditions — textured for slip resistance and treated to reflect heat so the surface stays comfortable.",
      "Our cool-deck coatings can drop surface temperatures noticeably compared to plain concrete, which makes a real difference on a 100-degree July afternoon. The textured finish gives sure footing when the deck is wet, and the sealed surface resists pool chemicals, fading, and staining.",
      "Whether you're building a new deck around a fresh pool or resurfacing a cracked, dated, or slippery existing deck, we'll match the look you want — from clean modern broom finishes to decorative stamped and stained patterns.",
    ],
    benefits: [
      "Slip-resistant texture for safe footing when wet",
      "Cool-deck coatings stay comfortable on bare feet",
      "Resistant to chlorine, salt, and pool chemicals",
      "Custom colors and finishes to match your backyard",
      "Won't rot, splinter, or warp like wood decking",
      "Resurfacing option restores old decks at lower cost",
    ],
    processSteps: [
      {
        title: "Remove Old Surface",
        description:
          "For resurfacing jobs, we assess and prep the existing deck; for new builds we excavate and grade the area around the pool.",
      },
      {
        title: "Prep Deck",
        description:
          "We clean, repair, and prepare the base, setting forms and reinforcement for a stable, properly draining surface.",
      },
      {
        title: "Apply Cool Deck or Concrete",
        description:
          "We pour new concrete or apply a cool-deck overlay engineered to reflect heat and resist pool chemicals.",
      },
      {
        title: "Texture & Seal",
        description:
          "We add a slip-resistant texture, apply color if desired, and seal the deck to protect it through every pool season.",
      },
    ],
    faq: [
      {
        question: "What's the difference between cool deck and plain concrete?",
        answer:
          "A cool-deck coating has a textured, heat-reflective surface that stays noticeably cooler than plain gray concrete in direct sun — a big comfort difference for bare feet in Texas summers.",
      },
      {
        question: "Should I resurface or replace my pool deck?",
        answer:
          "If the underlying slab is structurally sound, resurfacing restores the look and adds slip resistance at a lower cost. If the slab is heaving or badly cracked, replacement is the better long-term option. We'll assess and advise.",
      },
      {
        question: "How much does a pool deck cost?",
        answer:
          "Cost depends on square footage, finish, and whether it's new construction or resurfacing. We provide a clear, itemized free estimate after seeing your space.",
      },
      {
        question: "How long before I can swim after the work is done?",
        answer:
          "You can usually walk on the deck within a day or two, but we recommend waiting about a week before heavy use so the surface and sealer fully cure.",
      },
    ],
    relatedServices: ["patios", "driveways"],
  },
  {
    slug: "block-walls",
    name: "Block & Retaining Walls",
    shortDescription:
      "CMU block retaining walls, privacy walls, and garden borders engineered for North Texas grades and built to last.",
    icon: "BrickWall",
    metaTitle: "Block & Retaining Walls in Dallas, TX",
    metaDescription:
      "Concrete block and retaining walls in Dallas, TX. Engineered CMU privacy walls, retaining walls, and garden borders with proper drainage. Free estimates.",
    heroImage: serviceImages["block-walls"],
    heroSubtitle:
      "Retaining walls, privacy walls, and borders built strong and built to code.",
    intro: [
      "Block walls solve real problems around Dallas properties — holding back sloped or terraced yards, adding privacy from neighbors and busy streets, and defining clean garden borders. We build concrete masonry unit (CMU) walls that are engineered for the load they carry and finished to match your home.",
      "A retaining wall is only as good as its footing and drainage. We pour proper concrete footings below frost depth, reinforce the block with steel and grout, and install drainage behind the wall so water pressure doesn't build up and push it out of plumb. Skipping those steps is why so many DIY and cut-rate walls fail.",
      "Beyond function, block walls can be finished with stucco, stone veneer, or decorative caps to look like a designed feature rather than an afterthought. We handle the engineering and permitting where required so your wall is safe, legal, and lasting.",
    ],
    benefits: [
      "Retains soil and manages grade changes on sloped lots",
      "Adds privacy and reduces street and neighbor noise",
      "Long lifespan — decades of service with little upkeep",
      "Low maintenance compared to wood fencing",
      "Fire-resistant and pest-proof CMU construction",
      "Finished with stucco, stone veneer, or decorative caps",
    ],
    processSteps: [
      {
        title: "Engineering & Permits",
        description:
          "For taller or load-bearing walls we coordinate engineering and pull the required permits so the wall is safe and code-compliant.",
      },
      {
        title: "Excavation & Footing",
        description:
          "We excavate the line and pour a reinforced concrete footing sized for the wall's height and the soil conditions.",
      },
      {
        title: "Block Laying",
        description:
          "We lay CMU block course by course, reinforcing with rebar and grouting cells for strength.",
      },
      {
        title: "Cap & Finish",
        description:
          "We cap the wall and apply your chosen finish — stucco, stone veneer, or a clean masonry look.",
      },
      {
        title: "Drainage",
        description:
          "We install gravel backfill and weep holes or drain pipe so water pressure can't build behind the wall.",
      },
    ],
    faq: [
      {
        question: "Do I need a permit for a retaining wall?",
        answer:
          "It depends on height and location. Many cities require permits and engineering for walls over about 4 feet or those retaining a surcharge. We handle the permitting process for you.",
      },
      {
        question: "How tall can a block wall be?",
        answer:
          "Walls can be built quite tall with proper engineering, footings, and reinforcement. Taller walls require an engineer's design, which we coordinate as part of the project.",
      },
      {
        question: "Can the wall be made decorative?",
        answer:
          "Yes. We finish walls with stucco, stone veneer, split-face block, or decorative caps so they complement your home and landscaping.",
      },
      {
        question: "How long does a block wall take to build?",
        answer:
          "A typical residential wall takes several days to a couple of weeks depending on length, height, and finish, plus any permitting and engineering lead time.",
      },
    ],
    relatedServices: ["foundations-slabs", "patios"],
  },
  {
    slug: "foundations-slabs",
    name: "Foundations & Slabs",
    shortDescription:
      "Engineered foundations and slabs built for North Texas clay — post-tension home slabs, garage floors, and shop pads.",
    icon: "Layers",
    metaTitle: "Foundations & Concrete Slabs in Dallas, TX",
    metaDescription:
      "Engineered concrete foundations and slabs in Dallas, TX. Post-tension slabs for clay soil, garage floors, and shop pads, built to code. Free estimates.",
    heroImage: serviceImages["foundations-slabs"],
    heroSubtitle:
      "The most important pour on any project — engineered for North Texas clay soil.",
    intro: [
      "North Texas sits on expansive clay soil that swells when wet and shrinks when dry. That constant movement is hard on concrete, which is why a foundation or slab here has to be engineered for our conditions — not just poured and hoped for. Concrete Pros Of Dallas builds foundations and slabs designed from the soil up to stay flat and stable for the long haul.",
      "For home slabs and large pads we often recommend post-tension construction. Post-tension slabs use steel cables threaded through the concrete and tightened after the pour, putting the slab under compression so it resists the cracking and movement that clay soil causes. We also pour conventional rebar-reinforced slabs for garages, shops, room additions, and outbuildings.",
      "Every foundation we build starts with proper soil evaluation, grading, and drainage, and finishes with correct curing — the steps that determine whether a slab performs for decades or fails early. We build to code and stand behind our work.",
    ],
    benefits: [
      "Engineered specifically for expansive Texas clay soil",
      "Post-tension options for superior crack resistance",
      "Proper drainage and grading to protect the slab",
      "Conventional reinforced slabs for garages and shops",
      "Code-compliant work with inspections coordinated",
      "Backed by a workmanship warranty for peace of mind",
    ],
    processSteps: [
      {
        title: "Soil Test & Engineering",
        description:
          "We evaluate the soil and work from an engineered design so the foundation is sized correctly for your site and load.",
      },
      {
        title: "Excavation",
        description:
          "We clear, cut, and grade the pad, establishing the drainage and elevations the design calls for.",
      },
      {
        title: "Grade Beam / Form",
        description:
          "We dig and form grade beams and the slab perimeter to the engineered layout.",
      },
      {
        title: "Rebar & PT Cables",
        description:
          "We install rebar and, for post-tension slabs, route and position the steel tendons throughout the pad.",
      },
      {
        title: "Pour",
        description:
          "We place and finish the concrete, then stress the post-tension cables once the slab has gained strength.",
      },
      {
        title: "Cure",
        description:
          "We cure the slab correctly to reach full design strength — the step that determines long-term performance.",
      },
    ],
    faq: [
      {
        question: "Post-tension vs. conventional — which do I need?",
        answer:
          "Post-tension slabs handle expansive clay movement better and are common for home foundations and large pads in North Texas. Conventional rebar slabs are well-suited to garages, shops, and additions. Your engineered plan will specify the right approach.",
      },
      {
        question: "How long does a slab take to cure?",
        answer:
          "Concrete is walkable in a day or two and reaches roughly 70% of strength in about a week, with full design strength at around 28 days. We schedule follow-on work accordingly.",
      },
      {
        question: "How thick should a garage or shop slab be?",
        answer:
          "Garage slabs are typically 4 inches; shop floors and slabs that carry heavier equipment or vehicles are poured thicker with added reinforcement based on the load.",
      },
      {
        question: "Do foundation projects need permits?",
        answer:
          "Yes — foundations and slabs require permits and inspections in DFW municipalities. We coordinate the permitting and inspection process as part of the job.",
      },
    ],
    relatedServices: ["driveways", "commercial-concrete"],
  },
  {
    slug: "commercial-concrete",
    name: "Commercial Concrete",
    shortDescription:
      "Parking lots, sidewalks, loading areas, and tilt-wall pads for DFW businesses — done on schedule and built to code.",
    icon: "Building2",
    metaTitle: "Commercial Concrete in Dallas, TX",
    metaDescription:
      "Commercial concrete contractor in Dallas, TX. Parking lots, sidewalks, ADA work, loading areas, and tilt-wall pads. Bonded, insured, fast turnaround.",
    heroImage: serviceImages["commercial-concrete"],
    heroSubtitle:
      "Heavy-load commercial concrete for DFW businesses — on schedule and built to code.",
    intro: [
      "Concrete Pros Of Dallas serves businesses across the DFW metroplex with commercial concrete work sized for real-world traffic and loads. From retail parking lots and sidewalks to warehouse floors, loading docks, dumpster pads, and tilt-wall foundations, we have the crew capacity and equipment to deliver on commercial timelines.",
      "Commercial work comes with requirements residential jobs don't — ADA-compliant ramps and parking, heavy-load slab specs, and tight schedules that can't disrupt your operations longer than necessary. We plan pours in phases, work nights and weekends when needed, and keep your project moving toward inspection and reopening.",
      "We're bonded and insured, we pull and manage permits, and we coordinate with general contractors, property managers, and municipal inspectors so the job goes smoothly from bid to final walk-through.",
    ],
    benefits: [
      "ADA-compliant ramps, parking, and walkways",
      "Heavy-load-rated slabs and pavement sections",
      "Phased scheduling to minimize business downtime",
      "Bonded and fully insured for commercial work",
      "Large crew capacity for big pours and tight timelines",
      "Permit handling and inspection coordination",
    ],
    processSteps: [
      {
        title: "Site Survey",
        description:
          "We visit the site, review plans and existing conditions, and identify access, drainage, and load requirements.",
      },
      {
        title: "Scope & Bid",
        description:
          "We provide a detailed, itemized bid with clear scope, specs, and schedule so there are no surprises.",
      },
      {
        title: "Permits & Scheduling",
        description:
          "We pull permits and build a phased schedule, including night and weekend work where it keeps your business running.",
      },
      {
        title: "Pour Phases",
        description:
          "We execute the pours in planned phases, maintaining access and safety throughout the project.",
      },
      {
        title: "Final Inspection",
        description:
          "We coordinate municipal inspections and walk the finished work with you before turnover.",
      },
    ],
    faq: [
      {
        question: "Can you work nights and weekends?",
        answer:
          "Yes. For active businesses we routinely schedule pours during off-hours to minimize disruption to your customers and operations.",
      },
      {
        question: "Is there a minimum project size?",
        answer:
          "We take on a wide range of commercial work, from a single ADA ramp or dumpster pad to full parking lots and tilt-wall pads. Reach out and we'll let you know how we can help.",
      },
      {
        question: "Do you handle permits and inspections?",
        answer:
          "We do. We pull the required permits and coordinate with municipal inspectors and your project team through final sign-off.",
      },
      {
        question: "What's the timeline for a large pour?",
        answer:
          "Timelines depend on square footage, phasing, and cure requirements. We provide a realistic schedule with your bid and keep you updated as the work progresses.",
      },
    ],
    relatedServices: ["foundations-slabs", "block-walls"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceNav = services.map((s) => ({
  name: s.name,
  slug: s.slug,
}));

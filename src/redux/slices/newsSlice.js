import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      source: {
        id: 1,
        name: "Luxurylaunches.com",
      },
      author: "Sayan Chakravarty",
      title:
        "Mercedes wants the owners of the $150,000 EQS luxury electric-sedan to pay a year subscription of $105 to play Tetris and Sudoku on the car’s infotainment system.",
      description:
        "The automobile industry is going through the biggest transformation phase in history, and it is not limited to...\nThe post Mercedes wants the owners of the $150,000 EQS luxury electric-sedan to pay a year subscription of $105 to play Tetris and Sudoku on the …",
      url: "https://luxurylaunches.com/transport/mercedes-eqs-ota-paid-update-for-games.php",
      urlToImage:
        "https://luxurylaunches.com/wp-content/uploads/2021/08/mercedes-eqs-screen.jpg",
      publishedAt: "2021-08-12T12:24:21Z",
      content:
        "The automobile industry is going through the biggest transformation phase in history, and it is not limited to transitioning towards electric mobility. Tesla is not only credited for fast-tracking th… [+2285 chars]",
    },
    {
      source: {
        id: 2,
        name: "Livemint",
      },
      author: "WSJ",
      title:
        "Bill Gates pledges $1.5 billion for infrastructure bill’s new climate projects",
      description:
        "A Gates-backed venture would apply for matching funds from an Energy Department program that embraces industrial policy",
      url: "https://www.livemint.com/companies/news/bill-gates-pledges-1-5-billion-for-infrastructure-bill-s-new-climate-projects-11628770674672.html",
      urlToImage:
        "https://images.livemint.com/img/2021/08/12/600x338/2021-05-03T212954Z_437190414_RC2L8N9CEPEE_RTRMADP_3_PEOPLE-BILL-GATES-DIVORCE_1621214111655_1628770832393.JPG",
      publishedAt: "2021-08-12T12:21:22Z",
      content:
        "Microsoft Corp. co-founder Bill Gates said his climate investment fund will commit $1.5 billion for joint projects with the U.S. government if Congress enacts a program aimed at developing technologi… [+4782 chars]",
    },
    {
      source: {
        id: 3,
        name: "Seeking Alpha",
      },
      author: "SA Transcripts",
      title:
        "NIO Inc. (NIO) CEO William Li on Q2 2021 Results - Earnings Call Transcript",
      description:
        "NIO Inc. (NYSE:NIO) Q2 2021 Earnings Conference Call August 11, 2021 9:00 PM ETCompany ParticipantsWilliam Li - Founder, Chairman and Chief Executive OfficerSteven Feng - Chief Financial...",
      url: "https://seekingalpha.com/article/4448533-nio-inc-nio-ceo-william-li-on-q2-2021-results-earnings-call-transcript",
      urlToImage:
        "https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png",
      publishedAt: "2021-08-12T12:20:07Z",
      content:
        "NIO Inc. (NYSE:NIO) Q2 2021 Earnings Conference Call August 11, 2021 9:00 PM ET\r\n\nCompany Participants\r\n\nWilliam Li - Founder, Chairman and Chief Executive Officer\r\n\nSteven Feng - Chief Financial Off… [+48633 chars]",
    },
    {
      source: {
        id: 4,
        name: "MarketWatch",
      },
      author: "Ciara Linnane",
      title:
        "Tesla's Musk highlights chip supply issues in early tweet to Cathie Wood",
      description:
        'Tesla Inc. Chief Executive Elon Musk took to Twitter Thursday to highlight continued supply chain issues facing the electric-car maker. Musk responded to a tweet from Cathie Wood, manager of the Ark Innovation ETF , who said Tesla seems to understand "that Ch…',
      url: "https://www.marketwatch.com/story/teslas-musk-highlights-chip-supply-issues-in-early-tweet-to-cathie-wood-2021-08-12",
      urlToImage:
        "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
      publishedAt: "2021-08-12T12:11:32Z",
      content:
        "Tesla Inc. \r\n TSLA,\r\n -0.31%\r\nChief Executive Elon Musk took to Twitter Thursday to highlight continued supply chain issues facing the electric-car maker. Musk responded to a tweet from Cathie Wood, … [+835 chars]",
    },
    {
      source: {
        id: 5,
        name: "Forbes",
      },
      author:
        "Sebastian Blanco, Contributor, \n Sebastian Blanco, Contributor\n https://www.forbes.com/sites/sebastianblanco/",
      title:
        "Electric Land Rover Defender Shows How To Age A Classic Car Gracefully",
      description:
        "Despite the Tesla powertrain hiding inside, you'll never mistake this converted Range Rover Classic for one of Elon Musk's 21st century rides.",
      url: "https://www.forbes.com/sites/sebastianblanco/2021/08/12/electric-land-rover-defender-shows-how-to-age-a-classic-car-gracefully/",
      urlToImage:
        "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6114add2d3fb7138fa1ebd17%2F0x0.jpg",
      publishedAt: "2021-08-12T12:00:00Z",
      content:
        "All-electric Land Rover converted by ECD Automotive.\r\nECD Automotive\r\nDespite the Tesla \r\n TSLA\r\n powertrain hiding inside, you'll never mistake this converted Range Rover Classic for one of Elon Mus… [+5158 chars]",
    },
    {
      source: {
        id: 6,
        name: "New York Times",
      },
      author:
        "Andrew Ross Sorkin, Jason Karaian, Sarah Kessler, Stephen Gandel, Lauren Hirsch, Ephrat Livni and Anna Schaverien",
      title: "The Elan of Elon Musk",
      description:
        "A longtime critic of the Tesla chief executive explains why his bets against the car company haven’t paid off.",
      url: "https://www.nytimes.com/2021/08/12/business/dealbook/carson-block-tesla-elon-musk.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/08/12/business/12db-newsletter-musk/12db-newsletter-musk-facebookJumbo.jpg",
      publishedAt: "2021-08-12T11:53:21Z",
      content:
        "DealBook spoke with Jobys executive chairman, Paul Sciarra, and C.E.O., JoeBen Bevirt, about their journey to the public markets and what lies ahead.\r\nOn lessons learned from the SPAC process:\r\nWhen … [+1615 chars]",
    },
    {
      source: {
        id: 7,
        name: "Yahoo Entertainment",
      },
      author: "ReportLinker",
      title:
        "United States Microgrid Market, By Type, By Consumption Pattern, By Power Source, By End User Industry, By Region, Competition, Forecast & Opportunities, 2016-2026F",
      description:
        "United States Microgrid Market, By Type (Grid Connected, Remote/Island, Hybrid), By Consumption Pattern (Urban & Metropolitan, Semi-urban, Rural/Island), By ...",
      url: "https://finance.yahoo.com/news/united-states-microgrid-market-type-114900633.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/IN3_pUboxxFTZlP4bjcjcQ--~B/aD00MDA7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/globenewswire.com/4ce8962afb8a41766b626a7e61c8413f",
      publishedAt: "2021-08-12T11:49:00Z",
      content:
        "United States Microgrid Market, By Type (Grid Connected, Remote/Island, Hybrid), By Consumption Pattern (Urban &amp; Metropolitan, Semi-urban, Rural/Island), By Power Source (Natural Gas, Diesel, Sol… [+8229 chars]",
    },
    {
      source: {
        id: 8,
        name: "Yahoo Entertainment",
      },
      author: "Research and Markets",
      title:
        "Insights on the Electric Vehicle Global Market to 2030 - Top 10 Countries in Growth and Penetration",
      description:
        'Dublin, Aug. 12, 2021 (GLOBE NEWSWIRE) -- The "Global Electric Vehicle Outlook 2021" report has been added to ResearchAndMarkets.com\'s offering. In 2020, 3.2...',
      url: "https://finance.yahoo.com/news/insights-electric-vehicle-global-market-114800638.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/HP.E8HUfnyGeLtMAKwLgAQ--~B/aD01ODt3PTQ4MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/globenewswire.com/93d5b27580f67db722dd7c112e43e8bc",
      publishedAt: "2021-08-12T11:48:00Z",
      content:
        'Dublin, Aug. 12, 2021 (GLOBE NEWSWIRE) -- The "Global Electric Vehicle Outlook 2021" report has been added to ResearchAndMarkets.com\'s offering.\r\nIn 2020, 3.2 million units were sold, of which 69.4% … [+8604 chars]',
    },
    {
      source: {
        id: 9,
        name: "Mixmag.net",
      },
      author: null,
      title: "The Cause announce fundraiser for drug awareness, 'RAVESAFE'",
      description:
        "Sunday's event will raise money for the LoopContinue reading...",
      url: "https://mixmag.net/read/the-cause-drug-awareness-reduction-the-loop-ravesafe-london-clubbing-news",
      urlToImage:
        "https://mixmag.net/assets/uploads/images/_facebook/220806/ravesafe.jpg",
      publishedAt: "2021-08-12T11:46:00Z",
      content:
        "A fundraiser for drug awareness and harm reduction has been organised by the Cause.\r\nTitled RAVE SAFE, the event will raise money for the drugs awareness and harm prevention non-profit the Loop.\r\nIt … [+1967 chars]",
    },
    {
      source: {
        id: 10,
        name: "Business Standard",
      },
      author: "IANS",
      title: "Tesla files to produce 5 more versions of Model Y SUV in China",
      description:
        "Electric vehicle company Tesla has filed with the Chinese government to produce five more versions of the Model Y electric SUV at Gigafactory Shanghai.",
      url: "https://www.business-standard.com/article/automobile/tesla-files-to-produce-5-more-versions-of-model-y-suv-in-china-121081201035_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/24/full/1600917703-7084.jpg",
      publishedAt: "2021-08-12T10:36:00Z",
      content:
        "Electric vehicle company Tesla has filed with the Chinese government to produce five more versions of the Model Y electric SUV at Gigafactory Shanghai.\r\nAccording to Electrek, some of those variants … [+2607 chars]",
    },
    {
      source: {
        id: 11,
        name: "24/7 Wall St.",
      },
      author: "Douglas A. McIntyre",
      title: "This Is the Best City for Electric Cars",
      description:
        "The top pick for the best cities for electric cars is one of the richest cities in the United States.",
      url: "https://247wallst.com/infrastructure/2021/08/12/san-jose-is-the-best-city-for-electric-cars/",
      urlToImage:
        "https://247wallst.com/wp-content/uploads/2018/11/imageforentry859.jpg",
      publishedAt: "2021-08-12T11:30:25Z",
      content:
        "Nearly every major car manufacturer has rushed into the electric car business. Each wants to catch market leader Tesla, which has dominated the industry for several years, since the demand for electr… [+2354 chars]",
    },
    {
      source: {
        id: 12,
        name: "Checkpoint.com",
      },
      author: null,
      title:
        "July 2021’s Most Wanted Malware: Snake Keylogger Enters Top 10 for First Time",
      description:
        "Check Point Research reports that Trickbot is the most prevalent malware for the third month running, while Snake Keylogger enters the index for the first",
      url: "https://blog.checkpoint.com/2021/08/12/july-2021s-most-wanted-malware-snake-keylogger-enters-top-10-for-first-time/",
      urlToImage:
        "https://blog.checkpoint.com/wp-content/uploads/2021/08/300x200-copy.jpg",
      publishedAt: "2021-08-12T11:26:00Z",
      content:
        "Our latest Global Threat Index for July 2021 has revealed that while Trickbot is still the most prevalent malware, Snake Keylogger, which was first detected in November 2020, has surged into second p… [+9111 chars]",
    },
    {
      source: {
        id: 13,
        name: "Seeking Alpha",
      },
      author: "Jonathan Weber",
      title: "Tesla Stock Forecast: What To Consider For The Rest Of 2021",
      description:
        "Tesla is growing at an attractive pace overall but seems to have some market share issues in China. See what the rest of 2021 may look like for TSLA stock.",
      url: "https://seekingalpha.com/article/4448463-tesla-stock-forecast-rest-of-2021",
      urlToImage:
        "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1327299532/large_image_1327299532.jpg",
      publishedAt: "2021-08-12T11:15:00Z",
      content:
        "jetcityimage/iStock Editorial via Getty Images\r\nArticle Thesis\r\n Tesla, Inc. (TSLA) has generated massive returns in 2020, but 2021 has not been so kind to investors, despite ongoing progress for the… [+10756 chars]",
    },
    {
      source: {
        id: 14,
        name: "bdnews24.com",
      },
      author: null,
      title: "Messi joins crypto craze, taking part of PSG fee in fan tokens",
      description:
        "Football star Lionel Messi's signing on fee at Paris St Germain includes some of the French club's cryptocurrency fan tokens, in the latest big name endorsement for new digital assets.",
      url: "https://bdnews24.com/sport/2021/08/12/messi-joins-crypto-craze-taking-part-of-psg-fee-in-fan-tokens",
      urlToImage:
        "https://d30fl32nd2baj9.cloudfront.net/media/2021/08/12/messi-joins-psg-120821-01.jpg/ALTERNATES/w640/messi-joins-psg-120821-01.jpg",
      publishedAt: "2021-08-12T11:12:23Z",
      content:
        "The Argentine, 34, left Spanish side Barcelona and signed a two-year contract with Paris St Germain (PSG), with an option for a third year, on Tuesday.\r\nConfirming an exclusive Reuters report, PSG sa… [+2112 chars]",
    },
    {
      source: {
        id: 15,
        name: "Euronews",
      },
      author: "Chloe Orji",
      title:
        "Through the keyhole: What it's like to live in this prefab home like Tesla boss Elon Musk",
      description:
        'Billionaire Elon Musk is reported to be the "top secret customer" who lives in one of these 34 square-metre units.',
      url: "https://www.euronews.com/next/2021/08/12/through-the-keyhole-what-it-s-like-to-live-in-this-prefab-home-like-tesla-boss-elon-musk",
      urlToImage:
        "https://static.euronews.com/articles/stories/05/98/17/64/1000x563_cmsv2_d90d9bba-55f6-5877-bb52-66502b8b13b9-5981764.jpg",
      publishedAt: "2021-08-12T11:10:32Z",
      content:
        "At just 34 square metres, the Casita prefab home has one key aim: significantly lowering the cost of home ownership for everyone.\r\nThese minute homes, created by Las Vegas-based company Boxabl, inclu… [+2881 chars]",
    },
    {
      source: {
        id: 16,
        name: "The Boston Globe",
      },
      author: "Hiawatha Bray",
      title:
        "Despite all the hype, electric cars are no easy fix for the climate crisis. Here’s why",
      description:
        "Electric vehicles remain a hard sell for consumers: They are more expensive than many popular gas or hybrid models, and they take too long to charge.",
      url: "https://www.bostonglobe.com/2021/08/12/business/despite-all-hype-electric-cars-are-no-easy-fix-climate-crisis-heres-why/",
      urlToImage:
        "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/rwR4IWa3m-XZgMJ_XyD5I0ONoNo=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/LYZLCMCYV3CQ2XOEAG4BT5S2EM.jpg",
      publishedAt: "2021-08-12T11:00:02Z",
      content:
        "To convert to even a majority of electric vehicles will take significantly longer than 2030 or 2040, said Mike Fiske, automotive industry analyst for IHS Markit in Southfield, Mich. It is going to be… [+5692 chars]",
    },
    {
      source: {
        id: 17,
        name: "Autoblog",
      },
      author: "John Beltz Snyder",
      title: "2021 Mustang Mach-E vs 2021 Volkswagen ID.4 Comparison Test",
      description:
        "Filed under:\nGreen,Ford,Volkswagen,New Car Reviews,Crossover,Electric,Comparison\n\nContinue reading 2021 Mustang Mach-E vs 2021 Volkswagen ID.4 Comparison Test\n\n2021 Mustang Mach-E vs 2021 Volkswagen ID.4 Comparison Test originally appeared on Autoblog on Thu,…",
      url: "https://www.autoblog.com/2021/08/12/ford-mustang-mach-e-vs-volkswagen-id4-comparison-review/",
      urlToImage:
        "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2021/08/03212645/2021-Volkswagen-ID4-vs-2021-Ford-Mustang-Mach-E-01.jpg.jpg",
      publishedAt: "2021-08-12T11:00:00Z",
      content:
        "Since Dieselgate, Volkswagen has been loudly proclaiming its electric future, with multiple planned electric vehicles in the next few years. The first one of its new ID-branded EVs for the United Sta… [+9396 chars]",
    },
    {
      source: {
        id: 18,
        name: "Infosecurity Magazine",
      },
      author: "Sophia Waterfield",
      title: "Accenture Tied Up in $50M Ransom Lockbit 2.0 Attack",
      description:
        "The global consulting firm has been hit by the LockBit ransomware gang, according to the cybercriminal group's website",
      url: "https://www.infosecurity-magazine.com/news/accenture-tied-up-in-50m-ransom/",
      urlToImage:
        "https://assets.infosecurity-magazine.com/webpage/og/699702f4-3610-49bc-b47a-cd6034e3ad6b.jpg",
      publishedAt: "2021-08-12T10:56:00Z",
      content:
        "Global consulting firm Accenture has been the target of ransomware group Lockbit, with the gang reportedly taking encrypted data from the company.\r\nLockbit says it will publish the data if Accenture … [+4683 chars]",
    },

  ],
};

const news = createSlice({
  name: "newsSlice",
  initialState: initialState,
  reducers: {},
});

const { actions, reducer } = news;
export { actions as NewsAction, reducer as NewsReducer };

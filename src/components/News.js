import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "cnn",
  //       name: "CNN",
  //     },
  //     author: "Aimee Lewis,Matt Foster",
  //     title:
  //       "Wrexham secures promotion in front of jubilant owners Ryan Reynolds and Rob McElhenney - CNN",
  //     description:
  //       "Wrexham fans will likely be singing into the night, serenading their famous owners in the process, because the wait for promotion is finally over.",
  //     url: "https://www.cnn.com/2023/04/22/football/wrexham-promotion-ryan-reynolds-rob-mcelhenney-spt-intl/index.html",
  //     urlToImage:
  //       "https://media.cnn.com/api/v1/images/stellar/prod/230422161441-05-wrexham-boreham-wood-042223-restricted.jpg?c=16x9&q=w_800,c_fill",
  //     publishedAt: "2023-04-23T04:11:00Z",
  //     content:
  //       "Racecourse Ground, WrexhamCNN\r\n  — \r\nWrexham fans will likely be singing into the night, serenading their famous owners in the process, because the wait for promotion is finally over. \r\nOn a raucous … [+5896 chars]",
  //   },
  //   {
  //     source: {
  //       id: "financial-times",
  //       name: "Financial Times",
  //     },
  //     author: "Samer Al-Atrush, Leila Abboud, Andres Schipani, Jim Pickard",
  //     title:
  //       "US military evacuates embassy officials from Sudan after week of violence - Financial Times",
  //     description:
  //       "The American operation came as Saudi Arabia sent a navy ship to extract 157 people",
  //     url: "https://www.ft.com/content/9cac81d2-8aad-4a94-a0b4-a165a613a17b",
  //     urlToImage:
  //       "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F03af60f6-27af-4a7d-887a-b337f15c2198.jpg?source=next-opengraph&fit=scale-down&width=900",
  //     publishedAt: "2023-04-23T03:48:43Z",
  //     content:
  //       "The US military evacuated embassy officials from the Sudanese capital of Khartoum on Saturday as nations moved to extract their citizens after a week of battles.\r\nLate on Saturday, the White House sa… [+2307 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ESPN",
  //     },
  //     author: "Mike Coppinger, Ben Baby",
  //     title:
  //       "Garcia vs. Davis: Live updates, fight results, boxing analysis - ESPN",
  //     description:
  //       "Gervonta Davis scored a knockout victory over Ryan Garcia in one of the most anticipated fights of 2023.",
  //     url: "https://www.espn.com/boxing/story/_/id/36244012/gervonta-tank-davis-ryan-garcia-live-boxing-ppv-results-round-round-analysis",
  //     urlToImage:
  //       "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0423%2Fr1163102_1296x729_16%2D9.jpg",
  //     publishedAt: "2023-04-23T03:16:20Z",
  //     content:
  //       'LAS VEGAS -- Ryan Garcia took a beat, then dropped to one knee, the delayed effect of a stinging liver shot from Gervonta "Tank" Davis that floored Garcia for the second time in their super fight on … [+917 chars]',
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "Jack Baer",
  //     title:
  //       "NBA playoffs: Dillon Brooks ejected for LeBron James low blow after Grizzlies' single-digit 1st quarter - Yahoo Sports",
  //     description: "Dillon Brooks has had better games.",
  //     url: "https://sports.yahoo.com/nba-playoffs-dillon-brooks-ejected-for-lebron-james-low-blow-in-runaway-lakers-win-025951518.html",
  //     urlToImage:
  //       "https://s.yimg.com/ny/api/res/1.2/aEfEy4tquCK_ncsk2bV.0A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-04/93f294a0-e182-11ed-bfd3-c27ff287f355",
  //     publishedAt: "2023-04-23T02:59:00Z",
  //     content:
  //       "Dillon Brooks has had better nights. (Photo by Justin Ford/Getty Images)\r\nDillon Brooks said he likes to poke bears. He might have taken that a little too literally on Saturday in a 111-101 Los Angel… [+4389 chars]",
  //   },
  //   {
  //     source: {
  //       id: "cnn",
  //       name: "CNN",
  //     },
  //     author: "Max Foster,Larry Register,Heather Chen",
  //     title:
  //       "Meghan living 'life in the present,' amid reports of post-Oprah letter to King Charles - CNN",
  //     description:
  //       'Meghan, the wife of the UK\'s Prince Harry, has hit out at the British media following reports that she sent a letter to her father-in-law, now King Charles, expressing concern over "unconscious bias" within the royal family.',
  //     url: "https://www.cnn.com/2023/04/22/entertainment/meghan-markle-king-charles-letter-update-intl-hnk/index.html",
  //     urlToImage:
  //       "https://media.cnn.com/api/v1/images/stellar/prod/230422211303-meghan-markle-file-2022.jpg?c=16x9&q=w_800,c_fill",
  //     publishedAt: "2023-04-23T02:23:00Z",
  //     content:
  //       "Meghan, the wife of the UKs Prince Harry, has hit out at the British media following reports that she sent a letter to her father-in-law, now King Charles, expressing concern over unconscious bias wi… [+2312 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ESPN India",
  //     },
  //     author: "Tim MacMahon",
  //     title:
  //       "Grizzlies' Ja Morant (hand) returns to start in Game 3 vs. Lakers - ESPN India",
  //     description:
  //       "Memphis Grizzlies star Ja Morant, who missed Game 2 due to a bruised right hand, will return to the starting lineup for Saturday night's Game 3 against the Los Angeles Lakers.",
  //     url: "https://www.espn.in/nba/story/_/id/36267151/grizzlies-ja-morant-hand-back-start-game-3-vs-lakers",
  //     urlToImage:
  //       "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0407%2Fr1155758_1296x729_16%2D9.jpg",
  //     publishedAt: "2023-04-23T01:17:55Z",
  //     content:
  //       "LOS ANGELES -- Memphis superstar Ja Morant will play in Game 3 against the Lakers, the Grizzlies announced an hour before Saturday's tipoff at Crypto.com Arena.\r\nMorant, who was sidelined in Game 2 d… [+560 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Daily Beast",
  //     },
  //     author: "Victor Swezey",
  //     title:
  //       "Elon Musk Backs Off 'Legacy Checkmark' Purge, Re-Verifies Platform's Biggest Celebs - The Daily Beast",
  //     description:
  //       "Across Twitter on Saturday, some of the platform’s biggest names expressed surprise when their fickle checkmarks suddenly reappeared.",
  //     url: "https://www.thedailybeast.com/elon-musks-backs-off-legacy-checkmark-purge-re-verifies-platforms-biggest-celebs",
  //     urlToImage:
  //       "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1969,w_3500,x_0,y_48/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1682211287/2023-04-20T185240Z_70366091_RC2HI0AQ1EXW_RTRMADP_3_TESLA-RESULTS-GOALS_gdrzs9",
  //     publishedAt: "2023-04-23T01:12:39Z",
  //     content:
  //       "After approximately two days of purging legacy checkmarks, Twitter CEO Elon Musk appears to be waving the white flag.\r\nAcross Twitter on Saturday, some of the platforms biggest names, from Stephen Ki… [+2353 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "The Philadelphia Inquirer",
  //     },
  //     author: "David Murphy",
  //     title:
  //       "Quick thoughts: Sixers’ sweep of the Nets gives Joel Embiid plenty time to heal - The Philadelphia Inquirer",
  //     description:
  //       "James Harden, Tyrese Maxey, and Tobias Harris picked up the scoring load, and Paul Reed grabbed 15 rebounds and was plus-7 while starting in place of Embiid.",
  //     url: "https://www.inquirer.com/sports/76ers-nets-sweep-takeaways-20230422.html",
  //     urlToImage:
  //       "https://www.inquirer.com/resizer/iNTrn9V2Z-BJC4UCbsRfiYH4KuY=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/BXRXFR2D6BFMXLFVM2K2NCHENI.jpg",
  //     publishedAt: "2023-04-23T01:05:28Z",
  //     content:
  //       "NEW YORK They needed this before Joel Embiid was injured. Afterwards, they might not have been able to live without it. One day after learning that their MVP-contending big man would be sidelined ind… [+2827 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "KSAT San Antonio",
  //     },
  //     author: "Cody King",
  //     title:
  //       "6 cattle found dead in 3 Texas counties, all with their tongues missing - KSAT San Antonio",
  //     description:
  //       "No signs of struggle, no blood spills, and no noticeable tracks. Authorities in Texas have little to go on in their investigation after six cattle were found dead in three separate counties, all with their tongues missing.",
  //     url: "https://www.ksat.com/news/local/2023/04/23/6-cattle-found-dead-in-3-texas-counties-all-with-their-tongues-missing/",
  //     urlToImage:
  //       "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/JPAKXRHYLRGYNM3ORHQKA7KUTQ.jpg?_a=ATCqVhC0",
  //     publishedAt: "2023-04-23T00:57:40Z",
  //     content:
  //       "No signs of struggle, no blood spills, and no noticeable tracks. Authorities in Texas have little to go on in their investigation after six cattle were found dead in three separate counties, all with… [+1746 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-washington-post",
  //       name: "The Washington Post",
  //     },
  //     author: "Tyler Pager, Michael Scherer",
  //     title:
  //       "Inside the final days before Biden announces his reelection bid - The Washington Post",
  //     description:
  //       "The last-minute scramble as Biden looks to release a video Tuesday officially declaring his 2024 candidacy",
  //     url: "https://www.washingtonpost.com/politics/2023/04/22/biden-reelection-2024-rushed/",
  //     urlToImage:
  //       "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KDT426ZWUISO3FGHE4TOI5AU4E.JPG&w=1440",
  //     publishedAt: "2023-04-23T00:50:00Z",
  //     content:
  //       "Comment on this story\r\nComment\r\nBy the time Air Force One returned from Ireland in the pre-dawn hours of April 15, President Bidens plans to announce his reelection campaign were already in motion.\r\n… [+10582 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "YouTube",
  //     },
  //     author: null,
  //     title:
  //       "U.S. Supreme Court Blocks Ruling Limiting Access To Abortion Pill | Abortion Pill U.S. Supreme Court - CNN-News18",
  //     description:
  //       "U.S. Supreme Court Blocks Ruling Limiting Access To Abortion Pill | Abortion Pill U.S. Supreme CourtThe supreme court decided on Friday to temporarily block ...",
  //     url: "https://www.youtube.com/watch?v=AaFBq4csAk8",
  //     urlToImage: "https://i.ytimg.com/vi/AaFBq4csAk8/maxresdefault_live.jpg",
  //     publishedAt: "2023-04-23T00:45:23Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Page Six",
  //     },
  //     author: "Tamantha Ryan",
  //     title:
  //       "Ariana Madix takes girls' trip to England with Katie, Dayna post-Scandoval - Page Six",
  //     description:
  //       "The “Vanderpump Rules” star traveled to England with Katie Maloney, Dayna Kathan and Raleigh Seldon for James Baker and Courtney Berman’s wedding.",
  //     url: "https://pagesix.com/2023/04/22/ariana-madix-takes-girls-trip-to-england-post-scandoval/",
  //     urlToImage:
  //       "https://pagesix.com/wp-content/uploads/sites/3/2023/04/NYPICHPDPICT000010023314.jpg?quality=75&strip=all&w=1200",
  //     publishedAt: "2023-04-22T23:56:00Z",
  //     content:
  //       "Ariana Madix is not taking her problems with her across the pond.\r\nThe “Vanderpump Rules” star traveled abroad to England with pals Katie Maloney, Dayna Kathan and Raleigh Seldon for James Baker and … [+2240 chars]",
  //   },
  //   {
  //     source: {
  //       id: "cbs-news",
  //       name: "CBS News",
  //     },
  //     author: null,
  //     title:
  //       "Explorers locate WWII ship sunk with over 1,000 Allied POWs - CBS News",
  //     description: "Those killed included 1,080 people from 14 nations.",
  //     url: "https://www.cbsnews.com/news/explorers-locate-wwii-ship-sunk-with-over-1000-allied-pows/",
  //     urlToImage:
  //       "https://assets1.cbsnewsstatic.com/hub/i/r/2023/04/22/9230f98d-4b38-4b21-b0fd-6a104e263936/thumbnail/1200x630/f8347a81656c50956c7bf979d44d6e8c/ap23112385899473.jpg",
  //     publishedAt: "2023-04-22T23:47:00Z",
  //     content:
  //       "A team of explorers announced it found a sunken Japanese ship that was transporting Allied prisoners of war when it was torpedoed off the coast of the Philippines in 1942, resulting in Australia's la… [+1733 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "BBC News",
  //     },
  //     author: "https://www.facebook.com/bbcnews",
  //     title: "Sudan crisis: Egypt's dilemma over the fighting - BBC",
  //     description:
  //       "The fighting has sent shockwaves through the region but Egypt seems paralysed over what to do.",
  //     url: "https://www.bbc.com/news/world-africa-65351460",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/1155C/production/_129440017_3136672748cf1f1b08b221a5ddbf21ade9a8e6a1173_152_1019_5731000x563.jpg",
  //     publishedAt: "2023-04-22T23:25:27Z",
  //     content:
  //       "In our series of letters from African journalists, Egyptian Magdi Abdelhadi looks at the fallout of the Sudanese crisis for his country.\r\nSudan's powerful neighbour to the north is watching what is g… [+5485 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "fox8.com",
  //     },
  //     author: "Jordan Unger, Laura Morrison",
  //     title:
  //       "Look to the sky: Lyrids meteor shower to show up overnight - WJW FOX 8 News Cleveland",
  //     description:
  //       "The Lyrids meteor shower, one of the oldest known meteor showers will be lighting up the night sky this weekend, but will we be able to see it here in Northeast Ohio?",
  //     url: "https://fox8.com/news/lyrids-meteor-shower-this-weekend-will-northeast-ohio-see-it/",
  //     urlToImage:
  //       "https://fox8.com/wp-content/uploads/sites/12/2023/04/GettyImages-1026811196-1.jpg?w=1280",
  //     publishedAt: "2023-04-22T23:20:00Z",
  //     content:
  //       "**Related Video Above: Moon halo seen above Northeast Ohio in November.**\r\nCLEVELAND (WJW) – Look up! One of the oldest known meteor showers will be lighting up the night sky this weekend.\r\nAccording… [+1023 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "BBC News",
  //     },
  //     author: "https://www.facebook.com/bbcnews",
  //     title: "Barry Humphries: Dame Edna Everage comedian dies at 89 - BBC",
  //     description:
  //       'Tributes paid to "savagely funny" Australian entertainer whose characters were loved by millions.',
  //     url: "https://www.bbc.com/news/entertainment-arts-65328507",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/2F6D/production/_129414121_gettyimages-526509642.jpg",
  //     publishedAt: "2023-04-22T23:00:36Z",
  //     content:
  //       "Media caption, Watch: Dame Edna's funniest moments in 80 seconds\r\nAustralian entertainer Barry Humphries, best known for his comic character Dame Edna Everage, has died aged 89.\r\nThe star had been in… [+6018 chars]",
  //   },
  //   {
  //     source: {
  //       id: "associated-press",
  //       name: "Associated Press",
  //     },
  //     author: null,
  //     title:
  //       "Bud Light exec takes leave after boycott calls, reports say - The Associated Press",
  //     description:
  //       "NEW YORK (AP) — The marketing executive who oversaw a partnership between Bud Light and a transgender influencer is taking a leave of absence after it snowballed into cries for boycotts from some angry customers, according to media reports.",
  //     url: "https://apnews.com/article/bud-light-transgender-influencer-partnership-marketing-executive-234ac7cf05d2124ed6ff7162e4771a43",
  //     urlToImage:
  //       "https://storage.googleapis.com/afs-prod/media/46d0245a46b34d70addaaa2c22f857ee/3000.webp",
  //     publishedAt: "2023-04-22T22:05:09Z",
  //     content:
  //       "NEW YORK (AP) The marketing executive who oversaw a partnership between Bud Light and a transgender influencer is taking a leave of absence after it snowballed into cries for boycotts from some angry… [+1872 chars]",
  //   },
  //   {
  //     source: {
  //       id: "cbs-news",
  //       name: "CBS News",
  //     },
  //     author: "Simrin Singh",
  //     title:
  //       "Florida DoorDash driver kidnapped and sexually assaulted during delivery, police say - CBS News",
  //     description:
  //       "The victim's family rescued her from the attacker after tracking her cell phone location, police said.",
  //     url: "https://www.cbsnews.com/news/doordash-driver-tampa-florida-kidnapped-sexually-assaulted-suspect-arrested/",
  //     urlToImage:
  //       "https://assets2.cbsnewsstatic.com/hub/i/r/2023/04/22/fb436ace-60e5-4274-8a47-9a9c6bbb115c/thumbnail/1200x630/c4eff1d55a201cfe59e65d4f51c5be74/gettyimages-1291135403-3.jpg",
  //     publishedAt: "2023-04-22T21:39:02Z",
  //     content:
  //       "A man was arrested Friday in Tampa, Florida, on allegations of kidnapping and sexually assaulting a DoorDash driver who was attempting to make a delivery earlier this week, authorities said.\r\nJoseph … [+2097 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-hill",
  //       name: "The Hill",
  //     },
  //     author: "Steff Danielle Thomas",
  //     title:
  //       "Tennessee governor to address gun reform, public safety in special session - The Hill",
  //     description:
  //       "Tennessee Gov. Bill Lee (R) is set to call a special session of the state legislature to address gun reform and public safety following a school shooting in Nashville nearly a month ago. During the special session, which Lee’s office announced Friday, the gov…",
  //     url: "https://thehill.com/homenews/state-watch/3964397-tennessee-governor-to-address-gun-reform-public-safety-in-special-session/",
  //     urlToImage:
  //       "https://thehill.com/wp-content/uploads/sites/2/2023/04/AP23038094196214-e1682196189975.jpg?w=1280",
  //     publishedAt: "2023-04-22T21:08:00Z",
  //     content:
  //       "Skip to content\r\nTennessee Gov. Bill Lee (R) is set to call a special session of the state legislature to address gun reform and public safety following a school shooting in Nashville nearly a month … [+2173 chars]",
  //   },
  // ];
  constructor() {
    super();
    this.state = {
      articles: /*this.articles*/ [],
    };
  }

 async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2f63ca2e24ad436d8a67070c3f71342d";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApex - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,60):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
        </div>
      </div>
    )
  }
}

export default News;

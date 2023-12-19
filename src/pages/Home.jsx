import { FeatureContainer } from "../components"
import {useState} from "react"

const Home = () => {
  const [games, setGames] = useState([
		{
			"GAMEID": 1,
			"NAME": "Alan Wake 2",
			"PRICE": 1124750,
			"SUMMARY": "Saga Anderson arrives to investigate ritualistic murders in a small town. Alan Wake pens a dark story to shape the reality around him. These two heroes are somehow connected. Can they become the heroes they need to be?",
			"DESCRIPTION": "<b>Alan Wake 2</b>\r\nA string of ritualistic murders threatens Bright Falls, a small-town community surrounded by Pacific Northwest wilderness. Saga Anderson, an accomplished FBI agent with a reputation for solving impossible cases arrives to investigate the murders. Anderson’s case spirals into a nightmare when she discovers pages of a horror story that starts to come true around her.<br>\r\nAlan Wake, a lost writer trapped in a nightmare beyond our world, writes a dark story in an attempt to shape the reality around him and escape his prison. With a dark horror hunting him, Wake is trying to retain his sanity and beat the devil at his own game.<br>\r\nAnderson and Wake are two heroes on two desperate journeys in two separate realities, connected at heart in ways neither of them can understand: reflecting each other, echoing each other, and affecting the worlds around them.<br>\r\nFueled by the horror story, supernatural darkness invades Bright Falls, corrupting the locals and threatening the loved ones of both Anderson and Wake. Light is their weapon—and their safe haven — against the darkness they face. Trapped in a sinister horror story where there are only victims and monsters, can they break out to be the heroes they need to be?\r\n<b>Solve a Deadly Mystery</b>\r\nWhat begins as a small-town murder investigation rapidly spirals into a nightmare journey. Uncover the source of the supernatural darkness in this psychological horror story filled with intense suspense and unexpected twists.\r\n<b>Play As Two Characters</b>\r\nExperience both Alan Wake’s and Saga Anderson’s stories and see events unfold from different perspectives. Switch between Anderson’s life-or-death race to solve the case and Wake’s desperate attempts to rewrite his reality to escape the depths of the Dark Place.\r\n<b>Explore Two Worlds</b>\r\nExperience two beautiful yet terrifying worlds, each with its own rich cast of characters and deadly threats. Discover majestic landscapes of Cauldron Lake in the Pacific Northwest and the idyllic towns of Bright Falls and Watery. Contrasting sharply, attempt to escape the nightmarish cityscape of the Dark Place.\r\n<b>Survive With Light</b>\r\nWith limited resources, take on powerful supernatural enemies in desperate close-combat situations. It takes more than just a gun to survive: light is the ultimate weapon in the fight against the darkness and will be your refuge when enemies threaten to overwhelm you.",
			"RELEASEDAY": "2023-10-26T17:00:00.000Z",
			"COVERIMAGEURL": "https://www.gamerguides.com/assets/guides/resize-x700/322/covers/fbd0dcc88b31805fc7d49f59b8e0e5d0276403cde7fb8cc8.png",
			"FEATUREIMAGEURL": "https://i0.wp.com/xboxera.com/wp-content/uploads/2023/10/Alan_Wake_2_keyart-2-e1698131792386.png?fit=1920%2C1080&ssl=1",
			"ISFEATURE": "y",
			"PUBLISHERID": 1,
			"DEVELOPERID": 1
		},
		{
			"GAMEID": 2,
			"NAME": "Assassin’s Creed Mirage",
			"PRICE": 1490000,
			"SUMMARY": "Are you ready to give up who you once thought you were and walk the path of shadows? Elevate your Assassin’s Creed Mirage experience with the Master Assassin Edition, which includes the base game, the Deluxe Pack, and five other packs.",
			"DESCRIPTION": "<b>Assassin’s Creed Mirage Master Assassin Edition</b>\r\nIncludes the base game and six additional packs:\r\n<ul>\r\n    <li>Deluxe Pack: Prince of Persia–inspired pack containing an outfit, a sword, a dagger, a mount skin, an eagle skin, a talisman, and an outfit dye.</li>\r\n    <li>Lightning Pack: Deadly weapons pack containing both a sword and a dagger.</li>\r\n    <li>Jinn Pack: Dress yourself as a jinni with this pack containing an outfit, a sword, and a dagger.</li>\r\n    <li>Fire Demon Pack: Summon devilish monsters from the underworld with this pack containing an outfit, a sword, a dagger, a mount skin, an eagle skin, and an outfit dye.</li>\r\n    <li>Master Assassin Pack: Contains four iconic Assassin robes.</li>\r\n    <li>Guardian Pack: Dress yourself as a guardian of the old temple with this pack containing a costume and a mount skin.</li>\r\n</ul>\r\nAlso includes a digital art book and selected game soundtrack, accessible here: assassinscreedmirage.com/digital-artbook<br>\r\nExperience the story of Basim, a cunning street thief seeking answers and justice as he navigates the bustling streets of ninth-century Baghdad. Through a mysterious, ancient organization known as the Hidden Ones, he will become a deadly Master Assassin and change his fate in ways he never could have imagined.\r\n<ul>\r\n\t<li>Experience a modern take on the iconic features and gameplay that have defined a franchise for 16 years.</li>\r\n    <li>Parkour seamlessly through the city and stealthily take down targets with more visceral assassinations than ever before.</li>\r\n    <li>Explore an incredibly dense and vibrant city whose inhabitants react to your every move, and uncover the secrets of four unique districts as you venture through the Golden Age of Baghdad.</li>\r\n</ul>",
			"RELEASEDAY": "2023-11-13T17:00:00.000Z",
			"COVERIMAGEURL": "https://cdn1.epicgames.com/offer/9bcf5a4dc1d54cb6ab1a42f3a70c5cf4/Carousel_BoxArt_1200x1600_1200x1600-7098397fa5b2007b686dc31009bd5055",
			"FEATUREIMAGEURL": "https://cdn2.unrealengine.com/egs-ac-mirage-master-assassin-carousel-desktop-1920x1080-f59246bac188.jpg?h=720&quality=medium&resize=1&w=1280",
			"ISFEATURE": "y",
			"PUBLISHERID": 2,
			"DEVELOPERID": 2
		},
		{
			"GAMEID": 3,
			"NAME": "Grand Theft Auto V",
			"PRICE": 455000,
			"SUMMARY": "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
			"DESCRIPTION": "<b>Grand Theft Auto V: Premium Edition</b>\r\nThe Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Doomsday Heist, Gunrunning, Smuggler’s Run, Bikers and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.\r\n<b>GRAND THEFT AUTO V</b>\r\nWhen a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other.\r\n<b>GRAND THEFT AUTO ONLINE</b>\r\nDiscover an ever-evolving world of choices and ways to play as you climb the criminal ranks of Los Santos and Blaine County in the ultimate shared Online experience.\r\n<b>THE CRIMINAL ENTERPRISE STARTER PACK</b>\r\nThe Criminal Enterprise Starter Pack is the fastest way for new GTA Online players to jumpstart their criminal empires with the most exciting and popular content plus $1,000,000 bonus cash to spend in GTA Online - all content valued at over GTA $10,000,000 if purchased separately.<br>\r\n<b>LAUNCH YOUR CRIMINAL EMPIRE</b>\r\nLaunch business ventures from your Maze Bank West Executive Office, research powerful weapons technology from your underground Gunrunning Bunker and use your Counterfeit Cash Factory to start a lucrative counterfeiting operation.\r\n<b>A FLEET OF POWERFUL VEHICLES</b>\r\nTear through the streets with a range of 10 high performance vehicles including a Supercar, Motorcycles, the weaponized Dune FAV, a Helicopter, a Rally Car and more. You’ll also get properties including a 10 car garage to store your growing fleet.\r\n<b>WEAPONS, CLOTHING & TATTOOS</b>\r\nYou’ll also get access to the Compact Grenade Launcher, Marksman Rifle and Compact Rifle along with Stunt Racing Outfits, Biker Tattoos and more.",
			"RELEASEDAY": "2013-09-16T17:00:00.000Z",
			"COVERIMAGEURL": "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg",
			"FEATUREIMAGEURL": "https://c.wallhere.com/photos/17/fb/grand_theft_auto_v_gta_v_franklin_clinton_michael_de_santa_trevor_phillips-1011212.jpg!d",
			"ISFEATURE": "y",
			"PUBLISHERID": 3,
			"DEVELOPERID": 3
		}
	])
  return (
    <div className="h-screen">
      <h2 className="font-bold text-white text-3xl">Featured Games</h2>
      <FeatureContainer featureGames={games} />
    </div>
  )
}

export default Home 
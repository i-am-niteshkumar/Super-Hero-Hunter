const superHero=["Spidey","Captain America","Superman","Batman","Captain Thunder","Hulk","Wade","Storm",
"Daredevil","Flash","Wanda Maximoff","Mystique","Luke Cage","Martian Manhunter","Vision","Shuri","Gamora","Gambit","Xavier","Cyborg","Black Canary","Catwoman","Groot","Iron Man","Wonder Woman","Sam Wilson","Fantastic Four","Ant-Man","Aquaman","Asterix",
"The Atom","The Avengers","Batgirl","Batman","Batwoman","Black Canary","Black Panther","Captain America","Captain Marvel","Catwoman","Conan the Barbarian","Daredevil","The Defenders","Doc Savage","Doctor Strange","Elektra","Fantastic Four","Ghost Rider",
"Green Arrow","Green Lantern","Guardians the Galaxy","Hawkeye","Hellboy","Incredible Hulk","Iron Fist","Iron Man","Marvelman","Robin","The Rocketeer","The Shadow","Spider-Man","Sub-Mariner","Supergirl","Superman","Teenage Mutant Ninja Turtles","Thor","The Wasp","Watchmen","Wolverine","Wonder Woman","X-Men","Zatanna",
"Zatara","Aaron Stack","Abomination (Emil Blonsky)","Abomination (Ultimate)","Absorbing Man","Abyss","Abyss (Age of Apocalypse)","Adam Destine","Adam Warlock","Aegis (Trey Rollins)"
,"Ant-Man (Hank Pym)","Ant-Man (Scott Lang)","Anthem","Apocalypse","Apocalypse (Ultimate)","Aqueduct","Arachne","Araña","Arcade","Arcana","Archangel","Arclight","Ares","Argent","Armadillo","Armor (Hisako Ichiki)","Armory","Arnim Zola","Arsenic","Artiee","Asgardian","Askew-Tronics","Asylum","Atlas ","Attuma","Aurora","Avalanche","Avengers","Avengers","Azazel"
,"Baron Zemo (Heinrich Zemo)","Baron Zemo (Helmut Zemo)","Baroness S'Bak","Barracuda","Bart Rozum","Bastion","Batroc the Leaper","Battering Ram","Battlestar","Beak","Beast","Beast (Earth-311)","Beast (Ultimate)","Becatron","Bedlam","Beef"
,"Beetle (Abner Jenkins)","Belasco","Ben Grimm","Ben Parker","Ben Reilly","Ben Urich","Bengal","Beta-Ray Bill","Bethany Cabe","Betty Brant","Betty Ross","Beyonder","Bi-Beast","Big Bertha","Big Wheel","Bill Hollister","Bishop"
,"Bishop (Ultimate)","Black Bird","Black Bolt","Black Bolt (Marvel War of Heroes)","Black Cat","Black Cat (Ultimate)","Black Crow","Black Knight (Dane Whitman)","Black Knight (Sir Percy of Scandia)","Black Panther","Black Panther (Shuri)","Black Panther (Ultimate)","Black Queen","Black Tarantula","Black Tom","Black Widow","Black Widow (LEGO Marvel Super Heroes)","Black Widow (Ultimate)","Black Widow (Yelena Belova)","Black Widow/Natasha Romanoff (MAA)","Blackheart","Blacklash"
,"Blackout","Blade","Blastaar","Catseye","Cecilia Reyes","Celestials","Centennial","Centurions","Cerebro","Cerise","Ch'od","Chamber","Chameleon","Champions","Changeling","Charles Xavier","Charlie Campion","Charlie-27","Chase Stein"
,"Venom (Flash Thompson)","Venom (Mac Gargan)","Venom (Ultimate)","Venus (Siren)","Venus Dee Milo","Vermin (Edward Whelan)","Vertigo (Savage Land Mutate)"
,"White Queen (Adrienne Frost)","White Tiger (Angela Del Toro)","White Tiger (USM)","Whizzer (Stanley Stewart)","Wiccan","Wild Child","Wild Child (Age of Apocalypse)","Wild Pack","Wildside","William Stryker","Wilson Fisk"
,"X-Cutioner","X-Factor","X-Factor Investigations","X-Force","X-Man","X-Men","X-Men (Ultimate)","X-Ray (James Darnell)","X-Statix","X.S.E.","Xavin","Xorn (Kuan-Yin Xorn)"
"Zaran","Zarda","Zarek","Zeigeist","Zemo","Zeus","Zodiak","Zombie (Simon Garth)","Zuras","Zzzax",
"Thor (Marvel War of Heroes)","Thor (Marvel: Avengers Alliance)","Thor (Ultimate)","Thor Girl","Thunderball","Thunderbird (John Proudstar)","Thunderbird (Neal Shaara)","Thunderbolt (Bill Carver)","Thunderbolt Ross","Thunderbolts"


]

document.getElementById("search").addEventListener('input',(e)=>{
    let hero=[];
    if(e.target.value){
        hero=superHero.filter(hero=>{hero.toLowerCase().includes(e.target.value)});
        hero=superHero.map(hero=>{`<li>${hero}</li>`})

    }

    showSuperHeroList(hero);
})

function showSuperHeroList(hero){
    const html=!hero.length? '' : hero.join('');
    document.querySelector('ul').innerHTML=html ;
}
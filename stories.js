const dummyStories = [
    {
        id: '1',
        title: 'The White Lady of Balete Drive',
        locationName: 'Balete Drive, Quezon City',
        lat: 14.6282, lng: 121.0448,
        snippet: 'A famous urban legend about a ghostly woman often seen by motorists at night...',
        fullStory: "Balete Drive in Quezon City is notorious for sightings of a 'White Lady.' Legend has it that she was a young woman who died tragically in the area, either in a car accident or as a victim of a heinous crime during the Japanese occupation. Motorists, especially taxi drivers passing through late at night, have reported seeing a beautiful woman in white hailing them, only to have her vanish from the backseat or appear terrifyingly in their rearview mirror. The large, old balete trees lining the street are said to be her favored haunting grounds, adding to the eerie atmosphere of this well-known road."
    },
    {
        id: '2',
        title: 'Manila Film Center Tragedy',
        locationName: 'Manila Film Center, Pasay',
        lat: 14.5500, lng: 120.9849,
        snippet: 'Rumors of workers buried alive during its rushed construction in 1981...',
        fullStory: "The Manila Film Center, built in a rush for an international film festival in 1981 under the Marcos regime, is shrouded in tragedy and ghostly tales. During its construction, a scaffolding collapsed, and it's widely rumored that many workers were buried alive in wet cement to meet the tight deadline, their bodies never recovered and entombed within the structure. Since then, employees and visitors have reported disembodied cries, apparitions, and an overwhelming sense of dread, particularly in the main theater. The building is considered one of the most haunted locations in Metro Manila."
    },
    {
        id: '3',
        title: 'Haunted Diplomat Hotel',
        locationName: 'Diplomat Hotel, Baguio City',
        lat: 16.4023, lng: 120.5795,
        snippet: 'Once a seminary, then a hotel during WWII, now known for paranormal activity...',
        fullStory: "The Diplomat Hotel in Baguio City sits atop Dominican Hill and has a dark history. Originally a rest house and seminary for Dominican friars in the early 20th century, it was later seized by Japanese forces during World War II and used as a garrison where many atrocities, including beheadings of priests, nuns, and refugees, reportedly took place. After the war, it was converted into a hotel, but tales of headless apparitions, ghostly children, and chilling screams persisted. Now abandoned, it's a popular spot for ghost hunters and curious visitors drawn by its terrifying reputation."
    },
    {
        id: '4',
        title: 'Tiyanak of San Pablo',
        locationName: 'San Pablo City, Laguna',
        lat: 14.0678, lng: 121.3250,
        snippet: 'A vampiric creature from Philippine folklore that takes the form of a baby...',
        fullStory: "The Tiyanak is a malevolent creature in Philippine mythology that often takes the form of a crying baby to lure unsuspecting victims into remote areas. Once picked up or approached, it reveals its true, monstrous form – often described as a small, goblin-like creature with sharp claws and fangs – and attacks. Stories of Tiyanaks are prevalent in rural areas, particularly near forests or old trees. Travelers are warned to be wary of infant cries heard in desolate places, as it might be a Tiyanak waiting to ensnare them."
    },
    {
        id: '5',
        title: 'Biringan City',
        locationName: 'Somewhere in Samar',
        lat: 11.8000, lng: 125.0000,
        snippet: 'A mythical invisible city said to be inhabited by engkantos...',
        fullStory: "Biringan City is a legendary, invisible city said to exist somewhere in the island of Samar. It is believed to be a highly advanced, beautiful city inhabited by engkantos (elemental spirits or fairies) that can only be seen by certain individuals or under specific conditions. Those who have claimed to see it describe modern-looking structures and bright lights. However, Biringan is also associated with disappearances, as it's said that engkantos sometimes lure humans into their world, from which they can never return. Fishermen often avoid certain areas of the sea believed to be gateways to Biringan."
    },
    {
        id: '6',
        title: 'Old UST Hospital',
        locationName: 'UST Hospital (Old Building), Manila',
        lat: 14.6091, lng: 120.9898,
        snippet: 'Many ghostly tales from the old hospital wings and corridors...',
        fullStory: "The University of Santo Tomas (UST) is one of the oldest universities in Asia, and its historic campus, particularly the old hospital buildings, has accumulated numerous ghost stories over the centuries. During World War II, the campus was used as an internment camp by the Japanese. Many have reported seeing ghostly figures of nuns, priests, soldiers, and former patients roaming the halls, especially at night. Cold spots, unexplained noises, and feelings of being watched are common experiences reported by students, faculty, and hospital staff who have spent time in the older sections."
    },
    {
        id: '7',
        title: 'Ang Humahagulgol sa Lumang PGH Wing',
        locationName: 'Philippine General Hospital, Manila',
        lat: 14.5761, lng: 120.9894,
        snippet: 'Duty ako noon, tapos may narinig akong iyak ng babae sa isang kwartong walang tao...',
        fullStory: "Nurse 'yung tita ko dati sa PGH, sa isa sa mga lumang wing. Madalas daw talaga may mga naririnig silang kakaiba doon, lalo na 'pag graveyard shift. Pero 'yung pinaka-creepy na na-experience niya, 'yung isang gabi na nagro-rounds siya. May narinig daw siyang humahagulgol na babae, parang sobrang sakit ng nararamdaman. Sinundan niya 'yung tunog, papunta sa dulo ng hallway, sa isang kwarto na matagal nang hindi ginagamit.\n\nPagdating niya doon, medyo nakaawang 'yung pinto. Sumilip siya, tapos kitang-kita niya raw 'yung anino ng babaeng nakaupo sa kama, yumuyugyog. Kinilabutan daw tita ko, pero inisip niya baka pasyente lang na naligaw. Tinawag niya, 'Ma'am, okay lang po kayo?' Bigla daw tumigil 'yung iyak. Tapos dahan-dahang lumingon 'yung anino. Hindi raw makita 'yung mukha, pero ramdam na ramdam niya 'yung lungkot at galit. Bigla na lang daw nag-flicker 'yung ilaw sa hallway.\n\nSa sobrang takot ng tita ko, tumakbo na lang siya pabalik sa nurse's station. Nanginginig daw siya. Kinabukasan, tinanong niya 'yung mga senior nurse. Sabi nila, baka raw 'yun 'yung kaluluwa ng isang nanay na namatayan ng anak doon noong unang panahon pa. Minsan daw talaga nagpaparamdam, lalo na 'pag may mga bagong pasyente na kritikal ang lagay. Hindi na raw bumalik mag-isa si Tita sa parteng 'yun ng ospital."
    },
    {
        id: '8',
        title: 'Ang Estudyanteng Ayaw Umalis sa UP Main Library',
        locationName: 'UP Diliman Main Library (Gonzalez Hall), Quezon City',
        lat: 14.6546, lng: 121.0663,
        snippet: 'Sabi nila may multong estudyante na laging nag-aaral sa isang section ng library, kahit sarado na...',
        fullStory: "Taga-UP Diliman 'yung pinsan ko, and 'yung Main Library daw nila, specifically 'yung Gonzalez Hall, may mga kwento talaga. Isa sa pinakasikat 'yung tungkol sa isang estudyante na hanggang ngayon daw, nag-aaral pa rin doon. Usually daw sa Filipiniana section or sa mga carrel sa bandang itaas. Kahit daw sarado na 'yung library at wala nang tao, may mga guard na nakakakita ng ilaw na bukas sa isang table, tapos 'pag pinuntahan nila, may anino ng taong nakayuko, parang nagbabasa.\n\nOne time, 'yung kaibigan ng pinsan ko, nag-overtime mag-aral for finals. Medyo late na, konti na lang sila sa section nila. Pagtingin niya sa dulo ng aisle ng bookshelves, may nakita siyang figure ng babae, parang naghahanap ng libro. Akala niya, staff or ibang student. Pero nung tinitigan niya, parang translucent daw 'yung babae, tapos biglang nawala sa pagitan ng mga estante. Sobrang creepy daw, nagligpit agad siya ng gamit at tumakbo palabas.\n\nSabi-sabi, estudyante raw 'yun na namatay dahil sa sobrang pressure sa pag-aaral, or baka naman during a historical event. Basta, 'pag napunta ka raw doon at may naramdaman kang malamig o parang may nakatingin sa'yo, baka siya na 'yun. Kaya 'pag gabi, marami na ring umiiwas mapadpad sa mga liblib na parte ng Main Lib."
    },
    {
        id: '9',
        title: 'The Black Dog of Loakan Airport',
        locationName: 'Loakan Airport, Baguio City',
        lat: 16.3750, lng: 120.6197,
        snippet: 'Isang malaking itim na aso raw ang nagpapakita bago may masamang mangyari sa airport o sa paligid nito...',
        fullStory: "Laking Baguio ang lolo ko, at may kwento siya tungkol sa Loakan Airport na hanggang ngayon, 'di ko makalimutan. Sabi niya, may isang malaking itim na aso raw na nagpapakita doon. Hindi raw 'yun ordinaryong aso; sobrang laki daw at pulang-pula 'yung mga mata. Madalas daw itong makita na tumatawid sa runway o nakatayo lang sa gilid, parang nagmamasid, lalo na kapag makulimlim o bago magkaroon ng bagyo.\n\nAng nakakatakot daw, 'pag nagpakita 'yung asong 'yun, parang may bad omen. May mga pilots daw dati na nakakakita diyan bago sila mag-take off or mag-landing, tapos maya-maya, magkakaroon ng aberya or 'di kaya, may malalaman silang aksidente na nangyari malapit sa area. Kahit 'yung mga nakatira malapit sa airport, 'pag nakita nila 'yung itim na aso na paikot-ikot, kinakabahan na sila.\n\nSabi ng matatanda, 'bantay' daw 'yun ng lugar, pero hindi sa paraang poprotektahan ka. Parang tagapagbigay ng babala, or baka nga siya mismo 'yung nagdadala ng kamalasan. Hanggang ngayon, 'pag may mga unusual flight delays or cancellations daw sa Loakan, 'yung iba, 'yun agad ang naiisip: 'Nagpakita na naman kaya 'yung itim na aso?'"
    },
    {
        id: '10',
        title: 'Ang Manananggal sa Kisame ng Kapitbahay Namin sa Capiz',
        locationName: 'Isang Baryo sa Capiz',
        lat: 11.3833, lng: 122.6500, 
        snippet: 'Gabi-gabi raw may naririnig silang kaluskos sa bubong, tapos parang may pumapatak...',
        fullStory: "Hindi ko 'to first-hand experience, pero kwento 'to ng lola ko noong bata pa siya sa Capiz. Sikat ang Capiz sa mga aswang, 'di ba? Well, totoo raw talaga 'yun, at least doon sa baryo nila. May kapitbahay daw sila na bagong panganak. Tapos, gabi-gabi, may naririnig silang kaluskos sa yero ng bubong nila, parang may mabigat na naglalakad. Minsan, may parang pumapatak pa raw sa sahig nila galing sa kisame, pero wala namang butas.\n\nIsang gabi, 'yung tatay daw ng sanggol, nagbantay. Nagtago siya sa madilim na sulok ng bahay nila, may dalang itak. Maya-maya, narinig na naman 'yung kaluskos, tapos may nakita siyang parang anino na mahaba at payat na dumadaan sa bintana nila, papunta sa direksyon ng kwarto ng mag-ina. Kasabay noon, may narinig silang parang 'lagapak' sa bubong ng kapitbahay – 'yung bahay ng may sanggol.\n\nKinabukasan, 'yung kapitbahay nila, may nakitang kakaibang mantsa sa labas ng bahay nila, malapit sa bintana ng kwarto ng sanggol. Tapos, 'yung isang matandang babae sa baryo nila na laging masama ang tingin, bigla na lang daw nagkasakit at hindi na makalakad ng ilang araw. Sabi ng lola ko, 'yun daw 'yung manananggal. Nag-iwan daw ng bakas 'yung kalahati ng katawan niya nung bumagsak. Brrr, buti na lang sa Maynila na kami lumaki!"
    },
    {
        id: '11',
        title: 'Ang Nawawalang Hiker sa Bundok Makiling',
        locationName: 'Mt. Makiling, Laguna',
        lat: 14.1360, lng: 121.1947,
        snippet: 'May mga hikers daw na naliligaw at hindi na nakakabalik, kinuha raw ni Maria Makiling or ng mga engkanto...',
        fullStory: "Mahilig ako umakyat ng bundok, and Mt. Makiling is one of those na may reputation talaga. Bukod sa ganda niya, kilala rin siya sa mga kwento ng mga hikers na naliligaw or 'di kaya'y 'tinatago' raw ng mga engkanto or ni Maria Makiling mismo. May isang sikat na kwento tungkol sa isang grupo ng hikers. Isa sa kanila, medyo mayabang daw at nagkalat pa ng basura, tapos nagsisigaw sa gubat.\n\nNoong pababa na sila, bigla na lang daw nawala 'yung mayabang na hiker. Hinanap nila, pero parang bula na naglaho. Kahit 'yung mga local guides at rescuers, ilang araw naghanap, wala talaga. Ang sabi ng matatanda doon, 'kinuha' na raw siya. Siguro nagalit 'yung mga tagabantay ng bundok. May mga nagsasabi rin na minsan, 'pag gabi, may naririnig silang boses na parang tumatawag or humihingi ng tulong sa parteng malalim na ng gubat, pero 'pag sinundan mo, lalo ka lang maliligaw.\n\nKaya 'pag umaakyat kami ng Makiling, sobrang respeto talaga. 'Tabi-tabi po,' tapos bawal mag-ingay nang sobra or magkalat. May mga areas din doon na parang ang bigat ng pakiramdam, 'yung tipong alam mong may 'iba' pang kasama kayo. Hindi lang daw 'yun dahil sa pagod. Isa pa, 'yung mga kwento tungkol sa mga prutas doon na nagiging ginto 'pag uwi mo, pero 'wag na 'wag mo raw kukunin ng walang paalam. Baka hindi ka na makababa."
    },
    {
        id: '12',
        title: 'Ang Batang Naglalaro sa Manila North Cemetery',
        locationName: 'Manila North Cemetery, Manila',
        lat: 14.6248, lng: 120.9891,
        snippet: 'Pag Undas, or kahit ordinaryong araw, may mga nakakakita raw ng batang multo na naglalaro sa mga puntod...',
        fullStory: "Madalas kaming dumalaw sa Manila North Cemetery kasi doon nakalibing 'yung lolo't lola ko. Sobrang laki ng sementeryo na 'yun, parang isang maliit na siyudad na. Ang daming kwento, pero 'yung isa sa pinaka-common 'yung tungkol sa mga batang multo na naglalaro. Minsan daw, kahit hindi Undas, 'pag medyo palubog na 'yung araw at tahimik na, may maririnig kang hagikgikan ng mga bata.\n\nMay pinsan ako, one time, sumama siya sa tita namin maglinis ng puntod. Medyo napalayo siya ng konti, tapos may nakita siyang grupo ng mga bata, mga lima sila, naghahabulan sa pagitan ng mga nitso. Akala niya, mga batang nakatira lang doon. Nginitian pa raw niya, pero 'yung mga bata, parang hindi siya nakikita, tapos 'yung suot nila, parang luma na. Nung tinawag siya ng tita niya, paglingon niya ulit sa mga bata, wala na sila. Bigla na lang naglaho.\n\nSabi ng mga caretaker doon, marami raw talagang batang kaluluwa na 'nakatira' sa sementeryo. Mga namatay noong maliit pa, or baka 'yung iba, doon na talaga ipinanganak at namatay. Hindi naman daw sila nananakit, pero 'pag nagpakita sila, nakakakilabot pa rin. Lalo na 'pag narinig mo 'yung mga bulungan nila or 'yung tunog ng parang holen na gumugulong sa marmol kahit wala namang tao."
    },
    {
        id: '13',
        title: 'Ang Pugot na Pari sa Fort Santiago',
        locationName: 'Fort Santiago, Intramuros, Manila',
        lat: 14.5960, lng: 120.9700,
        snippet: 'Sa dungeons daw ng Fort Santiago, minsan may nagpapakitang pari na walang ulo, biktima ng giyera...',
        fullStory: "History buff ako, kaya paborito kong pasyalan ang Intramuros, lalo na ang Fort Santiago. Ang daming nangyari doon, 'di ba? Lalo na noong Spanish era at World War II. Kaya hindi nakapagtataka na ang daming ghost stories. Isa sa pinakakilala 'yung tungkol sa pugot na pari. Sabi nila, madalas daw itong magpakita sa mga lumang selda at dungeons, lalo na 'pag gabi.\n\nMay kwento 'yung isang tour guide doon na minsan, may grupo siyang tinour, medyo late afternoon na. Habang nagkukwento siya tungkol sa mga pinahirapan doon, bigla na lang daw may isang turista na namutla at napasigaw. Tinuro niya 'yung isang madilim na corner ng isang selda. Sabi niya, may nakita raw siyang pari, nakasutana, pero walang ulo, tapos may hawak na rosaryo. Pagtingin ng tour guide at ng iba, wala naman silang nakita. Pero 'yung turista, nanginginig na sa takot.\n\nNaniniwala 'yung iba na baka isa 'yun sa mga paring GOMBURZA, or baka isang nameless priest na pinatay noong panahon ng Hapon. Ang creepy pa, minsan daw may maririnig kang parang nagdarasal o umiiyak sa loob ng mga selda, kahit wala namang tao. Kaya 'pag pumupunta ako doon, laging may kasamang dasal at respeto. Ang bigat kasi ng energy ng lugar, ramdam mo 'yung history at 'yung mga trahedyang nangyari."
    },
    {
        id: '14',
        title: 'Ang Babaeng Tumatawid sa San Juanico Bridge',
        locationName: 'San Juanico Bridge, Leyte-Samar',
        lat: 11.3167, lng: 124.9750,
        snippet: 'May mga driver daw na nakakakita ng babaeng bigla na lang tumatawid sa gitna ng tulay, kahit hatinggabi...',
        fullStory: "Ang San Juanico Bridge, 'di ba, napakaganda? Pero may mga kwento rin ng kababalaghan diyan, lalo na 'yung mga driver na bumibiyahe ng gabi. May tito ako na truck driver, madalas siyang tumatawid diyan papuntang Samar or Leyte. Sabi niya, may isang beses, mga ala-una ng madaling araw, siya lang mag-isa sa kalsada. Bigla na lang daw, sa gitna ng tulay, may nakita siyang babae, nakaputi, biglang tumawid.\n\nNagpreno daw siya ng malakas, muntik na siyang maaksidente. Pagbaba niya para tingnan kung nasagasaan niya o kung sino 'yun, wala siyang nakitang tao. As in, wala. Imposible raw na may makakatawid ng ganun kabilis at mawala agad sa gitna ng tulay na 'yun. Kinilabutan daw tito ko, sumakay na lang ulit siya ng truck at pinaharurot. Simula noon, 'pag dumadaan siya doon ng gabi, nagdadasal na lang siya at binibilisan ang takbo.\n\nNarinig ko rin sa iba, may mga urban legend na ginamitan daw ng dugo ng mga bata 'yung construction ng tulay para tumibay. Ewan ko kung totoo 'yun, pero 'yun daw 'yung dahilan kung bakit may mga restless spirits doon. 'Yung iba naman, sabi baka kaluluwa ng mga biktima ng bagyong Yolanda na hindi matahimik. Nakakatakot isipin, lalo na 'pag mag-isa kang tumatawid doon sa gabi."
    },
    {
        id: '15',
        title: 'Ang Mambabarang sa Isla ng Siquijor',
        locationName: 'Siquijor Island',
        lat: 9.1833, lng: 123.6000,
        snippet: 'Kilala ang Siquijor sa mysticism, pero may mga kwento rin ng mambabarang na dapat ingatan...',
        fullStory: "Pumunta kami ng Siquijor for vacation a few years back. Sobrang ganda ng isla, 'yung mga beach, 'yung mga falls. Pero 'di maiaalis na may reputation din siya as an island of healers, faith healers, and yes, 'yung mga gumagawa ng 'hindi maganda' like kulam or barang. 'Yung tour guide namin, medyo open siya sa mga ganitong topic. Sabi niya, totoo raw 'yun, at dapat mag-ingat, lalo na sa pakikitungo sa mga local.\n\nMay kwento siya tungkol sa isang turista na naging bastos daw sa isang matandang babae sa palengke. Nagmura raw 'yung turista at minata 'yung matanda. Wala namang ginawa 'yung matanda, tiningnan lang daw 'yung turista. Kinagabihan, 'yung turista, bigla na lang daw nagkasakit. Sobrang taas ng lagnat, tapos nagsusuka ng kung anu-ano, minsan daw may kasamang insekto. Dinala sa ospital, pero 'di makita ng doktor kung ano 'yung sakit niya.\n\n'Yung mga kasama niyang turista, naalala nila 'yung incident sa palengke. Pinuntahan nila 'yung matanda, humingi ng tawad. Medyo matagal bago pumayag 'yung matanda, pero eventually, binigyan sila ng parang langis at inumin para sa kaibigan nila. Gumaling naman daw 'yung turista, pero lesson learned. Sabi ng guide namin, 'di lahat ng matatanda doon ordinaryo. 'Yung iba, may 'kakayahan.' Kaya doble ingat at respeto lagi, lalo na 'pag nasa lugar ka na 'di mo kabisado ang kultura at paniniwala."
    },
    {
        id: '16',
        title: 'Ang mga Hiyawan sa Bahay na Pula',
        locationName: 'Bahay na Pula, San Ildefonso, Bulacan',
        lat: 15.0800, lng: 120.9450,
        snippet: 'Dating garrison ng Hapon, saksi sa maraming karahasan. Sabi nila, maririnig mo pa rin ang mga sigaw...',
        fullStory: "Ang Bahay na Pula sa San Ildefonso, Bulacan, sikat 'yan sa mga ghost hunters. Alam naman natin 'yung history niyan, 'di ba? Naging garrison 'yan ng mga Hapon noong World War II, at maraming comfort women ang dumanas ng hirap at namatay diyan. Kaya 'yung bigat ng atmosphere, grabe. May mga kaibigan akong nag-attempt mag-ghost hunting diyan, 'yung mga matatapang kuno.\n\nKwento nila, pagpasok pa lang daw sa compound, ang bigat na agad sa pakiramdam. Parang may nakatingin sa'yo, tapos ang lamig ng hangin kahit mainit 'yung panahon. Pumasok sila sa loob ng bahay, or kung ano man ang natitira doon. Habang naglalakad sila, may narinig daw silang parang humihikbi na babae. Hinanap nila 'yung source, pero wala silang makita. Tapos, bigla na lang daw, may sumigaw na babae, parang sobrang sakit at takot 'yung sigaw. Nagtakbuhan daw sila palabas.\n\nSabi nila, 'yung mga sigaw at iyak, parang echo ng mga nangyari doon dati. Mga kaluluwa ng mga babaeng hindi matahimik. Kahit 'yung mga caretaker daw or 'yung mga nakatira malapit doon, umiiwas na mapadaan 'pag gabi. Minsan daw, may mga anino silang nakikita sa bintana, or parang may mga naglalakad sa loob. Sobrang tragic ng history ng lugar, kaya siguro 'yung negative energy, nananatili pa rin."
    },
    {
        id: '17',
        title: 'Ang Kapre sa Lumang Akasya sa Probinsya Namin',
        locationName: 'Isang Lumang Akasya sa Batangas',
        lat: 13.9424, lng: 121.1627, 
        snippet: 'Sa tabi ng kalsada, may malaking puno ng akasya. Sabi ng lola ko, may kapre raw doon na mahilig sa sigarilyo...',
        fullStory: "Noong bata ako, 'pag umuuwi kami sa probinsya namin sa Batangas, may isang malaking puno ng akasya sa gilid ng kalsada na lagi kong tinitingnan. Sobrang tanda na ng puno, 'yung mga sanga niya, ang lalaki at ang haba. Kwento ng lola ko, may nakatira raw na kapre doon. Sabi niya, 'wag daw akong titingala 'pag dumadaan kami doon, lalo na 'pag gabi, baka makita ko raw.\n\nSabi niya, minsan daw, 'yung mga tricycle driver na dumadaan doon ng hatinggabi, nakakakita ng parang dalawang baga ng sigarilyo na lumulutang sa taas ng puno. Tapos, mangangamoy daw ng tabako. 'Yun na raw 'yung kapre, nagpapausok. Minsan naman, may maririnig silang parang tawa na malalim at malakas galing sa puno. Wala namang bahay doon malapit, puro bukid lang.\n\nMay isang pinsan daw ako na medyo pasaway, sinubukan niyang sumilip isang gabi. Nagtago siya sa may damuhan. Maya-maya, naamoy niya 'yung tabako, tapos may nakita siyang anino na sobrang laki, nakaupo sa isa sa mga sanga. Hindi niya maaninag 'yung mukha, pero kitang-kita niya 'yung laki. Sa sobrang takot, tumakbo siya pauwi. Simula noon, 'di na siya umulit. Ako naman, hanggang tingin na lang sa malayo, 'di ko na sinubukang alamin kung totoo nga."
    },
    {
        id: '18',
        title: 'Ang Phantom Jeepney sa Aurora Boulevard',
        locationName: 'Aurora Boulevard, Quezon City',
        lat: 14.6204, lng: 121.0543,
        snippet: 'May jeep raw na pumapasada sa gabi...',
        fullStory: "Taga-Project 4 'yung kaibigan ko, at madalas siyang umuwi ng late galing trabaho, minsan madaling araw na. Sumasakay siya ng jeep sa Aurora Boulevard. May kwento siya na minsan, may nasakyan siyang jeep na kakaiba. Konti lang daw 'yung pasahero, tapos lahat sila, parang tulala at hindi gumagalaw. 'Yung driver, hindi rin umiimik.\n\nHabang umaandar 'yung jeep, napansin niya na parang ang tagal na nilang bumibiyahe, pero 'yung mga nadadaanan nila, parang hindi familiar. Tapos, biglang nanlamig daw 'yung pakiramdam niya. Tiningnan niya ulit 'yung ibang pasahero, parang ang paputla nila. Nag-para siya, pero parang hindi siya narinig ng driver. Paulit-ulit siyang nag-para, hanggang sa bigla na lang huminto 'yung jeep sa isang madilim na lugar na wala siyang makitang ibang sasakyan o tao.\n\nBumaba siya ng nanginginig. Paglingon niya, wala na 'yung jeep. Bigla na lang nawala. Naglakad siya hanggang makakita siya ng taxi. Sabi niya, parang ang layo ng binabaan sa kanya, ibang area na. Sabi ng matatanda, may mga 'phantom jeepney' daw talaga na pumapasada, lalo na sa mga lumang kalsada. Sinasakay nila 'yung mga napapagod na kaluluwa, or minsan, mga buhay na naliligaw. Creepy!"
    },
    {
        id: '19',
        title: 'Ang Galit ng Engkanto sa Hinulugang Taktak',
        locationName: 'Hinulugang Taktak, Antipolo, Rizal',
        lat: 14.6008, lng: 121.1733,
        snippet: 'Nag-outing kami dati sa Hinulugang Taktak, tapos may isa kaming kasama na nagbiro sa mga...',
        fullStory: "High school kami noon, nag-field trip kami sa Hinulugang Taktak sa Antipolo. Alam mo naman 'pag kabataan, maingay at makulit. May isa kaming kaklase, si Mark, na medyo mayabang at palabiro. Habang naglalakad kami malapit sa falls, may nakita kaming parang maliit na mound ng lupa, parang punso. Bigla ba namang sinipa ni Mark 'yun, tapos tumawa pa, sabi, 'Tabi-tabi po, baka po masipa kayo!' Lahat kami sinaway siya, pero tinawanan lang kami.\n\nPagkatapos ng ilang oras, habang nasa bus na kami pauwi, biglang sumakit 'yung tiyan ni Mark. Sobrang sakit daw, parang pinipilipit. Namumutla na siya at pinagpapawisan ng malamig. Pagdating namin sa school, dinala agad siya sa clinic. Walang makitang dahilan 'yung nurse. Tapos, 'yung isa naming kaklase na medyo 'sensitive', sabi niya, 'Nagalit yata 'yung sinipa niya kanina.'\n\nPinuntahan ng nanay ni Mark 'yung isang albularyo. Sabi ng albularyo, 'nabati' raw si Mark or 'nagalit 'yung engkanto' doon sa ginawa niya. Nagbigay ng kung anu-anong dahon at langis 'yung albularyo, tapos pinagdasal si Mark. Kinabukasan, medyo okay na siya, pero sabi niya, parang may naramdaman siyang malamig na kamay na humahaplos sa tiyan niya buong gabi. Simula noon, takot na si Mark mambastos ng kalikasan. Lesson learned talaga 'yun para sa aming lahat."
    },
    {
        id: '20',
        title: 'Ang mga Kaluluwa sa Laperal White House',
        locationName: 'Laperal White House, Baguio City',
        lat: 16.4140, lng: 120.6046,
        snippet: 'Isa sa pinaka-haunted na bahay sa Baguio. Sabi nila, nandiyan pa rin daw ...',
        fullStory: "Ang Laperal White House sa Baguio, 'di ba, sikat na sikat sa pagiging haunted? Nakakatakot na 'yung itsura pa lang niya from the outside, lalo na 'pag gabi. May mga kwento na 'yung original owners, 'yung Laperal family, nandiyan pa rin daw 'yung spirits nila. Tapos, noong World War II, ginamit daw 'yan ng mga Hapon, kaya marami ring tragic stories associated with it.\n\nMay kaibigan 'yung parents ko na taga-Baguio, at kwento niya, 'yung mga caretaker daw dati, madalas makarinig ng mga yapak, mga boses na bumubulong, at minsan, may nakikitang anino sa mga bintana kahit wala namang tao. May isang sikat na kwento tungkol sa isang babae na multo, madalas daw makita sa may hagdanan or sa may nursery room. Minsan naman, may multo ng isang maliit na bata.\n\nNung nabuksan 'yan sa public for a time as a museum, may mga visitors na nakakaramdam ng biglang panlalamig, parang may dumaan, or parang may nakatitig sa kanila. 'Yung iba, nakukunan daw ng litrato na may mga 'orb' or 'di kaya, may extra figure na hindi naman nila kasama. Kahit ako, 'nung napadaan kami diyan, parang ang bigat ng pakiramdam. Parang may lungkot at takot na bumabalot sa buong lugar. Definitely not for the faint of heart."
    },
    {
        id: '21',
        title: 'Mga Ungol Mula sa Sunog na Star City',
        locationName: 'Star City (after the fire), Pasay City',
        lat: 14.5547, lng: 120.9867,
        snippet: 'Pagkatapos masunog ang Star City, may mga guard daw na nakakarinig ng mga kakaibang tunog mula sa ruins...',
        fullStory: "Naalala niyo 'yung malaking sunog sa Star City? Grabe 'yun, 'no? Halos naubos 'yung amusement park. After nun, siyempre, 'yung lugar, naging parang ghost town. May kwento 'yung kakilala ko na security guard na na-assign doon pansamantala habang inaaayos pa 'yung investigation at clearing.\n\nSabi niya, 'pag gabi, sobrang creepy daw. Tahimik, pero minsan, may maririnig silang parang mga ungol or hikbi na nanggagaling sa parteng pinaka-nasunog, lalo na doon sa may Snow World at sa may mga ride na natupok. Minsan daw, parang may tunog ng music box, 'yung parang sa carousel, pero sobrang distorted at malungkot. Kinikilabutan daw sila, pero trabaho nila magbantay, kaya tiniis nila.\n\nMay isang gabi, nagro-ronda raw 'yung kasama niyang guard malapit sa dating entrance ng Gabi ng Lagim. Bigla na lang daw siyang tumakbo pabalik sa guard house, putlang-putla. Sabi niya, may nakita raw siyang anino ng mga tao, parang nakapila, pero 'pag sininagan niya ng flashlight, nawawala. Parang mga kaluluwa raw na 'di maka-move on, or baka 'yung mga 'character' ng Gabi ng Lagim na ayaw pa ring umalis. Ewan ko ba, pero 'yung mga lugar na masaya dati tapos biglang nagkaroon ng tragedy, parang mas nagiging prone sa mga ganitong kababalaghan."
    },
    {
        id: '22',
        title: 'Ang Operating Room sa Lumang Clark Air Base Hospital',
        locationName: 'Old Clark Air Base Hospital, Pampanga',
        lat: 15.1744, lng: 120.5371,
        snippet: 'Abandoned hospital na pero yung operating room daw, active pa rin sa mga multo ng sundalo...',
        fullStory: "Ang Clark Air Base, dating US facility 'yan, 'di ba? Ang daming history, lalo na noong Vietnam War. 'Yung lumang ospital daw doon, 'yung Clark Air Base Hospital, grabe 'yung mga kwento. Abandonado na 'yun ngayon, pero sikat sa mga paranormal investigators. Sabi nila, isa sa pinaka-active na area 'yung dating operating room.\n\nMay grupo ng mga explorers na pumasok doon one time, documented pa nila. Pagdating nila sa OR, bigla na lang daw bumigat 'yung hangin. 'Yung EMF meters nila, nagsi-spike. Tapos, may narinig silang parang tunog ng medical equipment, 'yung parang gumagalaw 'yung mga metal tray, kahit wala namang hangin or tao na gumagalaw. Nakaramdam din sila ng biglaang pagbaba ng temperatura.\n\nAng pinaka-creepy, may isa sa kanila na nakarinig ng bulong, parang 'Help me...' daw. Nangilabot sila lahat. Sabi-sabi, mga kaluluwa raw 'yun ng mga sundalong namatay doon habang inooperahan, or 'yung mga hindi na na-save. 'Yung iba, nakakakita pa raw ng anino ng mga doktor at nurses na parang busy pa rin sa loob ng OR, kahit sira-sira na 'yung lugar. Sobrang eerie, parang na-trap sila sa oras ng kamatayan nila."
    },
    {
        id: '23',
        title: 'Ang Babae sa Bintana ng Taal Vista Hotel',
        locationName: 'Taal Vista Hotel (Old Wing), Tagaytay',
        lat: 14.0936, lng: 120.9373,
        snippet: 'Sa lumang wing daw ng hotel, may babaeng multo na sumisilip sa bintana, nakatingin sa Taal Volcano...',
        fullStory: "Ang Taal Vista Hotel, isa sa mga pinaka-iconic na hotel sa Tagaytay. Ang ganda ng view, 'di ba? Pero dahil matagal na rin siyang nakatayo, may mga kwento rin ng multo, lalo na raw sa may lumang wing. May kaibigan 'yung nanay ko na nag-stay doon dati, tapos 'yung kwarto nila, nasa older section.\n\nIsang gabi, nagising daw siya ng madaling araw kasi naiihi. Pagbangon niya, napatingin siya sa bintana. Kitang-kita 'yung Taal Volcano, pero ang nakakuha ng pansin niya, 'yung reflection sa salamin ng bintana. May nakita raw siyang babae na nakatayo sa likod niya, nakatingin din sa labas. Akala niya, asawa niya, pero naalala niya, tulog pa 'yung asawa niya sa kama. Dahan-dahan siyang lumingon, tapos wala namang tao sa likod niya. Pagtingin niya ulit sa bintana, nandoon pa rin 'yung reflection ng babae, tapos dahan-dahan daw ngumiti sa kanya. Sobrang creepy daw ng ngiti.\n\nNagtalukbong na lang siya ng kumot at nagdasal hanggang mag-umaga. Kinabukasan, tinanong nila 'yung staff. May mga bulung-bulungan daw talaga tungkol sa isang 'Lady of the Lake' or isang babaeng multo na madalas makita sa mga kwarto na may view ng bulkan. Baka raw 'yun 'yung dating guest na sobrang na-in love sa view, or baka may tragic story na konektado sa lugar. Basta, 'pag nag-stay ka raw doon, 'wag ka masyadong tititig sa bintana 'pag gabi."
    },
    {
        id: '24',
        title: 'Ang mga Anino sa Balay Negrense',
        locationName: 'Balay Negrense, Silay City, Negros Occidental',
        lat: 10.7981, lng: 122.9754,
        snippet: 'Ancestral house to na naging museum. Sabi nila, yung mga dating may-ari, nagpaparamdam pa rin daw...',
        fullStory: "Nakapunta na ako sa Balay Negrense sa Silay. Ang ganda ng bahay, parang bumalik ka sa panahon ng mga haciendero. Pero alam mo 'yun, 'yung mga lumang bahay, lalo na 'yung mga ganito kalaki at katanda, parang laging may kasamang kwentong kababalaghan. At totoo nga, may mga naririnig akong sabi-sabi mula sa mga local.\n\nSabi nila, 'yung pamilya raw ni Victor Gaston, 'yung original owner, parang 'nandiyan' pa rin daw. Minsan daw, 'yung mga caretaker or 'yung mga huling bisita 'pag pasara na 'yung museum, may naririnig silang mga yapak sa second floor, kahit wala namang tao doon. Minsan naman, parang may nagpapatugtog ng piano, or may mga boses na nag-uusap in Spanish. May mga anino rin daw na dumadaan sa mga pasilyo, lalo na sa may malalaking salamin.\n\nMay isang area doon, 'yung parang silid-dasalan, na sabi nila, medyo mabigat daw 'yung pakiramdam. 'Yung iba, nakakaramdam ng biglang panlalamig or parang may nakamasid sa kanila. Hindi naman daw sila nananakit, parang 'lingering presence' lang ng mga dating nakatira. Pero siyempre, 'pag ikaw 'yung naka-experience, matatakot ka pa rin. Kaya 'pag nag-picture-picture kami doon, medyo may kaba, baka may sumama sa picture, 'di ba?"
    },
    {
        id: '25',
        title: 'Ang Janitor sa Baguio City Hall Pag Gabi',
        locationName: 'Baguio City Hall, Baguio City',
        lat: 16.4136, lng: 120.5920,
        snippet: 'May mga empleyado raw na nag-oovertime na nakakakita ng janitor na naglilinis, kahit wala namang naka-duty na janitor...',
        fullStory: "Pinsan ko, nagtrabaho dati sa Baguio City Hall. Madalas silang mag-overtime, lalo na 'pag malapit na 'yung Panagbenga or 'pag may budget hearing. Kwento niya, 'pag gabi na at konti na lang 'yung tao sa opisina nila, may mga weird na nangyayari. Minsan daw, may maririnig silang parang may nagwawalis sa labas ng pinto nila, or parang may nagpupunas ng sahig. Pagtingin nila, wala naman.\n\nAng pinaka-common na sighting daw 'yung tungkol sa isang 'janitor.' May mga nakakakita raw ng figure ng lalaki na naka-uniform ng janitor, tahimik lang na naglilinis sa hallway or sa CR. Pero 'pag tinanong nila sa admin or sa security, wala naman daw naka-duty na janitor sa ganung oras sa specific floor na 'yun. Minsan daw, 'yung 'janitor' na 'yun, titingin lang sa kanila, tapos magpapatuloy sa paglilinis, tapos bigla na lang mawawala 'pag 'di sila nakatingin.\n\nSabi-sabi, baka raw 'yun 'yung kaluluwa ng isang dating janitor na sobrang dedicated sa trabaho niya, or baka namatay doon sa City Hall. Hindi naman daw nananakot, parang nagtatrabaho lang. Pero siyempre, 'pag ikaw 'yung nakakita, ibang usapan na 'yun. Kaya 'yung pinsan ko, 'pag kailangan niyang mag-CR ng gabi, nagyayaya pa ng kasama."
    },
    {
        id: '26',
        title: 'Ang Pugot Mamu ng Ilocos',
        locationName: 'Rural areas in Ilocos Region',
        lat: 17.9734, lng: 120.7000, 
        snippet: 'Sa mga probinsya ng Ilocos, may kinatatakutang pugot na gumagala raw sa gabi, naghahanap ng ulo...',
        fullStory: "Laking Ilocos Sur 'yung tatay ko, and 'pag umuuwi kami doon noong bata pa ako, laging may kwentong katatakutan 'yung mga matatanda. Isa sa pinaka-memorable 'yung tungkol sa 'Pugot Mamu.' Hindi ko sure kung ano exactly 'yung Mamu, pero 'pugot' siya, as in, headless. Sabi nila, gumagala raw 'to sa mga bukirin at sa mga liblib na kalsada 'pag malalim na ang gabi.\n\nAng kwento, naghahanap daw 'to ng ulo, or baka naman, 'yung sarili niyang ulo na nawawala. Minsan daw, nakikita 'to na nakaupo sa tabi ng daan, or nakasandal sa puno. 'Yung iba naman, sabi, 'pag may naamoy kang sobrang bangong bulaklak, tapos biglang susundan ng sobrang baho, malapit na raw 'yung Pugot Mamu. Dapat daw magtago ka agad or magdasal.\n\nMay isang kwento 'yung tiyuhin ko. Galing daw siya sa sayawan sa kabilang baryo, naglalakad lang pauwi. Bigla raw siyang nakaramdam ng takot, tapos may narinig siyang parang kaluskos sa may palayan. Pagsilip niya, may nakita siyang mataas na figure, maitim, pero walang ulo. Nagtatakbo raw siya pauwi, hindi na lumingon. Kinabukasan, 'yung tsinelas niya, naiwan pala doon. Pero 'di na niya binalikan. Sabi nila, swerte raw 'yung mga nakakakita pero 'di napapansin ng Pugot Mamu."
    },
    {
        id: '27',
        title: 'Ang Batang Umiiyak sa CR ng Starmall Alabang',
        locationName: 'Starmall Alabang, Muntinlupa City',
        lat: 14.4180, lng: 121.0450,
        snippet: 'May mga nakakarinig daw ng iyak ng bata sa isa sa mga cubicle ng CR, pero pag tiningnan, walang tao...',
        fullStory: "Itong kwento na 'to, narinig ko sa mga kaibigan kong taga-South. Sa Starmall Alabang daw, 'yung luma pa, may isang CR doon, 'di ko sure kung saang floor, na medyo creepy. Sabi nila, minsan daw, lalo na 'pag medyo walang tao, may maririnig kang iyak ng maliit na bata na nanggagaling sa isa sa mga cubicle.\n\nNatural, 'pag may narinig kang umiiyak na bata, sisilipin mo, 'di ba? Baka naligaw or kailangan ng tulong. Pero 'pag sinilip daw nila 'yung cubicle kung saan nanggagaling 'yung iyak, wala namang tao. Minsan daw, 'yung iyak, parang nasa kabilang cubicle naman. Para kang pinaglalaruan. May isang saleslady daw dati na pumasok sa CR, narinig niya 'yung iyak. Kinatok niya 'yung pinto ng cubicle, sabi niya, 'Bata, okay ka lang?' Tumigil daw 'yung iyak, tapos may bumulong, 'Laro tayo.'\n\nSa sobrang takot ng saleslady, tumakbo siya palabas. Sabi-sabi, baka raw kaluluwa ng batang naaksidente or namatay malapit doon. Or baka naman, 'yung mga usual na mall ghosts. Ewan ko, pero 'pag napapadaan ako sa Starmall Alabang at kailangan kong mag-CR, medyo pinipili ko na 'yung matao. Mahirap na, baka ako 'yung makarinig ng iyak or yayain makipaglaro."
    },
    {
        id: '28',
        title: 'Ang Madre sa Lumang Gusali ng Miriam College',
        locationName: 'Miriam College (Old Buildings), Quezon City',
        lat: 14.6392, lng: 121.0742,
        snippet: 'Sa mga lumang building daw ng Miriam, may madreng multo na nagpapakita, lalo na sa mga estudyanteng nag-o-overnight...',
        fullStory: "Ate ko, graduate ng Miriam College, or Maryknoll pa noong time niya. Ang dami niyang kwento tungkol sa campus nila, lalo na sa mga older buildings. Isa sa pinakasikat 'yung tungkol sa isang madreng multo. Sabi nila, 'pag gabi na at tahimik na 'yung campus, minsan daw may makikitang madre na naglalakad sa mga hallway, or nakatayo sa may bintana.\n\nMay isang time, nag-overnight 'yung ate ko at 'yung mga ka-org niya sa isa sa mga lumang building para sa isang project. Hatinggabi na, gising pa sila, nagtatrabaho. Bigla na lang daw, may narinig silang parang kumakalampag sa kabilang kwarto, 'yung kwartong dapat ay walang tao. Sinilip nila, pero wala. Pagbalik nila sa pwesto nila, may nakita silang anino ng madre na dumaan sa labas ng bintana nila. Eh nasa second floor sila, imposible na may taong dumaan doon.\n\nSabi-sabi, baka raw 'yun 'yung kaluluwa ng isang madre na namatay doon noong unang panahon, or baka isa sa mga founding nuns. Hindi naman daw nananakot, parang nagbabantay lang. Pero siyempre, 'pag nakakita ka ng multong madre, matatakot ka pa rin. May mga area din daw sa campus na sobrang lamig, kahit 'di naman naka-aircon. 'Yun daw 'yung mga paboritong lugar ng madreng multo."
    },
    {
        id: '29',
        title: 'Ang mga Multo sa Malacañang Palace',
        locationName: 'Malacañang Palace, Manila',
        lat: 14.5944, lng: 120.9941,
        snippet: 'Sabi ng mga staff, maraming kaluluwa ang nagpaparamdam sa loob ng palasyo, mula sa mga dating presidente hanggang sa mga biktima ng kasaysayan...',
        fullStory: "Ang Malacañang Palace, 'di lang 'yan tirahan ng Presidente, 'di ba? Saksi 'yan sa napakaraming yugto ng kasaysayan ng Pilipinas. Kaya hindi nakakagulat na may mga kwento ng multo diyan. Narinig ko 'to sa isang dating staff na nagtrabaho doon. Sabi niya, totoo raw 'yung mga 'di nakikitang residente' ng palasyo.\n\nMinsan daw, sa mga state rooms or sa mga lumang hallway, may maririnig kang mga yapak kahit wala namang tao. Minsan, parang may bumubulong or tumatawa. May mga specific ghosts pa raw na kilala na ng mga matatagal na staff. Sabi nila, 'yung multo raw ni President Quezon, minsan nagpapakita sa kanyang dating opisina. Mayroon ding 'White Lady' na gumagala sa mga hardin.\n\nAng pinaka-creepy raw, 'yung pakiramdam na laging may nakamasid sa'yo, lalo na sa mga parte ng palasyo na hindi masyadong ginagamit. May mga kwarto raw na sobrang lamig, kahit walang aircon. Sabi ng staff, baka 'yun 'yung mga kaluluwa ng mga taong namatay noong mga panahon ng giyera or 'yung mga biktima ng martial law na 'di matahimik. Nakakatindig-balahibo isipin na 'yung lugar kung saan nagdedesisyon ang lider ng bansa, may mga ganung kababalaghan din."
    },
    {
        id: '30',
        title: 'Ang Bundok ng Demonyo: Mt. Cristobal',
        locationName: 'Mt. Cristobal, Quezon-Laguna',
        lat: 14.0597, lng: 121.4361,
        snippet: 'Kabaligtaran ng banal na Mt. Banahaw, ang Mt. Cristobal ay kilala bilang "Devil\'s Mountain" dahil sa mga madidilim na kwento...',
        fullStory: "Katapat ng sagradong Mt. Banahaw ang Mt. Cristobal. Kung ang Banahaw ay kilala sa pagiging holy mountain, ang Cristobal naman, tinatawag na 'Devil's Mountain.' Ang daming kwento kung bakit. Sabi nila, maraming engkanto at masasamang espiritu raw ang nakatira dito. Marami rin daw ang mga naliligaw at hindi na nakakabalik.\n\nMay kwento 'yung isang mountaineer na umakyat ng Cristobal. Sabi niya, kakaiba raw talaga 'yung aura ng bundok. Parang ang bigat, tapos pakiramdam mo, laging may nakatingin sa'yo. Habang naglalakad sila sa trail, may narinig silang parang may sumusunod sa kanila, pero 'pag lilingon sila, wala naman. Tapos, may mga parteng bigla na lang silang nalilito sa daan, kahit may guide sila. Parang pinaglalaruan daw sila.\n\nAng pinaka-creepy, noong nag-camp sila, may narinig silang parang may umiiyak na malayo, tapos biglang may parang tumawa ng malakas. Hindi raw tawa ng tao. Kinabukasan, 'yung pagkain nila, parang may kumain ng konti, kahit selyado pa. Sabi ng mga local, 'wag daw basta-basta aakyat ng Cristobal, lalo na kung 'di ka handa spiritually. Marami raw 'sumusubok' sa mga umaakyat. Nakakatakot, 'no? Parang 'dark side' ng Banahaw."
    },
    {
        id: '31',
        title: 'Ang mga Nagpaparamdam sa Teacher\'s Camp',
        locationName: 'Teacher\'s Camp, Baguio City',
        lat: 16.4139, lng: 120.6103,
        snippet: 'Isa sa pinaka-haunted na lugar sa Baguio. Bawat sulok daw, may kwento ng multo...',
        fullStory: "Teacher's Camp sa Baguio. Sino ba namang hindi nakarinig ng ghost stories diyan? Parang required 'ata 'pag pumunta ka ng Baguio, marinig mo 'yung mga kwento. Sabi nila, dahil ginamit daw 'yan ng mga Hapon noong giyera, at bago pa 'yun, may mga native rituals din daw na ginagawa sa area. Kaya ang daming 'nakatira' na hindi natin nakikita.\n\nMay kaibigan ako, nag-seminar sila diyan. Sa isa sa mga lumang cottages sila nag-stay. Sabi niya, gabi-gabi, may naririnig silang yapak sa labas ng kwarto nila, 'yung parang mabibigat na bota. Minsan, may kumakatok sa pinto, pero 'pag binuksan, wala namang tao. 'Yung isang gabi, 'yung roommate niya, nagising kasi parang may humihinga raw malapit sa tenga niya. Pagdilat niya, may nakita siyang anino ng sundalong Hapon na nakatayo sa gilid ng kama niya. Napatili siya, tapos biglang nawala 'yung anino.\n\nSabi pa, 'wag ka raw titingin sa mga salamin doon ng matagal, baka may makita kang 'extra.' At 'yung mga lumang auditorium, 'pag gabi, parang may mga nanonood pa rin daw ng palabas. Sobrang daming kwento, from white ladies, to headless priests, to ghostly children. Kaya 'pag nag-Teacher's Camp ka, be prepared for some uninvited guests."
    },
    {
        id: '32',
        title: 'Ang mga Hiyaw sa Tunnel ng Corregidor Island',
        locationName: 'Malinta Tunnel, Corregidor Island, Cavite',
        lat: 14.3833, lng: 120.5775,
        snippet: 'Sa loob ng Malinta Tunnel, maririnig mo pa rin daw ang mga sigaw at daing ng mga sundalong namatay noong giyera...',
        fullStory: "Nag-tour kami dati sa Corregidor Island, at siyempre, kasama sa itinerary 'yung Malinta Tunnel. Grabe 'yung history noon, 'di ba? Naging ospital, naging headquarters, at saksi sa matinding labanan noong World War II. Habang nasa loob kami ng tunnel, 'yung tour guide, nagkukwento tungkol sa mga nangyari. Tapos, may part na pinatay nila 'yung ilaw for a few seconds para ma-feel daw namin 'yung atmosphere. Nung time na 'yun, sobrang tahimik, pero parang ang bigat ng hangin.\n\nSabi ng guide, maraming visitors ang nakakarinig ng mga kakaibang tunog sa loob ng tunnel, lalo na 'pag medyo konti 'yung tao. Mga bulong, mga yapak, minsan parang may umiiyak or sumisigaw ng mahina. May mga nagsasabi rin na nakakaramdam sila ng biglang panlalamig or parang may dumadaan sa likod nila. 'Yung iba, nakakakita pa raw ng mga anino ng sundalo.\n\nMay isang area doon, 'yung tinatawag na '1000-bed hospital' wing. Sabi nila, 'yun daw 'yung isa sa pinaka-active. Imagine mo na lang, ospital 'yun sa gitna ng giyera. Ang daming namatay doon, siguro 'yung iba, hindi pa rin matahimik 'yung kaluluwa. Nakakatindig-balahibo, pero at the same time, parang reminder din ng sacrifices nila."
    },
    {
        id: '33',
        title: 'Ang mga Hagulgol Mula sa Ozamiz Ferry Disaster Site',
        locationName: 'Off the coast of Ozamiz City (near Panguil Bay)',
        lat: 8.1500, lng: 123.8300,
        snippet: 'Pagkatapos ng isang malaking ferry tragedy, may mga mangingisda raw na nakakarinig ng mga iyak at tulong mula sa dagat...',
        fullStory: "Hindi ko na maalala 'yung exact name ng ferry, pero may malaking maritime disaster na nangyari malapit sa Ozamiz City maraming taon na ang nakalipas. Daan-daang tao 'yung namatay. Pagkatapos noon, 'yung mga mangingisda raw sa area, may mga kakaibang karanasan.\n\nMay kwento 'yung lolo ng kaibigan ko, mangingisda siya. Sabi niya, ilang linggo pagkatapos ng trahedya, 'pag pumapalaot sila ng gabi, may mga naririnig silang parang mga hagulgol at sigaw ng tulong na nanggagaling sa parteng dagat kung saan lumubog 'yung barko. Minsan daw, sobrang lakas, parang andiyan lang sa tabi ng bangka nila. Pero 'pag titingnan nila, wala namang ibang tao or bangka.\n\nMay isang gabi, malakas daw 'yung alon, tapos biglang may nakita silang parang mga kamay na umaahon sa tubig, kumakaway na parang humihingi ng saklolo. Sobrang dami daw. Kinilabutan sila, nagdasal na lang tapos mabilis na umalis sa lugar na 'yun. Sabi nila, mga kaluluwa raw 'yun ng mga biktima na hindi pa rin matahimik, naghahanap pa rin ng rescue. Nakakalungkot at nakakatakot at the same time."
    },
    {
        id: '34',
        title: 'Ang mga Monghe sa Ilalim ng San Agustin Church',
        locationName: 'San Agustin Church Crypts, Intramuros, Manila',
        lat: 14.5895, lng: 120.9746,
        snippet: 'Sa crypt ng San Agustin, kung saan nakalibing ang mga prayle, may mga nagpaparamdam daw na mga monghe...',
        fullStory: "Ang San Agustin Church sa Intramuros, isa sa mga pinakamatandang simbahan sa Pilipinas. Ang ganda ng architecture, 'di ba? Pero bukod sa taas, 'yung ilalim niya, 'yung crypt, may sarili ring kwento. Doon nakalibing 'yung maraming prayle at prominenteng tao noong unang panahon.\n\nNag-tour kami diyan dati, at 'yung guide, binanggit niya na may mga 'paranormal activities' daw na nararanasan doon. Minsan daw, 'pag tahimik at wala masyadong tao, may maririnig kang parang Gregorian chant, 'yung parang dasal ng mga monghe. Minsan naman, may anino kang makikita na naka-abito, parang naglalakad sa mga pasilyo ng crypt. May mga area din daw na biglang lumalamig, kahit walang ventilation.\n\nMay isang kwento tungkol sa isang staff na nag-lock up ng gabi. Pagdaan niya sa may crypt, may nakita siyang figure ng monghe na nakatalikod, parang nagdarasal sa harap ng isang nitso. Akala niya, isa sa mga pari. Tinawag niya, pero 'di lumingon. Nung lalapitan na niya, dahan-dahan daw nag-fade 'yung figure hanggang sa nawala. Simula noon, 'di na siya nagpapa-late mag-lock up. Parang 'yung mga dating tagabantay ng simbahan, nandoon pa rin, nagbabantay."
    },
    {
        id: '35',
        title: 'Ang White House sa Camp John Hay',
        locationName: 'The Bell House (formerly The White House), Camp John Hay, Baguio',
        lat: 16.4014, lng: 120.6141,
        snippet: 'Hindi lang daw si Bell ang nagpaparamdam dito. May iba pang mga spirits from its long history...',
        fullStory: "Sa Camp John Hay, 'yung Bell House, or 'White House' kung tawagin ng iba, isa rin sa mga 'di papahuling haunted spots sa Baguio. Originally, summer residence 'yan ng mga American commanding generals. Tapos, siyempre, ginamit din noong World War II. Kaya ang daming layers ng history at, well, ghosts.\n\nSabi ng mga nagtrabaho doon or 'yung mga nakapag-tour, 'pag nasa loob ka, parang may ibang energy. Minsan daw, may maririnig kang mga yapak sa second floor, kahit wala namang umaakyat. 'Yung piano, minsan parang may tumutugtog ng mahina. May mga nakakakita rin daw ng anino ng lalaki na naka-unipormeng Amerikano, baka si General Bell nga, or ibang sundalo.\n\nPero hindi lang daw 'yun. May mga kwento rin ng mga Pilipinong spirits, baka 'yung mga dating nagsilbi doon or 'yung mga biktima noong panahon ng Hapon. 'Yung garden area, sabi nila, medyo creepy rin daw 'pag gabi. Parang may mga nagmamasid sa'yo mula sa mga puno. Kaya 'pag pumupunta kami diyan, picture-picture lang sa labas, tapos 'pag pumasok, mabilisang tour lang. Mahirap na, baka may 'souvenir' na sumama pauwi."
    },
    {
        id: '36',
        title: 'Ang mga Kalansay sa Capuchin Church Catacombs',
        locationName: 'National Shrine of Our Lady of Lourdes (Capuchin Church), Quezon City',
        lat: 14.6352, lng: 121.0190,
        snippet: 'Sa ilalim ng simbahan, may catacombs na puno ng mga buto. Sabi nila, may mga kaluluwang hindi matahimik...',
        fullStory: "Alam niyo ba na 'yung Capuchin Church sa Retiro, Quezon City, may catacombs sa ilalim? Hindi siya open sa public usually, pero may mga nakakapasok, lalo na 'yung mga taga-simbahan or 'pag may special permission. Doon daw nakalagak 'yung mga buto ng mga prayleng Capuchin at ilang miyembro ng community noong unang panahon. Imagine, rows of skulls and bones.\n\nMay kwento 'yung isang seminarista na napunta doon. Sabi niya, pagbaba pa lang nila sa hagdan, ramdam na agad 'yung lamig at 'yung 'bigat' ng lugar. Sobrang tahimik daw, pero parang may mga bumubulong. Habang naglalakad sila, may mga parteng parang may sumusunod sa kanila. 'Yung kasama niyang pari, bigla na lang daw nag-sign of the cross at nagdasal ng malakas.\n\nSabi-sabi, may mga kaluluwa raw doon na hindi pa rin matahimik, or baka 'yung mga 'guardian' ng mga labi. Minsan daw, 'yung mga buto, parang gumagalaw ng kusa. Or may maririnig kang parang may humihinga ng malalim. Sobrang creepy. Kahit sabihin mong banal na lugar 'yung simbahan sa taas, 'yung ilalim, ibang kwento. Parang portal sa ibang panahon."
    },
    {
        id: '37',
        title: 'Ang mga Ninuno sa Heritage Houses ng Vigan',
        locationName: 'Crisologo Street, Vigan, Ilocos Sur',
        lat: 17.5711, lng: 120.3890,
        snippet: 'Sa mga lumang bahay sa Vigan, sabi nila, nanonood pa rin daw ang mga dating may-ari mula sa mga bintana...',
        fullStory: "Ang Vigan, parang time capsule, 'di ba? Lalo na sa Calle Crisologo. 'Yung mga bahay doon, sobrang tanda na, at marami sa kanila, naging inn or museum. Pero 'wag ka, 'yung mga dating nakatira, parang 'di pa rin umaalis. Kwento ng kaibigan ko na nag-stay sa isa sa mga heritage house-turned-hotel doon, may na-experience silang kakaiba.\n\nSabi niya, 'yung kwarto nila, nasa second floor, 'yung may malalaking capiz windows. Isang gabi, nagising siya kasi parang may yumuyugyog ng kama niya. Akala niya, lindol, pero 'yung kasama niya, tulog na tulog. Tapos, may narinig siyang parang naglalakad sa labas ng kwarto nila, 'yung tunog ng tsinelas sa kahoy na sahig. Pero 'pag sinilip niya, wala namang tao. Kinabukasan, 'yung staff, parang sanay na sa mga ganung kwento. Sabi nila, 'normal' lang daw 'yun, 'nagpaparamdam lang 'yung mga ninuno.'\n\nMay mga turista rin daw na nakakakita ng mga anino sa bintana ng mga bahay, kahit sarado na. Or parang may sumisilip sa kanila mula sa itaas. Sabi nila, 'wag ka raw magugulat kung may makita kang matandang babae na naka-bestida ng luma, or lalaking naka-barong, na bigla na lang susulpot tapos mawawala. Part na raw 'yun ng Vigan experience. Creepy but fascinating!"
    },
    {
        id: '38',
        title: 'Ang mga Heswita sa Lumang Rizal Library ng Ateneo',
        locationName: 'Ateneo de Manila University (Old Rizal Library), Quezon City',
        lat: 14.6391, lng: 121.0770,
        snippet: 'Bago pa yung bagong Rizal Lib, yung luma raw, may mga kwento ng mga paring Heswita na nagpaparamdam...',
        fullStory: "Taga-Ateneo 'yung pinsan ko, and 'yung campus nila, lalo na 'yung mga older parts, may mga ghost stories din. Isa na diyan 'yung Old Rizal Library. Bago pa raw 'yung modernong library nila ngayon, 'yung luma, medyo may 'character' na. Sabi nila, may mga paring Heswita raw na multo na madalas magpakita doon. Mga dating propesor or librarians siguro.\n\nMay kwento 'yung isang estudyante na nag-aaral mag-isa sa isang secluded section. Gabi na 'yun. Bigla na lang daw siyang nakaramdam ng malamig na hangin, tapos may naamoy siyang insenso. Pagtingin niya sa dulo ng aisle, may nakita siyang figure ng pari, naka-sutana, nakatalikod, parang nagbabasa ng libro sa estante. Akala niya, totoong pari. Pero nung tinitigan niya, parang dahan-dahang nagiging transparent 'yung figure hanggang sa nawala.\n\nMay mga kwento rin ng mga libro na bigla na lang nahuhulog sa estante, or mga upuan na gumagalaw ng kusa. Minsan, may maririnig kang parang may nagtuturo sa isang empty classroom malapit sa library. Sabi nila, 'yung mga Heswitang 'yun, 'di naman daw nananakot, parang 'nandiyan' lang, continuing their scholarly pursuits even in the afterlife. Still, kung ikaw makakita, ewan ko lang kung 'di ka tatakbo."
    },
    {
        id: '39',
        title: 'Ang Multo sa St. La Salle Hall ng DLSU',
        locationName: 'De La Salle University (St. La Salle Hall), Manila',
        lat: 14.5646, lng: 120.9937,
        snippet: 'Ang iconic St. La Salle Hall, lalo na yung chapel, may mga kwento ng mga Brothers at biktima ng giyera...',
        fullStory: "Ang St. La Salle Hall sa DLSU, 'di ba, National Historical Landmark 'yan? Sobrang ganda ng architecture, pero dahil sa history niya, lalo na noong World War II, marami ring kwentong kababalaghan. Sabi ng mga Lasallista, 'yung chapel daw sa loob ng hall, isa sa mga pinaka-active. Maraming Brothers at sibilyan ang namatay doon noong Battle of Manila.\n\nMay mga estudyante at staff na nakakarinig daw ng mga bulong, mga dasal, or minsan, mga iyak sa loob ng chapel, kahit wala namang tao. May mga nakakakita rin daw ng anino ng mga Brothers na parang nagdarasal pa rin. 'Yung hallways din daw ng St. La Salle Hall, lalo na 'pag gabi, may mga 'naglalakad.' May mga nagre-report ng biglang paglamig ng temperatura, or 'yung pakiramdam na may dumaan sa likod mo.\n\nIsa sa mga pinaka-creepy na kwento, 'yung tungkol sa isang janitor na naglilinis ng gabi. May narinig daw siyang parang may naglalaro ng organ sa chapel. Pagpunta niya, wala namang tao, pero 'yung tunog, andun pa rin. Tapos, bigla na lang daw may bumagsak na isang prayer book mula sa taas. Simula noon, 'di na siya naglilinis mag-isa sa area na 'yun 'pag gabi. Ang bigat daw kasi ng pakiramdam, parang laging may kasama."
    },
    {
        id: '40',
        title: 'Ang mga Kaluluwa sa Pindangan Ruins',
        locationName: 'Pindangan Ruins, San Fernando, La Union',
        lat: 16.5919, lng: 120.3211,
        snippet: 'Mga guho ng lumang simbahan na sinira ng lindol. Sabi nila, marami pa ring residente doon...',
        fullStory: "Ang Pindangan Ruins sa San Fernando, La Union, 'yung mga natitirang pader na lang ng isang lumang simbahan. Ang ganda niya for photoshoots, 'di ba? Pero dahil ruins siya ng simbahan, at may history ng lindol at marahil, mga labanan noong unang panahon, may mga kwento rin ng kababalaghan.\n\nMay mga local doon na nagsasabi na 'pag dapit-hapon or 'pag gabi, 'wag daw masyadong mag-iingay or magulo sa ruins. Baka raw 'maistorbo' 'yung mga 'nakatira' doon. Sabi nila, minsan daw, may maririnig kang parang may nagdarasal or kumakanta ng mga lumang awiting pansimbahan. Minsan naman, parang may mga anino na gumagalaw sa paligid ng mga pader, kahit wala namang ibang tao.\n\nMay isang grupo ng mga turista na nag-stay doon hanggang medyo dumilim para kumuha ng sunset photos. Sabi nila, habang nagpi-picture sila, bigla na lang daw namatay 'yung mga camera nila, tapos 'yung phone ng isa sa kanila, biglang nag-play ng parang choral music na 'di nila alam kung saan galing. Kinilabutan daw sila, kaya nagmadali na silang umalis. Parang paalala na 'yung lugar, kahit ruins na, may 'sagradong' aspeto pa rin at dapat irespeto."
    },
    {
        id: '41',
        title: 'Ang mga Bumubulong sa Paco Park Cemetery',
        locationName: 'Paco Park and Cemetery, Manila',
        lat: 14.5831, lng: 120.9863,
        snippet: 'Dating sementeryo, ngayon park. Pero yung mga dating nakalibing daw, minsan bumubulong pa rin...',
        fullStory: "Ang Paco Park, ang ganda niya, 'di ba? Tahimik at peaceful, lalo na 'pag umaga. Pero 'wag natin kalimutan, sementeryo 'yan dati. Diyan nga unang nilibing si Jose Rizal, 'di ba? Kaya 'yung mga pader niyan, 'yung mga nitso sa loob, ang daming kwento.\n\nMay mga nagtatrabaho doon or 'yung mga madalas mag-jogging na nagsasabi na minsan, lalo na 'pag konti 'yung tao or 'pag palubog na 'yung araw, parang may mga bumubulong. Hindi mo maintindihan kung ano 'yung sinasabi, pero ramdam mo na may boses. Minsan daw, parang may sumisitsit sa'yo. Paglingon mo, wala naman.\n\nMay isang kwento tungkol sa isang security guard. Nagro-ronda siya isang gabi, tapos sa may St. Pancratius Chapel, may narinig siyang parang may nag-uusap. Dahan-dahan siyang sumilip, tapos may nakita siyang dalawang anino, parang naka-damit pang-kastila. Akala niya, mga nag-trespass lang. Pero nung sisitahin na niya, bigla na lang nawala 'yung mga anino. Sabi nila, baka 'yun 'yung mga kaluluwa ng mga prominenteng tao na nakalibing doon noong unang panahon. Nagpaparamdam lang."
    },
    {
        id: '42',
        title: 'Ang Doppelgänger sa Harrison Plaza',
        locationName: 'Harrison Plaza (Former Site), Malate, Manila',
        lat: 14.5660, lng: 120.9910,
        snippet: 'Kahit demolished na, yung mga kwento ng multo sa Harrison Plaza, buhay pa rin. Isa na yung doppelgänger...',
        fullStory: "Naalala niyo pa ba ang Harrison Plaza? 'Yung 'HP' sa Malate. Kahit wala na 'yun ngayon, ang daming urban legends diyan. Isa sa pinaka-creepy na narinig ko, 'yung tungkol sa doppelgänger. Sabi nila, may mga instances daw na makikita mo 'yung kakilala mo, tapos 'pag tinawag mo or nilapitan, biglang mawawala, or 'di kaya, 'pag nakausap mo, malalaman mo later na imposible kasi nasa ibang lugar pala 'yung totoong tao.\n\nMay kwento 'yung tita ko. Nagtatrabaho siya dati sa isa sa mga department store doon. Isang hapon, nakita niya 'yung supervisor niya na naglalakad papuntang stockroom. Sinundan niya kasi may itatanong siya. Pagpasok niya sa stockroom, wala 'yung supervisor niya. Nagtaka siya. Maya-maya, dumating 'yung supervisor niya galing sa kabilang entrance, galing daw sa lunch break. Imposible raw na siya 'yung nakita ng tita ko kanina.\n\nSabi ng matatanda, masamang pangitain daw 'pag nakakita ka ng doppelgänger mo or ng kakilala mo. 'Yung iba naman, sabi, baka 'yun 'yung mga 'hindi tao' na nagpapanggap. Kahit 'yung mga sinehan daw sa HP dati, may mga kwento rin ng mga 'extra audience.' Nakakamiss 'yung HP, pero 'yung mga multo, sana 'di na sumama sa bagong itatayo doon."
    },
    {
        id: '43',
        title: 'Ang mga Nawawalang Bata sa Bundok Arayat',
        locationName: 'Mt. Arayat, Pampanga',
        lat: 15.2033, lng: 120.7433,
        snippet: 'Sagradong bundok daw ito ni Mariang Sinukuan. May mga bata raw na kinukuha at hindi na bumabalik...',
        fullStory: "Ang Mt. Arayat sa Pampanga, isa rin 'yan sa mga bundok na balot ng alamat. Sabi nila, tahanan daw 'yan ni Mariang Sinukuan, 'yung diwata ng bundok. At dahil diyan, may mga kwento rin ng mga 'paglalaro' ng mga engkanto, lalo na sa mga bata. May mga local stories tungkol sa mga batang naglalaro malapit sa paanan ng bundok, tapos bigla na lang daw nawawala.\n\nHahanapin ng mga magulang at ng buong baryo, pero parang bula na naglaho. Minsan daw, pagkatapos ng ilang araw, bigla na lang susulpot 'yung bata, pero parang tulala at hindi makapagsalita. 'Pag naka-recover na, ikukwento nila na may nakita silang magandang babae or mga kalarong kakaiba na nagyaya sa kanila sa isang magandang lugar sa loob ng gubat. Pinakain daw sila ng masasarap na prutas. 'Yung iba, hindi na talaga nakakabalik.\n\nSabi ng matatanda, 'kinukuha' raw sila ni Mariang Sinukuan or ng ibang engkanto para maging kalaro or para 'alagaan.' Kaya 'pag may mga taga-labas na pumupunta doon, lalo na 'pag may kasamang bata, laging may paalala na 'wag masyadong lalayo or mag-iingay. Kailangan daw laging may 'tabi-tabi po.' Respeto sa mga 'di nakikita."
    },
    {
        id: '44',
        title: 'Ang Babaeng Pula sa PICC',
        locationName: 'Philippine International Convention Center (PICC), Pasay City',
        lat: 14.5531, lng: 120.9820,
        snippet: 'Sa mga grand halls ng PICC, may nagpapakita raw na babae na laging nakapula, lalo na pag may malalaking event...',
        fullStory: "Ang PICC, 'di ba, venue 'yan ng mga malalaking international conferences, concerts, at graduations. Pero alam niyo ba na may urban legend din diyan tungkol sa isang 'Lady in Red'? Sabi ng mga staff na matagal na doon, at kahit 'yung mga event organizers, minsan daw, may nakikitang babae na naka-eleganteng pulang bestida, naglalakad sa mga hallway or nakaupo sa isa sa mga upuan sa plenary hall, kahit wala pa namang event or tapos na.\n\nIsang kwento, during a rehearsal for a big concert, 'yung isa sa mga singers, habang nasa stage, may napansin siyang babae na nakapula sa may audience area, nakatitig sa kanya. Akala niya, part ng production crew. Pero nung tinanong niya 'yung director, wala naman daw dapat taong nandoon. Pagtingin nila ulit, wala na 'yung babae. Minsan daw, sa mga CR, may makikitang anino ng babaeng nakapula sa salamin.\n\nWalang sure kung sino siya or ano'ng kwento niya. Baka raw dating guest na may strong attachment sa lugar, or baka naman, isang 'engkantada' na na-aattract sa mga grand events. Hindi naman daw nananakot, pero 'yung presence niya, enough na para kilabutan ka. Kaya 'pag may event sa PICC, baka 'di lang kayo-kayo ang audience."
    },
    {
        id: '45',
        title: 'Ang Anino sa Simbahan ng Silliman University',
        locationName: 'Silliman University Church, Dumaguete City',
        lat: 9.3100, lng: 123.3062,
        snippet: 'Isa sa pinakamatandang American university sa Asia, yung simbahan daw nila, may shadow figure na nagbabantay...',
        fullStory: "Ang Silliman University sa Dumaguete, ang ganda ng campus, lalo na 'yung mga lumang acacia trees at 'yung Silliman Church. Protestante 'yung simbahan na 'yun, at isa sa mga iconic structures sa campus. Dahil matagal na rin siyang nakatayo, may mga kwento rin ng 'di matahimik na kaluluwa.\n\nMay mga estudyante at faculty na nakakakita raw ng isang 'shadow figure' sa loob ng simbahan, lalo na 'pag gabi or 'pag madaling araw. Minsan daw, makikita 'to na nakatayo malapit sa altar, or nakaupo sa isa sa mga pew. Hindi raw clear 'yung itsura, basta maitim na anino ng tao. Minsan, parang may hawak na libro. May mga nagsasabi na baka 'yun 'yung spirit ng isa sa mga founding missionaries or isang dating pastor.\n\nIsang estudyante, nag-practice ng organ sa simbahan ng gabi. Mag-isa lang siya. Bigla na lang daw siyang nakaramdam ng sobrang lamig, tapos sa peripheral vision niya, may nakita siyang anino na dumaan sa likod niya. Hindi na siya lumingon, tinapos na lang niya 'yung piyesa niya tapos mabilis na umalis. Sabi nila, 'di naman daw nananakit 'yung anino, parang 'guardian' lang ng simbahan. Pero kahit na, 'pag ikaw 'yung makakita, matatakot ka pa rin."
    },
    {
        id: '46',
        title: 'Ang Sumisilip sa MTRCB Office',
        locationName: 'MTRCB Office, Quezon City',
        lat: 14.6413, lng: 121.0408,
        snippet: 'Sa opisina kung saan nagre-review ng mga pelikula at palabas, may extra reviewer daw na nagpapakita...',
        fullStory: "Ang MTRCB (Movie and Television Review and Classification Board), 'di ba, sila 'yung nanonood at nagbibigay ng rating sa mga pelikula at TV shows? Nakakatuwa isipin na 'yung opisina nila, may kwento rin ng multo. Narinig ko 'to sa isang kaibigan na may kamag-anak na nagtatrabaho doon dati.\n\nSabi niya, minsan daw, 'pag nagre-review sila ng mga materyal sa screening room, lalo na 'pag late na or 'pag horror 'yung pinapanood nila, parang may 'sumasabay' sa kanila. May mga pagkakataon daw na may makikitang anino sa dulo ng kwarto, or parang may dumaan sa likod nila. Minsan, 'yung pinto ng screening room, bigla na lang bubukas o sasara ng kusa.\n\nMay isang board member daw dati, habang nanonood mag-isa, may naramdaman siyang parang may huminga sa batok niya. Paglingon niya, wala namang tao. Tapos, 'yung upuan sa tabi niya, parang may umupo, lumubog ng konti. Hindi naman daw siya natakot, parang nasanay na lang daw sila. Sabi nila, baka raw 'yun 'yung kaluluwa ng isang dating board member na sobrang dedicated sa trabaho, or baka 'character' mula sa isa sa mga horror films na napanood doon na 'di na umalis. Creepy 'pag iniisip mo, 'di ba?"
    },
    {
        id: '47',
        title: 'Ang Lumang Mansyon sa Sariaya, Quezon',
        locationName: 'Gala-Rodriguez Ancestral House, Sariaya, Quezon',
        lat: 13.9643, lng: 121.5245,
        snippet: 'Isa sa mga grand ancestral houses sa Sariaya. Sabi nila, yung mga dating may-ari, nagpaparamdam pa rin...',
        fullStory: "Ang Sariaya, Quezon, kilala sa mga magaganda at malalaking ancestral houses. Isa na diyan 'yung Gala-Rodriguez house. Ang ganda niya, parang museum. Pero siyempre, 'yung mga ganitong lumang bahay, laging may kasamang kwentong kababalaghan. At 'yung bahay na 'to, 'di raw pahuhuli.\n\nMay mga tourista at kahit 'yung mga caretaker na nakaka-experience ng mga 'di maipaliwanag na bagay. Minsan daw, 'pag naglalakad ka sa loob, parang may sumusunod sa'yo. 'Yung mga ilaw, minsan nagfi-flicker. May mga nakakarinig din daw ng mga yapak sa second floor, kahit wala namang tao doon. 'Yung iba, parang may naririnig na nag-uusap na mga boses, pero 'di maintindihan 'yung salita, parang Spanish.\n\nAng pinaka-common daw na sighting, 'yung anino ng isang babae na nakadungaw sa bintana, lalo na 'pag gabi. Minsan, 'yung piano sa sala, bigla na lang daw tutunog ng kusa. Sabi nila, mga kaluluwa raw 'yun ng mga dating miyembro ng pamilya Gala-Rodriguez, binabantayan pa rin 'yung bahay nila. Hindi naman daw sila nananakot, pero 'yung presence nila, mararamdaman mo talaga. Nakakakilabot pero at the same time, parang ang lungkot din."
    },
    {
        id: '48',
        title: 'Ang Madreng Walang Mukha sa St. Paul University QC',
        locationName: 'St. Paul University Quezon City (Old Buildings/Chapel)',
        lat: 14.6173, lng: 121.0301,
        snippet: 'Sa campus daw nila, may madreng multo na gumagala, pero pag tiningnan mo, wala raw mukha...',
        fullStory: "Pinsan ko, nag-aral sa St. Paul University sa Quezon City. Ang dami niyang kwento tungkol sa campus nila, lalo na sa mga lumang building at sa chapel. Isa sa pinaka-creepy 'yung tungkol sa 'Faceless Nun.' Sabi nila, may madreng multo raw na madalas magpakita, lalo na sa mga estudyanteng naglalakad mag-isa sa hallway 'pag gabi or 'pag madaling araw.\n\nMakikita mo raw siya na naglalakad, naka-abito ng madre. Aakalain mo, ordinaryong madre lang. Pero 'pag napatingin ka raw sa mukha niya, or 'pag lumingon siya sa'yo, wala raw siyang mukha. As in, blanko lang daw, or 'di kaya, sobrang dilim na parang butas. Sobrang nakakatakot daw 'yun. May mga estudyante raw na napapatili na lang or natutulala sa takot.\n\nSabi-sabi, baka raw 'yun 'yung kaluluwa ng isang madre na dumanas ng matinding trahedya noong unang panahon. Or baka naman, 'representation' ng isang 'di matahimik na espiritu. 'Yung chapel din daw nila, may mga 'nagdarasal' na 'di nakikita. Kaya 'yung pinsan ko, 'pag kailangan niyang dumaan sa mga lumang hallway ng gabi, takbo raw siya, 'wag lang siyang makasalubong ng madre."
    },
    {
        id: '49',
        title: 'Ang Lumulutang na Kabaong sa Ilog Pasig',
        locationName: 'Pasig River, Metro Manila',
        lat: 14.5800, lng: 121.0000, 
        snippet: 'May mga nakakakita raw ng kabaong na palutang-lutang sa Ilog Pasig, lalo na pag malalim na ang gabi...',
        fullStory: "Ang Ilog Pasig, 'di ba, ang dami nang history niyan. Mula sa panahon ng mga Kastila hanggang ngayon. At dahil diyan, marami ring kwentong kababalaghan na nakakabit dito. Isa sa mga narinig ko, 'yung tungkol sa lumulutang na kabaong. Sabi ng mga matatanda na nakatira malapit sa ilog, or 'yung mga namamangka dati, minsan daw, lalo na 'pag hatinggabi at tahimik, may makikita kang kabaong na palutang-lutang sa gitna ng ilog.\n\nMinsan daw, ordinaryong kabaong lang. Pero minsan, may kasama raw na parang kandila na nakasindi sa ibabaw. Ang pinaka-creepy, 'pag sinubukan mong lapitan or sundan, bigla na lang daw lulubog or mawawala. May mga nagsasabi na baka 'yun 'yung mga biktima ng mga krimen na itinapon sa ilog, or 'yung mga namatay noong mga panahon ng digmaan na hindi nabigyan ng maayos na libing.\n\nMay isang kwento 'yung mangingisda, nakakita raw siya ng kabaong. Nung una, akala niya, basura lang. Pero nung lumapit siya, kitang-kita niya 'yung korte ng kabaong. Tapos, bigla raw siyang nakarinig ng parang may umiiyak na nanggagaling doon. Sa sobrang takot, mabilis siyang umalis. Simula noon, 'pag gabi na, 'di na siya masyadong pumapagitna sa ilog."
    },
    {
        id: '50',
        title: 'Ang Lalaking Nakaitim sa Libingan ng mga Bayani',
        locationName: 'Libingan ng mga Bayani, Taguig City',
        lat: 14.5180, lng: 121.0499,
        snippet: 'Sa sementeryo ng mga bayani, may misteryosong lalaki raw na laging nakaitim, nagbabantay sa mga puntod...',
        fullStory: "Ang Libingan ng mga Bayani, solemne at tahimik na lugar, 'di ba? Dito nakahimlay 'yung mga sundalo, mga dating presidente, at mga national artists. Pero kahit gaano katahimik, may mga kwento pa rin ng 'di maipaliwanag. Isa na rito 'yung tungkol sa isang 'Man in Black.' Sabi ng mga guwardiya at 'yung mga naglilinis doon, minsan daw, lalo na 'pag dapit-hapon or 'pag walang masyadong bisita, may makikita silang lalaki na laging nakasuot ng itim na amerikana, parang luma.\n\nTahimik lang daw itong naglalakad sa pagitan ng mga puntod, or minsan, nakatayo lang sa harap ng isang partikular na lapida, parang nagluluksa or nagbabantay. 'Pag sinubukan daw nilang lapitan or kausapin, dahan-dahan lang itong maglalakad palayo hanggang sa mawala sa paningin, parang naglaho sa hangin. Hindi raw ito namiminsala, pero 'yung presence niya, sobrang misteryoso at medyo nakakakilabot.\n\nMay mga haka-haka na baka raw 'yun 'yung kaluluwa ng isang 'unknown soldier' na hindi pa rin matahimik, or baka isang 'tagabantay' ng mga bayani. Minsan daw, 'pag may mga importanteng okasyon or 'pag may bagong libing, mas madalas daw siyang magpakita. Parang sinisigurado niya na maayos at nirerespeto ang lugar. Nakakatindig-balahibo, pero parang may halong respeto rin 'yung pakiramdam."
    }
]

 /* asdda asdads */
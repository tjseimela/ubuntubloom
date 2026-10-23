/*
TJ SEIMELA   223670863
SS MAINE     224139983
OR ITUMELENG 224370693
NT JABULANE  223898724
*/

(() => {
  const translations = {
    en: {
      home: 'Home', plants: 'Plants', indoorPlants: 'Indoor Plants', outdoorPlants: 'Outdoor Plants', succulents: 'Succulents', herbs: 'Herbs',
      plantCare: 'Plant Care', about: 'About Us', contact: 'Contact',
      heroEyebrow1: 'Plant nursery & plant care centre', heroTitle1a: 'Grow together.', heroTitle1b: 'Bloom together.', heroText1: 'Beautiful plants. Helpful advice. Healthier spaces.', explorePlants: 'Explore Our Plants', careTips: 'Plant Care Tips',
      heroEyebrow2: 'For calmer, greener homes', heroTitle2a: 'Find a plant that', heroTitle2b: 'fits your space.', heroText2: 'From low-light favourites to sun-loving herbs, we make choosing plants simple.', findPlant: 'Find Your Plant',
      heroEyebrow3: 'Practical plant care', heroTitle3a: 'Confident care.', heroTitle3b: 'Happier plants.', heroText3: 'Clear watering, light and soil guidance for beginners and plant lovers.', learnCare: 'Learn Plant Care',
      wideSelection: 'Wide Plant Selection', wideSelectionSub: 'Indoor, outdoor, succulents & more', localReliable: 'Local & Reliable', localReliableSub: 'Quality plants and practical advice', expertCare: 'Expert Plant Care', expertCareSub: 'Tips for healthier, happier plants', greenerCommunity: 'A Greener Community', greenerCommunitySub: 'Growing together in South Africa',
      featuredPlants: 'Featured Plants', viewAllPlants: 'View All Plants', createGreenerHome: 'Create a Greener Home', createGreenerHomeText: 'Plants improve your space, your mood and your well-being.',
      communityQuote: '“A home feels different when something living is growing in it.”', communityQuoteBy: 'Ubuntu Bloom plant-care team',
      ctaTitle: 'Ready to bring home something green?', ctaText: 'Browse our plants or send us an enquiry and we will help you choose.', contactUs: 'Contact Us',
      quickLinks: 'Quick Links', followUs: 'Follow Us', footerText: 'A friendly South African plant nursery helping people grow with confidence.', copyright: '© 2026 Ubuntu Bloom. All rights reserved.', footerTagline: 'Grow together. Bloom together.',
      pagePlantsTitle: 'Plants for every kind of space', pagePlantsText: 'Explore easy indoor favourites, outdoor colour, hardy succulents and useful herbs.', searchPlants: 'Search plants...', all: 'All', noPlants: 'No plants match your search. Try another name or category.', showing: 'Showing', plantsLabel: 'plants',
      light: 'Light', water: 'Water', difficulty: 'Difficulty', enquire: 'Enquire', easy: 'Easy', moderate: 'Moderate', brightIndirect: 'Bright indirect', lowBright: 'Low to bright', fullSun: 'Full sun', partialSun: 'Partial sun', weekly: 'Weekly', biweekly: 'Every 2 weeks', whenDry: 'When soil dries', regular: 'Regularly',
      aboutTitle: 'Rooted in care, community and growth', aboutIntro: 'Ubuntu Bloom is a Vanderbijlpark-based plant nursery and plant care centre dedicated to helping homes, offices and communities grow greener. Founded by four Vaal University of Technology students, the business combines a shared passion for plants, practical care knowledge and community-focused service.',
      ourStory: 'Our Story', storyP1: 'Ubuntu Bloom was founded by four Vaal University of Technology students who saw an opportunity to make quality plants and reliable plant-care guidance more accessible in the Vaal. What began as a shared student idea grew into a nursery focused on helping people choose plants that suit their homes, gardens, offices and lifestyles.', storyP2: 'From our Vanderbijlpark nursery, we nurture a diverse selection of indoor plants, outdoor plants, succulents and herbs. Our team focuses on healthy stock, practical advice and personal service, from choosing the right plant to supporting customers with after-care.',
      mission: 'Our Mission', missionText: 'To make greener living easier by providing healthy plants, dependable guidance and personal service that helps every customer grow with confidence.',
      valuesTitle: 'What We Value', valueCare: 'Care First', valueCareText: 'We focus on healthy plants and practical advice people can actually use.', valueCommunity: 'Ubuntu Spirit', valueCommunityText: 'We believe growing is better when knowledge and support are shared.', valueSimple: 'Keep It Simple', valueSimpleText: 'Plant care should feel clear, accessible and manageable for beginners.',
      careTitle: 'Plant care made simple', careIntro: 'Use these quick guides to understand light, watering, soil and common warning signs.', careNav: 'On this page', watering: 'Watering', sunlight: 'Sunlight', soil: 'Soil & Feeding', troubleshooting: 'Troubleshooting', careTable: 'Quick Care Table', careVideos: 'Practical Care Videos', careVideosIntro: 'Watch these short step-by-step guides to learn useful plant-care skills. The videos are stored with the website, so they also work offline.',
      resources: 'Trusted Resources', resourcesTitle: 'Trusted Plant Resources', resourcesIntro: 'Use these trusted external resources when you want to read more about plant care, indigenous plants and common problems.', resourceSanbi: 'South African biodiversity information and conservation resources.', resourcePza: 'Plant profiles and growing information focused on southern African plants.', resourceRhsGrow: 'Practical guidance on watering, feeding, light, humidity and ongoing houseplant care.', resourceRhsProblem: 'A useful guide to recognising common houseplant symptoms and improving growing conditions.', openResource: 'Open resource ↗',
      wateringTitle: 'Watering without guesswork', wateringText: 'Check the soil before watering. For most houseplants, water only when the top few centimetres feel dry. Empty excess water from saucers so roots do not sit in water.', wateringList1: 'Use room-temperature water when possible.', wateringList2: 'Water less often in cooler months.', wateringList3: 'Plants in bright light usually dry faster.',
      sunlightTitle: 'Reading your light', sunlightText: 'Bright indirect light means a bright room without harsh midday sun directly hitting the leaves. Low-light plants tolerate dimmer spaces, but no plant can thrive in complete darkness.',
      soilTitle: 'Soil and feeding', soilText: 'Use a well-draining potting mix and a pot with drainage holes. Feed actively growing plants lightly during spring and summer, following the fertiliser label.',
      troubleTitle: 'Common warning signs', troubleYellow: 'Yellow leaves: often too much water, poor drainage or normal ageing.', troubleBrown: 'Brown edges: can indicate dry air, underwatering or salt build-up.', troubleStretch: 'Long, weak growth: usually a sign that the plant needs more light.',
      tablePlant: 'Plant', tableLight: 'Best Light', tableWater: 'Watering Guide', tableLevel: 'Care Level',
      videoWaterTitle: 'How to Water Indoor Plants', videoWaterText: 'Learn how to check soil moisture, water thoroughly and avoid leaving roots in standing water.', videoLightTitle: 'Understanding Plant Light', videoLightText: 'Learn how to recognise direct sun, bright indirect light and low light, plus signs of poor placement.', videoRepotTitle: 'How to Repot a Houseplant', videoRepotText: 'See when to repot, how to choose the next pot size and how to move the plant without damaging its roots.',
      contactTitle: 'Let’s help your space bloom', contactIntro: 'Ask about a plant, a care issue or a nursery visit. Our team will get back to you as soon as possible.', visitUs: 'Visit Ubuntu Bloom', addressLabel: 'Address', phoneLabel: 'Phone', emailLabel: 'Email', hours: 'Opening Hours', mondayFriday: 'Monday – Friday', saturday: 'Saturday', sunday: 'Sunday', closed: 'Closed',
      mapTitle: 'Nursery location', mapText: 'Visit us at 18 Riverleaf Avenue, Vanderbijlpark, Gauteng, 1911 for plant shopping, collections and in-person care advice.', sendMessage: 'Send us a message', name: 'Name', email: 'Email', phone: 'Phone (optional)', topic: 'Topic', chooseTopic: 'Choose a topic', plantEnquiry: 'Plant enquiry', careQuestion: 'Plant-care question', visitQuestion: 'Nursery visit', other: 'Other', message: 'Message', send: 'Send Message',
      nameError: 'Please enter your name.', emailError: 'Please enter a valid email address.', topicError: 'Please choose a topic.', messageError: 'Please enter a message of at least 10 characters.', formCheck: 'Please check the highlighted fields.', formSending: 'Sending your message...', formSentOnline: 'Thank you. Your message was sent successfully.', formOnlineError: 'We could not send your message right now. Please try again.', formNeedsServer: 'This contact form needs either XAMPP/a PHP server or the online email service to be connected. You can still email hello@ubuntubloom.co.za directly.',
      backHome: 'Back to Home', backContact: 'Back to Contact', processInvalid: 'Please submit the contact form with a valid name, email, topic and message.', formSuccessTitle: 'Thank you for your message', formSuccessText: 'Your enquiry has been saved successfully. Ubuntu Bloom will reply as soon as possible.', formErrorTitle: 'We could not save your message', formErrorText: 'Please go back and try again.',
      categoryIndoor: 'Indoor', categoryOutdoor: 'Outdoor', categorySucculent: 'Succulent', categoryHerb: 'Herb',
      monsteraDesc: 'Bold split leaves for bright indoor spaces.', snakeDesc: 'Hardy and forgiving, ideal for beginners.', peaceDesc: 'Elegant white blooms and lush green leaves.', pothosDesc: 'Fast-growing trailing plant for shelves.', aloeDesc: 'Low-maintenance succulent with sculptural leaves.', jadeDesc: 'Compact succulent with glossy rounded leaves.', echeveriaDesc: 'Rosette succulent that loves bright light.', lavenderDesc: 'Fragrant outdoor colour for sunny spots.', rosemaryDesc: 'Useful aromatic herb for pots and gardens.', basilDesc: 'Fast-growing kitchen herb for warm sunny spaces.', geraniumDesc: 'Reliable flowering plant for patios and beds.', spekboomDesc: 'South African favourite with small succulent leaves.'
    },
    zu: {
      home: 'Ikhaya', plants: 'Izitshalo', indoorPlants: 'Izitshalo Zasendlini', outdoorPlants: 'Izitshalo Zangaphandle', succulents: 'Ama-Succulent', herbs: 'Amakhambi',
      plantCare: 'Ukunakekelwa Kwezitshalo', about: 'Mayelana Nathi', contact: 'Xhumana Nathi',
      heroEyebrow1: 'Inkulisa yezitshalo nesikhungo sokunakekela', heroTitle1a: 'Khula ndawonye.', heroTitle1b: 'Qhakaza ndawonye.', heroText1: 'Izitshalo ezinhle. Iseluleko esiwusizo. Izindawo ezinempilo.', explorePlants: 'Bheka Izitshalo', careTips: 'Amathiphu Okunakekela',
      heroEyebrow2: 'Amakhaya athule futhi aluhlaza', heroTitle2a: 'Thola isitshalo', heroTitle2b: 'esifanele indawo yakho.', heroText2: 'Kusukela ezitshalweni ezithanda ukukhanya okuncane kuya emakhambini athanda ilanga, senza ukukhetha kube lula.', findPlant: 'Thola Isitshalo Sakho',
      heroEyebrow3: 'Ukunakekela okulula', heroTitle3a: 'Nakekela ngokuzethemba.', heroTitle3b: 'Izitshalo ezijabulayo.', heroText3: 'Imihlahlandlela ecacile yamanzi, ukukhanya nomhlabathi yabaqalayo nabathandi bezitshalo.', learnCare: 'Funda Ukunakekela',
      wideSelection: 'Ukukhetha Okubanzi', wideSelectionSub: 'Ezangaphakathi, zangaphandle, ama-succulent nokunye', localReliable: 'Kwasendaweni & Kuthembekile', localReliableSub: 'Izitshalo ezisezingeni nezeluleko ezisebenzayo', expertCare: 'Ukunakekela Kochwepheshe', expertCareSub: 'Amathiphu ezitshalo ezinempilo', greenerCommunity: 'Umphakathi Oluhlaza', greenerCommunitySub: 'Sikhula ndawonye eNingizimu Afrika',
      featuredPlants: 'Izitshalo Ezivelele', viewAllPlants: 'Bona Zonke Izitshalo', createGreenerHome: 'Dala Ikhaya Eliluhlaza', createGreenerHomeText: 'Izitshalo zithuthukisa indawo yakho, umoya wakho kanye nenhlalakahle yakho.',
      communityQuote: '“Ikhaya lizizwa lihlukile uma kukhona okuphila nokukhulayo kulo.”', communityQuoteBy: 'Ithimba lokunakekela le-Ubuntu Bloom',
      ctaTitle: 'Usukulungele ukuletha okuluhlaza ekhaya?', ctaText: 'Bheka izitshalo zethu noma usithumele umbuzo, sizokusiza ukhethe.', contactUs: 'Xhumana Nathi',
      quickLinks: 'Izixhumanisi Ezisheshayo', followUs: 'Silandele', footerText: 'Inkulisa yezitshalo yaseNingizimu Afrika esiza abantu bakhule ngokuzethemba.', copyright: '© 2026 Ubuntu Bloom. Wonke amalungelo agodliwe.', footerTagline: 'Khula ndawonye. Qhakaza ndawonye.',
      pagePlantsTitle: 'Izitshalo zazo zonke izinhlobo zezindawo', pagePlantsText: 'Bheka ezasendlini ezilula, ezangaphandle ezinemibala, ama-succulent aqinile namakhambi awusizo.', searchPlants: 'Sesha izitshalo...', all: 'Konke', noPlants: 'Azikho izitshalo ezihambisana nosesho lwakho. Zama elinye igama noma isigaba.', showing: 'Kuboniswa', plantsLabel: 'izitshalo',
      light: 'Ukukhanya', water: 'Amanzi', difficulty: 'Ubunzima', enquire: 'Buza', easy: 'Kulula', moderate: 'Kuphakathi', brightIndirect: 'Ukukhanya okugqamile okungaqondile', lowBright: 'Okuncane kuya kokugqamile', fullSun: 'Ilanga eligcwele', partialSun: 'Ilanga elingaphelele', weekly: 'Masonto onke', biweekly: 'Njalo emavikini ama-2', whenDry: 'Uma umhlabathi womile', regular: 'Njalo',
      aboutTitle: 'Sisekelwe ekunakekeleni, emphakathini nasekukhuleni', aboutIntro: 'Ubuntu Bloom iyinkulisa yezitshalo nesikhungo sokunakekela izitshalo esizinze eVanderbijlpark, esizinikele ekusizeni amakhaya, amahhovisi nemiphakathi ukuba ibe luhlaza kakhulu. Yasungulwa abafundi abane baseVaal University of Technology, behlanganisa uthando lwezitshalo, ulwazi lokuzinakekela kanye nensizakalo egxile emphakathini.',
      ourStory: 'Indaba Yethu', storyP1: 'Ubuntu Bloom yasungulwa abafundi abane baseVaal University of Technology ababone ithuba lokwenza izitshalo ezisezingeni eliphezulu kanye neseluleko sokuzinakekela kutholakale kalula eVaal. Umqondo wabafundi wakhula waba yinkulisa esiza abantu bakhethe izitshalo ezifanele amakhaya, izingadi, amahhovisi kanye nendlela yabo yokuphila.', storyP2: 'Enkulisa yethu yaseVanderbijlpark, sinakekela izinhlobo ezahlukene zezitshalo zasendlini, zangaphandle, ama-succulent namakhambi. Ithimba lethu ligxile ezitshalweni ezinempilo, izeluleko ezisebenzayo kanye nenkonzo yomuntu siqu, kusukela ekukhetheni isitshalo kuya ekunakekelweni kwangemva kokuthenga.',
      mission: 'Inhloso Yethu', missionText: 'Ukwenza ukuphila okuluhlaza kube lula ngokuhlinzeka ngezitshalo ezinempilo, izeluleko ezithembekile kanye nenkonzo yomuntu siqu esiza ikhasimende ngalinye likhule ngokuzethemba.',
      valuesTitle: 'Esikwazisayo', valueCare: 'Ukunakekela Kuqala', valueCareText: 'Sigxila ezitshalweni ezinempilo nasezelulekweni ezisebenzayo abantu abangazisebenzisa.', valueCommunity: 'Umoya Wobuntu', valueCommunityText: 'Sikholelwa ukuthi ukukhula kuba ngcono uma ulwazi nokwesekwa kwabelwana ngakho.', valueSimple: 'Kwenze Kube Lula', valueSimpleText: 'Ukunakekela izitshalo kufanele kube sobala, kufinyeleleke futhi kulawuleke kwabaqalayo.',
      careTitle: 'Ukunakekelwa kwezitshalo okwenziwe lula', careIntro: 'Sebenzisa le mihlahlandlela esheshayo ukuze uqonde ukukhanya, ukuchelela, umhlabathi nezimpawu zezinkinga.', careNav: 'Kuleli khasi', watering: 'Ukuchelela', sunlight: 'Ukukhanya kwelanga', soil: 'Umhlabathi & Umanyolo', troubleshooting: 'Ukuxazulula Izinkinga', careTable: 'Ithebula Lokunakekela', careVideos: 'Amavidiyo Okunakekela Izitshalo', careVideosIntro: 'Buka le mihlahlandlela emifushane yesinyathelo ngesinyathelo ukuze ufunde amakhono awusizo okunakekela izitshalo. Amavidiyo agcinwe kuwebhusayithi, ngakho asebenza nangaphandle kwe-inthanethi.',
      resources: 'Izinsiza Ezithembekile', resourcesTitle: 'Izinsiza Ezithembekile Zezitshalo', resourcesIntro: 'Sebenzisa lezi zinsiza zangaphandle ezithembekile uma ufuna ukufunda kabanzi ngokunakekelwa kwezitshalo, izitshalo zendabuko nezinkinga ezivamile.', resourceSanbi: 'Ulwazi lwezinhlobonhlobo zemvelo zaseNingizimu Afrika nezinsiza zokulondolozwa kwemvelo.', resourcePza: 'Amaphrofayili ezitshalo nolwazi lokuzikhulisa olugxile ezitshalweni zaseNingizimu Afrika.', resourceRhsGrow: 'Iseluleko esisebenzayo ngokunisela, ukufaka umanyolo, ukukhanya, umswakama nokunakekelwa kwezitshalo zasendlini.', resourceRhsProblem: 'Umhlahlandlela owusizo wokubona izimpawu zezinkinga ezivamile nokuthuthukisa izimo zokukhula.', openResource: 'Vula insiza ↗',
      wateringTitle: 'Ukuchelela ngaphandle kokuqagela', wateringText: 'Hlola umhlabathi ngaphambi kokuchelela. Ezitshalweni eziningi zasendlini, chelela kuphela uma ingxenye ephezulu yomhlabathi isomile. Susa amanzi amaningi ezitsheni ezingaphansi.', wateringList1: 'Sebenzisa amanzi angabandi kakhulu uma kungenzeka.', wateringList2: 'Chelela kancane ezinyangeni ezibandayo.', wateringList3: 'Izitshalo ezikhanyeni okugqamile zivame ukoma ngokushesha.',
      sunlightTitle: 'Ukuqonda ukukhanya', sunlightText: 'Ukukhanya okugqamile okungaqondile kusho igumbi elikhanyayo ngaphandle kwelanga lasemini elishaya amaqabunga ngqo. Izitshalo zokukhanya okuncane ziyakwazi ukubekezelela ubumnyama obuthile, kodwa akukho sitshalo esikhula kahle ebumnyameni ngokuphelele.',
      soilTitle: 'Umhlabathi nomanyolo', soilText: 'Sebenzisa umhlabathi ophuma kahle amanzi kanye nebhodwe elinezimbobo. Faka umanyolo kancane ngesikhathi sokukhula entwasahlobo nasehlobo.',
      troubleTitle: 'Izimpawu ezivamile', troubleYellow: 'Amaqabunga aphuzi: kungaba amanzi amaningi, ukuphuma kwamanzi okubi noma ukuguga kwemvelo.', troubleBrown: 'Imiphetho ensundu: kungaba umoya owomile, amanzi amancane noma usawoti emhlabathini.', troubleStretch: 'Ukukhula okude nobuthakathaka: kuvamise ukusho ukuthi isitshalo sidinga ukukhanya okwengeziwe.',
      tablePlant: 'Isitshalo', tableLight: 'Ukukhanya Okungcono', tableWater: 'Umhlahlandlela Wamanzi', tableLevel: 'Izinga Lokunakekela',
      videoWaterTitle: 'Indlela Yokunisela Izitshalo Zasendlini', videoWaterText: 'Funda ukuhlola umswakama womhlabathi, ukunisela kahle nokugwema ukushiya izimpande emanzini amile.', videoLightTitle: 'Ukuqonda Ukukhanya Kwezitshalo', videoLightText: 'Funda ukubona ilanga eliqondile, ukukhanya okugqamile okungaqondile nokukhanya okuncane, kanye nezimpawu zokubekwa endaweni engafanele.', videoRepotTitle: 'Indlela Yokushintsha Ibhodwe Lesitshalo', videoRepotText: 'Bona ukuthi kufanele ushintshe nini ibhodwe, ukhethe kanjani usayizi olandelayo nokuhambisa isitshalo ngaphandle kokulimaza izimpande.',
      contactTitle: 'Masenze indawo yakho iqhakaze', contactIntro: 'Buza ngesitshalo, inkinga yokunakekela noma ukuvakashela inkulisa. Ithimba lethu lizophendula ngokushesha ngangokunokwenzeka.', visitUs: 'Vakashela Ubuntu Bloom', addressLabel: 'Ikheli', phoneLabel: 'Ucingo', emailLabel: 'I-imeyili', hours: 'Amahora Okuvula', mondayFriday: 'Msombuluko – Lwesihlanu', saturday: 'Mgqibelo', sunday: 'Sonto', closed: 'Kuvaliwe',
      mapTitle: 'Indawo yenkulisa', mapText: 'Sivakashele ku-18 Riverleaf Avenue, Vanderbijlpark, Gauteng, 1911 ukuze uthenge izitshalo, uzilande noma uthole iseluleko sokunakekela mathupha.', sendMessage: 'Sithumele umlayezo', name: 'Igama', email: 'I-imeyili', phone: 'Ucingo (uyazikhethela)', topic: 'Isihloko', chooseTopic: 'Khetha isihloko', plantEnquiry: 'Umbuzo ngesitshalo', careQuestion: 'Umbuzo wokunakekela', visitQuestion: 'Ukuvakashela inkulisa', other: 'Okunye', message: 'Umlayezo', send: 'Thumela Umlayezo',
      nameError: 'Sicela ufake igama lakho.', emailError: 'Sicela ufake i-imeyili evumelekile.', topicError: 'Sicela ukhethe isihloko.', messageError: 'Sicela ufake umlayezo onezinhlamvu okungenani eziyi-10.', formCheck: 'Sicela uhlole izinkambu eziphawuliwe.', formSending: 'Sithumela umlayezo wakho...', formSentOnline: 'Siyabonga. Umlayezo wakho uthunyelwe ngempumelelo.', formOnlineError: 'Asikwazanga ukuthumela umlayezo wakho njengamanje. Sicela uzame futhi.', formNeedsServer: 'Leli fomu lidinga i-XAMPP/iseva ye-PHP noma insizakalo ye-imeyili eku-inthanethi exhunywe. Usengathumela i-imeyili ku-hello@ubuntubloom.co.za ngqo.',
      backHome: 'Buyela Ekhaya', backContact: 'Buyela Ekuxhumaneni', processInvalid: 'Sicela uthumele ifomu elinegama, i-imeyili, isihloko nomlayezo ovumelekile.', formSuccessTitle: 'Siyabonga ngomlayezo wakho', formSuccessText: 'Umbuzo wakho ugcinwe ngempumelelo. Ubuntu Bloom izophendula ngokushesha ngangokunokwenzeka.', formErrorTitle: 'Asikwazanga ukugcina umlayezo wakho', formErrorText: 'Sicela ubuyele emuva uzame futhi.',
      categoryIndoor: 'Ezasendlini', categoryOutdoor: 'Zangaphandle', categorySucculent: 'I-Succulent', categoryHerb: 'Ikhambi',
      monsteraDesc: 'Amaqabunga amakhulu ahlukene ezindaweni zasendlini ezikhanyayo.', snakeDesc: 'Siqinile futhi kulula ukusinakekela, sifanele abaqalayo.', peaceDesc: 'Izimbali ezimhlophe namaqabunga aluhlaza acebile.', pothosDesc: 'Isitshalo esikhula ngokushesha esilungele amashalofu.', aloeDesc: 'I-succulent elula enamaqabunga aqinile.', jadeDesc: 'I-succulent encane enamaqabunga acwebezelayo.', echeveriaDesc: 'I-succulent eyirosette ethanda ukukhanya okugqamile.', lavenderDesc: 'Umbala nephunga langaphandle lezindawo ezinelanga.', rosemaryDesc: 'Ikhambi elinephunga eliwusizo ezimbizeni nasezingadini.', basilDesc: 'Ikhambi lasekhishini elikhula ngokushesha elithanda ilanga.', geraniumDesc: 'Isitshalo sezimbali esithembekile samapathiyo nemibhede.', spekboomDesc: 'Intandokazi yaseNingizimu Afrika enamaqabunga amancane amanzi.'
    },
    st: {
      home: 'Lehae', plants: 'Dimela', indoorPlants: 'Dimela tsa Ka Ntlong', outdoorPlants: 'Dimela tsa Kantle', succulents: 'Di-Succulent', herbs: 'Ditlama',
      plantCare: 'Tlhokomelo ya Dimela', about: 'Ka Rona', contact: 'Iteanye le Rona',
      heroEyebrow1: 'Sebaka sa dimela le tlhokomelo ya tsona', heroTitle1a: 'Holang mmoho.', heroTitle1b: 'Thunyang mmoho.', heroText1: 'Dimela tse ntle. Keletso e molemo. Dibaka tse phetseng hantle.', explorePlants: 'Sheba Dimela Tsa Rona', careTips: 'Malebela a Tlhokomelo',
      heroEyebrow2: 'Bakeng sa mahae a kgutsitseng a matala', heroTitle2a: 'Fumana semela', heroTitle2b: 'se loketseng sebaka sa hao.', heroText2: 'Ho tloha dimeleng tsa kganya e fokolang ho ya ditlameng tse ratang letsatsi, re etsa kgetho e be bonolo.', findPlant: 'Fumana Semela sa Hao',
      heroEyebrow3: 'Tlhokomelo e sebetsang', heroTitle3a: 'Hlokomela ka boitshepo.', heroTitle3b: 'Dimela tse thabileng.', heroText3: 'Tataiso e hlakileng ya metsi, kganya le mobu bakeng sa ba qalang le barati ba dimela.', learnCare: 'Ithute Tlhokomelo',
      wideSelection: 'Kgetho e Batsi ya Dimela', wideSelectionSub: 'Tsa ka ntlong, kantle, di-succulent le tse ding', localReliable: 'Tsa Lehae & Tse Tshepahalang', localReliableSub: 'Dimela tsa boleng le keletso e sebetsang', expertCare: 'Tlhokomelo ya Setsebi', expertCareSub: 'Malebela a dimela tse phetseng hantle', greenerCommunity: 'Setjhaba se Setala', greenerCommunitySub: 'Re hola mmoho Afrika Borwa',
      featuredPlants: 'Dimela tse Hlahelletseng', viewAllPlants: 'Sheba Dimela Tsohle', createGreenerHome: 'Etsa Lehae le Letala', createGreenerHomeText: 'Dimela di ntlafatsa sebaka sa hao, maikutlo le bophelo bo botle.',
      communityQuote: '“Lehae le ikutlwa le fapane ha ho na le ntho e phelang e holang ka hare.”', communityQuoteBy: 'Sehlopha sa tlhokomelo sa Ubuntu Bloom',
      ctaTitle: 'O se o loketse ho tlisa botala lapeng?', ctaText: 'Sheba dimela tsa rona kapa o re romelle potso mme re tla o thusa ho kgetha.', contactUs: 'Iteanye le Rona',
      quickLinks: 'Dikgokahanyo tse Potlakileng', followUs: 'Re Latele', footerText: 'Sebaka sa dimela sa Afrika Borwa se thusang batho ho hola ka boitshepo.', copyright: '© 2026 Ubuntu Bloom. Ditokelo tsohle di bolokilwe.', footerTagline: 'Holang mmoho. Thunyang mmoho.',
      pagePlantsTitle: 'Dimela bakeng sa sebaka se seng le se seng', pagePlantsText: 'Sheba dimela tsa ka ntlong tse bonolo, mebala ya kantle, di-succulent tse tiileng le ditlama tse molemo.', searchPlants: 'Batla dimela...', all: 'Tsohle', noPlants: 'Ha ho semela se tshwanang le patlo ya hao. Leka lebitso kapa sehlopha se seng.', showing: 'Ho bontshwa', plantsLabel: 'dimela',
      light: 'Kganya', water: 'Metsi', difficulty: 'Bothata', enquire: 'Botsa', easy: 'Bonolo', moderate: 'Bohareng', brightIndirect: 'Kganya e matla e sa tobang', lowBright: 'E fokolang ho ya ho e matla', fullSun: 'Letsatsi le felletseng', partialSun: 'Letsatsi le sa fellang', weekly: 'Beke le beke', biweekly: 'Dibeke tse 2 le tse 2', whenDry: 'Ha mobu o omme', regular: 'Kgafetsa',
      aboutTitle: 'Re thehilwe tlhokomelong, setjhabeng le kgolong', aboutIntro: 'Ubuntu Bloom ke sebaka sa ho hodisa le ho rekisa dimela hammoho le setsi sa tlhokomelo ya dimela se Vanderbijlpark, se ikemiseditseng ho thusa malapa, diofisi le ditjhaba ho etsa dibaka tse tala. E thehilwe ke baithuti ba bane ba Vaal University of Technology, ba kopantseng lerato la dimela, tsebo ya tlhokomelo le tshebeletso e shebaneng le setjhaba.',
      ourStory: 'Pale ya Rona', storyP1: 'Ubuntu Bloom e thehilwe ke baithuti ba bane ba Vaal University of Technology ba ileng ba bona monyetla wa ho etsa hore dimela tsa boleng le tataiso e tshepahalang ya tlhokomelo di fumanehe habonolo Vaal. Mohopolo wa baithuti o ile wa hola wa ba nursery e thusang batho ho kgetha dimela tse loketseng mahae, dirapa, diofisi le mokgwa wa bona wa bophelo.', storyP2: 'Setsing sa rona sa Vanderbijlpark, re hodisa le ho hlokomela mefuta e fapaneng ya dimela tsa ka ntlong, tsa kantle, di-succulent le ditlama. Sehlopha sa rona se tsepamisa maikutlo dimeleng tse phetseng hantle, keletsong e sebetsang le tshebeletsong ya motho ka mong ho tloha kgethong ya semela ho isa tlhokomelong ya kamora theko.',
      mission: 'Morero wa Rona', missionText: 'Ho nolofatsa bophelo bo botala ka ho fana ka dimela tse phetseng hantle, tataiso e tshepehang le tshebeletso ya motho ka mong e thusang moreki e mong le e mong ho hola ka boitshepo.',
      valuesTitle: 'Seo re se Ananelang', valueCare: 'Tlhokomelo Pele', valueCareText: 'Re tsepamisa maikutlo dimeleng tse phetseng hantle le keletsong e sebetsang eo batho ba ka e sebedisang.', valueCommunity: 'Moya wa Ubuntu', valueCommunityText: 'Re dumela hore kgolo e betere ha tsebo le tshehetso di arolelanwa.', valueSimple: 'Etsa Hore e be Bonolo', valueSimpleText: 'Tlhokomelo ya dimela e lokela ho hlaka, e fihlelehe mme e be bonolo ho ba qalang.',
      careTitle: 'Tlhokomelo ya dimela e entswe bonolo', careIntro: 'Sebedisa ditataiso tsena ho utlwisisa kganya, nosetso, mobu le matshwao a mathata.', careNav: 'Leqepheng lena', watering: 'Nosetso', sunlight: 'Kganya ya Letsatsi', soil: 'Mobu & Phepelo', troubleshooting: 'Ho Rarolla Mathata', careTable: 'Tafole ya Tlhokomelo', careVideos: 'Divideo tsa Tlhokomelo ya Dimela', careVideosIntro: 'Shebella ditataiso tsena tse kgutshwane tsa mohato ka mohato ho ithuta bokgoni ba tlhokomelo ya dimela. Divideo di bolokilwe le webosaete, kahoo di sebetsa le ntle le inthanete.',
      resources: 'Mehlodi e Tshepahalang', resourcesTitle: 'Mehlodi e Tshepahalang ya Dimela', resourcesIntro: 'Sebedisa mehlodi ena e tshepahalang ya kantle ha o batla ho bala haholoanyane ka tlhokomelo ya dimela, dimela tsa lehae le mathata a tlwaelehileng.', resourceSanbi: 'Tlhahisoleseding ya mefuta-futa ya tlhaho ya Afrika Borwa le mehlodi ya paballo.', resourcePza: 'Diprofaele tsa dimela le tlhahisoleseding ya ho di hodisa e tsepamisitseng maikutlo dimeleng tsa Afrika Borwa.', resourceRhsGrow: 'Tataiso e sebetsang mabapi le nosetso, phepo, kganya, mongobo le tlhokomelo e tswelang pele ya dimela tsa ka ntlong.', resourceRhsProblem: 'Tataiso e molemo ya ho tseba matshwao a mathata a tlwaelehileng le ho ntlafatsa maemo a kgolo.', openResource: 'Bula mohlodi ↗',
      wateringTitle: 'Nosetso ntle le ho hakanya', wateringText: 'Hlahloba mobu pele o nosetsa. Dimeleng tse ngata tsa ka ntlong, nosetsa feela ha karolo e hodimo ya mobu e omme. Tsholla metsi a feteletseng ka tlase ho dipitsa.', wateringList1: 'Sebedisa metsi a mocheso wa kamore ha ho kgoneha.', wateringList2: 'Nosetsa hanyane dikgweding tse batang.', wateringList3: 'Dimela tse kganyeng e matla hangata di oma kapele.',
      sunlightTitle: 'Ho utlwisisa kganya', sunlightText: 'Kganya e matla e sa tobang ke kamore e kganyang ntle le letsatsi le matla la motshehare le otlang mahlaku ka kotloloho. Dimela tsa kganya e fokolang di mamella dibaka tse lefifi ho feta, empa ha ho semela se atlehang lefifing le felletseng.',
      soilTitle: 'Mobu le phepo', soilText: 'Sebedisa motswako wa mobu o ntsha metsi hantle le pitsa e nang le masoba. Fepa dimela ka bonolo nakong ya selemo le lehlabula ho latela ditaelo tsa manyolo.',
      troubleTitle: 'Matshwao a tlwaelehileng', troubleYellow: 'Mahlaku a mosehla: hangata metsi a mangata, drainage e mpe kapa ho tsofala ha tlhaho.', troubleBrown: 'Mathoko a sootho: a ka bontsha moya o ommeng, metsi a manyane kapa letswai mobung.', troubleStretch: 'Kgolo e telele e fokolang: hangata e bolela hore semela se hloka kganya e eketsehileng.',
      tablePlant: 'Semela', tableLight: 'Kganya e Molemo', tableWater: 'Tataiso ya Metsi', tableLevel: 'Boemo ba Tlhokomelo',
      videoWaterTitle: 'Mokgwa wa ho Nosetsa Dimela tsa ka Ntlong', videoWaterText: 'Ithute ho hlahloba mongobo wa mobu, ho nosetsa ka botlalo le ho qoba hore metso e dule metsing.', videoLightTitle: 'Ho Utlwisisa Kganya ya Dimela', videoLightText: 'Ithute ho tseba letsatsi le tobileng, kganya e matla e sa tobang le kganya e tlase, hammoho le matshwao a sebaka se sa lokang.', videoRepotTitle: 'Mokgwa wa ho Fetola Pitsa ya Semela', videoRepotText: 'Bona hore o lokela ho fetola pitsa neng, kamoo o kgethang boholo bo latelang le kamoo o fallisang semela ntle le ho senya metso.',
      contactTitle: 'Ha re thuse sebaka sa hao ho thunya', contactIntro: 'Botsa ka semela, bothata ba tlhokomelo kapa ketelo ya nursery. Sehlopha sa rona se tla araba kapele kamoo ho ka kgonehang.', visitUs: 'Etela Ubuntu Bloom', addressLabel: 'Aterese', phoneLabel: 'Mohala', emailLabel: 'Imeile', hours: 'Dihora tsa ho Bula', mondayFriday: 'Mantaha – Labohlano', saturday: 'Moqebelo', sunday: 'Sontaha', closed: 'Ho kwetswe',
      mapTitle: 'Sebaka sa nursery', mapText: 'Re etele ho 18 Riverleaf Avenue, Vanderbijlpark, Gauteng, 1911 bakeng sa ho reka dimela, ho di lata le keletso ya tlhokomelo ka seqo.', sendMessage: 'Re romelle molaetsa', name: 'Lebitso', email: 'Imeile', phone: 'Mohala (boikgethelo)', topic: 'Sehlooho', chooseTopic: 'Kgetha sehlooho', plantEnquiry: 'Potso ka semela', careQuestion: 'Potso ya tlhokomelo', visitQuestion: 'Ketelo ya nursery', other: 'Tse ding', message: 'Molaetsa', send: 'Romela Molaetsa',
      nameError: 'Ka kopo kenya lebitso la hao.', emailError: 'Ka kopo kenya imeile e nepahetseng.', topicError: 'Ka kopo kgetha sehlooho.', messageError: 'Ka kopo kenya molaetsa wa bonyane ditlhaku tse 10.', formCheck: 'Ka kopo hlahloba dibaka tse tshwailweng.', formSending: 'Re romela molaetsa wa hao...', formSentOnline: 'Rea leboha. Molaetsa wa hao o rometswe ka katleho.', formOnlineError: 'Ha rea kgona ho romela molaetsa wa hao hona jwale. Ka kopo leka hape.', formNeedsServer: 'Foromo ena e hloka XAMPP/seva ya PHP kapa tshebeletso ya imeile ya inthanete e hoketsweng. O ntse o ka romela imeile ka kotloloho ho hello@ubuntubloom.co.za.',
      backHome: 'Kgutlela Lehae', backContact: 'Kgutlela ho Iteanye', processInvalid: 'Ka kopo romela foromo e nang le lebitso, imeile, sehlooho le molaetsa o nepahetseng.', formSuccessTitle: 'Rea leboha ka molaetsa wa hao', formSuccessText: 'Potso ya hao e bolokilwe ka katleho. Ubuntu Bloom e tla araba kapele kamoo ho ka kgonehang.', formErrorTitle: 'Ha rea kgona ho boloka molaetsa wa hao', formErrorText: 'Ka kopo kgutlela morao mme o leke hape.',
      categoryIndoor: 'Ka Ntlong', categoryOutdoor: 'Kantle', categorySucculent: 'Succulent', categoryHerb: 'Setlama',
      monsteraDesc: 'Mahlaku a maholo a arohaneng bakeng sa dibaka tse kganyang ka ntlong.', snakeDesc: 'Se tiile ebile se tshwarela diphoso, se loketse ba qalang.', peaceDesc: 'Dipalesa tse tshweu le mahlaku a matala a nonneng.', pothosDesc: 'Semela se leketlang se holang kapele bakeng sa dishelefo.', aloeDesc: 'Succulent e sa hlokeng tlhokomelo e ngata e nang le mahlaku a matla.', jadeDesc: 'Succulent e nyane e nang le mahlaku a benyang a chitja.', echeveriaDesc: 'Succulent ya rosette e ratang kganya e matla.', lavenderDesc: 'Mmala le monko wa kantle bakeng sa dibaka tse nang le letsatsi.', rosemaryDesc: 'Setlama se monko o monate bakeng sa dipitsa le dirapa.', basilDesc: 'Setlama sa kichineng se holang kapele sebakeng se futhumetseng se nang le letsatsi.', geraniumDesc: 'Semela se tshepehang sa dipalesa bakeng sa patio le serapa.', spekboomDesc: 'Semela se ratwang Afrika Borwa se nang le mahlaku a manyane a metsi.'
    }
  };

  const root = document.documentElement;
  const languageSelect = document.querySelector('#language-select');
  const formLang = document.querySelector('#form-language');

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    root.lang = lang === 'zu' ? 'zu' : lang === 'st' ? 'st' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    if (languageSelect) languageSelect.value = lang;
    if (formLang) formLang.value = lang;
    try { localStorage.setItem('ubuntuBloomLang', lang); } catch (_) {}
    document.dispatchEvent(new CustomEvent('ubuntuBloomLanguageChanged', { detail: { lang } }));
  }

  let savedLang = 'en';
  try { savedLang = localStorage.getItem('ubuntuBloomLang') || 'en'; } catch (_) {}
  if (!translations[savedLang]) savedLang = 'en';
  applyLanguage(savedLang);
  languageSelect?.addEventListener('change', e => applyLanguage(e.target.value));

  // Mobile navigation
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  navToggle?.addEventListener('click', () => {
    const isOpen = mainNav?.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });

  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownItem = document.querySelector('.nav-item-dropdown');
  dropdownToggle?.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 1280px)').matches) {
      const isOpen = dropdownItem?.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
    }
  });

  document.addEventListener('click', (event) => {
    if (mainNav?.classList.contains('open') && !event.target.closest('.main-nav') && !event.target.closest('.nav-toggle')) {
      mainNav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  // Hero slider
  const slides = [...document.querySelectorAll('.hero-slide')];
  const dots = [...document.querySelectorAll('.hero-dot')];
  let slideIndex = 0;
  let slideTimer;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showSlide(index) {
    if (!slides.length) return;
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === slideIndex));
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === slideIndex);
      dot.setAttribute('aria-current', i === slideIndex ? 'true' : 'false');
    });
  }

  function startSlider() {
    if (reducedMotion || slides.length < 2) return;
    clearInterval(slideTimer);
    slideTimer = setInterval(() => showSlide(slideIndex + 1), 6500);
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); startSlider(); }));
  showSlide(0);
  startSlider();

  // Plant search and category filtering
  const searchInput = document.querySelector('#plant-search');
  const filterButtons = [...document.querySelectorAll('.filter-btn')];
  const plantCards = [...document.querySelectorAll('.plant-card[data-category]')];
  const resultsCount = document.querySelector('#results-count');
  const emptyState = document.querySelector('#empty-state');
  let activeCategory = 'all';
  const requestedCategory = new URLSearchParams(window.location.search).get('category');
  if (['indoor','outdoor','succulent','herb'].includes(requestedCategory)) {
    activeCategory = requestedCategory;
    filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === activeCategory));
  }

  function filterPlants() {
    if (!plantCards.length) return;
    const term = (searchInput?.value || '').trim().toLowerCase();
    let visible = 0;
    plantCards.forEach(card => {
      const category = card.dataset.category;
      const text = card.textContent.toLowerCase();
      const categoryMatch = activeCategory === 'all' || category === activeCategory;
      const termMatch = !term || text.includes(term) || (card.dataset.name || '').toLowerCase().includes(term);
      const show = categoryMatch && termMatch;
      card.hidden = !show;
      if (show) visible++;
    });
    const lang = languageSelect?.value || 'en';
    const dict = translations[lang] || translations.en;
    if (resultsCount) resultsCount.textContent = `${dict.showing} ${visible} ${dict.plantsLabel}`;
    if (emptyState) emptyState.style.display = visible ? 'none' : 'block';
  }

  searchInput?.addEventListener('input', filterPlants);
  filterButtons.forEach(btn => btn.addEventListener('click', () => {
    activeCategory = btn.dataset.filter || 'all';
    filterButtons.forEach(b => b.classList.toggle('active', b === btn));
    filterPlants();
  }));
  document.addEventListener('ubuntuBloomLanguageChanged', filterPlants);
  filterPlants();

  // Product enquiry buttons carry the plant name to contact page.
  document.querySelectorAll('button.enquire-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const plant = btn.closest('.plant-card')?.dataset.name || '';
      const url = new URL('contact.html', window.location.href);
      url.searchParams.set('plant', plant);
      window.location.href = url.href;
    });
  });

  const contactMessage = document.querySelector('#message');
  const contactTopic = document.querySelector('#topic');
  if (contactMessage && contactTopic) {
    const params = new URLSearchParams(window.location.search);
    const plant = params.get('plant');
    if (plant) {
      contactTopic.value = 'plant-enquiry';
      contactMessage.value = `I would like to know more about the ${plant}.`;
    }
  }

  // Contact form validation
  const contactForm = document.querySelector('#contact-form');
  const formStatus = document.querySelector('#form-status');
  const validators = {
    name: value => value.trim().length >= 2,
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    topic: value => Boolean(value),
    message: value => value.trim().length >= 10
  };
  const errorKeys = { name: 'nameError', email: 'emailError', topic: 'topicError', message: 'messageError' };

  function validateField(field) {
    const fn = validators[field.name];
    if (!fn) return true;
    const valid = fn(field.value);
    field.setAttribute('aria-invalid', String(!valid));
    const error = document.querySelector(`#${field.name}-error`);
    const lang = languageSelect?.value || 'en';
    if (error) error.textContent = valid ? '' : (translations[lang] || translations.en)[errorKeys[field.name]];
    return valid;
  }

  contactForm?.querySelectorAll('input, select, textarea').forEach(field => {
    if (validators[field.name]) field.addEventListener('blur', () => validateField(field));
  });

  contactForm?.addEventListener('submit', async event => {
    const fields = [...contactForm.querySelectorAll('input, select, textarea')].filter(f => validators[f.name]);
    const valid = fields.every(validateField);
    const lang = languageSelect?.value || 'en';
    const dict = translations[lang] || translations.en;

    if (!valid) {
      event.preventDefault();
      if (formStatus) {
        formStatus.style.display = 'block';
        formStatus.textContent = dict.formCheck;
        formStatus.focus?.();
      }
      fields.find(f => f.getAttribute('aria-invalid') === 'true')?.focus();
      return;
    }

    const configuredEndpoint = (contactForm.dataset.formspreeEndpoint || '').trim();
    const formspreeReady = /^https:\/\/formspree\.io\/f\/[A-Za-z0-9_-]+$/.test(configuredEndpoint)
      && !configuredEndpoint.includes('REPLACE_WITH_FORM_ID');
    const openedDirectly = window.location.protocol === 'file:';
    const isLocalhost = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);

    // Local XAMPP/PHP mode: always keep the normal POST to process-contact.php.
    // This preserves the PHP functionality required for the assignment even when Formspree is configured.
    if (!openedDirectly && isLocalhost) return;

    // On a deployed PHP server with no Formspree endpoint, keep using the PHP processor.
    if (!openedDirectly && !formspreeReady) return;

    // Direct file mode cannot execute PHP. Stop cleanly instead of navigating to a dead PHP file.
    if (openedDirectly && !formspreeReady) {
      event.preventDefault();
      if (formStatus) {
        formStatus.style.display = 'block';
        formStatus.textContent = dict.formNeedsServer;
        formStatus.focus?.();
      }
      return;
    }

    // When opened as a local file, use a normal browser POST to the hosted form endpoint.
    // This avoids depending on PHP and is the most compatible option for file:// previews.
    if (openedDirectly) {
      contactForm.action = configuredEndpoint;
      return;
    }

    // Online email mode (Formspree) for deployed/static hosting: submit without leaving the page.
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton) submitButton.disabled = true;
    if (formStatus) {
      formStatus.style.display = 'block';
      formStatus.textContent = dict.formSending;
    }

    try {
      const response = await fetch(configuredEndpoint, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Form submission failed');
      contactForm.reset();
      if (languageSelect) contactForm.querySelector('#form-language').value = languageSelect.value;
      if (formStatus) {
        formStatus.textContent = dict.formSentOnline;
        formStatus.focus?.();
      }
    } catch (_) {
      if (formStatus) {
        formStatus.textContent = dict.formOnlineError;
        formStatus.focus?.();
      }
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
})();

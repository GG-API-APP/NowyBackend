const malesNames = [
  'radek',
  'antoni',
  'jan',
  'aleksander',
  'nikodem',
  'franciszek',
  'jakub',
  'leon',
  'mikołaj',
  'stanisław',
  'filip',
  'ignacy',
  'szymon',
  'wojciech',
  'adam',
  'kacper',
  'tymon',
  'marcel',
  'maksymilian',
  'michał',
  'wiktor',
  'oliwier',
  'tymoteusz',
  'miłosz',
  'igor',
  'julian',
  'piotr',
  'oskar',
  'gabriel',
  'dawid',
  'krzysztof',
  'bartosz',
  'dominík',
  'natan',
  'bruno',
  'mateusz',
  'hubert',
  'karol',
  'alan',
  'fabian',
  'tomasz',
  'maciej',
  'henryk',
  'tadeusz',
  'cezary',
  'artur',
  'ksawery',
  'paweł',
  'milan',
  'daniel',
  'kazimierz',
  'kuba',
  'kajetan',
  'borys',
  'bartłomiej',
  'józef',
  'witold',
  'teodor',
  'kamil',
  'olaf',
  'patryk',
  'leo',
  'mark',
  'eryk',
  'stefan',
  'adrian',
  'kornel',
  'grzegorz',
  'gustaw',
  'mieszko',
  'leonard',
  'sebastian',
  'krystian',
  'emil',
  'maksym',
  'jerzy',
  'feliks',
  'ryszard',
  'tobiasz',
  'artem',
  'david',
  'marcin',
  'damian',
  'konstanty',
  'robert',
  'łukasz',
  'rafał',
  'alex',
  'nataniel',
  'florian',
  'olivier',
  'remigiusz',
  'aleks',
  'przemysław',
  'konrad',
  'błażej',
  'juliusz',
  'radosław',
  'alexander',
  'jeremi',
  'matvii',
  'oleksandr',
  'marek',
  'lucjan',
  'samuel',
  'roman',
  'iwo',
  'kordian',
  'albert',
  'andrzej',
  'dorian',
  'beniamin',
  'jędrzej',
  'arkadiusz',
  'ludwik',
  'hugo',
  'maurycy',
  'gracjan',
  'władysław',
  'dmytro',
  'makar',
  'fryderyk',
  'jacek',
  'mykhailo',
  'bogdan',
  'timur',
  'edward',
  'maks',
  'oliver',
  'jeremiasz',
  'danylo',
  'brajan',
  'aleksy',
  'ernest',
  'ivan',
  'tymofii',
  'nazar',
  'vincent',
  'damir',
  'liam',
  'seweryn',
  'lev',
  'vladyslav',
  'nikita',
  'miron',
  'wincenty',
  'daniil',
  'davyd',
  'olgierd',
  'cyprian',
  'denis',
  'bohdan',
  'maximilian',
  'norbert',
  'max',
  'aron',
  'illia',
  'viktor',
  'dariusz',
  'matviy',
  'andrii',
  'luka',
  'yaroslav',
  'tytus',
  'kosma',
  'marko',
  'maksim',
  'martin',
  'volodymyr',
  'zbigniew',
  'emilian',
  'oliwer',
  'teo',
  'leonardo',
  'arsen',
  'lew',
  'wincent',
  'zachary',
  'sylwester',
  'marceli',
  'bolesław',
  'oktawian',
  'gniewomir',
  'amadeusz',
  'leopold',
  'demian',
  'bogumił',
  'sviatoslav',
  'platon',
  'zakhar',
  'mirosław',
  'nicolas',
  'bernard',
  'joachim',
  'gniewko',
  'benjamin',
  'szczepan',
  'kevin',
  'nathan',
  'denys',
  'nikolas',
  'mariusz',
  'bogusław',
  'czesław',
  'korneliusz',
  'marian',
  'bronisław',
  'ireneusz'
]

const endings = [
  ['iła', 'ił'],
  ['łem', 'łam'],
  ['lem', 'lam'],
  ['łeś', 'łaś'],
  ['leś', 'laś'],
  ['łes', 'łas'],
  ['ny', 'na'],
  ['na', 'ny'],
  ['ęty', 'ęta'],
  ['ety', 'eta'],
  ['ący', 'ąca'],
  ['acy', 'aca'],
  ['ki', 'ka'],
  ['by', 'ba'],
  ['dy', 'da'],
  ['szy', 'sza'],
  ['ał', 'ała'],
  ['iła', 'ił'],
  ['ła', 'ły'],
  ['al', 'ala'],
  ['łbym', 'łabym'],
  ['czny', 'czna'],
  ['cznego', 'czną'],
  ['any', 'ana'],
  ['iwy', 'iwa'],
  ['ry', 'ra'],
  ['czy', 'cza']
]

const wordToChangeRz = [
  ['siur', 'pipa'],
  ['siura', 'pipe'],
  ['siurem', 'pipą'],
  ['koleś', 'kolesiówa'],
  ['kolesia', 'kolesiówę'],
  ['ukrainka', 'polak'],
  ['ukrainką', 'polakiem'],
  ['bi', 'homo'],
  ['biseks', 'homoś'],
  ['była', 'były'],
  ['byłą', 'byłym'],
  ['mój', 'moja'],
  ['pani', 'panu'],
  ['głupi', 'głupia'],
  ['głupi', 'głupia'],
  ['głupi', 'głupia'],
  ['głupi', 'głupia'],
  ['głupi', 'głupia'],
  ['ciąża', 'płodność'],
  ['ciąży', 'płodności'],
  ['ciążę', 'płodność'],
  ['ciąża', 'płodnością'],
  ['jajco', 'cycek'],
  ['jajca', 'cycki'],
  ['jajcu', 'cyckowi'],
  ['jajcem', 'cyckiem'],
  ['jajcu', 'cyckowi'],
  ['jajcach', 'cyckach'],
  ['pierś', 'jądro'],
  ['piersiami', 'jądrami'],
  ['piersi', 'jądra'],
  ['piersi', 'jądra'],
  ['piersi', 'jądrze'],
  ['piersią', 'jądrem'],
  ['piersiach', 'jądrach'],
  ['pierś', 'jądro'],
  ['pierś', 'jądro'],
  ['kutas', 'cipa'],
  ['kutasa', 'cipe'],
  ['kutasa', 'cipę'],
  ['kutasa', 'cipy'],
  ['kutasowi', 'cipie'],
  ['kutasem', 'cipą'],
  ['kutasie', 'cipie'],
  ['kutasie', 'cipo'],
  ['laska', 'facet'],
  ['laski', 'faceta'],
  ['laski', 'faceci'],
  ['lasce', 'facetowi'],
  ['laskę', 'faceta'],
  ['laską', 'facetem'],
  ['lasce', 'facecie'],
  ['lasko', 'faciecie'],
  ['laski', 'facetów'],
  ['laskami', 'facetami'],
  ['cipka', 'kutasek'],
  ['cipkę', 'kutaska'],
  ['cipki', 'kutaska'],
  ['cipce', 'kutaskowi'],
  ['cipką', 'kutaskiem'],
  ['cipce', 'kutasku'],
  ['cipko', 'kutasku'],
  ['cipeczka', 'kutaseczek'],
  ['cipeczki', 'kutaseczka'],
  ['cipeczce', 'kutaseczkowi'],
  ['cipeczkę', 'kutaseczka'],
  ['cipeczką', 'kutaseczkiem'],
  ['cipeczce', 'kutaseczku'],
  ['cipeczko', 'kutaseczku'],
  ['transwestyta', 'homoseksualistka'],
  ['transwestyty', 'homoseksualistki'],
  ['transwestycie', 'homoseksualistce'],
  ['transwestytę', 'homoseksualistkę'],
  ['transwestytą', 'homoseksualistką'],
  ['transwestycie', 'homoseksualiście'],
  ['transwestyto', 'homoseksualistko'],
  ['cyc', 'jajo'],
  ['cyca', 'jaja'],
  ['cycowi', 'jaju'],
  ['cyca', 'jajo'],
  ['cycem', 'jajem'],
  ['cycu', 'jaju'],
  ['cycu', 'jajo'],
  ['cyce', 'jaja'],
  ['cyców', 'jaj'],
  ['cycom', 'jajom'],
  ['cyce', 'jaja'],
  ['cycami', 'jajami'],
  ['cycach', 'jajach'],
  ['cyce', 'jaja'],
  ['cycki', 'jajka'],
  ['cycków', 'jajek'],
  ['cyckom', 'jajkom'],
  ['cycki', 'jajka'],
  ['cyckami', 'jajkami'],
  ['cyckach', 'jajkach'],
  ['cycki', 'jajka'],
  ['cycunie', 'jajeczka'],
  ['cycuni', 'jajeczek'],
  ['cycuniom', 'jajeczkom'],
  ['cycunie', 'jajeczka'],
  ['cycuniami', 'jajeczkami'],
  ['cycuniach', 'jajeczkach'],
  ['cycunie', 'jajeczka'],
  ['cycuszki', 'jajeczka'],
  ['cycuszków', 'jajeczek'],
  ['cycuszkom', 'jajeczkom'],
  ['cycuszki', 'jajeczka'],
  ['cycuszkami', 'jajeczkami'],
  ['cycuszkach', 'jajeczkach'],
  ['cycuszki', 'jajeczka'],
  ['tatuaż', 'pieprzyk'],
  ['tatuażu', 'pieprzyka'],
  ['tatuażowi', 'pieprzykowi'],
  ['tatuaż', 'pieprzyk'],
  ['tatuażem', 'pieprzykiem'],
  ['tatuażu', 'pieprzyku'],
  ['tatuażu', 'pieprzyku'],
  ['tatuaże', 'pieprzyki'],
  ['tatuaży', 'pieprzyków'],
  ['tatuażom', 'pieprzykom'],
  ['tatuaże', 'pieprzyki'],
  ['tatuażami', 'pieprzykami'],
  ['tatuażach', 'pieprzykach'],
  ['tatuaże', 'pieprzyki'],
  ['chłop', 'baba'],
  ['chłopa', 'baby'],
  ['chłopowi', 'babie'],
  ['chłopa', 'babę'],
  ['chłopem', 'babą'],
  ['chłopie', 'babie'],
  ['chłopie', 'babo'],
  ['chłopak', 'dziewczyna'],
  ['chłopaka', 'dziewczyny'],
  ['chłopakowi', 'dziewczynie'],
  ['chłopaka', 'dziewczynę'],
  ['chłopakiem', 'dziewczyną'],
  ['chłopaku', 'dziewczynie'],
  ['chłopaku', 'dziewczyno'],
  ['singiel', 'singielka'],
  ['singla', 'singielki'],
  ['singlowi', 'singielce'],
  ['singla', 'singielkę'],
  ['singlem', 'singielką'],
  ['singlu', 'singielce'],
  ['singlu', 'singielko'],
  ['mężczyzna', 'kobieta'],
  ['mężczyznami', 'kobietami'],
  ['mężczyzn', 'kobiet'],
  ['mężczyźni', 'kobiety'],
  ['mężczyzn', 'kobiety'],
  ['mężczyzny', 'kobiety'],
  ['mężczyźnie', 'kobiecie'],
  ['mężczyznę', 'kobietę'],
  ['mężczyzną', 'kobietą'],
  ['mężczyźnie', 'kobiecie'],
  ['mężczyzno', 'kobieto'],
  ['chłopiec', 'dziewczynka'],
  ['chłopca', 'dziewczynki'],
  ['chłopcu', 'dziewczynce'],
  ['chłopca', 'dziewczynkę'],
  ['chłopcem', 'dziewczynką'],
  ['chłopcu', 'dziewczynce'],
  ['chłopcze', 'dziewczynko'],
  ['księżniczka', 'książę'],
  ['księżniczki', 'księcia'],
  ['księżniczce', 'księciu'],
  ['księżniczkę', 'księcia'],
  ['księżniczką', 'księciem'],
  ['księżniczce', 'księciu'],
  ['księżniczko', 'książę'],
  ['królewna', 'królewicz'],
  ['królewny', 'królewicza'],
  ['królewnie', 'królewiczowi'],
  ['królewnę', 'królewicza'],
  ['królewną', 'królewiczem'],
  ['królewnie', 'królewiczu'],
  ['królewno', 'królewiczu'],
  ['królowa', 'król'],
  ['królowej', 'króla'],
  ['królowej', 'królowi'],
  ['królową', 'króla'],
  ['królową', 'królem'],
  ['królowej', 'królu'],
  ['królowo', 'królu'],
  ['suka', 'pies'],
  ['suki', 'psa'],
  ['suce', 'psu'],
  ['sukę', 'psa'],
  ['suką', 'psem'],
  ['suce', 'psie'],
  ['suko', 'psie'],
  ['suczka', 'piesek'],
  ['suczki', 'pieska'],
  ['suczce', 'pieskowi'],
  ['suczkę', 'pieska'],
  ['suczką', 'pieskiem'],
  ['suczce', 'piesku'],
  ['suczko', 'piesku'],
  ['żona', 'mąż'],
  ['żony', 'męża'],
  ['żonie', 'mężowi'],
  ['żonę', 'męża'],
  ['żoną', 'mężem'],
  ['żonie', 'mężu'],
  ['żono', 'mężu'],
  ['mineta', 'lód'],
  ['minety', 'loda'],
  ['minecie', 'lodowi'],
  ['minetę', 'loda'],
  ['minetą', 'lodem'],
  ['minecie', 'lodzie'],
  ['mineto', 'lodzie'],
  ['minetka', 'lodzik'],
  ['minetki', 'lodzika'],
  ['minetce', 'lodzikowi'],
  ['minetkę', 'lodzika'],
  ['minetką', 'lodzikiem'],
  ['minetce', 'lodziku'],
  ['minetko', 'lodziku'],
  ['ssanie', 'lizanie'],
  ['ssania', 'lizania'],
  ['ssaniu', 'lizaniu'],
  ['ssanie', 'lizanie'],
  ['ssaniem', 'lizaniem'],
  ['ssaniu', 'lizaniu'],
  ['ssanie', 'lizanie'],
  ['muszelka', 'siusiak'],
  ['muszelki', 'siusiaka'],
  ['muszelce', 'siusiakowi'],
  ['muszelkę', 'siusiaka'],
  ['muszelką', 'siusiakiem'],
  ['muszelce', 'siusiaku'],
  ['muszelko', 'siusiaku'],
  ['dziewica', 'prawiczek'],
  ['dziewicy', 'prawiczka'],
  ['dziewicy', 'prawiczkowi'],
  ['dziewicę', 'prawiczka'],
  ['dziewicą', 'prawiczkiem'],
  ['dziewicy', 'prawiczku'],
  ['dziewico', 'prawiczku'],
  ['łechtaczka', 'żołądź'],
  ['łechtaczki', 'żołędzi'],
  ['łechtaczce', 'żołędzi'],
  ['łechtaczkę', 'żołądź'],
  ['łechtaczką', 'żołędzią'],
  ['łechtaczce', 'żołędzi'],
  ['łechtaczko', 'żołędziu'],
  ['dziwka', 'żigolak'],
  ['dziwki', 'żigolaka'],
  ['dziwce', 'żigolakowi'],
  ['dziwkę', 'żigolaka'],
  ['dziwką', 'żigolakiem'],
  ['dziwce', 'żigolaku'],
  ['dziwko', 'żigolaku'],
  ['chuj', 'cipsko'],
  ['chuja', 'cipska'],
  ['chujowi', 'cipsku'],
  ['chuja', 'cipsko'],
  ['chujem', 'cipskiem'],
  ['chuju', 'cipsku'],
  ['chuju', 'cipsku'],
  ['fajny', 'fajna'],
  ['fajnego', 'fajnej'],
  ['fajnemu', 'fajnej'],
  ['fajnego', 'fajną'],
  ['fajnym', 'fajną'],
  ['fajnym', 'fajnej'],
  ['fajny', 'fajna'],
  ['slipy', 'figi'],
  ['slipów', 'fig'],
  ['slipom', 'figom'],
  ['slipy', 'figi'],
  ['slipami', 'figami'],
  ['slipach', 'figach'],
  ['slipy', 'figi'],
  ['bokserki', 'stringi'],
  ['bokserków', 'stringów'],
  ['bokserkom', 'stringom'],
  ['bokserkami', 'stringami'],
  ['bokserkach', 'stringach'],
  ['rajstopy', 'skarpetki'],
  ['rajstop', 'skarpetek'],
  ['rajstopom', 'skarpetkom'],
  ['rajstopy', 'skarpetki'],
  ['rajstopami', 'skarpetkami'],
  ['rajstopach', 'skarpetkach'],
  ['rajstopy', 'skarpetki'],
  ['pończochy', 'skarpetki'],
  ['pończoch', 'skarpetek'],
  ['pończochom', 'skarpetkom'],
  ['pończochy', 'skarpetki'],
  ['pończochami', 'skarpetkami'],
  ['pończochach', 'skarpetkach'],
  ['pończochy', 'skarpetki'],
  ['pończoszki', 'skarpetunie'],
  ['pończoszek', 'skarpetuniek'],
  ['pończoszkom', 'skarpetuniom'],
  ['pończoszki', 'skarpetunie'],
  ['pończoszkami', 'skarpetuniami'],
  ['pończoszkach', 'skarpetuniach'],
  ['pończoszki', 'skarpetunie'],
  ['sukienka', 'koszula'],
  ['sukienki', 'koszuli'],
  ['sukience', 'koszuli'],
  ['sukienkę', 'koszulę'],
  ['sukienką', 'koszulą'],
  ['sukience', 'koszuli'],
  ['sukienko', 'koszulo'],
  ['sperma', 'mleko'],
  ['spermy', 'mleka'],
  ['spermie', 'mleku'],
  ['spermę', 'mleko'],
  ['spermą', 'mlekiem'],
  ['spermie', 'mleku'],
  ['spermo', 'mleko'],
  ['spust', 'wytrysk'],
  ['spustu', 'wytrysku'],
  ['spustowi', 'wytryskowi'],
  ['spust', 'wytrysk'],
  ['spustem', 'wytryskiem'],
  ['spuście', 'wytrysku'],
  ['spuście', 'wytrysku'],
  ['koleżanka', 'kolega'],
  ['koleżanki', 'kolegi'],
  ['koleżance', 'koledze'],
  ['koleżanko', 'kolego'],
  ['koleżankę', 'kolegę'],
  ['koledze', 'kolega'],
  ['ania', 'koleżka'],
  ['anią', 'koleżką'],
  ['ani', 'koleżce'],
  ['aniu', 'koleżko'],
  ['penisa', 'pochwę'],
  ['penis', 'pochwa'],
  ['penisa', 'pochwy'],
  ['penisowi', 'pochwie'],
  ['penisem', 'pochwą'],
  ['penisie', 'pochwie'],
  ['penisie', 'pochwo'],
  ['koń', 'pipka'],
  ['konia', 'pipkę'],
  ['koniowi', 'pipce'],
  ['konia', 'pipkę'],
  ['koniem', 'pipką'],
  ['koniu', 'pipce'],
  ['koniu', 'pipko'],
  ['biust', 'klata'],
  ['biustu', 'klaty'],
  ['biustowi', 'klacie'],
  ['biust', 'klatę'],
  ['biustem', 'klatą'],
  ['biuście', 'klacie'],
  ['biuście', 'klato'],
  ['stanik', 'majtki'],
  ['stanika', 'majtek'],
  ['stanikowi', 'majtkom'],
  ['stanik', 'majtki'],
  ['stanikiem', 'majtkami'],
  ['staniku', 'majtkach'],
  ['staniku', 'majtki'],
  ['biustonosz', 'majtki'],
  ['biustonosza', 'majtek'],
  ['biustonoszowi', 'majtkom'],
  ['biustonosz', 'majtki'],
  ['biustonoszem', 'majtkami'],
  ['biustonoszu', 'majtkach'],
  ['biustonoszu', 'majtki'],
  ['laseczka', 'facecik'],
  ['laseczki', 'facecika'],
  ['laseczce', 'facecikowi'],
  ['laseczkę', 'facecika'],
  ['laseczką', 'facecikiem'],
  ['laseczce', 'faceciku'],
  ['laseczko', 'faceciku'],
  ['fiut', 'kuciapa'],
  ['fiuta', 'kuciapy'],
  ['fiutowi', 'kuciapie'],
  ['fiuta', 'kuciapę'],
  ['fiutem', 'kuciapą'],
  ['fiucie', 'kuciapie'],
  ['fiucie', 'kuciapo'],
  ['chujek', 'kuciapeczka'],
  ['chujka', 'kuciapeczki'],
  ['chujkowi', 'kuciapeczce'],
  ['chujka', 'kuciapeczkę'],
  ['chujkiem', 'kuciapeczką'],
  ['chujku', 'kuciapeczce'],
  ['chujku', 'kuciapeczko'],
  ['myszka', 'pałka'],
  ['myszki', 'pałki'],
  ['myszce', 'pałce'],
  ['myszkę', 'pałkę'],
  ['myszką', 'pałką'],
  ['myszce', 'pałce'],
  ['myszko', 'pałko'],
  ['gejuch', 'lesbijka'],
  ['gejucha', 'lesbijki'],
  ['gejuchowi', 'lesbijce'],
  ['gejucha', 'lesbijkę'],
  ['gejuchem', 'lesbijką'],
  ['gejuchu', 'lesbijce'],
  ['gejuchu', 'lesbijko'],
  ['gej', 'lesba'],
  ['gejem', 'lesbą'],
  ['geja', 'lesby'],
  ['gejowi', 'lesbie'],
  ['geja', 'lesbę'],
  ['gejem', 'lesbą'],
  ['geju', 'lesbie'],
  ['geju', 'lesbo'],
  ['wąsy', 'owłosienie'],
  ['wąsów', 'owłosienia'],
  ['wąsom', 'owłosieniu'],
  ['wąsy', 'owłosienie'],
  ['wąsami', 'owłosieniem'],
  ['wąsach', 'owłosieniu'],
  ['wąsy', 'owłosienie'],
  ['broda', 'włosy'],
  ['brody', 'włosów'],
  ['brodzie', 'włosom'],
  ['brodę', 'włosy'],
  ['brodą', 'włosami'],
  ['brodzie', 'włosach'],
  ['brodo', 'włosy']
]

const wordToChangePrz = [
  ['ciekawy', 'ciekawa'],
  ['ciekawego', 'ciekawą'],
  ['niegrzeczny', 'niegrzeczna'],
  ['niegrzecznego', 'niegrzeczną'],
  ['przyjaciel', 'przyjaciółka'],
  ['przyjaciela', 'przyjaciółkę'],
  ['żonaty', 'zamężna'],
  ['żonatego', 'zamężnej'],
  ['żonatemu', 'zamężnej'],
  ['żonatego', 'zamężną'],
  ['żonatym', 'zamężną'],
  ['żonatym', 'zamężnej'],
  ['żonaty', 'zamężna'],
  ['twardy', 'mokry'],
  ['twardego', 'mokrej'],
  ['twardemu', 'mokrej'],
  ['twardego', 'mokrą'],
  ['twardym', 'mokrą'],
  ['twardym', 'mokrej'],
  ['twardy', 'mokry'],
  ['męski', 'kobiecy'],
  ['męskie', 'kobiece'],
  ['męskiego', 'kobiecego'],
  ['męskiemu', 'kobiecego'],
  ['męski', 'kobiecy'],
  ['męskim', 'kobiecym'],
  ['męskim', 'kobiecym'],
  ['męski', 'kobiecy'],
  ['napalony', 'napalona'],
  ['napalonego', 'napalonej'],
  ['napalonemu', 'napalonej'],
  ['napalonego', 'napaloną'],
  ['napalonym', 'napaloną'],
  ['napalonym', 'napalonej'],
  ['napalony', 'napalona'],
  ['duży', 'ciasna'],
  ['dużego', 'ciasnej'],
  ['dużemu', 'ciasnej'],
  ['duży', 'ciasną'],
  ['dużym', 'ciasną'],
  ['dużym', 'ciasnej'],
  ['duży', 'ciasna'],
  ['mały', 'luźna'],
  ['małego', 'luźnej'],
  ['małemu', 'luźnej'],
  ['małego', 'luźną'],
  ['małym', 'luźną'],
  ['małym', 'luźnej'],
  ['mały', 'luźna'],
  ['kobieca', 'męska'],
  ['kobiecej', 'męskiej'],
  ['kobieciej', 'męskiej'],
  ['kobieca', 'męska'],
  ['kobiecie', 'męską'],
  ['kobiecą', 'męską'],
  ['kobieca', 'męska'],
  ['brzydki', 'brzydka'],
  ['brzydkiego', 'brzydkiej'],
  ['brzydkiemu', 'brzydkiej'],
  ['brzydki', 'brzydką'],
  ['brzydkim', 'brzydką'],
  ['brzydkim', 'brzydkiej'],
  ['brzydki', 'brzydka'],
  ['żonaty', 'mężata'],
  ['żonatego', 'mężatej'],
  ['żonatemu', 'mężatej'],
  ['żonatego', 'mężatą'],
  ['żonatym', 'mężatą'],
  ['żonatym', 'mężatej'],
  ['żonaty', 'mężata'],
  ['chętny', 'chętna'],
  ['chętnego', 'chętnej'],
  ['chętnemu', 'chętnej'],
  ['chętnego', 'chętną'],
  ['chętnym', 'chętną'],
  ['chętnym', 'chętnej'],
  ['chętny', 'chętna'],
  ['goły', 'goła'],
  ['gołego', 'gołej'],
  ['gołemu', 'gołej'],
  ['gołego', 'gołą'],
  ['gołym', 'gołą'],
  ['gołym', 'gołej'],
  ['goły', 'goła'],
  ['nagi', 'naga'],
  ['nagiego', 'nagiej'],
  ['nagiemu', 'nagiej'],
  ['nagiego', 'nagą'],
  ['nagim', 'nagą'],
  ['nagim', 'nagiej'],
  ['nagi', 'naga'],
  ['prawdziwy', 'prawdziwa'],
  ['prawdziwi', 'prawdziwe'],
  ['prawdziwego', 'prawdziwej'],
  ['prawdziwym', 'prawdziwą'],
  ['piękny', 'piękna'],
  ['pięknego', 'pięknej'],
  ['pięknemu', 'pięknej'],
  ['pięknego', 'piękną'],
  ['pięknym', 'piękną'],
  ['pięknym', 'pięknej'],
  ['piękny', 'piękna'],
  ['śliczny', 'śliczna'],
  ['ślicznego', 'ślicznej'],
  ['ślicznemu', 'ślicznej'],
  ['ślicznego', 'śliczną'],
  ['ślicznym', 'śliczną'],
  ['ślicznym', 'ślicznej'],
  ['śliczny', 'śliczna'],
  ['seksowny', 'seksowna'],
  ['seksownego', 'seksownej'],
  ['seksownemu', 'seksownej'],
  ['seksownego', 'seksowną'],
  ['seksownym', 'seksowną'],
  ['seksownym', 'seksownej'],
  ['seksowny', 'seksowna'],
  ['niebezpieczny', 'niebezpieczna'],
  ['niebezpiecznego', 'niebezpiecznej'],
  ['niebezpiecznemu', 'niebezpiecznej'],
  ['niebezpiecznego', 'niebezpieczną'],
  ['niebezpiecznym', 'niebezpieczną'],
  ['niebezpiecznym', 'niebezpiecznej'],
  ['niebezpieczny', 'niebezpieczna'],
  ['niezabezpieczona', 'niezabezpieczony'],
  ['niezabezpieczonej', 'niezabezpieczonego'],
  ['niezabezpieczonej', 'niezabezpieczonemu'],
  ['niezabezpieczoną', 'niezabezpieczonego'],
  ['niezabezpieczoną', 'niezabezpieczonym'],
  ['niezabezpieczonej', 'niezabezpieczonym'],
  ['niezabezpieczona', 'niezabezpieczony'],
  ['stary', 'stara'],
  ['starego', 'starej'],
  ['staremu', 'starej'],
  ['starego', 'starą'],
  ['starym', 'starą'],
  ['starym', 'starej'],
  ['stary', 'stara'],
  ['młody', 'młoda'],
  ['młodego', 'młodej'],
  ['młodemu', 'młodej'],
  ['młodego', 'młodą'],
  ['młodym', 'młodą'],
  ['młodym', 'młodej'],
  ['młody', 'młoda'],
  ['starszy', 'starsza'],
  ['starszego', 'starszej'],
  ['starszemu', 'starszej'],
  ['starszego', 'starszą'],
  ['starszym', 'starszą'],
  ['starszym', 'starszej'],
  ['starszy', 'starsza'],
  ['młodszy', 'młodsza'],
  ['młodszego', 'młodszej'],
  ['młodszemu', 'młodszej'],
  ['młodszego', 'młodszą'],
  ['młodszym', 'młodszą'],
  ['młodszym', 'młodszej'],
  ['młodszy', 'młodsza'],
  ['ładniejszy', 'ładniejsza'],
  ['ładniejszego', 'ładniejszej'],
  ['ładniejszemu', 'ładniejszej'],
  ['ładniejszego', 'ładniejszą'],
  ['ładniejszym', 'ładniejszą'],
  ['ładniejszym', 'ładniejszej'],
  ['ładniejszy', 'ładniejsza'],
  ['brzydszy', 'brzydsza'],
  ['brzydszego', 'brzydszej'],
  ['brzydszemu', 'brzydszej'],
  ['brzydszego', 'brzydszą'],
  ['brzydszym', 'brzydszą'],
  ['brzydszym', 'brzydszej'],
  ['brzydszy', 'brzydsza'],
  ['zboczony', 'zboczona'],
  ['zboczonego', 'zboczonej'],
  ['zboczonemu', 'zboczonej'],
  ['zboczonego', 'zboczoną'],
  ['zboczonym', 'zboczoną'],
  ['zboczonym', 'zboczonej'],
  ['zboczony', 'zboczona'],
  ['słodki', 'słodka'],
  ['słodkiego', 'słodkiej'],
  ['słodkiemu', 'słodkiej'],
  ['słodkiego', 'słodką'],
  ['słodkim', 'słodką'],
  ['słodkim', 'słodkiej'],
  ['słodki', 'słodka'],
  ['zajebisty', 'zajebista'],
  ['zajebistego', 'zajebistej'],
  ['zajebistemu', 'zajebistej'],
  ['zajebistym', 'zajebistą']
]

const wordToChangeCz = [
  ['ssij', 'liż'],
  ['ssać', 'lizać'],
  ['ssę', 'liżę'],
  ['ssiesz', 'liżesz'],
  ['ssie', 'liże'],
  ['ruchałbym', 'ruchałabym'],
  ['ruchaliśmy', 'ruchałyśmy'],
  ['ruchałbyś', 'ruchałabyś'],
  ['ruchałby', 'ruchałyby'],
  ['ruchałaby', 'ruchałyby'],
  ['ssałbym', 'lizałabym'],
  ['ssałabym', 'lizałbym'],
  ['ssałbyś', 'lizałabyś'],
  ['ssałabyś', 'lizałbyś'],
  ['ssałby', 'lizałaby'],
  ['ssałaby', 'lizałby'],
  ['walę', 'masuję'],
  ['wal', 'masuj'],
  ['walić', 'masować'],
  ['waliłabym', 'masowałbym'],
  ['waliłbym', 'masowałabym'],
  ['waliłabyś', 'masowałbyś'],
  ['waliłbyś', 'masowałabyś'],
  ['waliłaby', 'masowałby'],
  ['waliłby', 'masowałaby'],
  ['possij', 'poliż'],
  ['possać', 'polizać'],
  ['possę', 'poliżę'],
  ['posśiesz', 'poliziesz'],
  ['possie', 'polizie'],
  ['possiałbym', 'polizałbym'],
  ['possiałabym', 'polizałabym'],
  ['possiałbyś', 'polizałbyś'],
  ['possiałabyś', 'polizałabyś'],
  ['possiałby', 'polizałby'],
  ['possiałaby', 'polizałaby'],
  ['zwal', 'zmasuj'],
  ['zwalić', 'zmasować'],
  ['zwalę', 'zmasuję'],
  ['zwalisz', 'zmasujesz'],
  ['zwali', 'zmasuje'],
  ['zwaliłbym', 'zmasowałbym'],
  ['zwaliłabym', 'zmasowałabym'],
  ['zwaliłabyś', 'zmasowałbyś'],
  ['zwaliłbyś', 'zmasowałabyś'],
  ['zwaliłaby', 'zmasowałby'],
  ['zwaliłby', 'zmasowałaby'],
  ['stanął', 'zwilgotniała']
]

const wordToChangeOthers = [
  ['anno', 'koleszko'],
  ['sama', 'sam'],
  ['droga', 'drogi'],
  ['bokserek', 'stringów'],
  ['slipów', 'fig'],
  ['gość', 'gościówa'],
  ['gościem', 'gościówą'],
  ['mój', 'moja'],
  ['mojego', 'moją'],
  ['zajść', 'zostać'],
  ['zajdziesz', 'zostaniesz'],
  ['tą', 'tym'],
  ['stoi', 'mokra'],
  ['stanąć', 'zwilgotnieć'],
  ['nim', 'niej'],
  ['taką', 'takiego'],
  ['taka', 'taki'],
  ['który', 'która'],
  ['którego', 'którą'],
  ['pan', 'pani'],
  ['jej', 'jego'],
  ['postawić', 'nawilżyć'],
  ['obciągać', 'lizać'],
  ['obciągając', 'liżąc'],
  ['spuszczać', 'wypuszczać soki'],
  ['spuścić', 'wypuścić soki'],
  ['staje', 'wilgotnieje'],
  ['całego', 'całą'],
  ['cały', 'cała']
]

const uploadedPhotos = [
  'https://www.gg.pl/dysk/scpaMWAGnJ8QsMpaMWAPMXQ/20220521_113234.jpg',
  'https://www.gg.pl/dysk/0wIr8On73u0Q0gIr8OnycwY/20220710_133327.jpg',
  'https://www.gg.pl/dysk/j2myXTmNJ2MQjmmyXTmEiog/20220710_164334.jpg',
  'https://www.gg.pl/dysk/p2Lk0OqpMBAQpmLk0Oqgnfs/20220727_165311.jpg',
  'https://www.gg.pl/dysk/H9ejBXbsHcIQHtejBXblsCk/20220727_1422141.jpg',
  'https://www.gg.pl/dysk/MisRMdo6F6gQMysRMdozukM/20220813_182356.jpg',
  'https://www.gg.pl/dysk/2thJamMH7cgQ29hJamMOQCM/20220816_132154.jpg',
  'https://www.gg.pl/dysk/UkPX7G9SkPUQU0PX7G9bPR4/20220816_132230.jpg',
  'https://www.gg.pl/dysk/igyyfrzevioQiwyyfrzXE8E/20220817_125837.jpg',
  'https://www.gg.pl/dysk/0rD0eTdfMpMQ07D0eTdWn3g/20220817_162121.jpg',
  'https://www.gg.pl/dysk/mhdF2FX_z0UQmxdF2FX2Yq4/20220817_162653.jpg',
  'https://www.gg.pl/dysk/p-qyOpqO0UQQpuqyOpqHfK8/20220819_115635.jpg',
  'https://www.gg.pl/dysk/mvPANCDRXVkQm_PANCDY8LI/20220822_154323.jpg',
  'https://www.gg.pl/dysk/xGZNBxJ33-AQxWZNBxJ-cgs/20220903_152143.jpg',
  'https://www.gg.pl/dysk/offb6fOrHHwQoPfb6fOisZc/20221013_172310.jpg',
  'https://www.gg.pl/dysk/WRRW1MjL8QIQWBRW1MjCXOk/20221016_185643.jpg',
  'https://www.gg.pl/dysk/v35VbMJXpiAQvn5VbMJeC8s/20221123_204454.jpg',
  'https://www.gg.pl/dysk/UWuVbpaYD28QUGuVbpaRooQ/20221126_152347.jpg',
  'https://www.gg.pl/dysk/PmmF-FhNu7UQP2mF-FhEFl4/20221217_212632.jpg',
  'https://www.gg.pl/dysk/j9E5_4mypugQjtE5_4m7CwM/20221224_173410.jpg'
]

const find = [
  'ył',
  'yl',
  'yła',
  'yla',
  'laska',
  'Annuszka',
  'annuszka',
  'mógł',
  'mogl',
  'mogła',
  'mogla',
  'staje',
  'moczy',
  'cipeczkę',
  'łem',
  'lem',
  'transem',
  'transwestyta',
  'transwestytą',
  'trans',
  'cipką',
  'swojego',
  'swoją',
  'swoja',
  ' go',
  ' ją',
  'walic',
  'walić',
  'masowac',
  'masować',
  'ił',
  'cyce',
  'cycow',
  'cyców',
  'cyckow',
  'cycków',
  'ała',
  'iła',
  'jaja',
  'jajec',
  'jajec',
  'jajek',
  'jajek',
  'pieprzyk',
  'pieprzyk',
  'pieprzyki',
  'pieprzyki',
  'pieprzykami',
  'pieprzykami',
  'tatuaz',
  'tatuaż',
  'tatuaże',
  'tatuaze',
  'tatuażami',
  'tatuazami',
  'dziewczyną',
  'chłopaki',
  'chlopaki',
  'dziewczyny',
  'singielką',
  'singielka',
  'cipa',
  'wypiąć',
  'wypiac',
  'ała',
  'królewno',
  'królewna',
  'krolewno',
  'królewna',
  'księżniczko',
  'ksiezniczko',
  'księżniczka',
  'ksiezniczka',
  'zona',
  'żona',
  'minetke',
  'minetkę',
  'minete',
  'minetę',
  'ąca',
  'ący',
  'muszelka',
  'muszelką',
  'dziewica',
  'dziewicą',
  'suke',
  'sukę',
  'lechtaczka',
  'lechatczke',
  'łechtaczka',
  'łechtaczkę',
  '🍆',
  'ty chlop',
  'ty chłop',
  'suczko',
  'suko',
  'polak',
  'polka',
  'mogla',
  'mogła',
  'chuj',
  'cycusie',
  'powinnaś',
  'nogi',
  'nóżki',
  'nozki',
  'nog',
  'nozek',
  'nóżek',
  'kobiet',
  'mężczyzn',
  'chłopcy',
  'chlopcy',
  'chlopacy',
  'chłopacy',
  'ny',
  'na',
  'powinienem',
  'chcialbym',
  'chciałbym',
  'chcial',
  'chciał',
  'pokazał',
  'fajnego',
  'dziewczyne',
  'dziewczynę',
  'ęty',
  'ący',
  'broda',
  'brodę',
  'realna',
  'dużego',
  'ała',
  'męża',
  'kobieca',
  'kobiecy',
  'mojego',
  'chłopakiem',
  'małego',
  'niegrzeczny',
  'slipach',
  'stringach',
  'bokserkach',
  'meska',
  'męska',
  'męską',
  'jego',
  'tym',
  'brzydki',
  'żonaty',
  'zonaty',
  'sukienka',
  'sukience',
  'sukienke',
  'sukienkę',
  'slipy',
  'wdowcem',
  'zone',
  'żone',
  'żonę',
  'ja chlop',
  'ja chłop',
  'jestem chlopem',
  'jestem chłopem',
  'bokserkach',
  'dziewczynka',
  'dziewczynki',
  'dziewczynką',
  'konia',
  'wale',
  'walę',
  'wale konia',
  'walę konia',
  'cipę',
  'ssac',
  'ssać',
  'ssij',
  'chetna',
  'chętna',
  'chetny',
  'chętny',
  'sama',
  'meski',
  'męski',
  'chlopaka',
  'chłopaka',
  'sperma',
  'spermą',
  'sperme',
  'spermę',
  'spust',
  'spuscic',
  'spuścić',
  'spuszczam',
  'spuscilem',
  'spuściłem',
  'biust',
  'biustu',
  'stanik',
  'stanika',
  'staniczek',
  'staniczka',
  'miseczke',
  'miseczki',
  'miseczka',
  ' ania',
  ' anie',
  ' aniu',
  'laske',
  'laskę',
  'kolezanki',
  'koleżanki',
  'kolezanka',
  'koleżanką',
  'fiut',
  'fiutem',
  'fiuta',
  'kobietę',
  'suka',
  'suke',
  'suczka',
  'suczke',
  'żigolo',
  'żigola',
  'żigolak',
  'żigolaka',
  'bokserki',
  'bokserek',
  'stringi',
  'stringów',
  'naga',
  'nagi',
  'goly',
  'goły',
  'gola',
  'goła',
  'meskie',
  'męskie',
  'mężczyzna',
  'ony',
  'ona',
  'lodzika',
  'lodzik',
  'kazdy',
  'każdy',
  'kazda',
  'każda',
  'wolny',
  'wolna',
  'sliczna',
  'śliczna',
  'piekna',
  'piękna',
  'kutasa',
  'penisa',
  'chuja',
  'cipkę',
  'myszke',
  'myszkę',
  'myszka',
  'stoi',
  'dziewczyną',
  'dziewczyny',
  'chlopaka',
  'fajny',
  'fajna',
  'mężczyzną',
  'mezczyzna',
  'kobietą',
  'kobiete',
  'kazda',
  'stanik',
  'stanika',
  'cycuszki',
  'dziewczyna',
  'loda',
  'obciagnij',
  'ssij',
  'possij',
  'przyjaciolki',
  'przyjaciolka',
  'seksowna',
  'facetem',
  'facet',
  'Facet',
  'facetami',
  'facetów',
  'faceta',
  'mezczyzna',
  'mezczyzn',
  'mezczyznami',
  'gej',
  'gejem',
  'gejami',
  'kutas',
  'kutasem',
  'penis',
  'penisem',
  'klata',
  'klate',
  'klacie',
  'łeś',
  'les',
  'chłop',
  'chłopem',
  'chłopami',
  'sam',
  'any',
  'duzy',
  'duzego',
  'twardy',
  'twardego',
  'niebezpieczna',
  'zboczony',
  'zboczona',
  'starszy',
  'starszych',
  'mlodszy',
  'stary',
  'starego',
  'ładny',
  'ładna',
  'rogi',
  'rogami',
  'różki',
  'różkami',
  'nim',
  'slodka',
  'slodki',
  'okularach',
  'okulary',
  'piersi',
  'piersiach',
  'seksowny',
  'laska',
  'laska',
  'Laska',
  'laskami',
  'laski',
  'laski',
  'kobieta',
  'kobiety',
  'kobietami',
  'lesba',
  'lesba',
  'lesbami',
  'cipa',
  'cipa',
  'cipka',
  'cipka',
  'cycki',
  'cycki',
  'cyckach',
  'baba',
  'baba',
  'babami',
  'sama',
  'ana',
  'ciasna',
  'ciasna',
  'mokra',
  'mokra',
  'seksiak',
  'zboczona',
  'zboczony',
  'starsza',
  'starsze',
  'mlodsza',
  'stara',
  'stara',
  'ładna',
  'ładny',
  'wlosy',
  'wlosami',
  'włoski',
  'włoskami',
  'niej',
  'slodki',
  'slodka',
  'koszuli',
  'koszula',
  'klata',
  'klate',
  'singiel',
  'singlem',
  'zobaczyl',
  'samotny',
  'samotnym',
  'faceci',
  'cucyszki',
  'cipke',
  'cipeczke',
  'twoja',
  'cipy',
  'cipki',
  'jajka',
  'jajek',
  'ałbym',
  'albym',
  'taka',
  'taki',
  'zobaczyl',
  'zobaczył',
  'starszych',
  'piotr',
  'krzysztof',
  'andrzej',
  'tomasz',
  'paweł',
  'jan',
  'michał',
  'marcin',
  'jakub',
  'adam',
  'stanisław',
  'marek',
  'łukasz',
  'grzegorz',
  'mateusz',
  'wojciech',
  'mariusz',
  'dariusz',
  'zbigniew',
  'maciej',
  'rafał',
  'robert',
  'jerzy',
  'kamil',
  'jacek',
  'józef',
  'dawid',
  'szymon',
  'tadeusz',
  'ryszard',
  'kacper',
  'bartosz',
  'jarosław',
  'janusz',
  'sławomir',
  'artur',
  'mirosław',
  'sebastian',
  'damian',
  'henryk',
  'patryk',
  'daniel',
  'przemysław',
  'karol',
  'roman',
  'kazimierz',
  'filip',
  'antoni',
  'wiesław',
  'adrian',
  'marian',
  'aleksander',
  'arkadiusz',
  'dominik',
  'franciszek',
  'bartłomiej',
  'mikołaj',
  'leszek',
  'waldemar',
  'krystian',
  'wiktor',
  'zdzisław',
  'radosław',
  'bogdan',
  'konrad',
  'edward',
  'mieczysław',
  'hubert',
  'władysław',
  'igor',
  'czesław',
  'oskar',
  'eugeniusz',
  'marcel',
  'bogusław',
  'stefan',
  'ireneusz',
  'maksymilian',
  'zygmunt',
  'miłosz',
  'witold',
  'sylwester',
  'oleksandr',
  'włodzimierz',
  'oliwier',
  'alan',
  'nikodem',
  'zenon',
  'leon',
  'cezary',
  'norbert',
  'gabriel',
  'julian',
  'serhii',
  'ignacy',
  'błażej',
  'andrii',
  'fabian',
  'tymoteusz',
  'volodymyr',
  'kuba',
  'arek',
  'jarek',
  'bartek',
  'krzysiek',
  'radek',
  'przemek',
  'tomek',
  'wojtek',
  'kazik',
  'maciek',
  'dziewczyn',
  'łaś',
  'las',
  'ał',
  'stanął',
  'stanal',
  'kolezanko',
  'koleżanko',
  'szy',
  'sza',
  'cyckami',
  'stanie',
  'zwilgotnieje'
]

const replace = [
  'yła',
  'yla',
  'ył',
  'yl',
  'facet',
  'kolego',
  'kolego',
  'mogła',
  'mogla',
  'mógł',
  'mogl',
  'moczy',
  'staje',
  'kutaska',
  'łam',
  'lam',
  'homosiem',
  'homoseksualistą',
  'homoseksualistą',
  'homo',
  'kutaskiem',
  'swoją',
  'swojego',
  'swojego',
  ' ją',
  ' go',
  'masowac',
  'masować',
  'walic',
  'walić',
  'iła',
  'jaja',
  'jajec',
  'jajec',
  'jajek',
  'jajek',
  'ał',
  'ił',
  'cyce',
  'cycow',
  'cyców',
  'cyckow',
  'cycków',
  'tatuaz',
  'tatuaż',
  'tatuaże',
  'tatuaze',
  'tatuażami',
  'tatuazami',
  'pieprzyk',
  'pieprzyk',
  'pieprzyki',
  'pieprzyki',
  'pieprzykami',
  'pieprzykami',
  'chłopakiem',
  'dziewczyny',
  'dziewczyny',
  'chłopaki',
  'singlem',
  'singiel',
  'kutas',
  'wsadzić',
  'wsadzic',
  'ał',
  'królu',
  'król',
  'krolu',
  'król',
  'księciu',
  'ksieciu',
  'książe',
  'ksiaze',
  'maz',
  'mąż',
  'lodzika',
  'lodzika',
  'loda',
  'loda',
  'ący',
  'ąca',
  'penisek',
  'peniskiem',
  'prawiczek',
  'prawiczkiem',
  'żigolaka',
  'żigolaka',
  'napletek',
  'napletka',
  'napletek',
  'napletka',
  '🍑',
  'ty baba',
  'ty baba',
  'żigolaku',
  'żigolaku',
  'polka',
  'polak',
  'mogl',
  'mógł',
  'cipa',
  'jajeczka',
  'powinieneś',
  'oczy',
  'oczka',
  'oczka',
  'oczu',
  'oczu',
  'oczu',
  'mężczyzn',
  'kobiet',
  'dziewczyny',
  'dziewczyny',
  'dziewczyny',
  'dziewczyny',
  'na',
  'ny',
  'powinnam',
  'chcialabym',
  'chciałabym',
  'chciala',
  'chciała',
  'pokazała',
  'fajną',
  'chłopaka',
  'chłopaka',
  'ęta',
  'ąca',
  'pieprzyk',
  'pieprzyka',
  'realny',
  'luźną',
  'ał',
  'żonę',
  'męski',
  'męski',
  'mojej',
  'dziewczyną',
  'ciasną',
  'niegrzeczna',
  'figach',
  'bokserkach',
  'stringach',
  'damska',
  'damska',
  'damską',
  'ją',
  'tą',
  'brzydka',
  'zamężna',
  'zamezna',
  'koszula',
  'koszuli',
  'koszule',
  'koszulę',
  'figi',
  'wdową',
  'męża',
  'męża',
  'męża',
  'ja baba',
  'ja baba',
  'jestem babą',
  'jestem babą',
  'stringach',
  'chłopiec',
  'chłopca',
  'chłopcem',
  'cipkę',
  'masuje',
  'masuję',
  'masuje cipke',
  'masuję cipkę',
  'kutasa',
  'lizac',
  'lizać',
  'liż',
  'chetny',
  'chętny',
  'chetna',
  'chętna',
  'sam',
  'damski',
  'damski',
  'laski',
  'laski',
  'soki',
  'sokami',
  'soki',
  'soki',
  'wytrysk soków',
  'wypuscic soki',
  'wypuścić soki',
  'wypuszczam soki',
  'wypuscilam soki',
  'wypuściłam soki',
  'klata',
  'klaty',
  'majtki',
  'majtek',
  'majteczek',
  'majteczek',
  'majteczek',
  'majteczki',
  'majteczki',
  ' kolega',
  ' kolegę',
  ' kolego',
  'faceta',
  'faceta',
  'kolegi',
  'kolegi',
  'kolega',
  'kolegą',
  'cipa',
  'cipą',
  'cipe',
  'mężczyznę',
  'żigolo',
  'żigola',
  'żigolak',
  'żigolaka',
  'suka',
  'suke',
  'suczka',
  'suczke',
  'stringi',
  'stringów',
  'bokserki',
  'bokserek',
  'nagi',
  'naga',
  'gola',
  'goła',
  'goly',
  'goły',
  'damskie',
  'damskie',
  'kobieta',
  'ona',
  'ony',
  'minetke',
  'minetka',
  'kazda',
  'każda',
  'kazdy',
  'każdy',
  'wolna',
  'wolny',
  'śliczny',
  'sliczny',
  'piekny',
  'piękny',
  'dziurke',
  'dziurke',
  'dziurke',
  'kutaska',
  'peniska',
  'peniska',
  'penisek',
  'mokro',
  'facetem',
  'chlopaka',
  'dziewczyny',
  'fajna',
  'fajny',
  'kobietą',
  'kobieta',
  'mężczyzną',
  'mezczyzne',
  'kazdy',
  'bokserki',
  'bokserek',
  'jajeczka',
  'chlopak',
  'minete',
  'wyliz',
  'poliz',
  'poliz',
  'przyjaciela',
  'przyjacielem',
  'seksowny',
  'laska',
  'laska',
  'Laska',
  'laskami',
  'laski',
  'laski',
  'kobieta',
  'kobiety',
  'kobietami',
  'lesba',
  'lesba',
  'lesbami',
  'cipa',
  'cipa',
  'cipka',
  'cipka',
  'cycki',
  'cycki',
  'cyckach',
  'łaś',
  'las',
  'baba',
  'baba',
  'babami',
  'sama',
  'ana',
  'ciasna',
  'ciasna',
  'mokra',
  'mokra',
  'seksiak',
  'zboczona',
  'zboczony',
  'starsza',
  'starsze',
  'mlodsza',
  'stara',
  'stara',
  'ładna',
  'ładny',
  'wlosy',
  'wlosami',
  'włoski',
  'włoskami',
  'niej',
  'slodki',
  'slodka',
  'koszuli',
  'koszula',
  'klate',
  'klate',
  'seksowna',
  'facetem',
  'facet',
  'Facet',
  'facetami',
  'facetów',
  'faceta',
  'mezczyzna',
  'mezczyzn',
  'mezczyznami',
  'gej',
  'gejem',
  'gejami',
  'kutas',
  'kutasem',
  'penis',
  'penisem',
  'klata',
  'klate',
  'klacie',
  'chłop',
  'chłopem',
  'chłopami',
  'sam',
  'any',
  'duzy',
  'duzego',
  'twardy',
  'twardego',
  'niebezpieczna',
  'zboczony',
  'zboczona',
  'starszy',
  'starszych',
  'mlodszy',
  'stary',
  'starego',
  'ładny',
  'ładna',
  'rogi',
  'rogami',
  'różki',
  'różkami',
  'nim',
  'slodka',
  'slodki',
  'okularach',
  'okulary',
  'piersi',
  'piersiach',
  'singielka',
  'singielka',
  'zobaczyla',
  'samotna',
  'samotna',
  'laski',
  'klate',
  'kutasa',
  'kutaska',
  'twojego',
  'kutasa',
  'kutaska',
  'cycki',
  'cyckow',
  'ałabym',
  'alabym',
  'taki',
  'taka',
  'zobaczyla',
  'zobaczyła',
  'starsze',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'ania',
  'chłopaków',
  'łeś',
  'les',
  'ała',
  'zmoczyła',
  'zmoczyla',
  'kolego',
  'kolego',
  'sza',
  'szy',
  'jądrami',
  'zwilgotnieje',
  'stanie'
]

module.exports = {
  malesNames,
  endings,
  wordToChangeRz,
  wordToChangePrz,
  wordToChangeCz,
  wordToChangeOthers,
  uploadedPhotos,
  find,
  replace
}

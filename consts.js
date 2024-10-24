const malesNames = [
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
  ['łem', 'łam'],
  ['lem', 'lam'],
  ['łeś', 'łaś'],
  ['leś', 'laś'],
  ['łes', 'łas'],
  ['ny', 'na'],
  ['ęty', 'ęta'],
  ['ety', 'eta'],
  ['ący', 'ąca'],
  ['acy', 'aca'],
  ['ki', 'ka'],
  ['by', 'ba'],
  ['dy', 'da'],
  ['szy', 'sza'],
  ['ał', 'ała'],
  ['al', 'ala'],
  ['łbym', 'łabym'],
  ['czny', 'czna'],
  ['cznego', 'czną']
]

const wordToChangeRz = [
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

wordToChangePrz = [
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
  ['słodki', 'słodka']
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
  ['zwaliłby', 'zmasowałaby']
]

const wordToChangeOthers = [
  ['ją', 'jego'],
  ['ja', 'go'],
  ['mój', 'moja'],
  ['mojego', 'moją'],
  ['zajść', 'zostać'],
  ['zajdziesz', 'zostaniesz'],
  ['tą', 'tym']
]

const uploadedPhotos = [
  'https://www.gg.pl/dysk/RyQ2HQpE0kpcRiQ2HQpMLMQ/20240521_113234.jpg',
  'https://www.gg.pl/dysk/qs54GCjsRUtcq854GCjku8U/20240710_133327.jpg',
  'https://www.gg.pl/dysk/In46W0WCXrtcI346W0WKoDU/20240710_164334.jpg',
  'https://www.gg.pl/dysk/IJRGW0jZMLRcIZRGW0jRzjo/20240727_165311.jpg',
  'https://www.gg.pl/dysk/nOgyi-mYpkpcnegyi-mQWMQ/20240727_1422141.jpg',
  'https://www.gg.pl/dysk/jklYMhlZEohcj0lYMhlR7AY/20240813_182356.jpg',
  'https://www.gg.pl/dysk/-E6SrKq_fxdc-U6SrKq3gZk/20240816_132154.jpg',
  'https://www.gg.pl/dysk/Iar_kkLxpSxcIKr_kkL5W6I/20240816_132230.jpg',
  'https://www.gg.pl/dysk/kmrZikgi8Spck2rZikgqD6Q/20240817_125837.jpg',
  'https://www.gg.pl/dysk/Np09QkFftUFcN509QkFXS88/20240817_162121.jpg',
  'https://www.gg.pl/dysk/OCkndlBhZpVcOSkndlBpmBs/20240817_162653.jpg',
  'https://www.gg.pl/dysk/SWDROkvXSg9cSGDROkvftIE/20240819_115635.jpg',
  'https://www.gg.pl/dysk/KTpHXWZh5oBcKDpHXWZpGA4/20240822_154323.jpg',
  'https://www.gg.pl/dysk/znOGofGfiRBcz3OGofGXd54/20240903_152143.jpg',
  'https://www.gg.pl/dysk/fQuWdf0H68pcfAuWdf0PFUQ/20241013_172310.jpg',
  'https://www.gg.pl/dysk/Ctxf1EqJY6dcC9xf1EqBnSk/20241016_185643.jpg',
  'https://www.gg.pl/dysk/oFGHl5CbZP1coVGHl5CTmnM/20241123_204454.jpg',
  'https://www.gg.pl/dysk/kxv66Z0eYyZckhv66Z0Wnag/20241126_152347.jpg',
  'https://www.gg.pl/dysk/MtaUhQEQ3EpcM9aUhQEYIsQ/20241217_212632.jpg',
  'https://www.gg.pl/dysk/XNUjt10Ycw9cXdUjt10QjYE/20241224_173410.jpg'
]

module.exports = {
  malesNames,
  endings,
  wordToChangeRz,
  wordToChangePrz,
  wordToChangeCz,
  wordToChangeOthers,
  uploadedPhotos
}

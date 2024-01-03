import { Injectable } from '@angular/core';
import { IAppData } from '../models/appData';
import { APP_DATA_JSON } from 'src/assets/application-default-data';
import packageJson from './../../../package.json';
import buildJson from './../../../build.json';


@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  appData: IAppData;
  version: string = packageJson.version;
  build: string = buildJson.build;

  constructor() {
    this.appData = APP_DATA_JSON;

    //DEBUG 
    // this.findUniqueWords();
  }

  findUniqueWords() {
    let wordsunique: any = [];
    words.forEach((w) => {
      if (!this.hasDuplicateLetters(w)) {
        wordsunique.push(w);
      }
    });
  
    console.log(wordsunique);
  }
  
  hasDuplicateLetters(word: string): boolean {
    const seenLetters = new Set<string>();
    for (const letter of word) {
      if (seenLetters.has(letter)) {
        return true;
      }
      seenLetters.add(letter);
    }
    return false;
  }
}



export const CODEWORDS_PL: string[] = [
  'GALERYSTOM',
  'GERMINACJO',
  'GILOTYNUJE',
  'GRADKOLICE',
  'GRUBASKIEM',
  'GRYPSOWALI',
  'GRYPSUJCIE',
  'KANGURZYCO',
  'KASTRUJCIE',
  'NIEBURACKO',
  'NIEMCZYSKA',
];

export const CODEWORDS_EN = [
  'AFTERSHOCK',
  'ALGORITHMS',
  'AMPLITUDES',
  'ARTICHOKES',
  'BACKGROUND',
  'BACKSLIDER',
  'BANDOLIERS',
  'BANKRUPTCY',
  'BEACHFRONT',
  'BENCHMARKS',
  'BINOCULARS',
  'BIRTHPLACE',
  'BLACKSMITH',
  'BLACKTHORN',
  'BLUEPRINTS',
  'BOUNDARIES',
  'BREAKPOINT',
  'BUTCHERING',
  'CAMPGROUND',
  'CHIVALROUS',
  'CLIPBOARDS',
  'CLOTHESPIN',
  'COMBATHELP',
  'COMPATIBLE',
  'CORNFLAKES',
  'CUMBERLAND',
  'CYBERPUNKS',
  'DEATHBLOWS',
  'DEFOLIANTS',
  'DEMOGRAPHY',
  'DESTROYING',
  'DUMBWAITER',
  'DUPLICATOR',
  'EXHAUSTION',
  'FARSIGHTED',
  'FLAMINGOES',
  'GLAMOURIZE',
  'GODFATHERS',
  'GODPARENTS',
  'GOLDBRICKS',
  'HARLEQUINS',
  'HARVESTING',
  'HYDROPLANE',
  'HYPNOTIZED',
  'JOURNALIST',
  'JUDGMENTAL',
  'LADYFINGER',
  'LOVEMAKING',
  'LUMBERJACK',
  'MACKINTOSH',
  'MANUSCRIPT',
  'MISFORTUNE',
  'MONARCHIST',
  'MOTHERLAND',
  'NIGHTCLUBS',
  'NIGHTMARES',
  'PAINTBRUSH',
  'PALINDROME',
  'PATHFINDER',
  'PLAYGROUND',
  'PRECAUTION',
  'PROSCENIUM',
  'REGULATION',
  'REPUBLICAN',
  'SHOPLIFTER',
  'SUPERWOMAN',
  'TRAMPOLINE',
  'ULTRASONIC',
  'VIBRAPHONE',
  'VOLKSWAGEN',
];



///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////


const UNIQUE = [

];

const words: string[] = [
'gębujących',
'gronickich',
'galerystom',
'grzebiółce',
];





/*
more english words:

AFTERSHOCK
ALGORITHMS
AMPLITUDES
ARTICHOKES
BACKGROUND
BACKSLIDER
BANDOLIERS
BANKRUPTCY
BEACHFRONT
BENCHMARKS
BINOCULARS
BIRTHPLACE
BLACKSMITH
BLACKTHORN
BLUEPRINTS
BOUNDARIES
BREAKPOINT
BUTCHERING
CAMPGROUND
CHIVALROUS
CLIPBOARDS
CLOTHESPIN
COMPATIBLE
CORNFLAKES
CUMBERLAND
CYBERPUNKS
DEATHBLOWS
DEFOLIANTS
DEMOGRAPHY
DESTROYING  
DUMBWAITER
DUPLICATOR
EXHAUSTION
FARSIGHTED
FLAMINGOES
GLAMOURIZE
GODFATHERS
GODPARENTS
GOLDBRICKS
HARLEQUINS
HARVESTING
HYDROPLANE
HYPNOTIZED
JOURNALIST
JUDGMENTAL
LADYFINGER
LOVEMAKING
LUMBERJACK
MACKINTOSH
MANUSCRIPT
MISFORTUNE
MONARCHIST
MOTHERLAND
NIGHTCLUBS
NIGHTMARES
PAINTBRUSH
PALINDROME
PATHFINDER
PLAYGROUND
PRECAUTION
PROSCENIUM
REGULATION
REPUBLICAN
SHOPLIFTER
TRAMPOLINE
ULTRASONIC
VIBRAPHONE
VOLKSWAGEN










////////////////////////////////////////////////////////reszta

blockading
blockheads
blustering
bolstering
boulevards
boyfriends
bracketing
breakdowns
brutalized
brutalizes
byproducts
campground
centigrams
chairwomen
championed
charmingly
chlorinate
clambering
clampdowns
clothespin
clustering
columbines
compatible
compatibly
complained
complainer
complaints
completing
complexity
compulsive
configured
configures
confusedly
conjugated
conjugates
consumable
copulating
copyrights
creditably
cremations
crumbliest
crystalize
culminated
culminates
curtseying
customized
davenports
debauching
debonairly
decathlons
decorating
defaulting
defrosting
depilatory
desolating
despicably
dextrously
disbarment
discourage
disgruntle
disharmony
dispatcher
disputable
downstream
dumbwaiter
duplicates
earthlings
educations
emulations
epistolary
exactingly
exhausting
exhumation
falterings
farsighted
fetchingly
flamingoes
flavorings
flourished
fluoridate
flustering
flyweights
forgivable
formalized
formalizes
formidable
formidably
formulated
formulates
fornicated
fornicates
franchised
fruitcakes
fulminated
fulminates
fumigators
gelatinous
glamorized
graciously
greyhounds
grievously
grouchiest
handsomely
headstrong
holstering
hospitable
hospitably
houseplant
humanizers
humdingers
humpbacked
hydraulics
hyperbolas
hyperbolic
hypnotizes
hypocrites
hypodermic
hysterical
ideographs
impersonal
importance
importuned
importunes
improvable
impudently
incubators
inculpated
inculpates
incurables
inexorably
infamously
inoculated
inoculates
interlocks
introduces
jocularity
journalism
judgmental
juxtaposed
kohlrabies
labyrinths
lacquering
languished
lawrencium
lengthways
lifeguards
logarithms
longitudes
lymphatics
magnitudes
manifestly
matchboxes
mayflowers
mendacious
methodical
microwaved
microwaves
mineralogy
miscounted
mistakenly
moderating
modulating
monarchies
monetarily
mudslinger
neighborly
normalized
normalizes
noticeably
obdurately
obfuscated
ostracized
outflanked
outlandish
outplaying
outwearing
overacting
overlaying
overnights
overpaying
overtaking
overtaxing
pachyderms
padlocking
panegyrics
parchments
parqueting
patchworks
pathogenic
patronized
patronizes
patronymic
paunchiest
persuading
philanders
phlegmatic
pitchforks
plastering
platformed
playground
playthings
playwright
pleasuring
pocketfuls
polytheism
preambling
precaution
preciously
precluding
preclusion
previously
proclaimed
productive
profitable
profitably
profligacy
profligate
profundity
projecting
promulgate
purchasing
purgatives
putrefying
quadriceps
randomizes
raunchiest
ravenously
ravishment
redoubling
reductions
refocusing
regulation
relocating
restocking
restudying
resumption
retouching
rhapsodize
rheumatics
roughnecks
roundelays
scampering
scathingly
scheduling
scrambling
shockingly
shrinkable
slathering
slumbering
smoldering
smothering
soundtrack
speculator
spheroidal
splotchier
splotching
squelching
stampeding
stewarding
stockading
stockpiled
stomaching
stupefying
subheading
subjecting
subjection
sublimated
subtrahend
subverting
switchable
symbolized
sympathize
syncopated
tambourine
throwbacks
thumbscrew
timberland
touchingly
tourmaline
transfixed
trapezoids
travelings
truckloads
tumbledown
ulcerating
ulceration
undercoats
underplays
ungodliest
unscramble
unsociable
unsteadily
unworkable
upholstery
wanderlust




*/

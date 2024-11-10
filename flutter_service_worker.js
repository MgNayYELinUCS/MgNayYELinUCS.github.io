'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "30951166f9345f0e5c7b8bd6be6c9f8c",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "2f37597a837f87a78669f1cab62ed3b1",
"/": "2f37597a837f87a78669f1cab62ed3b1",
"main.dart.js": "5f045e9bcab6ee0dd292ed59eb4ce4fc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/config": "cee5c88df54bc2c7e067fff8acff6485",
".git/objects/61/b371614d1ee3d33305f77c49624faf4eeb275d": "c11c0f7d147c813c80b4fc0d124eb403",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0c/2d1eb2c7a014896481efcc7fb30bd5932fb680": "16be09d98d166f7e45443931c0c6a1b4",
".git/objects/0c/ac19fc19c614feff7e1ecaa33f00051f3cdbd1": "2633b7539fbee280c851ce949129020a",
".git/objects/0c/93b7e680cbe40208f224ce5537da94d7cd9e16": "d700db7d4d7bf46b8e02b25a75368c80",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/65385471ade897347216b84f572ac39f540f43": "fc5cde188b630de4c500432f04c76484",
".git/objects/3b/6ac337dcd3d892b636a19aaec44bf6971b4f15": "1e888487aff191b87ee65792e9bf8dd2",
".git/objects/6f/806474948b2cfc5f8fb3fcea4b49e67c49031a": "3d82e1d66b29d009b566d59acbb63c52",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/c886772a2f3156e5b9bde53866403d8db04f30": "6cbf74b2d38e4279a89cb9b0ccb1347e",
".git/objects/3c/ece0f647196218f0463ebce3b58cd4adc9ded0": "5a872c2cab3c81cac941213c94a9af63",
".git/objects/93/5f953e82799ea8598e7197d5bde8ac95d61a74": "3e8a016cada9db3d31cfcef0891d53e3",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/dc5df302b7b9e6910bfb7cc3de72ef58fe6d02": "69062df43f535eda9848c6e5c38f46e4",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/c37be7390a43ebbe5c13604982c36f71ef4e27": "f26c1acebc79ccba2a23cb9ba7780711",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/780ff54368425af0b8fce99285e4bb29bb3c3b": "73df01b473a87d356e34212b3d6bff8a",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/08e6e7bc35601d40149f6fc1ab170e1a32aac2": "f39cb3ca2b4462ff5a38394202a26dd1",
".git/objects/df/3bc742009691ec7eaef59e5f5d65824bafbd24": "d335e0e566f4176624e25911d11b493e",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/bd/b9fb0777ac25317d939185d972b70fb5452da2": "d91cfc78bd9ac70e44ecb07eb512f683",
".git/objects/bd/6cb5da5528c6db6e4c0771e9b2e813c915680f": "9b73eef9d962e1c131b7c1687be8782a",
".git/objects/bd/2464265c97ad5968ff3a347c458876b258db36": "f3dfcbfbeea9fb7202eba2def9d9cb86",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/8738fb6dbc63855b58b29efe74ae6414b73a13": "4c0ff7ca01c78231f7614daeaaa62d25",
".git/objects/d8/630028e74db3c88be76bd3a3f6fe0462adddef": "76bb8b9c4f0d2191ef3266e361a18600",
".git/objects/ab/2d7b91167a77731a6870a24eb5f452a8ebd683": "8c86706b41109f7d726f09386a98bb5a",
".git/objects/ab/cbedab023000a3db15f373396366823e07e799": "c48ad0bad573abd58afe6776cbdcc5ab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/8257d4ef0443da2353baf3dc4f96e06f3a432f": "2e6b34c41372adb2e22fae78b763670c",
".git/objects/fc/0f9e5cfd318f2bd0bf662dc4992f7a7a3ff2dd": "0304a0bb2a080ecb75ecbeb39ae63f90",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ed/300c3998ee5b64e7e1b84f47177f1d27bcec8d": "3ccf3fca8bc68a6532efada4178c9221",
".git/objects/c1/11e4114f11d0272b5993755cf03e83ef919678": "5f4557a3a32685b1b7d3268b3a698e40",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/4b/bdc5943ee74834b783fb63c7832d7c3b1292ef": "72dedacdb8b144743577705f1291488c",
".git/objects/11/2dc50b83ea8428a156000c134dddceff43178d": "3c1db08e058fa3048e528838e0b21ab3",
".git/objects/42/f5b3e0392682964cec3ad3f9ce5d35819c9979": "3ee3ee44f959a241138e31d839664aaf",
".git/objects/45/901940feae60aa9ee8d4b3520b26d2aaf7fd4c": "520ae83cb8f770dc5f35d0bfa81e47f3",
".git/objects/1f/86e162b3b0d313be3c9d27d2f1ec35878929ab": "36c8da683846593c253fede492700122",
".git/objects/73/09a191de729b2e3a4bb810a935a3257d8b8ce0": "f8f5416288e84b527fc39bf8a563b289",
".git/objects/80/d6d7a657224d7da8e049a91038c6b2bdb7d559": "f27ec2a3e7c6d5c67e6ff3fa1d77a828",
".git/objects/80/542ae932d7990d8b1464f89c7895d4c38e0d45": "5ae295c5b4fe2e5f3160bb4c6ec7fcdf",
".git/objects/28/bd623b2a7c018d672b5fa6cc90bb39d2883665": "4c3a0edd9de38d1982a0f2ad7e243670",
".git/objects/17/f60d75973441788735e7c088e9d52688603240": "a0af7c77cdca9a171c5647b4f00cb08d",
".git/objects/7b/4160c09c3be641ad6b449fda36e9547ab9f65c": "e8268cbeba19daf6997371c118a62f59",
".git/objects/8a/51970d02e62f5df2aaf2cf95d1fdcccc1656d5": "2a02be2ed4fd81544933b43757b593e3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/ee2c0b5a6aee13d30337efc3976335b3d09e74": "30079f167f0e02678fe9813e461d049b",
".git/objects/75/1707024f02fec1b069604cc55c408d04f6bb57": "b64b44f41c181fdfcd26daa173fffef1",
".git/objects/72/1ae047d1c96b246dd33dd4e78b396579f792df": "95c98e4c67b0143bd75135f8ad265ca6",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/abfcffa695a099ba436daf1be259792a6fb6e5": "7a0b2f18b6623af4d6e4ef57ae5b5df0",
".git/objects/2f/c1ece2222d22423a2b83c821fa0c10d8c4b8ad": "aa98d4d6ae1bd30445fb4a4703d3d1ad",
".git/objects/2f/5f86e9df2edca7b18905c2d5b3426feb29fb78": "9c450a915c7f263c71e2b556c0c18904",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/4a898379cc1a3f00f984748ecae329ec07ab57": "2361b1bb4a6b53640a5980998ab83258",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/72c7efc651a1717d6e81d2618999f11765e69f": "c22897d739e692302f2194ccf1a20672",
".git/objects/38/e4fb6ce14a6134f2444d78a49668d88aa542d7": "fe6bbb27a0be66342944a585cca1b221",
".git/objects/36/036d8bdc64bdc8adf32905719fef19362fef67": "1ba53421c72710cd11a9977bb9e4dedb",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/09/327f2f20c1ac119f94a4e6bccf2957290b0b77": "7ffef4129f5d55bcb250019a885c4a43",
".git/objects/31/f8c63a76d018bdf1a067dad4cab8d5c6c59ea3": "6a6fb1fef90b174e66baf12cbfd6e82e",
".git/objects/31/71007dcc06004b48ff7e181752c9afb2213e90": "7ebc5b9798822778e0e383704dc4731e",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/54/fd7dd335b12601eaec6a327619c5f29b118a26": "dadacc58c5b3abb1cb7072c0969351a8",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/53a5cdb1490e72e92ff9f8ce70441a5f128acc": "572e00bbf6001d9de30cfbb81b7424e0",
".git/objects/08/895492caab52cba98edd38bf525d473335dec3": "7dd8f13c367b83dfc216b3707b6bd667",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/a417a14941e10294905ed6d1c7a7b37a29919c": "84feec8259739c623ce8952ab9e4ac80",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/feebd2e613e0123725a8b922c744fcdd9b9435": "8f1ea1a1f0f97669e313eb2b5679e920",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/9fbba06fa74e7c07eb78fbdfc275fd25392005": "1e956d851691d3c3078cf896af2b3cf4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/01bfb11f8b9c2ccd3526e5cfb0d5ca0c2ce0fd": "2b65fef96a393aa16f9ed3822fc66cf9",
".git/objects/aa/a5cdedd4ac506093d23e6ccc4f49b66a0c5e36": "bd738e68a67f42d6b2805266ce23f825",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6d967e500f257b18e558a80853957401ac5c7c": "3efa9ba5e5763fcd23b7306729c77bad",
".git/objects/a8/2e9b9f68ed3db8a461e228efdcb60d39cd5bf2": "9ea498dc1cb1c94c60d42a8fc69d6ab0",
".git/objects/de/284c380bf9203f773dc780814fb5778a98fa46": "c2cd0a6d2d2a2a19c726a4cb61f1a7c3",
".git/objects/de/3142607a0e2d5506d6d0482acd2a465bd7a9e2": "4cccfb390ad686114fd84dc372873eb6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/c4/898e44b03da0360e3953e651107681a541daa6": "436998da6dcfc37480c691aaf91a86ac",
".git/objects/e1/cb04c79b741e7bc0df5e22cc42fbe7457ec8c0": "b7c226b5d21901b9c082dfc72c7abb8f",
".git/objects/e6/38b4c9a6411bd2aa5c096ad537a469bf0941a6": "a31bb1ea2019cc6001380bcc4dad75e7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c5/7cca0eb7467cfa45488524f929eff755be8032": "bb1940eeb62c6d3bea74903d113b1c5e",
".git/objects/f1/30fc58e3e381b5afdb73d0f85be90d1b2147be": "d78c761719ba6029a8f3ec13fb9a755a",
".git/objects/cb/a8681da4d63337d3976d76744dd39720352452": "7c1b316c6af7bd951f528c5933dcaa0a",
".git/objects/cb/46ce1f012223517a32fe0b4df5a5cc9dba1238": "f7bc5bb22fb7c4d22405b7955b837970",
".git/objects/ce/d39a0bac213782fa9f80abf83c49c4ba2df036": "69916f601ce057316658105fff5f9e1f",
".git/objects/ce/db4aaba9c34e0332e94a672a28183228234df8": "16385defed5f85bd45488ffd80ff19af",
".git/objects/2c/775f6827394eb7174714cfb99cb99df5af7ec4": "c0d018fe884977455732c40a5c579381",
".git/objects/2d/70e330cba2f50f3f723bed22ed586e3b303944": "d22c013611c4af7195df8c764cb87950",
".git/objects/2d/7f9f97266981a8e3e28f6c615c03cf55c9a9b3": "a8bf00d050e6abef3b66cdb69a94619e",
".git/objects/83/744c15a415d5d4dacf533f78b210cbd6b3c9c0": "ae2def11268ec8c97d63f716b22c3811",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/84/d53962ea3b8b53945d017033a3b864117e9972": "0e63ac00d8f0ef094d988e08218a23e3",
".git/objects/84/98d2be5e30579e4e6e4faee63e4c5333df8656": "89c5406392829eea5945c1a8284c89a8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/343bf40cdc8174fb5ff7b7b825eb452d1e9b81": "860be624fd233e7d338a12465d2a1942",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8c/a838ba991653d182cfa8d3e9d40ba515554f4a": "42910358b101734d65cd433e098a4f7a",
".git/objects/76/03301782a1582c2369259f54685b1d59d6b4bc": "126b0beda9ff4287efcfd1492a02d6a4",
".git/objects/82/e867923739838cc67c246c67507da9dbd63f64": "1590414f4353a85a32c521626593917f",
".git/objects/40/71d1e9eea64ceb08fd23e7151510b9caa4f694": "bed8eb05acf80b0d63d2e58648b62cb3",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/64b65bd12ee70a4ede168605f6896a63c4489b": "5d5fc5691caedcaa168a1963ea92e41f",
".git/objects/47/f5d4b65664bd6914f464753ba3b1d7c7498d2c": "1ac33c9734fba722c8485a98d74aa1de",
".git/objects/8b/8b9794c301bdbf107a21d910bee399e813a9b3": "afb75eb6946aa88976ed8e5dc8528703",
".git/objects/7a/ae88e24787e6c4a2caa85149a1ceb3eba83d46": "6430444878894cfdd1d6ecb6a49144d4",
".git/objects/7a/d3965b079d5ff2c7ac0317a1be1c4fb061de96": "b5ff00d648158b847d665404da3dd304",
".git/objects/22/b9b7adab50530db6bc5d62c93586235c033a05": "d8754b9e3c37e5c04fc017963db0e945",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "175ed2a16910039c51235e8eecb0a2b3",
".git/logs/refs/heads/master": "175ed2a16910039c51235e8eecb0a2b3",
".git/logs/refs/remotes/origin/master": "81d33f7d2d634ac46b4142bd0e010b48",
".git/logs/refs/remotes/origin/main": "2704c3d59b0f95cf4568514dec113b0d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "19e3ea5a9b8d36fe297127603366ae4a",
".git/refs/remotes/origin/master": "19e3ea5a9b8d36fe297127603366ae4a",
".git/refs/remotes/origin/main": "07bf7377b27539d98590a6ddc963aebc",
".git/index": "fa757a7e52c3195354be1d4d3144759d",
".git/COMMIT_EDITMSG": "c1ef006f7bea83715f5090ef22b7bddd",
".git/FETCH_HEAD": "8f871eebd1d445156c4008544fa91b2b",
".git/sourcetreeconfig": "4c01f1c02ee67cf72f26338ec958cc72",
"assets/asset/medium.svg": "a3fddd3f76b8e65bf3f1eecaa7eed64e",
"assets/asset/github.svg": "422b45f9b735da46e17e8cfdb7328071",
"assets/asset/instagram.svg": "be758ca61a2773fe84ad567b72435111",
"assets/asset/ns4.png": "8baff9e592e96a85e241134c08fe4e0b",
"assets/asset/appstore.jpeg": "8307ff32e5ab7fb08db911433faddb8d",
"assets/asset/ns1.png": "737ff574044fb7fb6f456f76c63bc26d",
"assets/asset/s1.png": "2cbe80f98529afee9397075e10a35edf",
"assets/asset/ns2.png": "76ccb88c4d7bda0e4c9dcaa25e7e36d9",
"assets/asset/ns3.png": "6f5fe53b644d5742a46fa1a7c3ec7b23",
"assets/asset/s2.png": "a3b510be9325e59a93763f5f9622fd3c",
"assets/asset/nayla/n6.png": "6c9df32423c7231e3df3bbb2ac6fc0ab",
"assets/asset/nayla/n7.png": "fb92e99553e9c7fe9e7462d804ac5d27",
"assets/asset/nayla/n5.png": "052f6a63d90f4fd51af1cd462545744c",
"assets/asset/nayla/n4.png": "5b1f8449fe2d6b05c6c2cabdbd421dd7",
"assets/asset/nayla/n1.png": "0de00fceb1e858de4e13885000611c9b",
"assets/asset/nayla/n3.png": "18bc011ace26ba0f704e497305e076d6",
"assets/asset/nayla/n2.png": "e4e439a15936a2b7d20c31a1e25ca28b",
"assets/asset/playstore_light.png": "718bb04fac70894aa2f59799726268cb",
"assets/asset/facebook.svg": "eff54484c6ca4707e353acfe1c1e2f3b",
"assets/asset/stackoverflow.svg": "15ebcd4b4cc84e529c618e630f7aa2dc",
"assets/asset/ballonestar/b5.png": "e88fe50808e20edbd65414725b923083",
"assets/asset/ballonestar/b4.png": "2f6182791de1469e501ff6502fec5415",
"assets/asset/ballonestar/b6.png": "33ccc249db65e5440278c5793193267e",
"assets/asset/ballonestar/b7.png": "9e778b098801ca49b043ffa8458105f3",
"assets/asset/ballonestar/b3.png": "53c5e6ec67599d30c83a1b4771b3c817",
"assets/asset/ballonestar/b2.png": "336f19461e40a2891c86ee715b2dd345",
"assets/asset/ballonestar/b1.png": "bc0113c8098e68857c8d374bd5e11a39",
"assets/asset/profile.jpeg": "7f49187996da79b0e1c7043745250d39",
"assets/asset/playstore_dark.png": "1625eac6754f43f236ce79c4b78170ca",
"assets/asset/dhamma/d5.png": "accb99ad65f1003b43c9960c501779d6",
"assets/asset/dhamma/d4.png": "5726976462a33c03dd0205d1d5262e85",
"assets/asset/dhamma/d1.png": "a591752cd21e849f96b5b1ce4dc16521",
"assets/asset/dhamma/d3.png": "78e3c50c3cce962382609d54ab9d2567",
"assets/asset/dhamma/d2.png": "9a0c6b90d4e03d68474af655f19a94aa",
"assets/asset/v1.png": "079d63a9d654786353ff9f17c04eff06",
"assets/asset/v3.png": "d545a2a277d5369070fe3cdc5b0c1829",
"assets/asset/linkedin.svg": "ae2fd1ef72361423ce8734464be77983",
"assets/asset/twitter.svg": "923fdee99bd2e309ddeeb98919a73a56",
"assets/asset/fonts/FiraSans-ExtraBold.ttf": "ab5e89ae3427a97125ae380280b1df7f",
"assets/asset/fonts/FiraSans-SemiBold.ttf": "eb5e811f2fe0408c9d0a552fcf1fb390",
"assets/asset/fonts/FiraSans-Regular.ttf": "50e780b45678ae34cef52d3e5112bd0d",
"assets/asset/google_play.png": "f14fa0f391db4ccc85bae0d6966686f8",
"assets/asset/v2.png": "c52e7a59b017cebee87204c36e173632",
"assets/AssetManifest.json": "3fb582b34eb3f023a649cacd3b251f11",
"assets/NOTICES": "6ff9fa70e3bfa3067dc6b500132221f7",
"assets/FontManifest.json": "25d9d19925765bdc900d8551a3ad99b7",
"assets/AssetManifest.bin.json": "43292193cc3c518458cfe1e66cb5ed83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9d1281ec6fc731b84c822a6951d4e046",
"assets/fonts/MaterialIcons-Regular.otf": "8838ae566bf0d2a03cd194aba47d30ef",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

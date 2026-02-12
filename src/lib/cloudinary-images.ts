/**
 * Central image URLs from Cloudinary. Images are served via links (no local copies).
 * Run upload script when adding new images: npm run upload:cloudinary
 * Then commit src/lib/cloudinary-urls.json (no secrets, only public URLs).
 */

import urlMap from "./cloudinary-urls.json";

type UrlMap = Record<string, string>;

function getUrl(path: string): string {
  return (urlMap as UrlMap)[path] ?? "";
}

// Paths used in the app (key -> path)
const KEY_TO_PATH: Record<string, string> = {
  heroAbout: "herosection/IMG_3218.JPG",
  heroContact: "herosection/IMG_3218.JPG",
  heroImage4: "herosection/IMG_3218.JPG",
  heroImage1: "herosection/IMG_3275.JPG",
  heroAdmission: "herosection/IMG_3275.JPG",
  heroImage2: "herosection/IMG_3249.JPG",
  heroGallery: "herosection/IMG_3249.JPG",
  heroActivities: "herosection/IMG_3249.JPG",
  heroImage3: "herosection/IMG_3237.JPG",
  heroAcademics: "herosection/IMG_3237.JPG",
  heroFacilities: "herosection/IMG_3237.JPG",
  schoolLogo: "__local__", // Use public/school-logo.png (see export below)
  heroCultural: "hero-cultural.jpg",
  heroPlayground: "hero-playground.jpg",
  activitiesArt: "activities-art.jpg",
  activitiesSports: "activities-sports.jpg",
  activitiesAssembly: "activities-assembly.jpg",
  academicsLab: "academics-lab.jpg",
  academicsLibrary: "academics-library.jpg",
  academicsComputer: "academics-computer.jpg",
  img1: "school-image/IMG-20251217-WA0016.jpg",
  img2: "school-image/IMG-20260102-WA0001.jpg",
  img3: "school-image/IMG-20260102-WA0002.jpg",
  img4: "school-image/IMG-20260105-WA0010.jpg",
  img5: "school-image/IMG-20260106-WA0004.jpg",
  img6: "school-image/IMG-20260106-WA0009.jpg",
  img7: "school-image/IMG-20260106-WA0015.jpg",
  img8: "school-image/IMG-20260108-WA0004.jpg",
  img9: "school-image/IMG-20260108-WA0010.jpg",
  img10: "school-image/IMG-20260108-WA0016.jpg",
  img11: "school-image/IMG-20260108-WA0029.jpg",
  img12: "school-image/IMG-20260108-WA0030.jpg",
  img13: "school-image/IMG-20260108-WA0062.jpg",
  img14: "school-image/IMG-20260108-WA0081.jpg",
  img15: "school-image/IMG-20260108-WA0088.jpg",
  img16: "school-image/IMG-20260108-WA0090.jpg",
  img17: "school-image/IMG-20260120-WA0004.jpg",
  img18: "school-image/IMG-20260120-WA0020.jpg",
  img19: "school-image/IMG-20260120-WA0027.jpg",
  img20: "school-image/IMG-20260120-WA0033.jpg",
  img21: "school-image/IMG-20260120-WA0047.jpg",
  img22: "school-image/IMG-20260120-WA0048.jpg",
  img23: "school-image/IMG-20260120-WA0052.jpg",
  img24: "school-image/IMG_20260101_104710.jpg",
  img25: "school-image/IMG_20260102_115833.jpg",
  img26: "school-image/IMG_20260105_104054.jpg",
  img27: "school-image/IMG_20260121_104925.jpg",
  img28: "school-image/IMG_20260121_110052.jpg",
  img29: "school-image/IMG_20260121_110056.jpg",
  img30: "school-image/IMG_20260121_112721.jpg",
  img31: "school-image/IMG_20260121_113304.jpg",
  img32: "school-image/IMG_20260121_113321.jpg",
  img33: "school-image/IMG_20260123_093527.jpg",
  img34: "school-image/IMG_20260123_093831.jpg",
  img35: "school-image/IMG_20260123_094046.jpg",
  img36: "school-image/IMG_20260123_094053.jpg",
  img37: "school-image/IMG_20260123_094113.jpg",
  img38: "school-image/IMG_20260123_094126.jpg",
  img39: "school-image/IMG_20260123_094200.jpg",
  img40: "school-image/IMG_20260123_095812.jpg",
  img41: "school/IMG_2517.jpg",
  img42: "school/IMG_2562.jpg",
  img43: "school/IMG_2570.jpg",
  img44: "school/IMG_2571.jpg",
  img45: "school/IMG_2575.jpg",
  img46: "school/IMG_2582.jpg",
  img47: "school/IMG_2583.jpg",
  img48: "school/IMG_3668.jpg",
  img49: "school/IMG_3674.jpg",
  img50: "school/IMG_3691.jpg",
  img51: "school/IMG_3693.jpg",
  img52: "school/IMG_3697.jpg",
  img53: "school/IMG_3703.jpg",
  img54: "school/IMG_3704.jpg",
  img55: "school/IMG_3712.jpg",
  img56: "activities/1.jpg",
  img57: "activities/2.jpg",
  img58: "activities/4.jpg",
  img59: "activities/6.jpg",
  img60: "activities/IMG_4001.jpg",
  img61: "activities/IMG_4006.jpg",
  img63: "activities/IMG_4044.jpg",
  img64: "activities/IMG_4116.jpg",
  img65: "activities/s1.jpg",
  img66: "activities/s2.jpg",
  img67: "activities/s3.jpg",
  img68: "activities/s6.jpg",
  img69: "activities/s7.jpg",
  img70: "activities/s8.jpg",
  img71: "activities/seed2.jpg",
  img72: "activities/seed3.jpg",
  img73: "activities/WhatsApp_Image_2025-05-21_at_12.29.04_PM_2.jpeg",
  img74: "activities/WhatsApp_Image_2025-05-21_at_12.31.18_PM.jpeg",
  img75: "activities/WhatsApp_Image_2025-05-22_at_9.13.32_AM_3.jpeg",
  img76: "activities/WhatsApp_Image_2025-05-22_at_9.13.32_AM.jpeg",
  img77: "activities/WhatsApp_Image_2026-02-05_at_11.14.18_AM.jpeg",
  img78: "activities/WhatsApp_Image_2026-02-05_at_11.15.08_AM-1.jpeg",
  img79: "activities/WhatsApp_Image_2026-02-05_at_11.15.08_AM.jpeg",
  img80: "activities/WhatsApp_Image_2026-02-05_at_11.23.28_AM.jpeg",
  img81: "activities/WhatsApp_Image_2026-02-05_at_11.23.30_AM.jpeg",
  img82: "activities/WhatsApp_Image_2026-02-05_at_11.23.33_AM.jpeg",
  img83: "activities/WhatsApp_Image_2026-02-05_at_11.23.37_AM.jpeg",
  img84: "activities/WhatsApp_Image_2026-02-05_at_11.54.54_AM.jpeg",
  img85: "activities/WhatsApp_Image_2026-02-05_at_11.55.02_AM.jpeg",
  img86: "activities/WhatsApp_Image_2026-02-05_at_11.55.13_AM.jpeg",
  img87: "activities/WhatsApp_Image_2026-02-10_at_12.37.42_PM-1.jpeg",
  img88: "activities/WhatsApp_Image_2026-02-10_at_12.37.42_PM.jpeg",
  img89: "activities/WhatsApp_Image_2026-02-10_at_12.37.43_PM.jpeg",
  img90: "activities/WhatsApp_Image_2026-02-10_at_12.37.44_PM.jpeg",
  img91: "activities/WhatsApp_Image_2026-02-10_at_12.37.45_PM.jpeg",
  img92: "activities/WhatsApp_Image_2026-02-10_at_12.37.46_PM.jpeg",
  img93: "activities/WhatsApp_Image_2026-02-10_at_12.37.48_PM.jpeg",
  img94: "activities/WhatsApp_Image_2026-02-10_at_12.37.49_PM.jpeg",
  // New Activities images from public/Activities
  img95: "activities/1.jpg",
  img96: "activities/2.jpg",
  img97: "activities/4.jpg",
  img98: "activities/6.jpg",
  img99: "activities/IMG_4001.jpg",
  img100: "activities/IMG_4006.jpg",
  img101: "activities/IMG_4044.jpg",
  img102: "activities/IMG_4116.jpg",
  img103: "activities/WhatsApp_Image_2025_05_21_at_12.29.04_PM_2.jpeg",
  img104: "activities/WhatsApp_Image_2025_05_21_at_12.31.18_PM.jpeg",
  img105: "activities/WhatsApp_Image_2025_05_22_at_9.13.32_AM_3.jpeg",
  img106: "activities/WhatsApp_Image_2025_05_22_at_9.13.32_AM.jpeg",
  img107: "activities/WhatsApp_Image_2026_02_05_at_11.14.18_AM.jpeg",
  img108: "activities/WhatsApp_Image_2026_02_05_at_11.15.08_AM_1.jpeg",
  img109: "activities/WhatsApp_Image_2026_02_05_at_11.15.08_AM.jpeg",
  img110: "activities/WhatsApp_Image_2026_02_05_at_11.23.28_AM.jpeg",
  img111: "activities/WhatsApp_Image_2026_02_05_at_11.23.30_AM.jpeg",
  img112: "activities/WhatsApp_Image_2026_02_05_at_11.23.33_AM.jpeg",
  img113: "activities/WhatsApp_Image_2026_02_05_at_11.23.37_AM.jpeg",
  img114: "activities/WhatsApp_Image_2026_02_05_at_11.54.54_AM.jpeg",
  img115: "activities/WhatsApp_Image_2026_02_05_at_11.55.02_AM.jpeg",
  img116: "activities/WhatsApp_Image_2026_02_05_at_11.55.13_AM.jpeg",
  img117: "activities/WhatsApp_Image_2026_02_10_at_12.37.42_PM_1.jpeg",
  img118: "activities/WhatsApp_Image_2026_02_10_at_12.37.42_PM.jpeg",
  img119: "activities/WhatsApp_Image_2026_02_10_at_12.37.43_PM.jpeg",
  img120: "activities/WhatsApp_Image_2026_02_10_at_12.37.44_PM.jpeg",
  img121: "activities/WhatsApp_Image_2026_02_10_at_12.37.45_PM.jpeg",
  img122: "activities/WhatsApp_Image_2026_02_10_at_12.37.46_PM.jpeg",
  img123: "activities/WhatsApp_Image_2026_02_10_at_12.37.48_PM.jpeg",
  img124: "activities/WhatsApp_Image_2026_02_10_at_12.37.49_PM.jpeg",
  img125: "activities/s1.jpg",
  img126: "activities/s2.jpg",
  img127: "activities/s3.jpg",
  img128: "activities/s6.jpg",
  img129: "activities/s7.jpg",
  img130: "activities/s8.jpg",
  img131: "activities/seed2.jpg",
  img132: "activities/seed3.jpg",
  // Celebrations images
  img133: "celebrations/IMG_3897.jpg",
  img134: "celebrations/WhatsApp_Image_2025_05_22_at_9.13.33_AM_2.jpeg",
  img135: "celebrations/WhatsApp_Image_2025_05_22_at_9.13.33_AM.jpeg",
  img136: "celebrations/WhatsApp_Image_2025_05_22_at_9.13.35_AM.jpeg",
  // Classrooms images
  img137: "classrooms/IMG_3244.jpg",
  img138: "classrooms/IMG_3270.jpg",
  img139: "classrooms/IMG_3273.jpg",
  img140: "classrooms/IMG_3275.jpg",
  img141: "classrooms/IMG_3287.jpg",
  img142: "classrooms/WhatsApp_Image_2025_05_22_at_9.13.25_AM.jpeg",
  img143: "classrooms/WhatsApp_Image_2025_05_22_at_9.13.28_AM_1.jpeg",
};

export const heroAbout = getUrl(KEY_TO_PATH.heroAbout!);
export const heroContact = getUrl(KEY_TO_PATH.heroContact!);
export const heroImage4 = getUrl(KEY_TO_PATH.heroImage4!);
export const heroImage1 = getUrl(KEY_TO_PATH.heroImage1!);
export const heroAdmission = getUrl(KEY_TO_PATH.heroAdmission!);
export const heroImage2 = getUrl(KEY_TO_PATH.heroImage2!);
export const heroGallery = getUrl(KEY_TO_PATH.heroGallery!);
export const heroActivities = getUrl(KEY_TO_PATH.heroActivities!);
export const heroImage3 = getUrl(KEY_TO_PATH.heroImage3!);
export const heroAcademics = getUrl(KEY_TO_PATH.heroAcademics!);
export const heroFacilities = getUrl(KEY_TO_PATH.heroFacilities!);
/** Always use local updated logo from public folder */
export const schoolLogo = "/school-logo.png";
export const heroCultural = getUrl(KEY_TO_PATH.heroCultural!);
export const heroPlayground = getUrl(KEY_TO_PATH.heroPlayground!);
export const activitiesArt = getUrl(KEY_TO_PATH.activitiesArt!);
export const activitiesSports = getUrl(KEY_TO_PATH.activitiesSports!);
export const activitiesAssembly = getUrl(KEY_TO_PATH.activitiesAssembly!);
export const academicsLab = getUrl(KEY_TO_PATH.academicsLab!);
export const academicsLibrary = getUrl(KEY_TO_PATH.academicsLibrary!);
export const academicsComputer = getUrl(KEY_TO_PATH.academicsComputer!);
export const img1 = getUrl(KEY_TO_PATH.img1!);
export const img2 = getUrl(KEY_TO_PATH.img2!);
export const img3 = getUrl(KEY_TO_PATH.img3!);
export const img4 = getUrl(KEY_TO_PATH.img4!);
export const img5 = getUrl(KEY_TO_PATH.img5!);
export const img6 = getUrl(KEY_TO_PATH.img6!);
export const img7 = getUrl(KEY_TO_PATH.img7!);
export const img8 = getUrl(KEY_TO_PATH.img8!);
export const img9 = getUrl(KEY_TO_PATH.img9!);
export const img10 = getUrl(KEY_TO_PATH.img10!);
export const img11 = getUrl(KEY_TO_PATH.img11!);
export const img12 = getUrl(KEY_TO_PATH.img12!);
export const img13 = getUrl(KEY_TO_PATH.img13!);
export const img14 = getUrl(KEY_TO_PATH.img14!);
export const img15 = getUrl(KEY_TO_PATH.img15!);
export const img16 = getUrl(KEY_TO_PATH.img16!);
export const img17 = getUrl(KEY_TO_PATH.img17!);
export const img18 = getUrl(KEY_TO_PATH.img18!);
export const img19 = getUrl(KEY_TO_PATH.img19!);
export const img20 = getUrl(KEY_TO_PATH.img20!);
export const img21 = getUrl(KEY_TO_PATH.img21!);
export const img22 = getUrl(KEY_TO_PATH.img22!);
export const img23 = getUrl(KEY_TO_PATH.img23!);
export const img24 = getUrl(KEY_TO_PATH.img24!);
export const img25 = getUrl(KEY_TO_PATH.img25!);
export const img26 = getUrl(KEY_TO_PATH.img26!);
export const img27 = getUrl(KEY_TO_PATH.img27!);
export const img28 = getUrl(KEY_TO_PATH.img28!);
export const img29 = getUrl(KEY_TO_PATH.img29!);
export const img30 = getUrl(KEY_TO_PATH.img30!);
export const img31 = getUrl(KEY_TO_PATH.img31!);
export const img32 = getUrl(KEY_TO_PATH.img32!);
export const img33 = getUrl(KEY_TO_PATH.img33!);
export const img34 = getUrl(KEY_TO_PATH.img34!);
export const img35 = getUrl(KEY_TO_PATH.img35!);
export const img36 = getUrl(KEY_TO_PATH.img36!);
export const img37 = getUrl(KEY_TO_PATH.img37!);
export const img38 = getUrl(KEY_TO_PATH.img38!);
export const img39 = getUrl(KEY_TO_PATH.img39!);
export const img40 = getUrl(KEY_TO_PATH.img40!);
export const img41 = getUrl(KEY_TO_PATH.img41!);
export const img42 = getUrl(KEY_TO_PATH.img42!);
export const img43 = getUrl(KEY_TO_PATH.img43!);
export const img44 = getUrl(KEY_TO_PATH.img44!);
export const img45 = getUrl(KEY_TO_PATH.img45!);
export const img46 = getUrl(KEY_TO_PATH.img46!);
export const img47 = getUrl(KEY_TO_PATH.img47!);
export const img48 = getUrl(KEY_TO_PATH.img48!);
export const img49 = getUrl(KEY_TO_PATH.img49!);
export const img50 = getUrl(KEY_TO_PATH.img50!);
export const img51 = getUrl(KEY_TO_PATH.img51!);
export const img52 = getUrl(KEY_TO_PATH.img52!);
export const img53 = getUrl(KEY_TO_PATH.img53!);
export const img54 = getUrl(KEY_TO_PATH.img54!);
export const img55 = getUrl(KEY_TO_PATH.img55!);
export const img56 = getUrl(KEY_TO_PATH.img56!);
export const img57 = getUrl(KEY_TO_PATH.img57!);
export const img58 = getUrl(KEY_TO_PATH.img58!);
export const img59 = getUrl(KEY_TO_PATH.img59!);
export const img60 = getUrl(KEY_TO_PATH.img60!);
export const img61 = getUrl(KEY_TO_PATH.img61!);
export const img63 = getUrl(KEY_TO_PATH.img63!);
export const img64 = getUrl(KEY_TO_PATH.img64!);
export const img65 = getUrl(KEY_TO_PATH.img65!);
export const img66 = getUrl(KEY_TO_PATH.img66!);
export const img67 = getUrl(KEY_TO_PATH.img67!);
export const img68 = getUrl(KEY_TO_PATH.img68!);
export const img69 = getUrl(KEY_TO_PATH.img69!);
export const img70 = getUrl(KEY_TO_PATH.img70!);
export const img71 = getUrl(KEY_TO_PATH.img71!);
export const img72 = getUrl(KEY_TO_PATH.img72!);
export const img73 = getUrl(KEY_TO_PATH.img73!);
export const img74 = getUrl(KEY_TO_PATH.img74!);
export const img75 = getUrl(KEY_TO_PATH.img75!);
export const img76 = getUrl(KEY_TO_PATH.img76!);
export const img77 = getUrl(KEY_TO_PATH.img77!);
export const img78 = getUrl(KEY_TO_PATH.img78!);
export const img79 = getUrl(KEY_TO_PATH.img79!);
export const img80 = getUrl(KEY_TO_PATH.img80!);
export const img81 = getUrl(KEY_TO_PATH.img81!);
export const img82 = getUrl(KEY_TO_PATH.img82!);
export const img83 = getUrl(KEY_TO_PATH.img83!);
export const img84 = getUrl(KEY_TO_PATH.img84!);
export const img85 = getUrl(KEY_TO_PATH.img85!);
export const img86 = getUrl(KEY_TO_PATH.img86!);
export const img87 = getUrl(KEY_TO_PATH.img87!);
export const img88 = getUrl(KEY_TO_PATH.img88!);
export const img89 = getUrl(KEY_TO_PATH.img89!);
export const img90 = getUrl(KEY_TO_PATH.img90!);
export const img91 = getUrl(KEY_TO_PATH.img91!);
export const img92 = getUrl(KEY_TO_PATH.img92!);
export const img93 = getUrl(KEY_TO_PATH.img93!);
export const img94 = getUrl(KEY_TO_PATH.img94!);
export const img95 = getUrl(KEY_TO_PATH.img95!);
export const img96 = getUrl(KEY_TO_PATH.img96!);
export const img97 = getUrl(KEY_TO_PATH.img97!);
export const img98 = getUrl(KEY_TO_PATH.img98!);
export const img99 = getUrl(KEY_TO_PATH.img99!);
export const img100 = getUrl(KEY_TO_PATH.img100!);
export const img101 = getUrl(KEY_TO_PATH.img101!);
export const img102 = getUrl(KEY_TO_PATH.img102!);
export const img103 = getUrl(KEY_TO_PATH.img103!);
export const img104 = getUrl(KEY_TO_PATH.img104!);
export const img105 = getUrl(KEY_TO_PATH.img105!);
export const img106 = getUrl(KEY_TO_PATH.img106!);
export const img107 = getUrl(KEY_TO_PATH.img107!);
export const img108 = getUrl(KEY_TO_PATH.img108!);
export const img109 = getUrl(KEY_TO_PATH.img109!);
export const img110 = getUrl(KEY_TO_PATH.img110!);
export const img111 = getUrl(KEY_TO_PATH.img111!);
export const img112 = getUrl(KEY_TO_PATH.img112!);
export const img113 = getUrl(KEY_TO_PATH.img113!);
export const img114 = getUrl(KEY_TO_PATH.img114!);
export const img115 = getUrl(KEY_TO_PATH.img115!);
export const img116 = getUrl(KEY_TO_PATH.img116!);
export const img117 = getUrl(KEY_TO_PATH.img117!);
export const img118 = getUrl(KEY_TO_PATH.img118!);
export const img119 = getUrl(KEY_TO_PATH.img119!);
export const img120 = getUrl(KEY_TO_PATH.img120!);
export const img121 = getUrl(KEY_TO_PATH.img121!);
export const img122 = getUrl(KEY_TO_PATH.img122!);
export const img123 = getUrl(KEY_TO_PATH.img123!);
export const img124 = getUrl(KEY_TO_PATH.img124!);
export const img125 = getUrl(KEY_TO_PATH.img125!);
export const img126 = getUrl(KEY_TO_PATH.img126!);
export const img127 = getUrl(KEY_TO_PATH.img127!);
export const img128 = getUrl(KEY_TO_PATH.img128!);
export const img129 = getUrl(KEY_TO_PATH.img129!);
export const img130 = getUrl(KEY_TO_PATH.img130!);
export const img131 = getUrl(KEY_TO_PATH.img131!);
export const img132 = getUrl(KEY_TO_PATH.img132!);
export const img133 = getUrl(KEY_TO_PATH.img133!);
export const img134 = getUrl(KEY_TO_PATH.img134!);
export const img135 = getUrl(KEY_TO_PATH.img135!);
export const img136 = getUrl(KEY_TO_PATH.img136!);
export const img137 = getUrl(KEY_TO_PATH.img137!);
export const img138 = getUrl(KEY_TO_PATH.img138!);
export const img139 = getUrl(KEY_TO_PATH.img139!);
export const img140 = getUrl(KEY_TO_PATH.img140!);
export const img141 = getUrl(KEY_TO_PATH.img141!);
export const img142 = getUrl(KEY_TO_PATH.img142!);
export const img143 = getUrl(KEY_TO_PATH.img143!);

/** Use for new images: add path to KEY_TO_PATH and export, then run upload script. */
export function getCloudinaryUrl(path: string): string {
  return getUrl(path);
}

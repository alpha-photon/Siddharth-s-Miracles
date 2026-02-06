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

/** Use for new images: add path to KEY_TO_PATH and export, then run upload script. */
export function getCloudinaryUrl(path: string): string {
  return getUrl(path);
}

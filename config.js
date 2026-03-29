/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "심지훈",
    nameEn: "Groom",
    father: "심시영",
    mother: "이미령",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "최지희",
    nameEn: "Bride",
    father: "최흥식",
    mother: "박은진",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-13",
    time: "11:00",
    venue: "더 베일리 하우스 삼성",
    hall: "2026년 6월 13일 토요일 오전 11시",
    address: "서울 강남구 영동대로 506",
    tel: "02-539-2956",
    mapLinks: {
      kakao: "https://place.map.kakao.com/10302690",
      naver: "https://map.naver.com/p/entry/place/520612610?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202603241707&locale=ko&svcName=map_pcv5"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "하나님의 계획하심 아래 만난 저희 두 사람이\n\n이제 하나님이 사랑하시는 부부로 \n첫걸음을 내딛습니다.\n\n앞으로 주님과 동행하며 서로를 아끼고 섬기는\n\n믿음의 가정을 이루어 가는 첫걸음에 함께해 주시면\n\n더없는 기쁨과 감사가 되겠습니다."
  },
  
  // ── 우리의 이야기 ──
  story: {
    title: "",
    content: ""
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "심지훈", bank: "국민은행", number: "029302-04-356694" },
      { role: "아버지", name: "심시영", bank: "국민은행", number: "472902-01-161624" },
      { role: "어머니", name: "이미령", bank: "국민은행", number: "029301-04-056078" }
    ],
    bride: [
      { role: "신부", name: "최지희", bank: "국민은행", number: "279802-04-171568" },
      { role: "아버지", name: "최흥식", bank: "토스뱅크", number: "1000-0377-3196" },
      { role: "어머니", name: "박은진", bank: "국민은행", number: "279801-04-074590" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "심지훈 ♥ 최지희 결혼합니다",
    description: "2026년 6월 13일, 소중한 분들을 초대합니다."
  }
};

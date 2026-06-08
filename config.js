/**
 * Pastel Dream Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "박종현",
    nameEn: "Jonghyun",
    father: "박봉규",
    mother: "오영옥",
    fatherDeceased: false,
    motherDeceased: true
  },

  bride: {
    name: "안지수",
    nameEn: "JISU",
    father: "안오영",
    mother: "김애경",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-29",
    time: "16:00",
    venue: "🤍더마레보 호텔🤍",
    hall: "단독홀 15층",
    address: "경기도 수원시 영통구 봉영로 1591",
    tel: "031-202-3773"
	
  },

  // ── 인사말 ──
  greeting: {
    title: "",
    content: ""
  },

  // ── 우리의 이야기 ──
  story: {
    title: "",
    content: ""
  },

  // ── 오시는 길 ──
  mapLinks: {
    kakao: "https://kko.to/1HTTRW65cP",
    naver: "https://map.naver.com/p/entry/place/1793402353?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202606071941&locale=ko&svcName=map_pcv5"
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "박종현", bank: "농협은행", number: "352-0518-6653-13" },
      { role: "아버지", name: "박봉규", bank: "국민은행", number: "801-210827-421" }
    ],
    bride: [
      { role: "신부", name: "안지수", bank: "카카오뱅크", number: "3333-21-2689511" },
      { role: "아버지", name: "안오영", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "김애경", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "지수 ♥ 종현 결혼합니다",
    description: "2026년 8월 29일, 소중한 분들을 초대합니다."
  }
};

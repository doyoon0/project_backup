# 📚 E-commerce Fullstack App - Documentation

프로젝트 문서 통합 관리 인덱스

---

## 📂 문서 구조

```
docs/
├── README.md                           # 📖 이 파일 - 문서 인덱스
│
├── 01-project/                         # 🎯 프로젝트 기획
│   ├── requirements.md                 # 요구사항 정의서
│   ├── screens.md                      # 화면 설계서
│   └── database.md                     # DB 설계서
│
├── 02-setup/                           # ⚙️ 초기 설정
│   ├── github.md                       # GitHub 브랜치 전략
│   ├── initial-setup.md                # 초기 프로젝트 설정
│   └── images/                         # 설정 관련 이미지
│
├── 03-backend/                         # 🔧 백엔드 개발
│   ├── rest-api.md                     # REST API 명세
│   └── database-architecture.md        # 데이터베이스 아키텍처
│
├── 04-frontend/                        # 🎨 프론트엔드 개발
│   ├── components.md                   # 컴포넌트 구조
│   ├── redux.md                        # Redux 상태 관리
│   ├── api-integration.md              # API 연동 가이드
│   └── sns-login/                      # SNS 로그인 구현 상세
│       ├── AUTH_SNS_COMPLETE.md
│       ├── SNS_LOGIN_SETUP_COMPLETE.md
│       └── 프론트 세트 파일/           # SNS 로그인 관련 소스코드
│
├── 05-deployment/                      # 🚀 배포 및 테스트
│   ├── e2e-testing.md                  # E2E 테스트 가이드
│   └── ui-ux-improvements.md           # UI/UX 개선 사항
│
├── migration/                          # 🔄 마이그레이션 기록
│   └── 2025-10-27/                     # 날짜별 마이그레이션
│       ├── react-router-v7-migration.md          # React Router v7 업그레이드
│       ├── react-router-duplicate-fix.md         # 중복 라우터 문제 해결
│       └── brand-logo-migration.md               # 브랜드 로고 이미지 마이그레이션
│
├── guides/                             # 📖 사용자 가이드
│   ├── customer-guide.md               # 고객용 가이드
│   ├── customer-manual.md              # 고객용 매뉴얼
│   └── developer-guide.md              # 개발자 가이드
│
├── presentations/                      # 📊 발표 자료
│   └── 2025-10-27-project-presentation.pptx     # 프로젝트 발표 자료
│
└── [Legacy Folders]                    # ⚠️ 레거시 폴더 (참고용)
    ├── 1 요구사항 분석/
    ├── 2 환경 설정/
    ├── 3 백엔드 개발/
    ├── 4 프론트엔드 개발/
    ├── 5 배포 및 테스트/
    ├── customer/
    └── developer/
```

---

## 🎯 문서 카테고리

### 1️⃣ 프로젝트 기획 (`01-project/`)
프로젝트 초기 기획 및 설계 문서

- **requirements.md**: 프로젝트 요구사항 및 기능 명세
- **screens.md**: 화면별 설계 및 와이어프레임
- **database.md**: 데이터베이스 ERD 및 테이블 설계

### 2️⃣ 초기 설정 (`02-setup/`)
개발 환경 및 협업 도구 설정

- **github.md**: Git 브랜치 전략 (feature, develop, main)
- **initial-setup.md**: Node.js, React, Spring Boot 설정
- **images/**: 설정 가이드 스크린샷

### 3️⃣ 백엔드 개발 (`03-backend/`)
서버 및 API 개발 문서

- **rest-api.md**: REST API 엔드포인트 명세
- **database-architecture.md**: DB 아키텍처 및 최적화

### 4️⃣ 프론트엔드 개발 (`04-frontend/`)
UI/UX 및 클라이언트 개발 문서

- **components.md**: React 컴포넌트 구조 및 역할
- **redux.md**: Redux Toolkit 상태 관리 가이드
- **api-integration.md**: Axios를 통한 API 연동
- **sns-login/**: 카카오, 네이버 소셜 로그인 구현 가이드

### 5️⃣ 배포 및 테스트 (`05-deployment/`)
테스트 및 프로덕션 배포

- **e2e-testing.md**: End-to-End 테스트 전략
- **ui-ux-improvements.md**: 사용자 경험 개선 사항

### 🔄 마이그레이션 (`migration/`)
시스템 업그레이드 및 변경 사항 기록

- **2025-10-27/**: 2025년 10월 27일 작업
  - React Router v7 마이그레이션
  - 중복 라우터 문제 해결
  - 브랜드 로고 이미지 경로 변경

### 📖 가이드 (`guides/`)
사용자별 매뉴얼 및 가이드

- **customer-guide.md**: 일반 사용자 가이드
- **customer-manual.md**: 기능별 상세 매뉴얼
- **developer-guide.md**: 개발자 온보딩 가이드

### 📊 발표 자료 (`presentations/`)
프로젝트 관련 프레젠테이션

- **2025-10-27-project-presentation.pptx**: 데모 리허설 발표 자료

---

## 📝 문서 작성 규칙

### 파일명 규칙
- **소문자 사용**: `kebab-case` 형식 (예: `rest-api.md`, `e2e-testing.md`)
- **날짜 접두사**: 날짜별 문서는 `YYYY-MM-DD-` 형식 (예: `2025-10-27-migration.md`)
- **의미 있는 이름**: 파일명만으로 내용을 파악할 수 있도록

### 폴더 구조
- **2자리 숫자 접두사**: 순서를 나타내는 폴더 (예: `01-project`, `02-setup`)
- **명확한 카테고리**: 역할별로 구분된 폴더 구조
- **중첩 최소화**: 3단계 이상 중첩 지양

### 마크다운 스타일
- **제목**: `#`을 사용한 계층적 구조
- **코드 블록**: 언어를 명시 (````javascript`, ` ```bash`)
- **링크**: 상대 경로 사용 (`[파일명](./path/to/file.md)`)
- **이미지**: `images/` 폴더에 저장

---

## 🔍 주요 문서 빠른 링크

### 시작하기
- [개발 환경 설정](./02-setup/initial-setup.md)
- [GitHub 브랜치 전략](./02-setup/github.md)
- [개발자 가이드](./guides/developer-guide.md)

### 개발
- [REST API 명세](./03-backend/rest-api.md)
- [컴포넌트 구조](./04-frontend/components.md)
- [Redux 가이드](./04-frontend/redux.md)
- [SNS 로그인 구현](./04-frontend/sns-login/)

### 최근 변경사항
- [React Router v7 마이그레이션](./migration/2025-10-27/react-router-v7-migration.md)
- [브랜드 로고 이미지 수정](./migration/2025-10-27/brand-logo-migration.md)

---

## 🆘 문서 관련 문의

문서에 대한 질문이나 개선 제안이 있으시면:
1. GitHub Issues에 등록
2. 프로젝트 팀 채널에 문의
3. 담당자에게 직접 연락

---

## 📅 문서 이력

| 날짜 | 변경 내용 | 작성자 |
|------|-----------|--------|
| 2025-10-27 | 문서 구조 재정비 및 README 작성 | Claude AI |
| 2025-10-27 | React Router v7 마이그레이션 문서 작성 | Claude AI |
| 2025-10-27 | 브랜드 로고 마이그레이션 문서 작성 | Claude AI |

---

## 🏗️ 레거시 폴더 참고

기존 한글 폴더명 문서들은 참고용으로 유지됩니다:
- `1 요구사항 분석/` → `01-project/`로 마이그레이션 권장
- `2 환경 설정/` → `02-setup/`로 마이그레이션 권장
- `3 백엔드 개발/` → `03-backend/`로 마이그레이션 권장
- `4 프론트엔드 개발/` → `04-frontend/`로 마이그레이션 권장
- `5 배포 및 테스트/` → `05-deployment/`로 마이그레이션 권장

**권장 사항**: 향후 문서 업데이트 시 새로운 구조의 폴더를 사용해주세요.

---

**Last Updated**: 2025-10-27
**Maintained by**: Development Team

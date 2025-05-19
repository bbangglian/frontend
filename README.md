# 💡 프론트엔드 빌드 및 개발 환경

본 프로젝트는 **Vue 3 (Composition API)** 기반의 프론트엔드 프로젝트입니다.  
빌드 도구로는 **Vite**를 사용하며, `<script setup>` 방식으로 구성되어 있습니다.

## 📁 주요 기술 스택

- **프레임워크**: Vue 3.5.13
- **상태 관리**: Pinia 3.0.2
- **라우터**: Vue Router 4.5.1
- **번들러**: Vite 6.2.4
- **템플릿 방식**: `<script setup>` (Composition API)
- **CSS 병합**: `cssCodeSplit: false` — 모든 CSS를 단일 파일로 병합

---

## ⚙️ Vite 설정 요약 (`vite.config.js`)

- **ES Module 형식으로 빌드 (`format: 'es'`)**
- **라이브러리 모드로 번들링**
  - 진입점: `src/main.js`
  - 라이브러리 이름: `my-library`
- **CSS 병합**: 모든 CSS를 하나로 통합
- **Sourcemap 비활성화**
- **`index.html`을 entry point로 지정**
- **Node.js 전역 객체와 모듈 폴리필 사용 (`nodePolyfills` 적용)**
- **Buffer 사용을 위한 alias 설정**:
  ```js
  resolve: {
    alias: {
      buffer: 'buffer'
    }
  }

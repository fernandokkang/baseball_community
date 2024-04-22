# 일사만루 - 프로야구 커뮤니티

### 목차

- [1. 프로젝트 소개](#1프로젝트-소개)
- [2. 프로젝트 목표](#2프로젝트-목표)
- [3. 프로젝트 진행기간](#3프로젝트-진행-기간)
- [4. 배포 주소](#4배포-주소)
- [5. 개발 인원 및 역할](#5개발-인원-및-역할)
- [6. 배포 아키텍쳐](#6배포-아키텍쳐)
- [7. 사용 기술](#7skills)
- [8. 개발 일정](#8개발-일정)
- [9. 플로우차트](#9플로우차트flow-chart)
- [10. 데이터베이스 모델링](#10데이터베이스-모델링er-diagram)
- [11. 요구사항 및 기능명세](#11요구사항-및-기능명세)
- [12. API 명세서](#12api-명세서)
- [13. 화면설계서](#13화면설계서)
- [14. 프로젝트 구조](#14프로젝트-구조)
- [15. 개발 회고](#15-개발-회고)

## 1. 프로젝트 소개

현재 국내에서 최고 인기있는 프로스포츠는 프로야구입니다. 경기가 있는 날이면 각종 커뮤니티에서
야구 관련 게시물들이 쏟아집니다. 하지만 경기 기록을 보면서 사용자들끼리 소통을 하는 커뮤니티는 찾아 보기 어렵습니다.
그렇기 때문에 경기 기록을 제공하면서, 기록 작성에도 관여를 할 수 있는 커뮤니티 서비스를 기획하게 되었습니다.

## 2. 프로젝트 목표

1. 프로야구 경기 결과와 함께 선수들의 기록을 제공해준다.
2. 경기 기록을 관리자 뿐만 아니라 사용자들도 작성을 할 수 있다.
3. 각 팀별 게시판을 통해 서로 소통을 할 수 있다.

## 3. 프로젝트 진행 기간

- 2024-03-22 ~ 2024-04-08

## 4. 배포 주소
http://52.78.30.79:8080/login

## 5. 개발 인원 및 역할

## 🙌 안녕하세요.

|                                                                             김의찬                                                                             |                                                                                                                                                               강성훈                                                                                                                                                               |                                                                            정인우                                                                             |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| <img src="https://github.com/jeonginwoo/ormi4th-spring-project/assets/128672362/b87c72ea-4e4e-4600-ac82-32a3a3a7803a" style="width: 100px; height: 100px;"> |                                                                                   <img src="https://github.com/jeonginwoo/ormi4th-spring-project/assets/128672362/8579086c-a504-4e9b-ae15-d51586dc872c" style="width: 100px; height: 100px;">                                                                                   | <img src="https://github.com/jeonginwoo/ormi4th-spring-project/assets/128672362/d084e67e-d4f8-4260-aaa6-5c153ab7aedc" style="width: 100px; height:100px;"> |
|                                                     <a href="https://github.com/euichan0927">🔗 김의찬</a>                                                     |                                                                                                                                      <a href="https://github.com/fernandokkang">🔗 강성훈</a>                                                                                                                                      |                                                     <a href="https://github.com/jeonginwoo">🔗 정인우</a>                                                     |
|               ‣ 요구사항 및 기능 명세<br>‣ API 설계 (API 명세서)<br>‣회원가입 및 로그인 기능 개발<br>‣ 사용자 마이페이지 및 관리자페이지 기능 개발<br>‣ 게시글 조건 검색 기능 개발<br>‣마이페이지 페이징처리 적용               | ‣ 프로야구 관련 ERD 설계 <br>‣프로야구 기록 관련 데이터 수집, 가공 및 처리 <br>‣ UI/UX 디자인 <br>‣ 메인 페이지 <br>‣ 팀 순위 페이지 <br> ‣경기 일정/결과 페이지 <br> ‣선수 기록 및 순위 페이지 <br>‣선수 상세 정보 페이지 <br>  ‣선수 정보 API <br> ‣선수 기록 API <br> ‣팀 정보 API <br> ‣팀 순위 API <br> ‣일정/결과 API <br> ‣투수/타자 라인업 API <br> ‣경기 라인업 등록 페이지 및 라인업 등록 기능 <br> ‣ 프로젝트 배포 및 CI/CD 파이프 라인 구축 <br> |      ‣ 게시판 api 개발<br>‣ 댓글 api 개발<br>‣ 게시글에 댓글 & 답글 적용<br>‣ 게시글, 댓글 좋아요 기능 개발<br>‣ toast ui editor 적용<br>‣ 게시판 페이징처리 적용<br>‣Flow Chart 설계<br>‣개발 일정 기록      |


## 6. 배포 아키텍쳐
### CI/CD
![배포](https://github.com/jeonginwoo/ormi4th-spring-project/assets/128672362/cb894123-8ec4-4d62-818b-de5b0bfc7b19)
-----------
<br>

### Architecture
![아키텍처](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/ff6034bd-4b0c-4c89-9542-238ddaf6a22f)
## 7. Skills

<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=plastic&logo=SpringBoot&logoColor=white"/><img src="https://img.shields.io/badge/SpringSecurity-6DB33F?style=plastic&logo=SpringSecurity&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/Java-3766AB?style=plastic-square&logo=Java&logoColor=white"/><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic-square&logo=JavaScript&logoColor=white"/><img src="https://img.shields.io/badge/HTML5-E34F26?style=plastic-square&logo=HTML5&logoColor=white"/><img src="https://img.shields.io/badge/CSS3-1572B6?style=plastic-square&logo=CSS3&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/IntelliJ IDEA-000000?style=plastic-square&logo=IntelliJ IDEA&logoColor=white"/><img src="https://img.shields.io/badge/Gradle-02303A?style=plastic-square&logo=Gradle&logoColor=white"/><img src="https://img.shields.io/badge/GitHub-181717?style=plastic-square&logo=GitHub&logoColor=white"/><img src="https://img.shields.io/badge/Figma-F24E1E?style=plastic-square&logo=Figma&logoColor=white"/><img src="https://img.shields.io/badge/Docker-2496ED?style=plastic-square&logo=Docker&logoColor=white"/><img src="https://img.shields.io/badge/Discord-5865F2?style=plastic-square&logo=Discord&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=plastic-square&logo=Amazon RDS&logoColor=white"/><img src="https://img.shields.io/badge/MySQL-4479A1?style=plastic-square&logo=MySQL&logoColor=white"/><img src="https://img.shields.io/badge/Spring Data JPA-6DB33F?style=plastic-square&logo=Spring Data JPA&logoColor=white"/><img src="https://img.shields.io/badge/Mybatis-000000?style=plastic-square&logo=Mybatis&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/Windows 10-0078D6?style=plastic-square&logo=Windows 10&logoColor=white"/><img src="https://img.shields.io/badge/Ubuntu-E95420?style=plastic-square&logo=Ubuntu&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=plastic-square&logo=Amazon EC2&logoColor=white"/><img src="https://img.shields.io/badge/Amazon S3-569A31?style=plastic-square&logo=Amazon S3&logoColor=white"/><img src="https://img.shields.io/badge/Amazon CodeDeploy-DD344C?style=plastic-square&logo=Amazon CodeDeploy&logoColor=white"/><img src="https://img.shields.io/badge/Github Actions-2088FF?style=plastic-square&logo=githubactions&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/Toast UI-515CE6?style=plastic-square&logo=Toast UI&logoColor=white"/>


## 8. 개발 일정

![Untitled (2)](https://github.com/ormi3-final-project-team/nolreo_wassup_BE/assets/96004205/c352f447-eb01-4f46-b2e1-7a05ad3a4617)

## 9. 플로우차트(Flow Chart)

![플로우차트](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/df56fb67-dc5f-4f9b-8127-0b7fd13d11b8)

## 10. 데이터베이스 모델링(ER Diagram)

![ERD](https://github.com/jeonginwoo/ormi4th-spring-project/assets/128672362/2d230dff-0378-40fd-bce7-42fa8d298312)


## 11. 요구사항 및 기능명세

![요구사항 및 기능명세](https://github.com/jeonginwoo/ormi4th-spring-project/assets/128672362/edf4602c-e2ed-4dfe-a734-b787b396d47d)


## 12. API 명세서

### Board

| URL                 | HTTP Method | 설명             | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:--------------------|:------------|:---------------|:---------:|:---------:|:--------:|
| '/boards'           | POST        | 게시글 추가         |     ✅     |     ✅     |          |
| '/boards'           | GET         | 게시글 목록 조회      |     ✅     |     ✅     |          |
| '/boards/{boardId}' | GET         | 특정 게시글 조회      |     ✅     |     ✅     |          |
| '/boards/new-board' | GET         | 특정 게시글 생성 및 수정 |     ✅     |     ✅     |          |
| '/boards/search'    | GET         | 게시글 조건 별 검색    |     ✅     |     ✅     |          |
| '/boards/{id}'      | DELETE      | 특정 게시글 삭제      |     ✅     |     ✅     |          |
| '/boards/{id}'      | PUT         | 특정 게시글 수정      |     ✅     |     ✅     |          |

<br>

### Comment

| URL                                      | HTTP Method | 설명    | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:-----------------------------------------|:------------|:------|:---------:|:---------:|:--------:|
| '/boards/{boardId}/comments'             | POST        | 댓글 생성 |     ✅     |     ✅     |          |
| '/boards/{boardId}/comments'             | GET         | 댓글 조회 |     ✅     |     ✅     |          |
| '/boards/{boardId}/comments/{commentId}' | PUT         | 댓글 수정 |     ✅     |     ✅     |          |
| '/boards/{boardId}/comments/{commentId}' | DELETE      | 댓글 삭제 |     ✅     |     ✅     |          |

<br>

### FileApi

| URL             | HTTP Method | 설명          | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:----------------|:------------|:------------|:---------:|:---------:|:--------:|
| '/image-upload' | POST        | 이미지파일 저장    |     ✅     |           |          |
| '/image-upload' | GET         | 이미지 Byte 변환 |     ✅     |           |          |

<br>

### GameResult

| URL           | HTTP Method | 설명    | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:--------------|:------------|:------|:---------:|:---------:|:--------:|
| '/gameresult' | GET         | 경기 결과 |     ✅     |           |          |

<br>

### Index

| URL | HTTP Method | 설명          | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:----|:------------|:------------|:---------:|:---------:|:--------:|
| '/' | GET         | 인덱스 페이지 렌더링 |     ✅     |           |          |

<br>

### Like

| URL                 | HTTP Method | 설명     | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:--------------------|:------------|:-------|:---------:|:---------:|:--------:|
| '/boards/{id}/like' | POST        | 좋아요 추가 |     ✅     |     ✅     |          |
| '/boards/{id}/like' | DELETE      | 좋아요 삭제 |     ✅     |     ✅     |          |

<br>

### LineUp

| URL               | HTTP Method | 설명        | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:------------------|:------------|:----------|:---------:|:---------:|:--------:|
| '/lineup/batter'  | GET         | 타자 라인업 조회 |     ✅     |           |          |
| '/lineup/pitcher' | GET         | 투수 라인업 조회 |     ✅     |           |          |

<br>

### Player

| URL            | HTTP Method | 설명                 | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:---------------|:------------|:-------------------|:---------:|:---------:|:--------:|
| '/player/{id}' | GET         | 특정 선수 조회           |     ✅     |           |          |
| '/player'      | GET         | 팀 선수 목록 조회         |     ✅     |           |          |
| '/player/info' | GET         | 특정 선수 시즌기록 및 정보 조회 |     ✅     |           |          |

<br>

### Record

| URL                          | HTTP Method | 설명             | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:-----------------------------|:------------|:---------------|:---------:|:---------:|:--------:|
| '/record/batter/{playerId}'  | GET         | 특정 타가 기록 조회    |     ✅     |           |          |
| '/record/pitcher/{playerId}' | GET         | 특정 투수 기록 조회    |     ✅     |           |          |
| '/record'                    | GET         | 특정 시즌 선수 기록 조회 |     ✅     |           |          |
| '/record/ranking'            | GET         | 시즌 별 랭킹 조회     |     ✅     |           |          |

<br>

### UserView

| URL                          | HTTP Method | 설명           | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:-----------------------------|:------------|:-------------|:---------:|:---------:|:--------:|
| '/login'                     | GET         | 로그인          |     ✅     |           |          |
| '/login'                     | POST        | 로그인 성공       |     ✅     |           |          |
| '/signup'                    | GET         | 회원가입         |     ✅     |           |          |
| '/addUser'                   | POST        | 회원가입 성공      |     ✅     |           |          |
| '/checkNicknameAvailability' | GET         | 닉네임 중복 검사 확인 |     ✅     |           |          |

<br>

### User

| URL                       | HTTP Method | 설명                  | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:--------------------------|:------------|:--------------------|:---------:|:---------:|:--------:|
| '/mypage'                 | GET         | 사용자 마이페이지 조회        |     ✅     |           |          |
| '/mypage/update/{userId}' | GET         | 사용자 마이페이지 수정 페이지 조회 |     ✅     |           |          |
| '/mypage/update/{userId}' | PUT         | 사용자 마이페이지 정보 수정     |     ✅     |           |          |
| '/mypage/{userId}'        | DELETE      | 사용자 계정삭제            |     ✅     |           |          |
| '/mypage/admin'           | GET         | 관리자 페이지 조회          |     ✅     |           |    ✅     |
| '/mypage/{userId}/admin'  | POST        | 관리자 권한 설정           |     ✅     |           |    ✅     |
| '/logout'                 | GET         | 로그아웃                |     ✅     |           |          |
| '/checkCurrentPassword'   | POST        | 비밀번호 일치 여부 확인       |     ✅     |           |          |

<br>

### Schedule

| URL               | HTTP Method | 설명          | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:------------------|:------------|:------------|:---------:|:---------:|:--------:|
| '/schedule'       | GET         | 월별 경기 일정 조회 |     ✅     |           |          |
| '/schedule/daily' | GET         | 일별 경기 일정 조회 |     ✅     |           |          |

<br>

### ScoreBoard

| URL           | HTTP Method | 설명          | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:--------------|:------------|:------------|:---------:|:---------:|:--------:|
| '/scoreboard' | GET         | 경기결과 점수판 조회 |     ✅     |           |          |

<br>

### Team

| URL     | HTTP Method | 설명      | 로그인 권한 필요 | 작성자 권한 필요 | Admin 권한 |
|:--------|:------------|:--------|:---------:|:---------:|:--------:|
| '/team' | GET         | 팀 정보 조회 |     ✅     |           |          |

<br>

## 13. 화면설계서

|                                                                                                                                           |                                                                                                                                              |
|:------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| 로그인<br/>![로그인](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/f68d815e-ac76-4469-8dd5-fb66879c7a50)                 | 회원가입<br/>![회원가입](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/bea6365b-c146-4b57-9381-626e40b1fd83)                  |
| 홈(경기 없을 때)<br/>![홈](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/4b3b9dcb-d19d-4400-99e1-836dd937581f)            | 홈(경기 있을 때)<br/>![홈(경기 있을 때)](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/6120ebd0-b65d-4fd7-b186-83dfaeee1234) |
| 게시판(KT)<br/>![KT](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/bb9f4a20-fca8-4f61-aad2-6652f6d449e4)              | 게시판(SSG)<br/>![SSG](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/47904e37-7cf8-43d0-aa62-31f9ea562809)               |
| 게시판(NC)<br/>![NC](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/4d5752ae-f25c-4075-95de-8efe62f797dd)              | 게시판(두산)<br/>![두산](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/34f20276-53dd-4727-9f00-f288d3249d30)                 |
| 게시판(KIA)<br/>![KIA](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/7e8863c8-9e76-4a69-ba70-bdd4778aab05)            | 게시판(롯데)<br/>![롯데](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/b8a2c175-4308-4efb-8aeb-4ccc50322cca)                 |
| 게시판(삼성)<br/>![삼성](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/18c562c8-a8f4-45e4-8397-6dcd018ff8e6)              | 게시판(한화)<br/>![한화](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/e45ec601-a641-4222-870b-b1dddd6a4828)                 |
| 게시판(키움)<br/>![키움](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/2286f51c-b921-41ca-b2e8-d07b736693b9)              | 게시판(LG)<br/>![LG](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/03a81133-cf35-492d-9d28-fb063149b237)                 |
| 게시글<br/>![게시글](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/f1ed1832-265e-467e-b396-f6f91baef92e)                 | 마이페이지<br/>![마이페이지](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/92010b54-bed4-49b9-9912-6acb82668f96)                |
| 게시글 등록/수정<br/>![게시글 등록 수정](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/10009eb9-7639-4647-b7e5-f3ae3d451ed2)     | 마이페이지 > 정보 수정<br/>![정보 수정](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/871a1990-3e0d-4bb9-8e75-c10abb5c2496)        |
| 일정/결과 > 기록<br/>![기록](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/e6dab8f9-b922-4f61-83c1-f3b93e3f7240)           | 일정/결과<br/>![일정 결과](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/1692e19c-d6f1-4073-bf26-5d6483c6af1d)                |
| 기록/순위<br/>![기록 순위](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/fa447964-c91a-42cf-8181-f475359b7e12)             | 일정/결과 > 기록 > 라인업 추가<br/>![라인업 추가](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/4cdb889a-1495-4009-99fb-caacd550c7fc) |
| 기록/순위 > 선수 세부정보<br/>![선수 세부정보](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/ca3cece8-c6af-470a-9cf2-eefa0441ca1c) | 관리자 페이지<br/>![관리자 페이지](https://github.com/jeonginwoo/ormi4th-spring-project/assets/96004205/4e81fe48-b05c-4cc9-9085-e712545e464d)            |

## 14. 프로젝트 구조

```text
└─📁src
    ├─📁main
    │  ├─📁java
    │  │  └─📁com
    │  │      └─📁estsoft
    │  │          └─📁springproject
    │  │              │  📄SpringProjectApplication.java
    │  │              │
    │  │              ├─📁aspect
    │  │              │      📄AuthenticationAspect.java
    │  │              │
    │  │              ├─📁config
    │  │              │      📄WebSecurityConfig.java
    │  │              │
    │  │              ├─📁controller
    │  │              │      📄BoardController.java
    │  │              │      📄CommentController.java
    │  │              │      📄FileApiController.java
    │  │              │      📄GameResultController.java
    │  │              │      📄IndexController.java
    │  │              │      📄LikeController.java
    │  │              │      📄LineupController.java
    │  │              │      📄PlayerController.java
    │  │              │      📄RecordController.java
    │  │              │      📄ScheduleController.java
    │  │              │      📄ScoreBoardController.java
    │  │              │      📄TeamController.java
    │  │              │      📄TeamRankingController.java
    │  │              │      📄UserController.java
    │  │              │      📄UserViewController.java
    │  │              │
    │  │              ├─📁domain
    │  │              │  ├─📁dto
    │  │              │  │      📄Batter.java
    │  │              │  │      📄BatterLineup.java
    │  │              │  │      📄BatterRecord.java
    │  │              │  │      📄BatterRecordDetail.java
    │  │              │  │      📄BoardRequest.java
    │  │              │  │      📄BoardResponse.java
    │  │              │  │      📄CommentRequest.java
    │  │              │  │      📄CommentResponse.java
    │  │              │  │      📄GameInfo.java
    │  │              │  │      📄GameResult.java
    │  │              │  │      📄LikeRequest.java
    │  │              │  │      📄LikeResponse.java
    │  │              │  │      📄Pitcher.java
    │  │              │  │      📄PitcherLineup.java
    │  │              │  │      📄PitcherRecord.java
    │  │              │  │      📄PitcherRecordDetail.java
    │  │              │  │      📄PlayerInfo.java
    │  │              │  │      📄Schedule.java
    │  │              │  │      📄ScoreBoard.java
    │  │              │  │      📄Team.java
    │  │              │  │      📄TeamId.java
    │  │              │  │      📄TeamRanking.java
    │  │              │  │      📄TeamRankingDetail.java
    │  │              │  │      📄UserAdminResponse.java
    │  │              │  │      📄UserRequest.java
    │  │              │  │      📄UserResponse.java
    │  │              │  │
    │  │              │  └─📁entity
    │  │              │         📄Board.java
    │  │              │         📄Comment.java
    │  │              │         📄Like.java
    │  │              │         📄LikeId.java
    │  │              │         📄User.java
    │  │              │
    │  │              ├─📁repository
    │  │              │      📄BatterLineupMapper.java
    │  │              │      📄BatterRecordMapper.java
    │  │              │      📄BoardRepository.java
    │  │              │      📄CommentRepository.java
    │  │              │      📄LikeRepository.java
    │  │              │      📄PitcherLineupMapper.java
    │  │              │      📄PitcherRecordMapper.java
    │  │              │      📄PlayerMapper.java
    │  │              │      📄ScheduleMapper.java
    │  │              │      📄ScoreBoardMapper.java
    │  │              │      📄TeamMapper.java
    │  │              │      📄TeamRankingMapper.java
    │  │              │      📄UserRepository.java
    │  │              │
    │  │              └─📁service
    │  │                     📄BoardService.java
    │  │                     📄CommentService.java
    │  │                     📄CustomUserDetails.java
    │  │                     📄GameResultService.java
    │  │                     📄LikeService.java
    │  │                     📄LineupService.java
    │  │                     📄PlayerService.java
    │  │                     📄RecordService.java
    │  │                     📄ScheduleService.java
    │  │                     📄ScoreBoardService.java
    │  │                     📄TeamRankingService.java
    │  │                     📄TeamService.java
    │  │                     📄UserService.java
    │  │
    │  └─📁resources
    │      │  📄application.properties
    │      │  📄data.sql
    │      │  📄mybatis-config.xml
    │      │
    │      ├─📁mappers
    │      │  ├─📁lineup
    │      │  │      📄BatterLineup.xml
    │      │  │      📄PitcherLineup.xml
    │      │  │
    │      │  ├─📁player
    │      │  │      📄Player.xml
    │      │  │
    │      │  ├─📁record
    │      │  │      📄BatterRecord.xml
    │      │  │      📄PitcherRecord.xml
    │      │  │
    │      │  ├─📁schedule
    │      │  │      📄Schedule.xml
    │      │  │
    │      │  ├─📁scoreBoard
    │      │  │      📄scoreBoard.xml
    │      │  │
    │      │  ├─📁team
    │      │  │      📄Team.xml
    │      │  │
    │      │  └─📁teamRanking
    │      │         📄TeamRanking.xml
    │      │
    │      ├─📁static
    │      │  ├─📁css
    │      │  │  │  📄admin.css
    │      │  │  │  📄board.css
    │      │  │  │  📄boardConditionList.css
    │      │  │  │  📄boardCSS.css
    │      │  │  │  📄boardList.css
    │      │  │  │  📄common.css
    │      │  │  │  📄edit.css
    │      │  │  │  📄gameResult.css
    │      │  │  │  📄header.css
    │      │  │  │  📄index.css
    │      │  │  │  📄mypage.css
    │      │  │  │  📄newBoard.css
    │      │  │  │  📄newBoardCSS.css
    │      │  │  │  └─📁player
    │      │  │  │          📄info.css
    │      │  │  └─📁images
    │      │  │      │  📄fenway_park.jpg
    │      │  │      │  📄logo.png
    │      │  │      │  📄santaclara.jpg
    │      │  │      ├─📁catch-phrase
    │      │  │      │      📄KIA.png
    │      │  │      │      📄KT.png
    │      │  │      │      📄LG.png
    │      │  │      │      📄NC.png
    │      │  │      │      📄SSG.png
    │      │  │      │      📄두산.png
    │      │  │      │      📄롯데.png
    │      │  │      │      📄삼성.png
    │      │  │      │      📄키움.png
    │      │  │      │      📄한화.png
    │      │  │      ├─📁character
    │      │  │      │      📄삼성.jpg
    │      │  │      └─📁emblems
    │      │  │          📄kbo.png
    │      │  │          📄KIA.png
    │      │  │          📄KT.png
    │      │  │          📄LG.png
    │      │  │          📄NC.png
    │      │  │          📄SSG.png
    │      │  │          📄두산.png
    │      │  │          📄롯데.png
    │      │  │          📄삼성.png
    │      │  │          📄키움.PNG
    │      │  │          📄한화.png
    │      │  └─📁js
    │      │         📄board.js
    │      │         📄boardEditor.js
    │      │         📄boardViewer.js
    │      │         📄divClick.js
    │      │         📄index_ajax.js
    │      │         📄user.js
    │      │
    │      └─📁templates
    │          │  📄admin.html
    │          │  📄board.html
    │          │  📄boardConditionList.html
    │          │  📄boardList.html
    │          │  📄edit.html
    │          │  📄gameResult.html
    │          │  📄index.html
    │          │  📄newBoard.html
    │          │  📄record.html
    │          │  📄schedule.html
    │          │
    │          ├─📁fragments
    │          │      📄config.html
    │          │      📄footer.html
    │          │      📄head.html
    │          │      📄header.html
    │          │
    │          ├─📁layout
    │          │      📄layout.html
    │          │
    │          ├─📁player
    │          │      📄info.html
    │          │
    │          ├─📁record
    │          │      📄ranking.html
    │          │
    │          ├─📁schedule
    │          │      📄daily.html
    │          │
    │          ├─📁teamRanking
    │                 📄detail.html
    │
    └─📁test
        └─📁java
            └─📁com
                └─📁estsoft
                    └─📁springproject
                            📄SpringProjectApplicationTests.java
```

## 15. 개발 회고
### 👩🏻‍💻 강성훈
#### 전체적으로
```markdown
처음부터 끝까지 믿고 따라와준 팀원들에게 보답하기 위해 책임감을 가지고 프로젝트에 임했습니다. 그래서 그런지 기대에 부응하고자 프로젝트의 내실을 다지기 보다는 사이즈만 키우는 것에 집중해서 겉만 크고 화려한 느낌이 강합니다 하지만 2주동안 진행된 프로젝트에서 이정도 사이즈의 결과물이 나왔다는 점은 너무 만족스럽습니다.
중간에 팀원 한 분이 개인 사정으로 이탈하면서 어려운 점도 있었지만 팀원간 적절한 소통과 업무 분담을 통해 위기를 잘헤쳐나온거 같고,  협업에 있어서 가장 중요한 것은 구성원 각각의 능력치 보다는 소통과 적절한 임무 부여라는 것을 다시 한 번 깨달을 수 있는 기회였습니다.
또, 이번 프로젝트에 확장성 좋은 주제 선정을 하였기 때문에 향후 진행되는 파이널 프로젝트에서 당 프로젝트를 이어서 했으면 좋겠다는 바람이 있습니다.
```


### 👩🏻‍💻 정인우
#### 문제 해결 요소
```
 redirect가 get메소드가 아닌 post, delete와 같은 다른 메소드로 전송되는 등 프로젝트 도중 다양한 에러와 직면했고, 에러를 해결하기 위해 다양하게 고쳐보고 생각해보는 시간이 힘들었지만 그만큼 값진 시간이었습니다. 다음 프로젝트에서 더욱 멀리 나아갈 수 있는 원동력을 얻었다고 생각합니다.
```

#### Git Issues, Git Project
```
 github의 다양한 기능들을 사용해보는 기회가 되었습니다. Git Issues, Git Projects와 같은 페이지를 적극적으로 활용해서 팀원들의 진행 상황을 알기 좋았고, 브랜치 전략을 통해 훨씬 더 효율적인 협업을 이룰 수 있었습니다.
```

#### 마지막으로
```
 팀원의 중요성에 대해서 깊게 이해할 수 있었습니다. 프로젝트 도중 예기치않은 사정으로 팀원 한명이 나가게 되었는데, 후반부로 갈 수록 빈자리가 크게 느껴졌습니다. 그래도 남은 팀원들과 함께 각자 맡은 역할에 충실하고 서로에 대한 믿음이 있었기 때문에 만족스러운 결과가 나왔다고 생각합니다. 누구보다 열심히 하는 모습을 보여준 팀장님 또한 많은 동기부여가 되었습니다.
```

### 👩🏻‍💻 김의찬
#### 깃허브 워크플로우를 이용한 프로젝트
```
 팀 프로젝트를 진행하면서 깃허브를 이용한 협업을 경험했습니다. 이 과정에서 이슈를 생성하고 해당하는 브랜치를 만들어 기능 개발과 버그 수정을 수행하고, PR을 통해 Merge하는 깃허브 워크플로우를 따르면서 프로젝트의 진행 상황과 방향성을 명확히 파악할 수 있었습니다. 이를 통해 협업의 중요성을 더욱 깨달았으며, 팀원들과의 소통과 코드 리뷰 등 피드백 과정도 중요하다는 것을 인지했습니다.
```

#### 스프링 시큐리티의 중요성
```
 이번 프로젝트에서 스프링 시큐리티를 처음으로 적용해 보았습니다. 시큐리티 설정이 복잡하고 어려움을 겪었는데, 초기 세팅과 시큐리티 설정이 얼마나 중요한지를 몸소 깨달았습니다. 설계를 제대로 하지 않으면 사용자 관련 부분 뿐만 아니라 다른 부분에서도 버그가 발생할 수 있음을 경험적으로 알게 되었습니다.
```
#### 마지막으로
```
 초기에 진행한 인원으로 끝까지 가지 못한점이 아쉬웠습니다. 인원이 감소한 상황이지만 팀원들과의 활발한 소통과 끈기있는 모습으로 프로젝트를 안정적으로 마무리 할 수 있었습니다. 보다 성실한 팀원분들을 만나 한 단계 더 성장하고 팀원의 역할로써도 동기부여 받는 프로젝트 경험이였습니다.
```

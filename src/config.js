const config = {
  // =================<데이터 소스의 인코딩 방식>=============================
  // 기본값은 UTF-8.
  // 만약 중국 사용자라면, 또한 오래된 것을 사용합니다.에디션 Execl 처리 데이터, 저장된 편집사이즈는 GBK일 가능성이 높아 흐트러지면사이즈는 이곳을 GBK로 변경했다.
  // 여기를 수정하는 것을 권장하지 않습니다.자신이 작성한 csv 파일을 제안하는 안입니다.example. csv로 복사하기중. example. csv의 인코딩 형식은 모든 언어를 지원하기 때문입니다.  // Encoding is not recommended to be modified.
  // Instead, it is recommended to copy the contents of the CSV file produced by yourself to example.csv.
  // The encoding format of example.csv is supported by all languages.
  encoding: "UTF-8",

  // 시간 노드당 최대 표시줄목수.
  max_number: 20,

  // 윗부분 추가 정보 표시 여부 제어문자.
  showMessage: true,

  // ==================<시간 자동 정렬>========================================
  // true => 표준일자 형식 사용 (ex：YYYY-MM-DD HH:MM)
  // false => csv 정렬 순서 사용
  // Auto Sort by Time
  // Please ensure using standard datetime format (YYYY-MM-DD HH:MM) when this term is enabled!!!
  auto_sort: true,

  // 시간 포맷
  timeFormat: "%Y-%m",

  // 거꾸로 가기, 가장 짧은 줄이 가장 짧은 곳에 위치하도록 하기위쪽
  reverse: false,

  // 형식 구분 필드 (name이 기본값)
  divide_by: "type",
  // ===============<색상 관련>==================================
  // 색 구분 필드
  divide_color_by: "name",

  // 필드의 색상과 일치하는 값
  // src/colors.js에서도 설정 가능
  color: {
    Chinese: "#1177CC",
    Japanese: "#667788"
  },

  // 사용 색깔 지정(비어있으면 기본설정 사용)
  color_palette: [],

  // 색상 그라데이션: 색상 바인딩 증가율 
  // true-> 모두 같은 색이 됨/
  // false -> divide_color_by와 같은 형태
  changeable_color: true,

  // 추가기능 : 종류별 그라데이션 차이주기(어두운것 -> 밝게)
  // true-> src/color_ranges.js에 따라 변함.
  // false -> color_를 따른다.
  // 구체적인 설정 템플릿이 안보인다면 src/color_ranges.js -> color_ranges.js로 재설정 
  divide_changeable_color_by_type: false,
  color_range: ["#ff7e5f", "#feb47b"],

  // ===============<표시되는 정보관련>==================================
  // left label
  itemLabel: "왼쪽 글자 내용",

  // right label
  typeLabel: "오른쪽 글자 내용",

  // Top item information horizontal location
  item_x: 250,

  // 시간 간격입니다.
  interval_time: 1,

  // 위쪽 텍스트 수준입니다.
  text_y: -50,

  // 오른쪽 가로 좌표
  text_x: 1000,

  // 편향량
  offset: 350,

  // Hide barInfo if bar is shorter than barInfo
  display_barInfo: 0,

  // ==================<Counter>=======================================
  // !!!！타이머와 클래스 사용형 호환 불가, 즉 동시에 열 수 없음！!!!!!
  // counter가 우측 상단에 나타난다.
  //  1위의 지속 시간을 기록하는지 여부
  use_counter: false,
  // 매 시간 노드마다 counter에 대한 보폭을 설정
  // ex. 시간 노드 날짜의 간격입니다1주일(7일)까지 가능하면 step7은 돼야 한다.
  step: 1,

  // ====================<포맷수치>======================================
  // 수치 표시 자릿수
  // -> 주로 중간의 숫자를 수정하여 완성 (숫자가 1인 경우 한자리 소수)
  //  쉼표는 세 자릿수 간격을 의미
  // '.2f' means keeping two decimals.
  format: ",.0f",

  // 접미사
  postfix: "",

// 이게 무슨 짓인지 이해가 안 간다면말, 여기를 수정하지 말 것을 건의합니다.
// 안티 포맷 함수:
// 포맷 작업으로 인해 NaN가 발생할 수 있습니다. 이 함수는 JS로 인식할 수 있는 숫자를 거꾸로 포맷한 값입니다.
  deformat: function (val, postfix) {
    return Number(val.replace(postfix, "").replace(/\,/g, ""));
  },

  // ====================<그래프 설정>======================================
  // 주의, left_margin 왼쪽에 있는 label을 포함하지 않기에 수정변경값이 작으면 왼쪽 label이 표시되지 않는다
  left_margin: 250,
  right_margin: 150,
  top_margin: 180,
  bottom_margin: 0,

  // 시간 탭을 열 지 여부 
  dateLabel_switch: true,
  // 시간 탭 좌표(기본값은 null, null)(이경우 x:1000 y:-50 시작)
  dateLabel_x: null,
  dateLabel_y: null,

  // 평균치보다 큰 줄이 사라지도록 허용할지 여부
  allow_up: false,

  // 모든 항목 업로드 - 반대 사용차트 등 상황으로
  always_up: false,

  // 애니메이션 효과 설정 (중간에 새로 들어오는 항목은 0부터 시작함)
  enter_from_0: true,

  // // 만약 모든 숫자가 너무 크면, 발생합니다.격차를 벌릴 수 없으면 이 상자를 열어서 좌표의 원점을 표시합니다.점 변환(최소값)*2-(최대값)값)
  big_value: true,

  // 반대수 좌표를 사용할지 여부
  use_semilogarithmic_coordinate: false,

  // barinfo가 너무 길다면 true해보기
  long: false,

  // 노드 시작이 지연될 지 여부
  wait: 0,

  // 교환 애니메이션 속도 배율 따로 제어
  update_rate: 1,

  // 등속 애니메이션 효과 켜기
  // animation:'linear',
  showLabel: true,

  // label x 축 위치
  labelx: -10,

  // 이미지 사용 여부
  use_img: false,
  // 이미지 경로, 로컬 이미지 또는 네트워크사진을 올리다.
  // imgs.js에서도 매치 가능사다.
  imgs: {
    항목명: "링크",
    条目:
      "http://i1.hdslb.com/bfs/face/983034448f81f45f05956d0455a86fe0639d6a36.jpg",
    任意名称: "path/to/img"
  },

  // 화면 배경 색
  background_color: "#000",

  // 그래프 막대 테두리 둥글게 할지 여부
  rounded_rectangle: true,

  // x축 선을 보일지 여부
  show_x_tick: true,

  // limit bar info display length
  bar_name_max: 30
};

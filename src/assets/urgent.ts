import { Question } from '../app/model';

export const URGENT_DATA: Question[] = [
  {
    id: 451,
    text: '"Тройной прием Сафара" проводится для:',
    type: 'single',
    options: [
      {
        text: 'восстановления жизнедеятельности пациента',
        correct: false,
      },
      {
        text: 'восстановления проходимости верхних дыхательных путей',
        correct: true,
      },
      {
        text: 'восстановления сознания',
        correct: false,
      },
      {
        text: 'восстановления сердечной деятельности',
        correct: false,
      },
    ],
    explanation:
      'Правильный ответ: восстановления проходимости верхних дыхательных путей',
  },
  {
    id: 452,
    text: 'Антидот, используемый при отравлении метиловым спиртом:',
    type: 'single',
    options: [
      {
        text: 'налоксон',
        correct: false,
      },
      {
        text: 'атропин',
        correct: false,
      },
      {
        text: 'карболен',
        correct: false,
      },
      {
        text: 'этиловый спирт',
        correct: true,
      },
    ],
    explanation: 'Правильный ответ: этиловый спирт',
  },
  {
    id: 453,
    text: 'Ведущие признаки при отравлении алкоголем:',
    type: 'multiple',
    options: [
      {
        text: '"шумное" дыхание',
        correct: true,
      },
      {
        text: 'снижение температуры тела',
        correct: true,
      },
      {
        text: 'сразу повышение, затем падение давления и сердечной деятельности',
        correct: true,
      },
      {
        text: 'цианоз лица и слизистых',
        correct: false,
      },
    ],
    explanation:
      'Правильные ответы: "шумное" дыхание, снижение температуры тела, сразу повышение, затем падение давления и сердечной деятельности',
  },
  {
    id: 454,
    text: 'Ведущие признаки развития анафилактического шока:',
    type: 'multiple',
    options: [
      {
        text: 'нарастающая слабость',
        correct: true,
      },
      {
        text: 'резкое снижение артериального давления',
        correct: true,
      },
      {
        text: 'вынужденное положение с упором рук',
        correct: false,
      },
      {
        text: 'сухость кожи и слизистых',
        correct: false,
      },
    ],
    explanation:
      'Правильные ответы: нарастающая слабость, резкое снижение артериального давления',
  },
  {
    id: 455,
    text: 'Длительность выполнения первой стадии сердечно-легочной реанимации:',
    type: 'multiple',
    options: [
      {
        text: 'не менее 15 минут',
        correct: false,
      },
      {
        text: 'не менее 60 минут',
        correct: false,
      },
      {
        text: 'до появления признаков эффективности реанимационных мероприятий',
        correct: true,
      },
      {
        text: 'при отсутствии признаков эффективности реанимации – не менее 30 минут',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: до появления признаков эффективности реанимационных мероприятий, при отсутствии признаков эффективности реанимации – не менее 30 минут',
  },
  {
    id: 456,
    text: 'Если при снятии ЭКГ установлено, что у пациента фибрилляция желудочков, проводится:',
    type: 'single',
    options: [
      {
        text: 'дефибриляция',
        correct: true,
      },
      {
        text: 'введение преднизолона в вену',
        correct: false,
      },
      {
        text: 'введение доламина',
        correct: false,
      },
      {
        text: 'прекращается реанимация',
        correct: false,
      },
    ],
    explanation: 'Правильный ответ: дефибриляция',
  },
  {
    id: 457,
    text: 'Клинические признаки осложненного острым нарушением мозгового кровообращения (ОНМК) гипертензивного криза:',
    type: 'multiple',
    options: [
      {
        text: 'резкое возбуждение пациента',
        correct: true,
      },
      {
        text: 'инспираторная одышка',
        correct: false,
      },
      {
        text: 'очаговая неврологическая симптоматика (гемипарезы, потеря чувствительности)',
        correct: true,
      },
      {
        text: 'высокие цифры артериального давления',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: резкое возбуждение пациента, очаговая неврологическая симптоматика (гемипарезы, потеря чувствительности), высокие цифры артериального давления',
  },
  {
    id: 458,
    text: 'Наиболее часто встречаемые признаки ботулизма:',
    type: 'multiple',
    options: [
      {
        text: 'парез мягкого неба',
        correct: true,
      },
      {
        text: 'отсутствие диспепсических симптомов',
        correct: false,
      },
      {
        text: 'выраженные нарушения зрения',
        correct: true,
      },
      {
        text: 'выраженные нарушения функции кишечника',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: парез мягкого неба, выраженные нарушения зрения, выраженные нарушения функции кишечника',
  },
  {
    id: 459,
    text: 'Непрямой массаж сердца выполняется путем смещения грудины на глубину:',
    type: 'single',
    options: [
      {
        text: '10-12 см',
        correct: false,
      },
      {
        text: '4-6 см',
        correct: true,
      },
      {
        text: '2-3 см',
        correct: false,
      },
      {
        text: '6-8 см',
        correct: false,
      },
    ],
    explanation: 'Правильный ответ: 4-6 см',
  },
  {
    id: 460,
    text: 'Объем неотложной медицинской помощи при осложненном ОНМК гипертензивном кризе:',
    type: 'multiple',
    options: [
      {
        text: 'каптоприл 50 мг сублингвально',
        correct: true,
      },
      {
        text: 'капельное внутривенное введение нитроглицерина',
        correct: false,
      },
      {
        text: 'внутривенное струйное введение эмоксипина',
        correct: true,
      },
      {
        text: 'внутривенное струйное введение клонидина',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: каптоприл 50 мг сублингвально, внутривенное струйное введение эмоксипина, внутривенное струйное введение клонидина',
  },
  {
    id: 461,
    text: 'Объем неотложной медицинской помощи при гипертензивном кризе, осложненном носовым кровотечением:',
    type: 'multiple',
    options: [
      {
        text: 'положение пациента свесив голову',
        correct: true,
      },
      {
        text: 'положение пациента запрокинув голову',
        correct: false,
      },
      {
        text: 'введение внутривенно 25% магния сульфата 10 мл, 1% фуросемида 2 мл',
        correct: true,
      },
      {
        text: 'передняя тампонада носа с перекисью водорода',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: положение пациента свесив голову, введение внутривенно 25% магния сульфата 10 мл, 1% фуросемида 2 мл, передняя тампонада носа с перекисью водорода',
  },
  {
    id: 462,
    text: 'Объем неотложной медицинской помощи при осложненном острой левожелудочковой сердечной недостаточностью гипертензивном кризе:',
    type: 'multiple',
    options: [
      {
        text: 'положение пациента лежа с приподнятыми ногами',
        correct: false,
      },
      {
        text: 'положение пациента полусыда со свободно опущенными конечностями',
        correct: true,
      },
      {
        text: 'вдыхание кислорода, пропущенного через пеногаситель (70% этиловый спирт)',
        correct: true,
      },
      {
        text: 'введение внутривенно струйно морфина, внутривенно капельно нитроглицерина',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: положение пациента полусыда со свободно опущенными конечностями, вдыхание кислорода, пропущенного через пеногаситель (70% этиловый спирт), введение внутривенно струйно морфина, внутривенно капельно нитроглицерина',
  },
  {
    id: 463,
    text: 'Объем неотложной медицинской помощи при приступе стабильной стенокардии напряжения:',
    type: 'multiple',
    options: [
      {
        text: 'положение пациента полусыда',
        correct: true,
      },
      {
        text: 'положение пациента лежа',
        correct: false,
      },
      {
        text: 'прием антиангинального препарата (нитроглицерин 0,5 мг сублингвально под контролем давления до 3 таблеток (с интервалом 5 минут)',
        correct: true,
      },
      {
        text: 'прием антиагреганта (1/2 таблетки 0,5 г ацетилсалициловой кислоты разжевать и рассосать)',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: положение пациента полусыда, прием антиангинального препарата (нитроглицерин 0,5 мг сублингвально под контролем давления до 3 таблеток (с интервалом 5 минут), прием антиагреганта (1/2 таблетки 0,5 г ацетилсалициловой кислоты разжевать и рассосать)',
  },
  {
    id: 464,
    text: 'Объем оказания неотложной медицинской помощи при анафилактическом шоке:',
    type: 'multiple',
    options: [
      {
        text: 'введение адреналина внутривенно болюсно',
        correct: true,
      },
      {
        text: 'введение преднизолона внутривенно',
        correct: true,
      },
      {
        text: 'введение атропина внутривенно',
        correct: false,
      },
      {
        text: 'капельное введение физраствора',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: введение адреналина внутривенно болюсно, введение преднизолона внутривенно, капельное введение физраствора',
  },
  {
    id: 465,
    text: 'Объем оказания неотложной медицинской помощи при гипертензивном (гипокинетическом) кризе:',
    type: 'multiple',
    options: [
      {
        text: 'положение пациента лежа',
        correct: false,
      },
      {
        text: 'успокаивающие препараты',
        correct: false,
      },
      {
        text: 'каптоприл 25-50 мг под язык',
        correct: true,
      },
      {
        text: 'введение фуросемида',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: каптоприл 25-50 мг под язык, введение фуросемида',
  },
  {
    id: 466,
    text: 'Объем оказания неотложной медицинской помощи при гипертензивном кризе (гиперкинетическом):',
    type: 'multiple',
    options: [
      {
        text: 'положение пациента полусида',
        correct: true,
      },
      {
        text: 'максимальный охранительный режим, используя психотерапевтические и отвлекающие приемы',
        correct: true,
      },
      {
        text: 'введение фуросемида',
        correct: false,
      },
      {
        text: 'введение успокаивающих препаратов',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: положение пациента полусида, максимальный охранительный режим, используя психотерапевтические и отвлекающие приемы, введение успокаивающих препаратов',
  },
  {
    id: 467,
    text: 'Объем оказания неотложной медицинской помощи при кардиогенном шоке:',
    type: 'multiple',
    options: [
      {
        text: 'струйное введение преднизолона 60-150 мг',
        correct: false,
      },
      {
        text: 'капельное введение дофамина',
        correct: true,
      },
      {
        text: 'вдыхание кислорода с пенотасителем',
        correct: true,
      },
      {
        text: 'капельное введение адреналина',
        correct: false,
      },
    ],
    explanation:
      'Правильные ответы: капельное введение дофамина, вдыхание кислорода с пенотасителем',
  },
  {
    id: 468,
    text: 'Объем оказания неотложной медицинской помощи при остром коронарном синдроме:',
    type: 'multiple',
    options: [
      {
        text: 'обеспечить доступ к вене ПВК с постоянным введением физраствора',
        correct: true,
      },
      {
        text: 'введение 1% морфина 1мл внутреннего струйно болюсом',
        correct: true,
      },
      {
        text: 'обязательное проведение тромболитической терапии стрептокиназой',
        correct: false,
      },
      {
        text: 'снятие ЭКГ в динамике',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: обеспечить доступ к вене ПВК с постоянным введением физраствора, введение 1% морфина 1мл внутреннего струйно болюсом, снятие ЭКГ в динамике',
  },
  {
    id: 469,
    text: 'Объем оказания неотложной медицинской помощи при приступе бронхиальной астмы средней тяжести:',
    type: 'multiple',
    options: [
      {
        text: 'вдыхание сальбутамола из карманного ингалятора',
        correct: false,
      },
      {
        text: 'внутривенное капельное введение аминофилина 2,4% из расчета 3-6 мг/кг веса',
        correct: false,
      },
      {
        text: 'внутривенное струйное введение аминофилина 10 мл 2,4%',
        correct: true,
      },
      {
        text: 'внутривенное введение преднизолона 30-60мг',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: внутривенное струйное введение аминофилина 10 мл 2,4%, внутривенное введение преднизолона 30-60мг',
  },
  {
    id: 470,
    text: 'Основные клинические признаки острого коронарного синдрома:',
    type: 'multiple',
    options: [
      {
        text: 'сильная давящая сжимающая боль в сердце длительностью 15 минут',
        correct: false,
      },
      {
        text: 'приступ сжимающей боли возникает при превышении допустимой физической нагрузки',
        correct: false,
      },
      {
        text: 'приступ сжимающей боли в сердце возникает в покое',
        correct: true,
      },
      {
        text: 'приступ не купируется обычным количеством антиангинальных препаратов',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: приступ сжимающей боли в сердце возникает в покое, приступ не купируется обычным количеством антиангинальных препаратов',
  },
  {
    id: 471,
    text: 'Основными клиническими признаками диабетической гиперосмолярной комы являются:',
    type: 'multiple',
    options: [
      {
        text: 'быстрое нарастание комы',
        correct: false,
      },
      {
        text: 'наличие признаков кетоацидоза',
        correct: false,
      },
      {
        text: 'наличие признаков дегидратации',
        correct: true,
      },
      {
        text: 'наличие неврологической и психиатрической симптоматики',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: наличие признаков дегидратации, наличие неврологической и психиатрической симптоматики',
  },
  {
    id: 472,
    text: 'Первая стадия сердечно-легочной и церебральной реанимации по Сафару называется:',
    type: 'single',
    options: [
      {
        text: 'непрямой массаж сердца',
        correct: false,
      },
      {
        text: 'восстановление проходимости верхних дыхательных путей',
        correct: false,
      },
      {
        text: 'элементарное оживление пациента',
        correct: true,
      },
      {
        text: 'проведение ИВЛ',
        correct: false,
      },
    ],
    explanation: 'Правильный ответ: элементарное оживление пациента',
  },
  {
    id: 473,
    text: 'Препаратом выбора при оказании неотложной медицинской помощи при диабетической гипергликемической коме является:',
    type: 'single',
    options: [
      {
        text: 'инсулин короткого действия подкожно согласно дозе',
        correct: false,
      },
      {
        text: 'глюкоза 40% внутривенно струйно',
        correct: false,
      },
      {
        text: 'физиологический раствор 0,9% внутривенно капельно',
        correct: true,
      },
      {
        text: 'сладкое питье',
        correct: false,
      },
    ],
    explanation:
      'Правильный ответ: физиологический раствор 0,9% внутривенно капельно',
  },
  {
    id: 474,
    text: 'Препаратом выбора при оказании неотложной медицинской помощи при гипогликемической коме является:',
    type: 'single',
    options: [
      {
        text: 'инсулин короткого действия подкожно согласно дозе',
        correct: false,
      },
      {
        text: 'глюкоза 40% внутривенно струйно',
        correct: true,
      },
      {
        text: 'физиологический раствор 0,9% внутривенно капельно',
        correct: false,
      },
      {
        text: 'сладкое питье',
        correct: false,
      },
    ],
    explanation: 'Правильный ответ: глюкоза 40% внутривенно струйно',
  },
  {
    id: 475,
    text: 'При выполнении ступени "Д" второй стадии сердечно-легочной реанимации проводится:',
    type: 'single',
    options: [
      {
        text: 'дефибрилляция',
        correct: false,
      },
      {
        text: 'обеспечивается доступ в вену и введение препаратов',
        correct: true,
      },
      {
        text: 'снятие ЭКГ',
        correct: false,
      },
      {
        text: 'снятие ЭЭГ',
        correct: false,
      },
    ],
    explanation:
      'Правильный ответ: обеспечивается доступ в вену и введение препаратов',
  },
  {
    id: 476,
    text: 'При отравлении наркотиками морфинового ряда чаще встречается:',
    type: 'multiple',
    options: [
      {
        text: 'широкий зрачок',
        correct: false,
      },
      {
        text: 'выраженный цианоз',
        correct: true,
      },
      {
        text: 'редкое поверхностное дыхание',
        correct: true,
      },
      {
        text: 'точечный зрачок',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: выраженный цианоз, редкое поверхностное дыхание, точечный зрачок',
  },
  {
    id: 477,
    text: 'При отравлении уксусной эссенцией всегда проводится:',
    type: 'multiple',
    options: [
      {
        text: 'промывание желудка независимо от времени с момента отравления',
        correct: false,
      },
      {
        text: 'промывание желудка только зондовым методом и только сразу после отравления',
        correct: true,
      },
      {
        text: 'обязательное максимальное обезболивание',
        correct: true,
      },
      {
        text: 'введение антидота-щелочи',
        correct: false,
      },
    ],
    explanation:
      'Правильные ответы: промывание желудка только зондовым методом и только сразу после отравления, обязательное максимальное обезболивание',
  },
  {
    id: 478,
    text: 'Признаки клинической смерти:',
    type: 'multiple',
    options: [
      {
        text: 'отсутствие сознания',
        correct: true,
      },
      {
        text: 'отсутствие пульса в типичном месте',
        correct: true,
      },
      {
        text: 'отсутствие дыхания',
        correct: true,
      },
      {
        text: 'феномен «кошачьего зрачка»',
        correct: false,
      },
    ],
    explanation:
      'Правильные ответы: отсутствие сознания, отсутствие пульса в типичном месте, отсутствие дыхания',
  },
  {
    id: 479,
    text: 'Сочетание непрямого массажа сердца и ИВЛ, согласно сердечно-легочной реанимации по Сафару составляет:',
    type: 'multiple',
    options: [
      {
        text: 'при выполнении вдвоем - 5:1',
        correct: true,
      },
      {
        text: 'при выполнении вдвоем - 15:2',
        correct: false,
      },
      {
        text: 'при выполнении одним - 5:1',
        correct: false,
      },
      {
        text: 'при выполнении одним - 15:2',
        correct: true,
      },
    ],
    explanation:
      'Правильные ответы: при выполнении вдвоем - 5:1, при выполнении одним - 15:2',
  },
  {
    id: 480,
    text: 'Точка приложения рук на грудину при выполнении непрямого массажа:',
    type: 'single',
    options: [
      {
        text: 'середина грудины',
        correct: false,
      },
      {
        text: 'на 4 пальца выше мечевидного отростка',
        correct: false,
      },
      {
        text: 'на границе между нижней и средней третью грудины',
        correct: true,
      },
      {
        text: 'в области мечевидного отростка',
        correct: false,
      },
    ],
    explanation:
      'Правильный ответ: на границе между нижней и средней третью грудины',
  },
];

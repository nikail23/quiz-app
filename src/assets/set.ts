import { Question } from '../app/model';

export const SER_DATA: Question[] = [
  {
    id: 671,
    text: 'Определение случая заболевания, относящегося к инфекциям, связанным с оказанием медицинской помощи (ИСМП)',
    type: 'single',
    options: [
      {
        text: 'Инфекционное заболевание, приобретенное пациентом при оказании ему медицинской помощи в ЛПУ',
        correct: true,
      },
      {
        text: 'Заболевание у родителя, госпитализированного с ребенком',
        correct: false,
      },
      { text: 'Инфекция, выявленная при поступлении', correct: false },
      { text: 'Любая внутрибольничная инфекция', correct: false },
    ],
    explanation: 'ИСМП — инфекция, связанная с оказанием медпомощи в ЛПУ.',
  },
  {
    id: 672,
    text: 'Инфекционный контроль это',
    type: 'multiple',
    options: [
      {
        text: 'Система организационных и противоэпидемических мероприятий',
        correct: true,
      },
      { text: 'Программа снижения экономических потерь', correct: false },
      { text: 'Мониторинг санитарных требований', correct: false },
      { text: 'Соблюдение правил безопасности медпомощи', correct: true },
    ],
    explanation:
      'Инфекционный контроль включает профилактику ИСМП и безопасность медперсонала.',
  },
  {
    id: 673,
    text: 'Укажите правильное утверждение',
    type: 'multiple',
    options: [
      {
        text: 'Риск — сочетание вероятности и последствий событий',
        correct: true,
      },
      {
        text: 'Стандартные определения случаев ИСМП обязательны',
        correct: true,
      },
      { text: 'Риск и опасность — одно и то же', correct: false },
      {
        text: 'Стратифицированные показатели учитывают популяцию риска',
        correct: true,
      },
    ],
    explanation: 'Ключевые принципы эпидемиологического надзора за ИСМП.',
  },
  {
    id: 674,
    text: 'Стандартные эпидемиологические определения случая ИСМП',
    type: 'multiple',
    options: [
      { text: 'Набор стандартных диагностических критериев', correct: true },
      { text: 'Обеспечивают сопоставимость данных', correct: true },
      { text: 'Предназначены для клинической диагностики', correct: false },
    ],
    explanation: 'Стандартные определения унифицируют диагностику ИСМП.',
  },
  {
    id: 675,
    text: 'Укажите правильное утверждение',
    type: 'multiple',
    options: [
      {
        text: 'Эпиднадзор должен обеспечивать данные для решений',
        correct: true,
      },
      {
        text: 'Использование стандартных форм для сбора данных',
        correct: true,
      },
      { text: 'Учет факторов риска при сравнении показателей', correct: true },
    ],
    explanation:
      'Эффективный эпиднадзор за ИСМП требует стандартизации и учета рисков.',
  },
  {
    id: 676,
    text: 'Какие из следующих факторов могут привести к небезопасным инъекциям?',
    type: 'multiple',
    options: [
      {
        text: 'Использование одного шприца и разных игл для нескольких пациентов',
        correct: true,
      },
      {
        text: 'Смешивание из оставшихся количеств вакцины из нескольких открытых флаконов или ампул для формирования дополнительной дозы препарата',
        correct: true,
      },
      {
        text: 'Заблаговременное помещение дозы вакцины в шприц с последующим хранением при комнатной температуре или в условиях холодильника до введения пациенту',
        correct: true,
      },
      {
        text: 'Использование одного и того же шприца и иглы для нескольких пациентов',
        correct: true,
      },
      {
        text: 'Использование для проведения инъекции ампул или флаконов с нарушением их целостности',
        correct: true,
      },
    ],
    explanation:
      'Все перечисленные действия нарушают правила асептики и антисептики, что может привести к инфицированию пациентов.',
  },
  {
    id: 677,
    text: 'Что из перечисленного недопустимо в действиях медицинских работников при осуществлении вакцинации?',
    type: 'multiple',
    options: [
      {
        text: 'Заблаговременное помещение дозы вакцины в шприц с последующим хранением при комнатной температуре или в условиях холодильника до введения пациенту',
        correct: true,
      },
      {
        text: 'Повторное замораживание флакона или ампулы с вакциной, для которой предусмотрено инструкцией хранение в условиях необходимых отрицательных температур',
        correct: true,
      },
      {
        text: 'Для взятия последующих доз вакцин оставление иглы в крышке многодозового флакона',
        correct: true,
      },
      {
        text: 'Использование вакцины из многодозового флакона при истечении срока хранения вакцины, предусмотренного инструкцией для вскрытого многодозового флакона',
        correct: true,
      },
    ],
    explanation:
      'Все перечисленные действия нарушают условия хранения и использования вакцин, что может привести к потере их эффективности или созданию риска инфицирования.',
  },
  {
    id: 678,
    text: 'Как долго вирус гепатита С может сохранять свои свойства при комнатной температуре на контаминированных поверхностях?',
    type: 'single',
    options: [
      {
        text: '10 дней',
        correct: false,
      },
      {
        text: '3 недели',
        correct: true,
      },
      {
        text: '3 дня',
        correct: false,
      },
      {
        text: '1 неделя',
        correct: false,
      },
    ],
    explanation:
      'Вирус гепатита С может сохранять инфекционность на поверхностях при комнатной температуре до 3 недель, что подчеркивает важность тщательной дезинфекции.',
  },
  {
    id: 679,
    text: 'Каковы 7 последовательных шагов для безопасной инъекции?',
    type: 'single',
    options: [
      {
        text: 'Чистое рабочее место: стерильное безопасное устройство; стерильный флакон с лекарством и разбавитель; гигиена рук; обеззараживание кожи; надлежащая утилизация острых предметов; управление отходами',
        correct: false,
      },
      {
        text: 'Чистое рабочее место: обеззараживание кожи; стерильное безопасное устройство; стерильный флакон с лекарством и разбавитель; гигиена рук; надлежащая утилизация острых предметов; управление отходами',
        correct: false,
      },
      {
        text: 'Обеззараживание кожи; стерильное безопасное устройство; стерильный флакон с лекарством и разбавитель; гигиена рук; надлежащая утилизация острых предметов; и другое',
        correct: false,
      },
      {
        text: 'Чистое рабочее место: гигиена рук; стерильное безопасное устройство; стерильный флакон с лекарством и разбавитель; обеззараживание кожи; надлежащая утилизация острых предметов; управление отходами',
        correct: true,
      },
    ],
    explanation:
      'Правильная последовательность шагов включает: подготовку рабочего места, гигиену рук, использование стерильного оборудования, обработку кожи, правильную утилизацию и управление отходами.',
  },
  {
    id: 680,
    text: 'Наибольший риск заражения вирусным гепатитом B через контаминированный шприц?',
    type: 'single',
    options: [
      {
        text: '0.3%',
        correct: false,
      },
      {
        text: '13%',
        correct: false,
      },
      {
        text: '30%',
        correct: true,
      },
      {
        text: '7%',
        correct: false,
      },
    ],
    explanation: '',
  },
  {
    id: 681,
    text: 'Что из перечисленного может приводить к реализации инфекционных рисков у медицинских работников при травмах от укола инъекционной иглой?',
    type: 'multiple',
    options: [
      {
        text: 'Надевание колпачка на использованную инъекционную иглу',
        correct: true,
      },
      {
        text: 'Практика повторного применения иглы после инъекции',
        correct: true,
      },
      {
        text: 'Перемещение жидкости между емкостями с помощью шприца и иглы',
        correct: true,
      },
      {
        text: 'Сбрасывание иглы в специальную емкость через иглоотсекатель',
        correct: false,
      },
    ],
  },
  {
    id: 682,
    text: 'Какой из следующих шагов не является критическим для медицинского работника в случае травмы от укола инъекционной иглой?',
    type: 'single',
    options: [
      {
        text: 'Проверка на ВИЧ и гепатиты B и C',
        correct: false,
      },
      {
        text: 'Идентификация пациента-источника',
        correct: false,
      },
      {
        text: 'Немедленное информирование руководителя',
        correct: false,
      },
      {
        text: 'Промывание раны водой',
        correct: false,
      },
      {
        text: 'Воздержание от половых контактов 4-6 месяцев',
        correct: true,
      },
    ],
  },
  {
    id: 683,
    text: 'Что следует сделать при уколе инструментом, использованным для пациента с гепатитом B?',
    type: 'multiple',
    options: [
      {
        text: 'Завершить курс вакцинации независимо от статуса источника',
        correct: true,
      },
      {
        text: 'Обратиться к специалисту для лечения',
        correct: false,
      },
      {
        text: 'Получить первую дозу вакцины немедленно',
        correct: true,
      },
      {
        text: 'Тестирование на антигепатит и АЛТ',
        correct: false,
      },
      {
        text: 'Ввести специфический иммуноглобулин',
        correct: true,
      },
    ],
  },
  {
    id: 684,
    text: 'Какие утверждения соответствуют требованиям законодательства?',
    type: 'multiple',
    options: [
      {
        text: 'Гигиенические нормативы утверждаются Минздравом',
        correct: false,
      },
      {
        text: 'Специфические требования определяются Советом Министров',
        correct: true,
      },
      {
        text: 'Санитарные нормы утверждаются Советом Министров',
        correct: false,
      },
      {
        text: 'Общие требования утверждаются Минздравом',
        correct: false,
      },
      {
        text: 'Санитарные нормы являются частью законодательства',
        correct: true,
      },
      {
        text: 'Санитарные нормы утверждаются Минздравом',
        correct: true,
      },
    ],
  },
  {
    id: 685,
    text: 'Какие вирусные инфекции отнесены к особо опасным?',
    type: 'multiple',
    options: [
      {
        text: 'ВИЧ-инфекция',
        correct: false,
      },
      {
        text: 'Тяжелый острый респираторный синдром',
        correct: false,
      },
      {
        text: 'Бешенство',
        correct: false,
      },
      {
        text: 'Геморрагические лихорадки',
        correct: true,
      },
      {
        text: 'Натуральная оспа',
        correct: false,
      },
      {
        text: 'COVID-19',
        correct: true,
      },
    ],
  },
  {
    id: 686,
    text: 'Какие из следующих действий следует предпринять при сообщении о травме, полученной медицинским работником от укола использованной инъекционной иглой',
    type: 'multiple',
    options: [
      {
        text: 'Сделать запрос о статусе источника BVH, гепатита B и C',
        correct: true,
      },
      {
        text: 'Описать ситуацию, в которой произошел инцидент',
        correct: true,
      },
      {
        text: 'Провести оценку рисков',
        correct: true,
      },
      {
        text: 'Только оказать помощь пострадавшему',
        correct: false,
      },
    ],
    explanation:
      'При травме от укола использованной иглой необходимо оценить риски, запросить информацию о статусе источника инфекции и детально описать инцидент для дальнейших действий.',
  },
  {
    id: 687,
    text: 'Какие из перечисленных бактериальных инфекционных заболеваний отнесены отечественным законодательством к заболеваниям, представляющим опасность для здоровья населения',
    type: 'multiple',
    options: [
      {
        text: 'Дифтерия',
        correct: false,
      },
      {
        text: 'Активный туберкулез органов дыхания',
        correct: false,
      },
      {
        text: 'Чума',
        correct: true,
      },
      {
        text: 'Сибирская язва',
        correct: true,
      },
      {
        text: 'Холера',
        correct: true,
      },
      {
        text: 'Брюшной тиф',
        correct: false,
      },
      {
        text: 'Менингококковая инфекция',
        correct: false,
      },
      {
        text: 'Венерические заболевания (сифилис, гонорея)',
        correct: false,
      },
    ],
    explanation:
      'К заболеваниям, представляющим особую опасность, относятся чума, сибирская язва и холера согласно отечественному законодательству.',
  },
  {
    id: 688,
    text: 'Какое из перечисленных утверждений соответствует действующему определению термина «дезинфекционные мероприятия»',
    type: 'single',
    options: [
      {
        text: 'Мероприятия по борьбе или уничтожению инфекционных агентов на поверхности тела человека или животного, или же в багаже, грузах, контейнерах, перевозочных средствах, товарах и почтовых посылках посредством прямого воздействия химических или физических агентов',
        correct: false,
      },
      {
        text: 'Мероприятия, направленные на уничтожение вегетативных форм микроорганизмов',
        correct: false,
      },
      {
        text: 'Мероприятия, направленные на уничтожение споровых форм микроорганизмов и вирусов',
        correct: false,
      },
      {
        text: 'Мероприятия, направленные на уничтожение переносчиков возбудителей инфекционных заболеваний',
        correct: false,
      },
      {
        text: 'Мероприятия, направленные на уничтожение или сокращение численности возбудителей и переносчиков инфекционных заболеваний',
        correct: true,
      },
    ],
    explanation:
      'Дезинфекционные мероприятия включают действия, направленные на уничтожение или сокращение численности возбудителей и переносчиков инфекционных заболеваний.',
  },
  {
    id: 689,
    text: 'Делинфекционные мероприятия в соответствии с принципами, установленными отечественным законодательством, включают:',
    type: 'single',
    options: [
      {
        text: 'Мероприятия по дератизации',
        correct: false,
      },
      {
        text: 'Дезинфекционные и стерилизационные мероприятия в организации харькового характера',
        correct: false,
      },
      {
        text: 'Мероприятия по дератизации и дезинсекции',
        correct: false,
      },
      {
        text: 'Дезинфекционные, дезинсекционные и дератизационные мероприятия',
        correct: true,
      },
      {
        text: 'Мероприятия по дезинсекции',
        correct: false,
      },
    ],
    explanation:
      'Делинфекционные мероприятия включают дезинфекцию, дезинсекцию и дератизацию согласно законодательству.',
  },
  {
    id: 690,
    text: 'Дезинфекция – это мера в отношении',
    type: 'single',
    options: [
      {
        text: 'Механизма передачи',
        correct: true,
      },
      {
        text: 'Источника инфекции',
        correct: false,
      },
      {
        text: 'Живых переносчиков возбудителей',
        correct: false,
      },
      {
        text: 'Восприимчивых контингентов',
        correct: false,
      },
    ],
    explanation:
      'Дезинфекция направлена на прерывание механизма передачи инфекционных заболеваний.',
  },
  {
    id: 691,
    text: 'Дератизация – это мера в отношении',
    type: 'single',
    options: [
      {
        text: 'Восприимчивых контингентов',
        correct: false,
      },
      {
        text: 'Источника инфекции',
        correct: true,
      },
      {
        text: 'Механизма передачи',
        correct: false,
      },
      {
        text: 'Живых переносников возбудителей',
        correct: false,
      },
    ],
    explanation:
      'Дератизация направлена на уничтожение грызунов как источников инфекции',
  },
  {
    id: 692,
    text: 'Дезинсекция – это мера в отношении',
    type: 'single',
    options: [
      {
        text: 'Живых переносчиков возбудителей',
        correct: false,
      },
      {
        text: 'Восприимчивых контингентов',
        correct: false,
      },
      {
        text: 'Источника инфекции',
        correct: false,
      },
      {
        text: 'Механизма передачи',
        correct: true,
      },
    ],
    explanation:
      'Дезинсекция направлена на уничтожение насекомых - переносчиков инфекций',
  },
  {
    id: 693,
    text: 'Средства дезинфекции',
    type: 'single',
    options: [
      {
        text: 'Должны обладать бактерицидным и спороцидным действием. Допускается применение средств дезинфекции, обладающих останавливающим размножение (статическим) действием',
        correct: false,
      },
      {
        text: 'Должны обладать вирулицидным и (или) бактерицидным, фунгицидным действием. Не допускается применение средств дезинфекции, обладающих останавливающим размножение (статическим) действием',
        correct: false,
      },
      {
        text: 'Должны обладать бактерицидным или фунгицидным действием. Допускается применение средств дезинфекции, обладающих останавливающим размножение (статическим) действием',
        correct: false,
      },
      {
        text: 'Должны обладать бактерицидным и (или) вирулицидным, фунгицидным, спороцидным действием. Не допускается применение средств дезинфекции, обладающих останавливающим размножение (статическим) действием',
        correct: true,
      },
      {
        text: 'Должны обладать бактерицидным или вирулицидным. Допускается применение средств дезинфекции, обладающих останавливающим размножение (статическим) действием',
        correct: false,
      },
    ],
    explanation:
      'Средства дезинфекции должны уничтожать все виды патогенов, а не только останавливать их размножение',
  },
  {
    id: 694,
    text: 'Различают следующие виды дезинфекции',
    type: 'single',
    options: [
      {
        text: 'Профилактическую и очаговую',
        correct: true,
      },
      {
        text: 'Профилактическую и текущую',
        correct: false,
      },
      {
        text: 'Очаговую и заключительную',
        correct: false,
      },
      {
        text: 'Профилактическую и заключительную',
        correct: false,
      },
    ],
    explanation:
      'Основные виды дезинфекции - профилактическая (постоянная) и очаговая (в эпидемическом очаге)',
  },
  {
    id: 695,
    text: 'Отметьте правильные утверждения о дезинфекции',
    type: 'multiple',
    options: [
      {
        text: 'Профилактическая дезинфекция проводится в течение всего периода, пока больной или носитель является источником возбудителя инфекции',
        correct: false,
      },
      {
        text: 'Целью заключительной дезинфекции является уничтожение возбудителей инфекционных заболеваний сразу после их выведения из организма источника в течение всего периода, пока больной или носитель является источником возбудителя инфекции',
        correct: false,
      },
      {
        text: 'Целью заключительной дезинфекции является уничтожение возбудителей инфекционных, оставшихся в очаге жизнеспособном состоянии на различных предметах после удаления источника',
        correct: true,
      },
      {
        text: 'Профилактическая дезинфекция проводится при отсутствии обнаруженного источника возбудителя, но предполагается возможность его наличия',
        correct: true,
      },
      {
        text: 'Целью заключительной дезинфекции является уничтожение возбудителей инфекционных заболеваний сразу после их выведения из организма источника в течение всего периода заболевания',
        correct: false,
      },
    ],
    explanation:
      'Профилактическая дезинфекция проводится для предупреждения возможного заражения, а заключительная - после устранения источника инфекции',
  },
  {
    id: 696,
    text: 'Совокупность способов подавления роста и размножения микроорганизмов на коже и слизистых оболочках человека называется',
    type: 'single',
    options: [
      {
        text: 'Асептикой',
        correct: false,
      },
      {
        text: 'Антисептикой',
        correct: true,
      },
      {
        text: 'Стерилизацией',
        correct: false,
      },
      {
        text: 'Дезинфекцией',
        correct: false,
      },
    ],
    explanation:
      'Антисептика - это комплекс мер по уничтожению микроорганизмов на живых тканях',
  },
  {
    id: 697,
    text: 'Процесс полного уничтожения всех форм микроорганизмов на объектах внешней среды называется',
    type: 'single',
    options: [
      {
        text: 'Антисептикой',
        correct: false,
      },
      {
        text: 'Стерилизацией',
        correct: true,
      },
      {
        text: 'Дезинфекцией',
        correct: false,
      },
      {
        text: 'Асептикой',
        correct: false,
      },
    ],
    explanation:
      'Стерилизация обеспечивает полное уничтожение всех микроорганизмов, включая споры',
  },
  {
    id: 698,
    text: 'Выберите правильные утверждения о гигиене рук',
    type: 'multiple',
    options: [
      {
        text: 'Невыполнение гигиены рук - основная причина распространения инфекций',
        correct: true,
      },
      {
        text: 'Мыло и антисептик должны использоваться одновременно',
        correct: false,
      },
      {
        text: 'Можно не мыть руки при переходе от контаминированного участка к чистому',
        correct: false,
      },
      {
        text: 'Частое мытьё рук с мылом после антисептика может вызвать дерматит',
        correct: true,
      },
      {
        text: 'Несоблюдение техники гигиены рук не влияет на дезинфекцию',
        correct: false,
      },
    ],
    explanation:
      'Гигиена рук - ключевой элемент профилактики ИСМП, но требует правильного выполнения',
  },
  {
    id: 699,
    text: 'Правильные утверждения об использовании перчаток',
    type: 'multiple',
    options: [
      {
        text: 'Одни перчатки можно использовать для нескольких пациентов',
        correct: false,
      },
      {
        text: 'Перчатки не заменяют гигиену рук',
        correct: true,
      },
      {
        text: 'Перчатки обязательны при контакте с биологическими жидкостями',
        correct: true,
      },
      {
        text: 'Перчатки можно не использовать при контакте со слизистыми',
        correct: false,
      },
      {
        text: 'Нужно менять перчатки при переходе от контаминированного участка',
        correct: true,
      },
    ],
    explanation:
      'Перчатки - важное, но не единственное средство защиты, требующее правильного использования',
  },
  {
    id: 700,
    text: 'Когда необходимо выполнять гигиену рук при уходе за пациентом',
    type: 'multiple',
    options: [
      {
        text: 'Перед контактом с инвазивными устройствами',
        correct: true,
      },
      {
        text: 'После контакта с биологическими жидкостями',
        correct: true,
      },
      {
        text: 'После снятия перчаток',
        correct: true,
      },
      {
        text: 'После контакта с оборудованием пациента',
        correct: true,
      },
      {
        text: 'До и после контакта с пациентом',
        correct: true,
      },
    ],
    explanation:
      'Гигиена рук требуется на всех этапах работы с пациентом согласно рекомендациям ВОЗ',
  },
];

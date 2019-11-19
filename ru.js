export default {
  self: 'xroom',
  on: 'вкл.',
  off: 'выкл.',
  title: 'Ищешь конфу?',
  buttons: {
    ok: 'OK',
    yes: 'Да',
    no: 'Нет',
    cancel: 'Отмена',
    retry: 'Повторить',
    chooseWindow: 'Выберите окно',
    wholeScreen: 'Весь экран',
    install: 'Подключить',
    uninstall: 'Отключить',
    send: 'Отправить',
    close: 'Закрыть',
    hide: 'Скрыть',
    knock: 'Тук-тук!',
    allowIn: 'Пустить',
    deny: 'Не пускать',
  },
  mbox: {
    success: 'Операция выполнена',
    failure: 'Операция не удалась',
    enterRoomName: 'Сначала введите имя комнаты',
    isCamOn: 'Камера работает?',
    isCamOnText: 'Проверьте, что камера и микрофон не заблокированы, и нажмите "Повторить".',
    isMicOn: 'Микрофон работает?',
    isMicOnText: 'Если будете говорить, то разрешите доступ к микрофону на этой странице и нажмите "Повторить".',
    iWillOnlyWatch: 'Я хочу просто смотреть',
    iWillOnlyListen: 'Я хочу просто слушать',
    screenSharingText: 'Скриншэринг невозможен. Пожалуйста, проверьте, что он не заблокирован.<br><br>Также необходим современный браузер, например, Chrome или Firefox.',
    cannotFile: 'Поскольку мы не касаемся пользовательских файлов, то и переслать мы их не можем. Вы должны сделать это online, когда кто-нибудь появится в чате.',
    cannotMessage: 'Поскольку мы не касаемся пользовательских сообщений, то и переслать мы их не можем. Вы должны сделать это online, когда кто-нибудь появится в чате.',
    roomLockedText: 'Эта комната закрыта',
    oops: 'Ой',
    kickedOutText: 'Вас удалили из комнаты',
    areYouSure: 'Вы уверены?',
    doYouWantToLeave: 'Вы точно хотите выйти из вебинара?',
    restartRequiredText: 'Эта настройка влияет на много всего, поэтому нам нужно по-быстрому перезагрузить страничку.',
    onlySafariOnIOS: 'На гейфонах необходим Safari. Скажите спасибо Apple.',
    cannotLoadPlugin: 'Плагин "%s" не поддерживается в этом браузере',
    confirmFileSend: 'Отправить это?',
    whatIsYourName: 'Введите новое имя',
    setVideoVolume: 'Громкость для этого видео',
    roomLockedTryKnockText: 'Комната заперта. Вы можете постучать в дверь, чтобы вас пустили.',
    knockingFailedText: 'Не удалось постучаться в дверь',
    doYouWantToKick: 'Вы точно хотите выгнать этого юзера?',
    deviceChanged: 'Было добавлено/убрано устройство ввода. Если оно не работает, зайдите в "Настройки" и выберите его вручную.',
  },
  home: {
    nisdos: 'Мы не используем куки',
    title: 'Твоя видеоконференция на максималках',
    btnGo: 'Поехали!',
    knowMore: 'Об xroom',
    nameRoom: 'назовите комнату:',
    placeholder: 'впишите тут',
    rejoinRoom: 'или перезайти в',
  },
  wl: {
    poweredBy: 'Работает на ',
  },
  pre: {
    checkIt: 'Проверьте причёску и микрофон',
    btnGo: 'Войти',
    knockDenied: 'Ваш запрос отклонён. Вы не можете войти в комнату. :(',
    knockRequested: 'Ожидаем разрешения. Люди внутри видят вас в глазок.',
    noAudio: '⚠️ Микрофон не работает',
  },
  videoMenu: {
    hint: 'Меню',
    expand: 'Расширить',
    fullscreen: 'Во весь экран',
    volume: 'Громкость ±',
    restore: 'Восстановить',
    kick: 'Кикнуть',
  },
  controls: {
    ss: 'Экран %s',
    cam: 'Видео %s',
    mic: 'Звук %s',
    chat: 'Чат %s',
    exit: 'Выйти',
    xroom: 'Работает на xroom',
    settings: 'Настройки',
    plugins: 'Плагины',
  },
  waiting: {
    invite: 'Пригласите собеседников',
    beforeCopy: 'кликните чтобы скопировать',
    afterCopy: 'скопировано!',
    webinar: 'Вебинар ещё не начался',
  },
  video: {
    you: 'Ты',
    someone: 'Кто-то',
    knocking: 'стучится...',
    poorNet: 'плохое соединение',
  },
  chat: {
    fileSending: 'Отправка файла: ',
    fileReceived: 'Получен файл: ',
    inputPlaceholder: 'нажмите enter для отправки ...',
    me: 'я',
    dropMe: 'Дропай файл!',
  },
  webinar: {
    peersCount: '%s людей смотрят',
  },
  settings: {
    experimental: '*) экспериментальная фича, работает нестабильно',
    showCameraWithScreen: 'Камера видна при скриншэринге *',
    qualityLevel: 'Высокое качество (нужен хороший инет)',
    autoGetIn: 'Входить в чат без превью',
    soundEffects: 'Звуковые эффекты',
    noisyBackground: 'Я в шумном месте',
    rtcDebug: 'Отладка RTC',
    audioDevices: 'Аудио источники',
    videoDevices: 'Видео источники',
  },
  plugins: {
    by: 'от',
    size: '%s кБ',
    searchPlaceholder: 'искать...',
    add: {
      title: 'Добавить свой плагин',
      descr: '⚙️ Разрабатываешь плагин? Добавь его здесь для тестирования. Тут он не сохраняется, просто перезагрузив страницу можно выгрузить его из памяти. Документация на API для плагинов доступна <a href="https://github.com/punarinta/xroom-plugins" target="_blank">вот тут</a>.',
      name: 'Как называется плагин?',
      rootUrl: 'Где корневой URL?',
      loaded: 'Урааа! Загрузилось!',
      loadFailed: 'Чо-то пошло не так.',
    }
  },
  feedback: {
    header: 'Ещё секундочку...',
    question: 'Всё было в порядке?',
    videoFroze: 'Нет, видео замерло',
    soundLagged: 'Нет, звук отставал',
    cantConnect: 'Нет, кто-то не смог законнектиться',
    smthElse: 'Другое:',
    feedbackInput: 'то-то и то-то',
    contactMe: 'Свяжитесь со мной пожалуйста:',
    emailInput: 'емэйл...',
  },
  tips: {
    prefix: 'Совет дня: ',
    lines:[
      'Часто включаете/выключаете звук? Попробуйте горячую клавишу "m".',
      'Двойной щелчок мыши по видео, и оно станет на весь экран.',
      'Надо закрыть комнату? Добавьте "Room locking" в плагинах внизу.',
      'Используете Слэк и хотите сэкономить время? Попробуйте нашего <a href="//about.xroom.app/en/library/slack-bot" target="_blank">Слэк-бота</a>.',
      'Не хватает видео в Телеграме? Наш <a href="//about.xroom.app/en/library/telegram-bot" target="_blank">Телеграм-бот</a> поможет вам.',
      'Надо быстро поделиться скопированной картинкой? Ctrl+V в чате, остальное мы сделаем.',
      'Для смены имени кликните по нему. Новое имя увидят все в группе.',
      'Ищете программу для записи экрана в пару кликов? Попробуйте для этого наш плагин.',
    ]
  },
}

var store = [{
        "title": "Об Авторе - Джош Рейджер",
        "excerpt":"               Джош Рейджер - эксперт в области экономики, финансов, аудита и информационных технологий.          В последние годы очень увлечен технологией блокчейн.   Джош Рейджер - уважаемый блокчейн разработчик, криптовалютный аналитик, трейдер и соучредитель BlockRoots, платформы для изучения блокчейна и криптовалюты.   Рейджер также является старшим советником Level и членом Консультативного совета трейдеров Glassnote.   Джош Рэйджер - Текущая работа      BlockRoots, соучредитель;   Level, старший советник;   Glassnode, Консультативный совет трейдеров;   Virgin Pulse, ведущий специалист - Live Services;   RedBrick Health, руководитель - Live Services;   Джош Рэйджер - Образование     Университет Вандербильта,  2006-2007 гг.   Университет Западного Кентукки, бакалавр наук - бакалавр наук, 2003-2006 гг.   ","categories": ["profiles"],
        "tags": [],
        "url": "/ru/profiles/josh-rager/",
        "teaser": "/assets/images/thumbs/500x300.webp"
      },{
        "title": "Verthash Miner 0.7.2 - Скачать, Настройка [2021]",
        "excerpt":"               VerthashMiner: как настроить и запустить, аргументы командной строки.          Полное руководство по настройке Verthashminer версии 0.7.2 и новее.   Скачать для Windows/Linux   Скачать с GitHub       Что такое VerthashMiner?     VerthashMiner – это высокопроизводительный GPU-майнер для алгоритма Verthash. Выпуск прогарммы с открытым исходным кодом стал возможен благодаря проекту Vertcoin и его сообществу. Разработчик: CryptoGraphics. Реализации Stratum, WorkIO и GBT частично основаны на cpuminer-multi и lyclMiner.     Verthash Miner - это официальный майнер для Windows и Linux с открытым исходным кодом без комиссии для разработчиков. Он работает практически на любых видеокартах от AMD, Nvidia и Intel.     Поддерживаемое оборудование      AMD GPU GCN 1.0 или новее.   Видеокарта NVIDIA с вычислительной мощностью 3.0 или новее.   (Для некоторых вычислительных версий могут потребоваться разные сборки майнеров для бэкэнда CUDA. Например, для версии 8.0 требуется CUDA 11.0, что исключает поддержку 3.0.).   Кроме того, майнеру требуется видеокарта с 2 ГБ видеопамяти или выше (зависит от WorkSize параметра).   Поддерживаемые платформы      AMD: OpenCL 1.2+ из драйвера AMD Radeon Software в Windows. AMDGPU-Pro и ROCm в Linux.   NVIDIA: OpenCL 1.2+ и CUDA поддерживаются через проприетарный драйвер.   Mesa Gallium Compute и macOS не поддерживаются.    Как настроить VerthashMiner  \t \t \t \t\tШаг 1 - Скачайте майнер  \t\t Загрузите релиз последней версии с официального VerthashMiner GitHub репозитория.     Зайдите в раздел Релизы на GitHub.      В раскрывающимся списке Assets найдите последнюю версию программы. Извлеките скачанный архив. Лучше использовать WinRAR для извлечения архива.         \t\t \t \t \t \t \t\tШаг 2 - Настройте VerthashMiner  \t\t \t\t После распаковки архива нужно создать новые .bat файлы или отредактировать уже существующие. В этих файлах будет храниться ваша конфигурация запуска программы.       Примечание: для алгоритма Verthash требуется специальный файл - verthash.dat, который может быть получен из внешних источников или сгенерирован майнером с помощью следующей команды:   verthashminer.exe --gen-verthash-data verthash.dat   Поэтому вначале нужно запустить файл generate_verthash_data.bat и дождаться генерации этого файла. Это может занять некоторое время. Файл весит порядка 1.2 ГБ.  Вы увидите надпись в консоли \"This may take a while...\". Дождитесь надписи: \"Verthash data file has been generated!\"        Далее, в той же папке, что и verthashminer.exe, вам нужно будет создать файл с расширением .bat. Вы так же можете просто отредактировать существующий .bat файл.   Если вы хотите создать новый .bat файл, то создайте сначала файл с расширением .txt и измените его на расширение .bat.   Откройте .bat файл с помощью Блокнота или Notepad++ (он удобнее). Ниже приведен пример настройки для пула ZergPool. В него нужно ввести следующие команды:   VerthashMiner -u Vnhysez7nkJh9seeXjQevRjKVJUzxbaNn2 -p c=VTC,mc=VTC -o stratum+tcp://verthash.asia.mine.zergpool.com:4534 --all-cl-devices --all-cu-devices   В самом начале строки находится команда -u Vnhysez7nkJh9seeXjQevRjKVJUzxbaNn2.   Вместо Vnhysez7nkJh9seeXjQevRjKVJUzxbaNn2 просто введите адрес своего Vertcoin кошелька.   Не забудьте указать в .bat файле путь до сгенерированного на этапе выше verthash.dat файла.  Пример: --verthash-data C:\\VerthashMiner\\verthash.dat   Должно получиться следующее (у нас программа находится на диске C):   VerthashMiner -u Vnhysez7nkJh9seeXjQevRjKVJUzxbaNn2 -p c=VTC,mc=VTC -o stratum+tcp://verthash.asia.mine.zergpool.com:4534 --all-cl-devices --all-cu-devices --verthash-data C:\\VerthashMiner\\verthash.dat pause  \t\t \t\t \t \t \t \t \tШаг 3 - Запустите майнер  \t На третьем шаге нужно запустить программу.   Внимание! Не запускайте verthashminer.exe. Вы должны запускать .bat файл.  Именно ваш .bat файл или файл конфигурации передает программе инфомрацию о вашем кошельке и пуле для майнинга.   После запуска майнера в течение нескольких минут, вы увидите окно консоли с хешрейтом:        \t \t  \t \t \t \t \t \t \t \tМайнинг VertCoin (VTC) VertHash на картах 3 и 4 ГБ RX470, RX570 и GTX1060 на Windows и HiveOS  \t \t \t \t подписывайтесь \t     Обратите внимание, что создание файла verthash.dat - трудоемкий процесс и может занять около 10 минут при использовании VerthashMiner на четырехъядерном процессоре Intel Core-i5 6500T с SATA SSD. Хорошей новостью является то, что вам нужно только сгенерировать файл данных, а затем, когда вы запускаете программу с обычными параметрами командной строки, он просто загружает .DAT файл и начинает майнинг.          Майнинг на видеокартах Vertcoin - cпасение для 2 и 3 gb видеокарт  Пример настройки для MiningPoolHub.        &nbsp;   Конфигурационный файл   Все настройки майнера также можно контролировать через файл конфигурации. Как в программе lyclMiner.      Создание файла конфигурации.            Файл конфигурации можно сгенерировать. Создайте файл GenerateConfig.bat в той же папке, что и VerthashMiner.exe, со следующим содержимым:         VerthashMiner -g your_config_file.conf                       (Для Linux) Файл конфигурации можно сгенерировать с помощью следующей команды внутри cmd / terminal: ./VerthashMiner -g your_config_file.conf       Дополнительные замечания:                    Файл конфигурации создается специально для вашего графического процессора и настроек драйвера.           Файл конфигурации должен создаваться заново каждый раз, когда вы добавляете / удаляете новое устройство из / в слот PCIe.                            Если вы хотите использовать видеокарты NVIDIA с бэкэндом OpenCL, когда доступен CUDA, то файл конфигурации должен быть сгенерирован с параметром --no-restrict-cuda.  Пример:  Bat (windows):                 VerthashMiner -g your_config_file.conf --no-restrict-cuda                                  (Linux):                  ./VerthashMiner -g your_config_file.conf --no-restrict-cuda                                                                                   Настройка майнера. Откройте файл your_config_file.conf с помощью любого текстового редактора и отредактируйте поля URL, Username,Password  и CoinbaseAddress(только для соло майнинга) внутри блока Connection. Дополнительные замечания:            Рекомендуется настроить BatchTimeMs и OccupancyPct [параметры] (# Статическая и адаптивная конфигурация WorkSize) для каждого Устройства, чтобы получить лучшую производительность или отзывчивость рабочего стола.           Используйте VerthashMiner -c your_config_file.conf, чтобы начать майнинг.            Альтернатива (Windows). Создайте файл Run.bat в той же папке, что и VerthashMiner.exe, со следующим содержимым:         VerthashMiner -c your_config_file.conf                       Дополнительные замечания:       Чтобы использовать графические процессоры NVIDIA с бэкэндом OpenCL, когда доступен CUDA:         VerthashMiner -c your_config_file.conf --no-restrict-cuda                           Обратите внимание, что в этом случае your_config_file.conf также должен быть сгенерирован с помощью команды --no-restrict-cuda.   Команды и опции   В Verthash Miner доступно множество параметров командной строки.   Если вы хотите попробовать параметры командной строки или вам нужна конкретная опция, вы можете добавить короткую или длинную опцию в любом порядке.) Например, используйте -h или --help   Список доступных команд:   Usage: VerthashMiner [options]  Options: =======  --algo &lt;algorithm&gt;                                 (-a)         Specify the algorithm to use:         - verthash (default)  --url  &lt;address&gt;                                   (-o)         Set URL of mining server in format (address:port).  --user &lt;user&gt;                                      (-u)         Set username for mining server.  --pass &lt;password&gt;                                  (-p)         Set password for mining server.  --cert &lt;File&gt;         Select certificate for mining server using SSL.  --proxy &lt;[PROTOCOL://]HOST[:PORT]&gt;                 (-x)         Connect through a proxy.  --cl-devices &lt;index,index,...&gt;  (-d)         Select specific OpenCL devices from the list, obtained by '-l' command.  --all-cl-devices         Use all available OpenCL devices from the list, obtained by '-l' command.         This options as a priority over per device selection using '--cl-devices'  --cu-devices &lt;index,index,...&gt;  (-D)         Select specific CUDA devices from the list, obtained by '-l' command.  --all-cu-devices         Use all available CUDA devices from the list, obtained by '-l' command.         This options as a priority over per device selection using '--cu-devices'  --retries &lt;N&gt;                                      (-r)         Set number of times to retry if a network call fails.         (default: retry indefinitely)  --retry-pause &lt;N&gt;                                  (-R)         Time to pause between retries, in seconds.         (default: 30)  --timeout &lt;N&gt;                                      (-T)         Timeout for long polling, in seconds.         (default: none)  --scantime &lt;N&gt;                                     (-s)         Upper bound on time spent scanning current work when         long polling is unavailable, in seconds.         (default: 5)  --coinbase-addr &lt;ADDR&gt;         Specify a payout address for solo mining.  --coinbase-sig &lt;text&gt;         Data to insert in the coinbase when possible.  --no-longpoll         Disable long polling support.  --no-redirect         Ignore requests to change the URL of the mining server.  --no-restrict-cuda         Allow to use NVIDIA GPUs on OpenCL platform even if CUDA is available.  --verbose         Enable extra debug output.  --protocol-dump                        (-P)         Cerbose dump of protocol-level activities.  --benchmark         Run in offline benchmark mode.  --config &lt;File&gt;                        (-c)         Load a configuration file.  --gen-conf &lt;File&gt;                      (-g)         Generate a configuration file with pcie bus IDs(if possible) and exit.  --gen-verthash-data &lt;File&gt;         Generate a verthash data file and exit.  --verthash-data &lt;File&gt;                 (-f)         Specify verthash mining data file.  --no-verthash-data_verification         Disable verthash data file verification.  --log-file         Enables logging to file.  --device-list                          (-l)         Print all available device configurations and exit.  --version                              (-v)         Display version information and exit.  --help                                 (-h)         Display this help text and exit.    Исправление проблем   Verthash data file name is invalid   Майнер не видит файл verthash.dat. Вы должны сгенерировать его и указать путь.   Для генерации запустите команду:   VerthashMiner.exe --gen-verthash-data verthash.dat pause   А затем укажите путь до того места, где лежит сгенерированный verthash.dat.   Пример:   --verthash-data C:\\VerthashMiner\\verthash.dat   Miner configuration failed! (Errors: 1, Warnings: 0)   У вас ошибка в файле конфигурации. Проверьте его еще раз на наличие сентаксических ошибок.   Заключение   Благодарю вас, что дочитали до конца. Добавьте мой сайт в закладки в своем браузере. Удачного майнинга.   Версии   0.7.2      Исправлен расчет диапазона одноразовых номеров для GBT.   0.7.1      Изменена формула «Сложность достижения цели» на более надежную.   0.6.2      Удалены старые файлы.       ","categories": ["miners"],
        "tags": [],
        "url": "/ru/miners/verthashminer/",
        "teaser": "/assets/images/thumbs/500x300.webp"
      },{
        "title": "TT Miner 6.1.0 - Скачать, Настройка для KawPow [2021]",
        "excerpt":"               TT-Miner: как настроить и запустить, аргументы командной строки.          Полное руководство по настройке TT Miner версии 6.1.0 и новее.   Скачать для Windows/Linux   Скачать с официального сайта Скачать с GitHub Скачать с Bitcointalk       Что такое TT-Miner?     TT-Miner – это майнер для таких алгоритмов, как KawPow, PROGPOW, ETHASH, ETCHASH, UBQHASH и MTP. TT-Miner так же поддерживает майнинг алгоритма Ethash на Nicehash. Он работает как в Windows, так и для Linux. Видеокарты поддерживаются только Nvidia.     Комиссия разработчика - DevFee составляет 1 минуту для 1 часа майнинга - это около 1,7%, что довольно высоко. Для сравнения, PhoenixMiner имеет комиссию разработчика в размере 0,65%.     Поддерживаемые алгоритмы      PROGPOW (Zano, Sero и EPIC, Veil)   KAWPOW (Raven, Zelantus)   ETHASH (ETH, Music, Callisto и т. д.)   ETCHASH (ETC)   UBQHASH (UBIQ)   MTP (Zcoin, Tecra)   Системные требования   Для работы программы требуется последняя версия среды выполнения C++. Если вы видите отсутствующий файл VCRUNTIME140_1.dll - скачайте пакет Microsoft Visual C++ Redistributable   Майнер поддерживает CUDA 9.2, 10.0, 10.1, 10.2 и 11.0. Если вы хотите убедиться, что TT-Miner использует определенную версию CUDA, добавьте одно из этих значений, если вы не добавите ни одно из них, майнер всегда будет использовать алгоритм для последней версии CUDA.    Как настроить TT-Miner  \t \t \t \t\tШаг 1 - Скачайте майнер  \t\t Загрузите релиз последней версии с официального TT-Miner GitHub репозитория.     Зайдите в раздел Релизы на GitHub.      В раскрывающимся списке Assets найдите последнюю версию. Извлеките скачанный архив. Лучше использовать WinRAR для извлечения архива.         \t\t \t \t \t \t \t\tШаг 2 - Настройте TT-Miner  \t\t \t\t После распаковки архива нужно создать новые .bat файлы или отредактировать уже существующие. В этих файлах будет храниться ваша конфигурация запуска.        Если вы хотите создать новый .bat файл, то создайте сначала файл с расширением .txt и измените его на расширение .bat.   Откройте .bat файл с помощью Блокнота или Notepad++ (он удобнее). Ниже приведен пример настройки для пула Binance Pool. В него нужно ввести следующие команды:   @echo off  :loop  TT-Miner.exe -A ETHASH -P stratum+tcp://username1.worker_name@ethash.poolbinance.com:8888  echo restart miner... goto loop   В самом начале строки находится логин от пула Binance - username1.   Вместо username1 просто введите логин Вашего пула Binance. Этот логин сначала нужно создать на Binance Pool.   \t\t \t\t \t \t \t \t \tШаг 3 - Запустите майнер  \t На третьем шаге нужно запустить программу.   Внимание! Не запускайте ttminer.exe. Вы должны запускать .bat файл.  Именно ваш .bat файл или файл конфигурации передает программе инфомрацию о вашем кошельке и пуле для майнинга.   После запуска майнера в течение пары минут, вы увидите окно консоли с хешрейтом:       \t \t   \t \t \t \t \t \t \t \tНастройка программы ttminer для nvidia и amd (совместимости). ProgPow  \t \t \t \t подписывайтесь \t     &nbsp;   Настройка для Zano        Для майнинга криптовалюты Zano нужно внести в bat файл следующие команды:      TT-Miner.exe - имя запускаемой программы.   PROGPOWZ - название алгоритма добываемой монеты.   ZANO - название токена криптовалюты.   iZ2bZfXdeN626rkyy9YsnfeT1Qq1K6XamE4brWm3tzP5hDUAig4dHmKSqe4yyq5dgbSPjmpLbfidqPyDXAuFY2J9544CBmprtMw2cK7wyQws - адрес цифрового кошелька добываемой монеты.   YOUR_WORKER - имя воркера (можно указать любое).   zano.luckypool.io - адрес пула для майнинга.   8877 - порт пула для майнинга.   Пример:   @echo off  :loop  TT-Miner.exe -A PROGPOWZ -coin ZANO -luck -P stratum1+tcp://iZ2bZfXdeN626rkyy9YsnfeT1Qq1K6XamE4brWm3tzP5hDUAig4dHmKSqe4yyq5dgbSPjmpLbfidqPyDXAuFY2J9544CBmprtMw2cK7wyQws.YOUR_WORKER@zano.luckypool.io:8877   echo restart miner... goto loop   Адрес пула и порт пула смотрите на сайте пула. Адрес цифрового кошелька можно получить на бирже криптовалют, либо установить официальный кошелек добываемой монеты.      Алгоритм PROGPOWZ   Coin ZANO   Адрес пула zano.luckypool.io   PORT: 8877   Кошелек: iZ2bZfXdeN626rkyy9YsnfeT1Qq1K6XamE4brWm3tzP5hDUAig4dHmKSqe4yyq5dgbSPjmpLbfidqPyDXAuFY2J9544CBmprtMw2cK7wyQws            Профит падает. Что майнить? Старые монеты. Zano. Опытные майнеры понимали что такой профит не на вечно.        &nbsp;   Настройка для Ethermine        Как добывать монеты на Ethermine:      TT-Miner.exe - имя запускаемой программы.   ETHASH - название алгоритма добываемой монеты.   0x3aa3e06c47cadef96202d378ab7c407cf46a36a4 - адрес цифрового кошелька добываемой монеты.   eu1.ethermine.org - адрес пула для майнинга.   4444 - порт пула для майнинга.   Пример:   @echo off  :loop  TT-Miner.exe -A ETHASH -P stratum+tcp://0x3aa3e06c47cadef96202d378ab7c407cf46a36a4.ethminer@eu1.ethermine.org:4444   echo restart miner... goto loop   В этом примере мы не использовали команду YOUR_WORKER потому, что она не обязательна для запуска на ethermine.   &nbsp;   Настройка для Nicehash   Пример настройки для Nicehash и криптовалюты Ravencoin        Как добывать монеты на Nicehash:      TT-Miner.exe - имя запускаемой программы.   rvn - название добываемой монеты.   P7qADz69quhfyK5e9kvfno6Jyjq4Rcocx - адрес цифрового кошелька от аккаунта Nicehash.   kawpow.eu.nicehash.com - адрес пула для майнинга Ravencoin.   3385 - порт пула для майнинга.   Пример:   @echo off  :loop  TT-Miner.exe -coin rvn -luck -P P7qADz69quhfyK5e9kvfno6Jyjq4Rcocx.tt@kawpow.eu.nicehash.com:3385  echo restart miner... goto loop   LHR   Эта программа пока не поддерживает возможность разблокировки LHR для видеокарт нового сегмента.          Майнинг Epic Cash + ETC в Hive OS  Учитывайте, что при дуал майнинга падает хешрейт основной монеты.        &nbsp;          Дуал Майнинг TT-MINER  Минус в том, что в момент переключения майнер подменяет DAG файл, что приводит или к отвалу карт или к перезапуску майнера. Вообщем майнить получился даже чуть меньше чем на 1й монете.        &nbsp;   Команды и опции   В TT Miner доступно множество параметров командной строки.   Если вы хотите попробовать параметры командной строки или вам нужна конкретная опция, вы можете добавить короткую или длинную опцию в любом порядке.) Например, используйте -h или --help   Список доступных команд:   -a, -A, -algo\t\tALGONAME\tselect the algorithm to use for mining ETHASH\t\tEthash (ETH, ETC, Music, Callisto, etc) UBQHASH\t\tUbiq version of Ethash (UBIQ) PROGPOW\t\tProgPoW (Sero, Veil) PROGPOWZ\tProgPoWZ (Zano) KAWPOW\t\tKawPoW (Raven) MTP\t\tMTP (Zcoin)   Исправление проблем   Если программа не запускается, проверьте синтаксис bat файла.   Заключение   Благодарю вас, что дочитали до конца. Добавьте мой сайт в закладки в своем браузере. Удачного майнинга.   Версии   6.1.0      новая версия релиза TT, включающая ETCHASH алгоиртм. Тем, кто занимается майнингом ETC, рекомендуется обновить TT.   5.0.3        ","categories": ["miners"],
        "tags": [],
        "url": "/ru/miners/ttminer/",
        "teaser": "/assets/images/thumbs/500x300.webp"
      },{
        "title": "Danila Miner 2.1.4 - Скачать, Настройка для TON [2021]",
        "excerpt":"               Danila Miner: инструкция по запуску TON Miner.          Полное руководство по настройке Danila Miner версии 2.1.4 и новее.   Скачать для Windows/Linux   Скачать с официального сайта Скачать с GitHub       Что такое Danila Miner?     Danila Miner - это популярный майнер для добычи криптовалюты TON от Telegram. Программа имеет закрытый исходный код и работает под Windows, Linux и MacOS. Софт совместим так же с такими платформами для майнинга, как Hive OS и RaveOS.     Системные требования     Процесс майнинга происходит в кэше второго уровня процессора. Это означает, что скорость размер памяти не влияет на  производительность майнинга. Другими словами, все упирается в частоту ядра процессора.     Вы можете добывать TON с помощью видеокарты. Существует версия pow-miner, способная использовать видеокарты Nvidia и AMD. Вы можете найти код, а также инструкции по его использованию в GitHub репозитории POW Miner Tontechio.      Как настроить Danila Miner  \t \t \t \t\tШаг 1 - Скачайте майнер  \t\t Загрузите релиз последней версии с официального Danila Miner сайта.     Зайдите в раздел \"Downloads\" на сайте Ton Whales.      В списке релизов найдите и скачайте последнюю версию для вашей платформы. Извлеките скачанный архив. Лучше использовать WinRAR для извлечения архива.         \t\t \t \t \t \t \t\tШаг 2 - Настройте TON Miner  \t\t \t\t После распаковки архива нужно создать новые .bat файлы или отредактировать уже существующие. В этих файлах будет храниться ваша конфигурация запуска.        Если вы хотите создать новый .bat файл, то создайте сначала файл с расширением .txt и измените его на расширение .bat.   Откройте .bat файл с помощью Блокнота или Notepad++ (он удобнее). Ниже приведен пример настройки для пула Whales pool. В него нужно ввести следующие команды:   danila-miner.exe run https://server1.whalestonpool.com EQDDSuYpiMrpLyWLVWuxtDUS_HFokO8uFU6ph9OMPISHipda :_restart danila-miner.exe run https://server1.whalestonpool.com EQDDSuYpiMrpLyWLVWuxtDUS_HFokO8uFU6ph9OMPISHipda goto _restart    После адреса пула находится адрес кошелька - EQDDSuYpiMrpLyWLVWuxtDUS_HFokO8uFU6ph9OMPISHipda.   Вместо EQDDSuYpiMrpLyWLVWuxtDUS_HFokO8uFU6ph9OMPISHipda просто введите адрес от вашего кошелька TON . Этот кошелек можно получить на официальном сайте TON Wallets.      Вы можете скачать официальный кошелек на свой ПК. Либо вы можете использваоть веб версию (Web Wallet).  Адрес монеты ton для майнера выглядит следующим образом:      Зарегистрируйте адрес вашего кошелька в Телеграм Боте по адресу: https://t.me/WhalesPoolBot.        Нажмите на кнопку \"Запустить\". Вставьте в чат с ботом адерс вашего кошелька, полученный на шаге выше.      Вы увидите надпись: \"Congrats! Now you can use tonpool.\".         \t\t \t\t \t \t \t \t \tШаг 3 - Запустите майнер  \t На третьем шаге нужно запустить программу.   Внимание! Не запускайте danilaminer.exe. Вы должны запускать .bat файл.  Именно ваш .bat файл передает программе информацию о вашем кошельке и пуле для майнинга.   После запуска майнера в течение пары минут, вы увидите окно консоли с хешрейтом:      Вы можете проверить статистику майнинга на пуле. Вставьте свой кошелек TONCOIN: https://tonminingpool.info/.  \t \t    \t \t \t \t \t \t \t \tИнструкция по запуску TON майнера  \t \t \t \t подписывайтесь \t                  Майнинг TONcoin - Реальная доходность и вывод - HiveOS + Windows от А до Я  При разгоне ядра есть отклик! Просто особенность данного майнера в том, что он показывает хешрейт ступенчато. Если для 3080 поставить +100-150, то будет чаще проскакивать значение 4500 и усреднённое значение хешрейта в итоге будет выше!          &nbsp;     Для майнинга TonCoin:          Скачайте и распакуйте майнер:     Введите адрес кошелька от TON.     Запустите run.bat.       Windows:     danila-miner.exe run https://server1.whalestonpool.com &lt;your_wallet&gt;      &nbsp;     Linux и MacOS:     ./danila-miner run https://server1.whalestonpool.com &lt;your_wallet&gt;       Вместо &lt;your_wallet&gt; вы должны вставить адрес вашего кошелька как в примере выше.            Пример настроек:      Настройки   Адрес пула server1.whalestonpool.com   your_wallet Адрес вашего кошелька   danila-miner.exe название запускаемого приложения       &nbsp;                Гайд к Tontechio версии. Как майнить Toncoin? В 4 раза выгоднее ETH? Как запустить на Windows?  Проверить баланс или вывести его можно через Telegram Bot @WhalesPoolBot. Прямо сейчас вы можете вывести только на кошелек, который вы указали при регистрации.          Решение проблем     Майнер не использует видеокарту или не работает     Попробуйте переустановить драйвера на видеокарту. Так же возможно, что ваша видеокарта слишком устарела. При работе с несколькими картами рекомендуется увеличить виртуальную память до 64 ГБ.     Заключение     Благодарю вас, что дочитали до конца. Добавьте мой сайт в закладки в своем браузере. Удачного майнинга.     Версии     2.1.4           ","categories": ["miners"],
        "tags": [],
        "url": "/ru/miners/danilaminer/",
        "teaser": "/assets/images/thumbs/500x300.webp"
      },]

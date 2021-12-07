var store = [{
        "title": "Об Авторе - Джош Рейджер",
        "excerpt":"               Джош Рейджер - эксперт в области экономики, финансов, аудита, бухгалтерского учета и информационных технологий.          В последние годы очень увлечен технологией блокчейн.   Джош Рейджер - уважаемый блокчейн разработчик, криптовалютный аналитик, трейдер и соучредитель BlockRoots, платформы для изучения блокчейна и криптовалюты.   Рейджер также является старшим советником Level и членом Консультативного совета трейдеров Glassnote.   Джош Рэйджер - Текущая работа      BlockRoots, соучредитель;   Level, старший советник;   Glassnode, Консультативный совет трейдеров;   Virgin Pulse, ведущий специалист - Live Services;   RedBrick Health, руководитель - Live Services;   Джош Рэйджер - Образование     Университет Вандербильта,  2006-2007 гг.   Университет Западного Кентукки, бакалавр наук - бакалавр наук, 2003-2006 гг.   ","categories": ["profiles"],
        "tags": [],
        "url": "/ru/profiles/josh-rager/",
        "teaser": "/assets/images/thumbs/500x300.webp"
      },{
        "title": "Verthash Miner 0.7.2 - Скачать, Настройка [2021]",
        "excerpt":"               VerthashMiner: как настроить и запустить, аргументы командной строки.          Полное руководство по настройке Verthashminer версии 0.7.2 и новее.   Скачать для Windows/Linux   Скачать с GitHub       Что такое VerthashMiner?     VerthashMiner – это высокопроизводительный GPU-майнер для алгоритма Verthash. Выпуск прогарммы с открытым исходным кодом стал возможен благодаря проекту Vertcoin и его сообществу. Разработчик: CryptoGraphics. Реализации Stratum, WorkIO и GBT частично основаны на cpuminer-multi и lyclMiner.     Verthash Miner - это официальный майнер для Windows и Linux с открытым исходным кодом без комиссии для разработчиков. Он работает практически на любых видеокартах от AMD, Nvidia и Intel.     Поддерживаемое оборудование      AMD GPU GCN 1.0 или новее.   Видеокарта NVIDIA с вычислительной мощностью 3.0 или новее.   (Для некоторых вычислительных версий могут потребоваться разные сборки майнеров для бэкэнда CUDA. Например, для версии 8.0 требуется CUDA 11.0, что исключает поддержку 3.0.).   Кроме того, майнеру требуется видеокарта с 2 ГБ видеопамяти или выше (зависит от WorkSize параметра).   Поддерживаемые платформы      AMD: OpenCL 1.2+ из драйвера AMD Radeon Software в Windows. AMDGPU-Pro и ROCm в Linux.   NVIDIA: OpenCL 1.2+ и CUDA поддерживаются через проприетарный драйвер.   Mesa Gallium Compute и macOS не поддерживаются.    Как настроить VerthashMiner  \t \t \t \t\tШаг 1 - Скачайте майнер  \t\t Загрузите релиз последней версии с официального VerthashMiner GitHub репозитория.     Зайдите в раздел Релизы на GitHub.      В раскрывающимся списке Assets найдите последнюю версию программы. Извлеките скачанный архив. Лучше использовать WinRAR для извлечения архива.         \t\t \t \t \t \t \t\tШаг 2 - Настройте VerthashMiner  \t\t \t\t После распаковки архива нужно создать новые .bat файлы или отредактировать уже существующие. В этих файлах будет храниться ваша конфигурация запуска программы.       Примечание: для алгоритма Verthash требуется специальный файл - verthash.dat, который может быть получен из внешних источников или сгенерирован майнером с помощью следующей команды:   verthashminer.exe --gen-verthash-data verthash.dat   Поэтому вначале нужно запустить файл generate_verthash_data.bat и дождаться генерации этого файла. Это может занять некоторое время. Файл весит порядка 1.2 ГБ.  Вы увидите надпись в консоли \"This may take a while...\". Дождитесь надписи: \"Verthash data file has been generated!\"        Далее, той же папке, что и verthashminer.exe, вам нужно будет создать файл с расширением .bat. Вы так же можете просто отредактировать существующий .bat файл.   Если вы хотите создать новый .bat файл, то создайте сначала файл с расширением .txt и измените его на расширение .bat.   Откройте .bat файл с помощью Блокнота или Notepad++ (он удобнее). Ниже приведен пример настройки для пула ZergPool. В него нужно ввести следующие команды:   VerthashMiner -u Vnhysez7nkJh9seeXjQevRjKVJUzxbaNn2 -p c=VTC,mc=VTC -o stratum+tcp://verthash.asia.mine.zergpool.com:4534 --all-cl-devices --all-cu-devices   В самом начале строки находится команда -u Vnhysez7nkJh9seeXjQevRjKVJUzxbaNn2.   Вместо Vnhysez7nkJh9seeXjQevRjKVJUzxbaNn2 просто введите адрес своего Vertcoin кошелька.   Не забудьте указать в .bat файле путь до сгенерированного на этапе выше verthash.dat файла.  Пример: --verthash-data C:\\VerthashMiner\\verthash.dat   Должно получиться следующее (у нас программа находится на диске C):   VerthashMiner -u Vnhysez7nkJh9seeXjQevRjKVJUzxbaNn2 -p c=VTC,mc=VTC -o stratum+tcp://verthash.asia.mine.zergpool.com:4534 --all-cl-devices --all-cu-devices --verthash-data C:\\VerthashMiner\\verthash.dat pause  \t\t \t\t \t \t \t \t \tШаг 3 - Запустите майнер  \t На третьем шаге нужно запустить программу.   Внимание! Не запускайте verthashminer.exe. Вы должны запускать .bat файл.  Именно ваш .bat файл или файл конфигурации передает программе инфомрацию о вашем кошельке и пуле для майнинга.   После запуска майнера в течение нескольких минут, вы увидите окно консоли с хешрейтом:        \t \t  \t \t \t \t \t \t \t \t \tМайнинг VertCoin (VTC) VertHash на картах 3 и 4 ГБ RX470, RX570 и GTX1060 на Windows и HiveOS  \t \t \t \t подписывайтесь \t     Обратите внимание, что создание файла verthash.dat - трудоемкий процесс и может занять около 10 минут при использовании VerthashMiner на четырехъядерном процессоре Intel Core-i5 6500T с SATA SSD. Хорошей новостью является то, что вам нужно только сгенерировать файл данных, а затем, когда вы запускаете программу с обычными параметрами командной строки, он просто загружает .DAT файл и начинает майнинг.          Майнинг на видеокартах Vertcoin - cпасение для 2 и 3 gb видеокарт  Пример настройки для MiningPoolHub.        &nbsp;   Конфигурационный файл   Все настройки майнера также можно контролировать через файл конфигурации. Как в программе lyclMiner.      Создание файла конфигурации.            Файл конфигурации можно сгенерировать. Создайте файл GenerateConfig.bat в той же папке, что и VerthashMiner.exe, со следующим содержимым:         VerthashMiner -g your_config_file.conf                       (Для Linux) Файл конфигурации можно сгенерировать с помощью следующей команды внутри cmd / terminal: ./VerthashMiner -g your_config_file.conf       Дополнительные замечания:                    Файл конфигурации создается специально для вашего графического процессора и настроек драйвера.           Файл конфигурации должен создаваться заново каждый раз, когда вы добавляете / удаляете новое устройство из / в слот PCIe.                            Если вы хотите использовать видеокарты NVIDIA с бэкэндом OpenCL, когда доступен CUDA, то файл конфигурации должен быть сгенерирован с параметром --no-restrict-cuda.  Пример:  Bat (windows):                 VerthashMiner -g your_config_file.conf --no-restrict-cuda                                  (Linux):                  ./VerthashMiner -g your_config_file.conf --no-restrict-cuda                                                                                   Настройка майнера. Откройте файл your_config_file.conf с помощью любого текстового редактора и отредактируйте поля URL, Username,Password  и CoinbaseAddress(только для соло майнинга) внутри блока Connection. Дополнительные замечания:            Рекомендуется настроить BatchTimeMs и OccupancyPct [параметры] (# Статическая и адаптивная конфигурация WorkSize) для каждого Устройства, чтобы получить лучшую производительность или отзывчивость рабочего стола.           Используйте VerthashMiner -c your_config_file.conf, чтобы начать майнинг.            Альтернатива (Windows). Создайте файл Run.bat в той же папке, что и VerthashMiner.exe, со следующим содержимым:         VerthashMiner -c your_config_file.conf                       Дополнительные замечания:       Чтобы использовать графические процессоры NVIDIA с бэкэндом OpenCL, когда доступен CUDA:         VerthashMiner -c your_config_file.conf --no-restrict-cuda                           Обратите внимание, что в этом случае your_config_file.conf также должен быть сгенерирован с помощью команды --no-restrict-cuda.   Команды и опции   В Verthash Miner доступно множество параметров командной строки.   Если вы хотите попробовать параметры командной строки или вам нужна конкретная опция, вы можете добавить короткую или длинную опцию в любом порядке.) Например, используйте -h или --help   Список доступных команд:   Usage: VerthashMiner [options]  Options: =======  --algo &lt;algorithm&gt;                                 (-a)         Specify the algorithm to use:         - verthash (default)  --url  &lt;address&gt;                                   (-o)         Set URL of mining server in format (address:port).  --user &lt;user&gt;                                      (-u)         Set username for mining server.  --pass &lt;password&gt;                                  (-p)         Set password for mining server.  --cert &lt;File&gt;         Select certificate for mining server using SSL.  --proxy &lt;[PROTOCOL://]HOST[:PORT]&gt;                 (-x)         Connect through a proxy.  --cl-devices &lt;index,index,...&gt;  (-d)         Select specific OpenCL devices from the list, obtained by '-l' command.  --all-cl-devices         Use all available OpenCL devices from the list, obtained by '-l' command.         This options as a priority over per device selection using '--cl-devices'  --cu-devices &lt;index,index,...&gt;  (-D)         Select specific CUDA devices from the list, obtained by '-l' command.  --all-cu-devices         Use all available CUDA devices from the list, obtained by '-l' command.         This options as a priority over per device selection using '--cu-devices'  --retries &lt;N&gt;                                      (-r)         Set number of times to retry if a network call fails.         (default: retry indefinitely)  --retry-pause &lt;N&gt;                                  (-R)         Time to pause between retries, in seconds.         (default: 30)  --timeout &lt;N&gt;                                      (-T)         Timeout for long polling, in seconds.         (default: none)  --scantime &lt;N&gt;                                     (-s)         Upper bound on time spent scanning current work when         long polling is unavailable, in seconds.         (default: 5)  --coinbase-addr &lt;ADDR&gt;         Specify a payout address for solo mining.  --coinbase-sig &lt;text&gt;         Data to insert in the coinbase when possible.  --no-longpoll         Disable long polling support.  --no-redirect         Ignore requests to change the URL of the mining server.  --no-restrict-cuda         Allow to use NVIDIA GPUs on OpenCL platform even if CUDA is available.  --verbose         Enable extra debug output.  --protocol-dump                        (-P)         Cerbose dump of protocol-level activities.  --benchmark         Run in offline benchmark mode.  --config &lt;File&gt;                        (-c)         Load a configuration file.  --gen-conf &lt;File&gt;                      (-g)         Generate a configuration file with pcie bus IDs(if possible) and exit.  --gen-verthash-data &lt;File&gt;         Generate a verthash data file and exit.  --verthash-data &lt;File&gt;                 (-f)         Specify verthash mining data file.  --no-verthash-data_verification         Disable verthash data file verification.  --log-file         Enables logging to file.  --device-list                          (-l)         Print all available device configurations and exit.  --version                              (-v)         Display version information and exit.  --help                                 (-h)         Display this help text and exit.    Исправление проблем   Verthash data file name is invalid   Майнер не видит файл verthash.dat. Вы должны сгенерировать его и указать путь.   Для генерации запустите команду:   VerthashMiner.exe --gen-verthash-data verthash.dat pause   А затем укажите путь до того места, где лежит сгенерированный verthash.dat.   Пример:   --verthash-data C:\\VerthashMiner\\verthash.dat   Miner configuration failed! (Errors: 1, Warnings: 0)   У вас ошибка в файле конфигурации. Проверьте его еще раз на наличие сентаксических ошибок.   Заключение   Благодарю вас, что дочитали до конца. Добавьте мой сайт в закладки в своем браузере. Удачного майнинга.   Версии   0.7.2      Исправлен расчет диапазона одноразовых номеров для GBT.   0.7.1      Изменена формула «Сложность достижения цели» на более надежную.   0.6.2      Удалены старые файлы.       ","categories": ["miners"],
        "tags": [],
        "url": "/ru/miners/verthashminer/",
        "teaser": "/assets/images/thumbs/500x300.webp"
      },]

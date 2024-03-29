export default [
   {
      title: "Что такое канал?",
      text: `<p>Каналы это инструмент для рассылки публичных сообщений большой аудитории. Если вы пишете сообщение на свой канал, то ваших личных данных никто не увидит — сообщение придет подписчикам от лица канала (с его названием и фото). Вступившие участники смогут увидеть всю историю сообщений, независимо от того, когда они присоединились к каналу.</p> <p>Также вы можете назначать дополнительных администраторов, которые будут помогать вам управлять каналом.</p>`,
      id: 1,
   },

   {
      title: "Как создать канал?",
      id: 2,
      tabsItem: [
         {
            title: "Android",
            text: `<p>Нажмите на круглую кнопку с карандашом <span><i class="fa-solid fa-pen"></i></span>  в правом нижнем углу. Затем на  <span><i class="fas fa-bullhorn"></i></span>Создать канал.</p>`,
            id: 1,
         },

         {
            title: "iOS",
            text: `<p>Нажмите на квадратную иконку  в правом верхнем углу. Затем на <span><i class="fas fa-bullhorn"></i></span>Создать канал.</p>`,
            id: 2,
         },

         {
            title: "Desktop",
            text: `<p>Нажмите на иконку с тремя горизонтальными полосками <span><i class="fa-solid fa-bars"></i><span>  в левом верхнем углу. Затем на  <span><i class="fas fa-bullhorn"></i></span> Создать канал.</p>`,
            id: 3,
         },
      ],
   },

   {
      title: "В чем разница между приватными и публичными каналами?",
      text: `<p>У&nbsp;публичных каналов есть имя (юзернейм). Любой пользователь может найти такие каналы с&nbsp;помощью поиска в&nbsp;приложении и&nbsp;подписаться на&nbsp;него.</p> <p>Приватные каналы это закрытые сообщества. Попасть туда можно только по&nbsp;пригласительной ссылке или если вас добавил создатель канала. </p>`,
      id: 3,
   },

   {
      title: "Можно ли создать платный канал?",
      text: `<p>Да. Такая возможность доступна для <a href="#!">приватных каналов</a>, а также для публичных с 1000 или более подписчиками. О том, как это сделать, читайте в <a href="/faq">нашей статье</a>.</p>`,
      id: 4,
   },

   {
      title: "Есть ли ограничения на число каналов?",
      text: `<p>Всего можно создать до <strong>8</strong> <em>публичных</em> каналов и групп или до <strong>500</strong> <em>приватных</em>. Подписаться можно максимум на <strong>500</strong> каналов.</p>`,
      id: 5,
   },

   {
      title: "Какой контент запрещено публиковать в каналах?",
      text: `<p>В <em>публичных</em> каналах запрещено публиковать нелегальный контент, из-за которого Telegram могут заблокировать в&nbsp;магазинах Apple и&nbsp;Google. К&nbsp;такому контенту относится порно, эротика, пиратская музыка и&nbsp;файлы, и&nbsp;т.&nbsp;д.</p> <p>Для <em>приватных</em> каналов таких ограничений нет (при условии, что ссылка на&nbsp;такой канал не&nbsp;общедоступна).</p> <blockquote>
      <p>Каналы, связанные с ИГ и пропагандой терроризма, будут блокироваться независимо от политики Apple и Google.</p>
      </blockquote>`,
      id: 6,
   },

   {
      title: "Как запланировать пост, чтобы он отправился позже?",
      text: `<p>Для реализации любых дополнительных функций (разметки, планирования, лайков, автопостинга, и&nbsp;т.&nbsp;д.) вы&nbsp;можете добавить на&nbsp;канал ботов. Вот небольшой список ботов, которые могут вам пригодиться:</p> <blockquote>
      <p>Почти все боты (кроме <strong>@like</strong> и <strong>@vote</strong>) создаются сторонними разработчиками и могут перестать работать в самый ответственный момент.</p>
      </blockquote>`,
      id: 7,
      itemMenu: [
         {
            text: `<p><a href="https://t.me/controllerbot" target="_blank" rel="nofollow noopener">@ControllerBot</a> — бот для отложенного постинга с&nbsp;поддержкой разметки и&nbsp;лайков (реакций).</p>`,
         },

         {
            text: `<p><a href="https://t.me/like" target="_blank" rel="nofollow noopener">@like</a> — бот для прикрепления лайков к&nbsp;сообщению.</p>`,
         },

         {
            text: `<p><a href="https://t.me/TGStat_Bot" target="_blank" rel="nofollow noopener">@TGStat_Bot</a> — расширенная статистика вашего канала.</p>`,
         },

         {
            text: `<p><a href="https://t.me/markdownrobot" target="_blank" rel="nofollow noopener">@markdownrobot</a> — позволяет добавить элементы <a href="https://ru.wikipedia.org/wiki/Markdown" target="_blank" rel="nofollow noopener">разметки</a>: полужирное и&nbsp;курсивное начертание, ссылки и&nbsp;блоки кода.</p>`,
         },
      ],
   },

   {
      title: "Удалённое сообщение пропадёт у всех подписчиков.",
      text: `<p>Создатель канала может отправлять и&nbsp;удалять сообщения, добавлять подписчиков (только первых 200), удалять&nbsp;их, менять имя и&nbsp;фото канала, менять юзернейм, а&nbsp;также удалить весь канал полностью. Кроме того, создатель может добавлять и&nbsp;удалять администраторов, которые нужны ему для помощи в&nbsp;управлении каналом.</p> <p>Каждому администратору можно задать <a href="/news">список прав</a>&nbsp;— действий, которые они могут или не&nbsp;могут делать на&nbsp;вашем канале.</p>`,
      id: 8,
   },

   {
      title: "Если я создам канал, узнают ли об этом мои контакты?",
      text: `<p>Нет. О том, что вы создали канал, можно узнать только если вы сами об этом расскажете.</p>`,
      id: 9,
   },

   {
      title: "Как раскрутить мой канал?",
      text: `<p>Если канал публичный, то&nbsp;у&nbsp;него будет ссылка вида <code>t.me/ЮЗЕРНЕЙМ</code> — можете опубликовать её&nbsp;в&nbsp;социальных сетях, сайтах, напечатать на&nbsp;бумажке. Или сделать татуировку с&nbsp;QR-кодом ссылки у&nbsp;себя на&nbsp;лбу, например.</p> <p>Кроме того, вы&nbsp;можете размещать свой канал в&nbsp;различных каталогах (например, в&nbsp;<a href="#!">нашем</a>). Ещё можно <a href="#!" target="_blank" rel="nofollow noopener">заказать</a> у&nbsp;нас рекламу вашего канала.</p> <p>Пожалуйста, не&nbsp;отправляйте ссылку на&nbsp;свой канал (или другие нежелательные сообщения) незнакомым людям. Если они пожалуются на&nbsp;спам, то&nbsp;вас очень быстро заблокируют.</p>`,
      id: 10,
   },

   {
      title: "Что означает иконка с глазом?",
      text: `<p>Это счётчик просмотров сообщения. Каждый пользователь, который прочитал сообщение с&nbsp;вашего канала (или просто открыл у&nbsp;себя на&nbsp;экране), увеличивает этот счётчик на&nbsp;1.</p> <p>Однако, имейте в&nbsp;виду, что это приблизительные цифры, зависящие от&nbsp;многих факторов&nbsp;— к&nbsp;примеру, просмотры одного человека могут быть посчитаны несколько раз.</p>`,
      id: 11,
   },
];

export default [
   {
      text: `<blockquote><p><strong>Важно:</strong> сначала обновите ваше приложение до самой последней версии.</p></blockquote>`,
      id: 1,
   },

   {
      title: "Что можно сделать прямо сейчас?",
      text: `<p>Блокировку можно обойти с помощью прокси — специального сервера, через который ваши запросы к Telegram будут идти «в обход». Это абсолютно безопасно — прокси не смогут расшифровать или прослушать ваш трафик.</p> <p>В приложении для ПК также может помочь включение IPv6:</p>`,
      id: 2,
      itemMenu: [
         {
            text: "<p>Откройте <strong>Настройки</strong> и нажмите на <strong>Тип подключения</strong> (внизу);</p>",
         },

         {
            text: "<p>Установите флажок «<strong>Использовать IPv6</strong>» и нажмите <strong>Сохранить</strong>.</p>",
         },
      ],
   },

   {
      title: "Как включить прокси?",
      text: `<p>Для подключения просто нажмите на одну из кнопок ниже, а затем в приложении Telegram согласитесь на включение прокси.</p> <p>Вы можете добавить сразу несколько прокси – Telegram сам выберет среди них самый быстрый и стабильный и подключится к нему.</p> <p>Также вы можете воспользоваться платными прокси, которые обеспечат надежную и стабильную работу Telegram. </p>`,
      id: 3,
      itemLink: [
         {
            link: "http://go.teleproxy.me/b32fd9470baa2ae8807521dec46f6696",
            linkText: "Прокси от Vee",
            color: "#1b1930",
         },

         {
            link: "http://go.teleproxy.me/eae4ffd7c5e00a9707f386f823654f40",
            linkText: "Прокси от Airpush",
            color: "#163491",
         },

         {
            link: "http://go.teleproxy.me/c77c94c20edf86a105433f4bc671d348",
            linkText: "Прокси от TgVPN",
            color: "#2E87CA",
         },
      ],
   },

   {
      title: "Есть ли другие варианты?",
      text: `<p>Да — VPN. Отличие этого варианта от прокси в том, что он работает для всего устройства в целом, а не только для Телеграма.</p> <p>Мы рекомендуем <a href="https://tlgrm.click/2CwS" target="_blank" rel="nofollow noopener">NordVPN</a> или <a href="https://warp.plus/RfscJ" target="_blank" rel="nofollow noopener">CloudFlare</a>, но вообще подойдёт любой, который можно найти на <a href="https://play.google.com/store/search?q=vpn" target="_blank" rel="nofollow noopener">Google Play</a> или <a href="https://www.appstore.com/" target="_blank" rel="nofollow noopener">AppStore</a>.</p>`,
      id: 4,
   },

   {
      title: "Как быть с t.me?",
      text: `<p>Внутри приложения ссылки вида <strong>t.me</strong> и <strong>telegram.me</strong> будут работать без проблем. Чтобы воспользоваться ей вне приложения, замените в адресе <em>t.me</em> на <em>tx.me</em>.</p> <p>Пример: <strong><a href="https://tx.me/stickroom" target="_blank" rel="nofollow noopener">tx.me/stickroom</a></strong>.</p>`,
      id: 5,
   },

   {
      title: "Что дальше?",
      text: `<p>Помогите обойти блокировку своим друзьям, родственникам или коллегам — дайте им ссылку на эту инструкцию.</p>`,
      id: 6,
   },
];

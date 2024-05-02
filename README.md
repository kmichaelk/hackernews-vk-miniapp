![Логотип](/public/logo.png)

# Клиент HackerNews для VK Mini Apps

Клиент для чтения HackerNews через платформу мини-приложений ВК.

> [Демоверсия](https://vk.com/app51915527) (ID `51915527`)

- Разработано с использованием архитектурной методологии Feature Sliced Design
- Для загрузки данных используется [официальное API HackerNews](https://github.com/HackerNews/API)


![](/docs/screenshot_1.jpg)
![](/docs/screenshot_2.jpg)
![](/docs/screenshot_3.jpg)

> Основано на шаблоне Basic [VK Bridge](https://github.com/VKCOM/vk-bridge) + [VKUI](https://github.com/VKCOM/VKUI) + [VK Miniapps Router](https://github.com/VKCOM/vk-mini-apps-router) app

Этот шаблон предоставляет базовый код и настройки для создания мини-приложения внутри ВКонтакте.
В качестве сборщика проекта выступает [Vite](https://vite-docs-ru.vercel.app/guide/), подробнее про его конфигурацию и дополнительные плагины можно прочитать [здесь](https://vite-docs-ru.vercel.app/config/) и [здесь]().

## 🚀 Запуск мини приложения

Запустите ваш мини апп

```sh
 yarn start
```

Перейдите на [devportal](https://dev.vk.com/ru) или в [управление](https://vk.com/apps?act=manage) и создайте новый мини апп.
Вставьте URL на котором работает ваше приложение в настройки, предварительно включив режим разработки.
Теперь можете открыть мини апп, нажав на его иконку.
Список всех созданных вами мини приложений вы сможете найти [тут](https://vk.com/apps?act=manage) или [тут](https://dev.vk.com/ru/admin/apps-list).

## 🌐 Деплой мини приложения

Для того чтобы поделиться приложением запущенным на localhost со своими друзьями, вы можете скачать утилиту vk-tunnel и запустить уже подготовленный скрипт из package.json

```sh
yarn global add @vkontakte/vk-tunnel
yarn run tunnel
```

После чего вы получите ссылку, по которой ваше приложение будет доступно с любого устройства, подробнее про vk-tunnel можно прочитать [тут](https://dev.vk.com/ru/libraries/tunnel).

Для того чтобы захостить ваше приложение на сервера ВКонтакте нужно зайти в vk-hosting-config.json и указать id вашего приложения. Далее можно запустить уже подготовленный скрипт:

```sh
yarn run deploy
```

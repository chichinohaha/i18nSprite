# Name - i18n-sprite

## Introduction - 介绍

这是一个构建插件，允许开发者在构建时根据语言关键字后缀将assets目录下的图片替换成对应语言版本。

## Usage - 用法

为图片准备多个语言版本，例如在 `db://assets/folder/logo.png` 有一张图片需要发布成英文版本

在构建的配置中设置 `language` 为 `en`

在构建的配置中指定一个 `db` 目录,这个目录是由插件注入的或者编辑器自带的，`i18n-sprite` 插件已经注入了一个 `db` 目录,可以在资源管理器中看到。

假设 `db` 默认值为 `i18n-sprite`
则需要在 `db://i18n-sprite/folder/` 下放一个 `logo@en.png` 的图片文件
开发过程中请使用 `db://assets/folder/logo.png`

## Notes - 注意事项

暂时不支持使用自动图集功能。
如果配置主包为远程包，请使用 MD5 缓存。

## Changelog - 更新日志
允许从指定`db`目录查找匹配图片资源而不是只从 `assets` 查找
匹配多语言图片的后缀名由 `_{language}` 更改为 `@{language}`

[点击查看github源码 ](https://github.com/chichinohaha/i18nSprite)

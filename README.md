# Name - i18n-sprite

## Introduction - 介绍

这是一个构建插件，允许开发者在构建时根据语言关键字将图片替换成对应语言版本。

## Usage - 用法

为图片准备多个语言版本，例如在 `asset/logo.png` 有一张图片需要发布成英文版本
则需要在相同目录的 `asset` 下放一个 `logo_en.png` 的图片文件
开发过程中请使用 `asset/logo.png`
发布时在配置面板的 language 输入框中输入 en ，即可在打包后替换成 logo_en.png

### Test - 测试

在3.1编辑器的导入 project.zip 并使用 scene 来测试

## Notes - 注意事项

暂时不支持使用自动图集功能。
如果配置主包为远程包，请使用 MD5 缓存。

## Changelog - 更新日志

（无）

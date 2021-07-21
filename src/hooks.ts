/* eslint-disable prefer-rest-params */

import { copySync, existsSync, removeSync } from 'fs-extra';
import { extname } from 'path';
import { IBuildResult, IBuildTaskOption } from '../@types/packages/builder/@types';
export async function onAfterBuildAssets(options: IBuildTaskOption, result: IBuildResult) {
    if (options.packages) {
        const language = options.packages['i18n-sprite']?.language;
        const defaultDBProtocol = 'db://assets';
        const dbProtocol = `db://${options.packages['i18n-sprite']?.db}`;
        if (language) {
            const imageInfos = await Editor.Message.request('asset-db', 'query-assets', { type: 'image', pattern: 'db://assets/**/*' });
            for (let index = 0; index < imageInfos.length; index++) {
                const targetAsset = imageInfos[index];
                if (result.containsAsset(targetAsset.uuid)) {
                    const extName = extname(targetAsset.file);
                    const sourceAsset = (await Editor.Message.request('asset-db', 'query-assets', {
                        type: 'image', 'pattern': `${targetAsset.path.replace(defaultDBProtocol, dbProtocol)}@${language}${extName}`,
                    }))[0];
                    if (sourceAsset) {
                        const rawAssetPaths = result.getRawAssetPaths(targetAsset.uuid);
                        const targetFile = rawAssetPaths[0].raw[0];
                        if (existsSync(targetFile)) {
                            removeSync(targetFile);
                        }
                        const sourceFile = sourceAsset.file;
                        copySync(sourceFile, targetFile);
                        console.log('[i18n sprite] Replaced successfully.', sourceFile, 'to', targetFile);
                    }
                }

            }
        }
    }
}



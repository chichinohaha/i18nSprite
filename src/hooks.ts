/* eslint-disable prefer-rest-params */

import { copySync, existsSync, removeSync } from 'fs-extra';
import { extname } from 'path';
import { IBuildResult, IBuildTaskOption } from '../@types/packages/builder/@types';
export async function onAfterBuildAssets(options: IBuildTaskOption, result: IBuildResult) {
    if (options.packages) {
        const language = options.packages['i18n-sprite']?.language;
        if (language) {
            const imageInfos = await Editor.Message.request('asset-db', 'query-assets', { type:'image', pattern:'db://assets/**/*' });
            imageInfos.forEach(async targetAsset => {
                if (result.containsAsset(targetAsset.uuid)) {
                    const extName = extname(targetAsset.file);
                    const sourceAsset = (await Editor.Message.request('asset-db', 'query-assets', { type:'image', 'pattern':`${targetAsset.path}_${language}${extName}`,
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

            });

        }

    }
}



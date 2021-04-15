import { IBuildPlugin } from '../@types/packages/builder/@types';

export const configs: Record<string, IBuildPlugin> = {
    '*':{
        hooks:'./hooks',
        'options':{
            language:{
                'label':'language',
                'default':'zh',
                'render':{
                    'ui':'ui-input',
                },
            },
        },
    },
};

import { GridStackOptions } from "gridstack"

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
);

const dragDropOption: GridStackOptions = {
    alwaysShowResizeHandle: isMobile,
    resizable: {
        autoHide: !isMobile,
        handles: 'se'
    }
}

const displayOption: GridStackOptions = {
    column: 12,
    cellHeight: 160,
    margin: 8,
    float: true
}

export const GridStackDefaultOption: GridStackOptions = {
    ...displayOption,
    ...dragDropOption,
    disableDrag: false,
    disableResize: false,
    animate: true
}

export type Transform = (options: GridStackOptions) => GridStackOptions

function getTransform(options: GridStackOptions): GridStackOptions {
    Object.keys(options).forEach((k) => {
        if (options[k] === undefined) {
            delete options[k];
        }
    });

    return options
}

export function useGridStackConfig(options: GridStackOptions, transform: Transform = getTransform): GridStackOptions {
    const _options = Object.assign({}, GridStackDefaultOption, options)

    return transform(_options)
}

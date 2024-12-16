import { GridStackOptions } from "gridstack"

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  window.navigator.userAgent
);

const dragOptions: GridStackOptions = {
  alwaysShowResizeHandle: isMobile,
  resizable: {
    autoHide: !isMobile,
    handles: 'se'
  },
}

const displayOptions: GridStackOptions = {
  column: 12,
  cellHeight: 160,
  margin: 8,
  float: true,
}

export const GridStackDefaultOptions: GridStackOptions = {
  ...displayOptions,
  ...dragOptions,
  disableDrag: false,
  disableResize: false,
  animate: true
}

type Transform = (options: GridStackOptions) => GridStackOptions

function getTransform(options: GridStackOptions): GridStackOptions {
  Object.keys(options).forEach((k) => {
    if (options[k] === undefined) {
      delete options[k];
    }
  });

  return options
}

export function useGridStackConfig(options: GridStackOptions, transform: Transform = getTransform) {
  const finalOptions = Object.assign({}, GridStackDefaultOptions, options)
  return transform(finalOptions)
}
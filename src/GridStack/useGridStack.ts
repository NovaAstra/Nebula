import { onMounted, ref, computed, watch, unref, Ref } from "vue"
import { GridStack, GridStackOptions, Utils } from "gridstack"
import { useGridStackConfig } from "./useGridStackConfig"

export interface GridStackProps extends GridStackOptions {

}

export function useGridStack(props: GridStackProps, options?: GridStackOptions) {
    let gridStackElementRef: Ref<HTMLElement> = ref()
    let gridStack: GridStack = null

    const dd = GridStack.getDD()

    const updateBackground = () => {
        if (gridStack) {

        }
    }

    const resetAcceptWidget = () => {
        if (!gridStack) {
            return
        }

        if (gridStack.opts.staticGrid || gridStack.opts.acceptWidgets === undefined) {
            return;
        }

        if (!dd.isDroppable(gridStack.el)) {

        }
        dd
            .off(gridStack.el, "dropout")
            .off(gridStack.el, "drop")
    }

    const resetRemoveDrop = () => {
        if(!gridStack){
            return
        }
    }

    watch(() => props.staticGrid, (staticGrid) => {
        if (gridStack) {
            if (!!staticGrid) {
                gridStack.setStatic(!!staticGrid)
            }
        }
    })

    watch(() => props.float, (float) => {
        if (gridStack) {
            gridStack.float(!!float)
        }
    })

    watch(() => props.cellHeight, (cellHeight) => {
        if (gridStack && cellHeight !== undefined) {
            this.gridStack.cellHeight(cellHeight, true);
        }

    })

    watch(() => props.margin, (margin) => {
        if (gridStack && margin !== undefined) {
            gridStack.margin(margin)
        }
    })

    const classes = computed(() => {
        return [
            "grid-stack",
            `grid-stack-${props.column}`
        ]
    })


    onMounted(() => {
        const finalOptions = useGridStackConfig(options);
        gridStack = GridStack.init(finalOptions, unref(gridStackElementRef))
        updateBackground()
    })

    return {
        gridStackElementRef,
        gridStack,

        classes,

        updateBackground,
        resetAcceptWidget
    }
}
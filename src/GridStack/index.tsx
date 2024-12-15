import "./gridstack.scss";

import { defineComponent } from "vue";
import { useGridStack } from "./useGridStack"

export const GridStackItem = defineComponent({
    name: "GridStackItem",
    setup(props, { slots }) {
        return () => (
            <div class="grid-stack-item">
                <div class="grid-stack-item-content">
                    {slots.default?.()}
                </div>
            </div>
        )
    }
})

export const GridStack = defineComponent({
    name: "GridStack",
    props: {

    },
    setup(props, { slots }) {
        useGridStack(props)

        return () => (
            <div class="grid-stack">
                {slots.default?.()}
            </div>
        )
    }
})
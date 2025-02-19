import { patchState, signalStore, withMethods, withState } from "@ngrx/signals"


type ProjectState = {
    highlightedTechnology?: string
    highlightedTechnologyChanged: boolean
}

const initialState: ProjectState = {
    highlightedTechnology: undefined,
    highlightedTechnologyChanged: false
}

export const ProjectStore = signalStore(
    withState(initialState),
    withMethods(
        (store) => ({
            changeHighlightedTechnology: (newHighlightedTechnology?: string) => {
                patchState(store, { highlightedTechnologyChanged: true })
                if (store.highlightedTechnology == undefined) {
                    patchState(
                        store,
                        {
                            highlightedTechnology: newHighlightedTechnology,
                            highlightedTechnologyChanged: false
                        }
                    )
                } else {
                    setTimeout(
                        () => {
                            patchState(
                                store,
                                {
                                    highlightedTechnology: newHighlightedTechnology,
                                    highlightedTechnologyChanged: false
                                }
                            )
                        },
                        130
                    )
                }

            }
        })
    )
)
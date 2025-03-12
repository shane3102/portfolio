import { patchState, signalStore, withMethods, withState } from "@ngrx/signals"
import { technology } from "../utils/GlobalDefinitions"


type ProjectState = {
    highlightedTechnology: technology | undefined
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
            changeHighlightedTechnology: (newHighlightedTechnology?: technology) => {
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
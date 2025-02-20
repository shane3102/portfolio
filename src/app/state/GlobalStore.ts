import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { project } from '../utils/GlobalDefinitions';

type GlobalState = {
    currentShownContent: project,
    changingContent: boolean
}

const initialState: GlobalState = {
    currentShownContent: 'CV',
    changingContent: false
}

export const GlobalStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods(
        (store) => ({
            changeShownContent: (shownContent: project) => {
                if (store.currentShownContent() != shownContent) {
                    patchState(store, { changingContent: true })
                    setTimeout(
                        () => {
                            patchState(store, { currentShownContent: shownContent, changingContent: false })
                        },
                        250
                    )
                }
            }
        })
    )
)
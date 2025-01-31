import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type GlobalState = {
    currentShownContent: 'illchess' | 'leon' | 'inbox-outbox' | 'CV',
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
            changeShownContent: (shownContent: 'illchess' | 'leon' | 'inbox-outbox' | 'CV') => {
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
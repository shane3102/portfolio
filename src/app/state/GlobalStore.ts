import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type GlobalState = {
    currentShownContent: 'illchess' | 'leon' | 'inbox-outbox' | 'CV'
}

const initialState: GlobalState = {
    currentShownContent: 'CV'
}

export const GlobalStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods(
        (store) => ({
            changeShownContent: (shownContent: 'illchess' | 'leon' | 'inbox-outbox' | 'CV') => {
                patchState(store, {currentShownContent: shownContent})
            }
        })
    )
)
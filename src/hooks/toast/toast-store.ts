import { TOAST_LIMIT, Action, State, actionTypes, TOAST_REMOVE_DELAY } from "./toast-types"

// Generate unique IDs for toasts
let count = 0
export function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

// Timeout management
export const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

// Listeners for state updates
export const listeners: Array<(state: State) => void> = []

// Initial state
export let memoryState: State = { toasts: [] }

// Add toast to removal queue
export const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

// State reducer
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action

      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        // Clear all toasts and cancel all timers
        toastTimeouts.forEach((timeout) => clearTimeout(timeout))
        toastTimeouts.clear()
        return { ...state, toasts: [] }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

// Dispatch action to update state
export function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

// Clear all toasts
export function clearAllToasts() {
  toastTimeouts.forEach((timeout) => clearTimeout(timeout))
  toastTimeouts.clear()
  dispatch({ type: "REMOVE_TOAST" })
}

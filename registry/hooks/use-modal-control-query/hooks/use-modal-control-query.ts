// usage docs: https://use-mcq.davidsling.in

import { Options, parseAsString, useQueryState } from 'nuqs'

export const useModalControlQuery = <HasState extends boolean = false>(
  action_name: string,
  {
    openBehaviour = 'push',
    closeBehaviour = 'replace',
    key = 'modal',
    onlyExplicitOpen,
    hasState,
  }: {
    openBehaviour?: 'push' | 'replace'
    closeBehaviour?: 'push' | 'replace'
    key?: string
    onlyExplicitOpen?: boolean
    hasState?: HasState
  } = {}
) => {
  const [openSheet, setOpenSheet] = useQueryState(key, parseAsString)

  const [open_action, state] = hasState ? openSheet?.split(':') ?? [] : [openSheet]

  const set = (open: boolean | (HasState extends true ? string : boolean), options?: Options) => {
    if (open)
      setOpenSheet([action_name, ...(typeof open === 'string' ? [open] : [])].join(':'), {
        history: openBehaviour,
        shallow: true,
        ...options,
      })
    else
      setOpenSheet(null, {
        history: closeBehaviour,
        shallow: true,
        ...options,
      })
  }

  return {
    control: {
      open: open_action === action_name,
      onOpenChange: (open: boolean) => {
        if (open && onlyExplicitOpen) return
        set(open)
      },
    },
    state: (typeof state === 'string' ? state : openSheet) as HasState extends true
      ? string | boolean | null
      : boolean | null,
    set,
  }
}

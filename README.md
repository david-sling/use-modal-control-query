# useModalControlQuery

A hook to control shadcn modal components using query params

## Installation

```bash
npx shadcn@latest add https://use-mcq.davidsling.in/r/use-modal-control-query.json
```

## Usage

```tsx
'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useModalControlQuery } from '../../hooks/use-modal-control-query'

export default function SimpleExample() {
  const dialog = useModalControlQuery('hello')
  return (
    <Dialog {...dialog.control}>
      <DialogTrigger asChild>
        <Button>Say Hello</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hello</DialogTitle>
          <DialogDescription>Notice how the url parameters are updated</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
```

The above code will update the query parameters to be `?modal=hello` when the modal is open. It will also ensure that if the page is reloaded with the query parameter present, the modal stays open.

## Live Example

Live example available at https://use-mcq.davidsling.in

## Documentation

Visit the [use-mcq documentation](https://use-mcq.davidsling.in) to view the full documentation.

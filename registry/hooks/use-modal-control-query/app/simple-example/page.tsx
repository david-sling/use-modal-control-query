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

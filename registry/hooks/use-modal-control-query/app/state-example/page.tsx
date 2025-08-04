'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useModalControlQuery } from '../../hooks/use-modal-control-query'

export default function StateExample() {
  const sheet = useModalControlQuery('state-example', { hasState: true })
  return (
    <div>
      <div className="flex items-center gap-5">
        <Button onClick={() => sheet.set('A')}>Open A</Button>
        <Button onClick={() => sheet.set('B')}>Open B</Button>
        <Button onClick={() => sheet.set('C')}>Open C</Button>
      </div>
      <Sheet {...sheet.control}>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle>Opened "{sheet.state}"</SheetTitle>
            <SheetDescription>
              Note how the url now has a state attached to the query parameter
            </SheetDescription>
          </SheetHeader>
          <div className="text-center my-auto">
            <p className="text-muted-foreground">Current state:</p>
            <p className="text-8xl h-40">{sheet.state}</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

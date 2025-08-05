'use client'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { parseAsString, useQueryState } from 'nuqs'
import { useModalControlQuery } from '../../hooks/use-modal-control-query'

export default function CompatibleComponents() {
  const modal = useModalControlQuery('compatible')
  const [tab, setTab] = useQueryState('tab', parseAsString.withDefault('dialog'))
  return (
    <Tabs value={tab} onValueChange={setTab} className="flex flex-col items-center">
      <TabsList className="flex-wrap">
        <TabsTrigger value="dialog">Dialog</TabsTrigger>
        <TabsTrigger value="sheet">Sheet</TabsTrigger>
        <TabsTrigger value="drawer">Drawer</TabsTrigger>
        <TabsTrigger value="dropdown-menu">Dropdown Menu</TabsTrigger>
        <TabsTrigger value="select">Select</TabsTrigger>
        <TabsTrigger value="collapsible">Collapsible</TabsTrigger>
      </TabsList>
      <TabsContent value="dialog">
        <Dialog {...modal.control}>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>This is a Dialog</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </TabsContent>
      <TabsContent value="sheet">
        <Sheet {...modal.control}>
          <SheetTrigger asChild>
            <Button>Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>This is a Sheet</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </TabsContent>
      <TabsContent value="drawer">
        <Drawer {...modal.control}>
          <DrawerTrigger asChild>
            <Button>Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>This is a Drawer</DrawerTitle>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </TabsContent>
      <TabsContent value="dropdown-menu">
        <DropdownMenu {...modal.control}>
          <DropdownMenuTrigger asChild>
            <Button>Open Dropdown Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>This is a Dropdown Menu Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TabsContent>
      <TabsContent value="select">
        <div>
          <Select {...modal.control}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </TabsContent>
      <TabsContent value="collapsible">
        <Collapsible className="flex flex-col items-center" {...modal.control}>
          <CollapsibleTrigger asChild>
            <Button>Open Collapsible</Button>
          </CollapsibleTrigger>
          <CollapsibleContent>This is Collapsible content</CollapsibleContent>
        </Collapsible>
      </TabsContent>
    </Tabs>
  )
}

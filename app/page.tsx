import CommandBlock from '@/components/command-tabs'
import { Example } from '@/components/example'
import { getAddItemCommands, getMainRegistryFile } from '@/lib/registry'
import SimpleExampleMCQ from '@/registry/hooks/use-modal-control-query/app/simple-example/page'
import StateExample from '@/registry/hooks/use-modal-control-query/app/state-example/page'

import { Logo } from '@/components/logo'
import compatibleExample from '@/public/r/compatible-components-example-use-mcq.json'
import simpleExample from '@/public/r/simple-example-use-mcq.json'
import stateExample from '@/public/r/state-example-use-mcq.json'
import CompatibleComponents from '@/registry/hooks/use-modal-control-query/app/compatible-components/page'
import { RegistryItem } from 'shadcn/registry'

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <div className="mb-2 flex items-center gap-3 md:gap-5 flex-wrap">
          <Logo className="h-5 w-10 md:h-10 md:w-20" />
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight break-words flex-1 max-w-full">
            useModalControlQuery
          </h1>
        </div>
        <p className="text-muted-foreground">
          A hook to control shadcn modal components using query params
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-16">
        <div className="flex flex-col gap-2 font-semibold">
          <h2 className="text-2xl">Installation</h2>
          <CommandBlock commands={getAddItemCommands('use-modal-control-query')} />
        </div>
        <Example
          label="Usage"
          name={simpleExample.name}
          code={getMainRegistryFile(simpleExample as RegistryItem) ?? ''}
        >
          <SimpleExampleMCQ />
        </Example>
        <Example
          name={stateExample.name}
          code={getMainRegistryFile(stateExample as RegistryItem) ?? ''}
          label="Using state in query"
        >
          <StateExample />
        </Example>
        <Example
          name="compatible-components-example-use-mcq"
          code={getMainRegistryFile(compatibleExample as RegistryItem) ?? ''}
          label="You can use the hook with the following components"
        >
          <CompatibleComponents />
        </Example>
      </main>
    </div>
  )
}

import CommandBlock from '@/components/command-tabs'
import { Example } from '@/components/example'
import { getAddItemCommands, getMainRegistryFile } from '@/lib/registry'
import SimpleExampleMCQ from '@/registry/hooks/use-modal-control-query/app/simple-example/page'
import Link from 'next/link'
import StateExample from '@/registry/hooks/use-modal-control-query/app/state-example/page'

import simpleExample from '@/public/r/simple-example-use-mcq.json'
import stateExample from '@/public/r/state-example-use-mcq.json'
import { RegistryItem } from 'shadcn/registry'
import { Logo } from '@/components/logo'

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <div className="mb-2 flex items-center gap-5">
          <Logo className="h-20 w-20" />
          <h1 className="text-4xl font-bold tracking-tight">useModalControlQuery</h1>
        </div>
        <p className="text-muted-foreground">
          A hook to control shadcn{' '}
          <Link target="_blank" href="https://ui.shadcn.com/docs/components/sheet">
            <code className="underline font-bold">sheet</code>
          </Link>{' '}
          and{' '}
          <Link target="_blank" href="https://ui.shadcn.com/docs/components/dialog">
            <code className="underline font-bold">dialog</code>
          </Link>{' '}
          components using query params
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
      </main>
    </div>
  )
}

import CommandBlock from '@/components/command-tabs'
import { getRegistryJson } from '@/lib/registry'
import SimpleExampleMCQ from '@/registry/hooks/use-modal-control-query/app/simple-examlple/page'

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">useModalControlQuery</h1>
        <p className="text-muted-foreground">
          A hook to control shadcn{' '}
          <code className="text-background bg-foreground/70 px-1 py-0.5 rounded-sm">sheet</code> and{' '}
          <code className="text-background bg-foreground/70 px-1 py-0.5 rounded-sm">dialog</code>{' '}
          components using query params
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <CommandBlock
          commands={[
            {
              label: 'npx',
              command: `npx shadcn@latest add ${getRegistryJson('use-modal-control-query')}`,
            },
          ]}
        />
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">A simple implementation</h2>
            {/* <OpenInV0Button name="hello-world" className="w-fit" /> */}
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <SimpleExampleMCQ />
          </div>
        </div>
      </main>
    </div>
  )
}

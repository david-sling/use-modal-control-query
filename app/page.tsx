import { CodeBlock } from '@/components/codeblock'
import CommandBlock from '@/components/command-tabs'
import { OpenInV0Button } from '@/components/open-in-v0-button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getRegistryJson } from '@/lib/registry'
import SimpleExampleMCQ from '@/registry/hooks/use-modal-control-query/app/simple-example/page'
import Link from 'next/link'

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold tracking-tight mb-2">useModalControlQuery</h1>
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
      <main className="flex flex-col flex-1 gap-8">
        <CommandBlock
          commands={[
            {
              label: 'npx',
              command: `npx shadcn@latest add ${getRegistryJson('use-modal-control-query')}`,
            },
          ]}
        />
        <div className="flex flex-col gap-1">
          {/* <h2 className="text-sm text-muted-foreground sm:pl-3">A simple implementation</h2> */}
          <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <Tabs defaultValue="preview">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <OpenInV0Button name="simple-example-use-mcq" />
              </div>
              <TabsContent value="preview">
                <div className="flex items-center justify-center min-h-[400px] relative">
                  <SimpleExampleMCQ />
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="w-full h-full">
                  <CodeBlock className="w-full h-full border-0 text-sm py-5" lang="tsx">
                    {
                      "'use client'\n\nimport {\n  Dialog,\n  DialogContent,\n  DialogDescription,\n  DialogHeader,\n  DialogTitle,\n  DialogTrigger,\n} from '@/components/ui/dialog'\nimport { Button } from '@/components/ui/button'\nimport { useModalControlQuery } from '../../hooks/use-modal-control-query'\n\nexport default function SimpleExampleMCQ() {\n  const dialog = useModalControlQuery('hello')\n  return (\n    <Dialog {...dialog.control}>\n      <DialogTrigger asChild>\n        <Button>Say Hello</Button>\n      </DialogTrigger>\n      <DialogContent>\n        <DialogHeader>\n          <DialogTitle>Hello</DialogTitle>\n          <DialogDescription>Notice how the url parameters are updated</DialogDescription>\n        </DialogHeader>\n      </DialogContent>\n    </Dialog>\n  )\n}\n"
                    }
                  </CodeBlock>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <CommandBlock
            commands={[
              {
                label: 'npx',
                command: `npx shadcn@latest add ${getRegistryJson('simple-example-use-mcq')}`,
              },
            ]}
          />
        </div>
      </main>
    </div>
  )
}

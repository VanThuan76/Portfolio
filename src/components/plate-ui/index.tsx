'use client'
import { Plate } from '@udecode/plate-common';
import { CommentsProvider } from '@udecode/plate-comments';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { MentionCombobox } from '@/components/plate-ui/mention-combobox';
import { Editor } from '@/components/plate-ui/editor';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { plugins } from '@/lib/plate';

interface Props {
    initialValue: any
}
export function PlateEditor({ initialValue }: Props) {
    return (
        <DndProvider backend={HTML5Backend}>
            <CommentsProvider users={{}} myUserId="1">
                <Plate plugins={plugins} initialValue={initialValue} onChange={(value:any) => {
                    console.log(value)
                }}>
                    <FixedToolbar className='sticky top-0'>
                        <FixedToolbarButtons />
                    </FixedToolbar>
                    <Editor className='mt-10 md:mt-0 min-h-[550px]' />
                    <FloatingToolbar>
                        <FloatingToolbarButtons />
                    </FloatingToolbar>
                    <MentionCombobox items={[]} />
                </Plate>
            </CommentsProvider>
        </DndProvider>
    );
}
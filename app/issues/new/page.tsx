'use client';
import { Button, TextField } from '@radix-ui/themes';
import dynamic from 'next/dynamic';
//import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

// Importa o SimpleMDE dinamicamente com SSR desabilitado
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder='Title'>
            <TextField.Slot></TextField.Slot>
        </TextField.Root>

        <SimpleMDE placeholder='Description'/>

        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage
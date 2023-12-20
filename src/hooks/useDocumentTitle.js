import { useState } from 'react';

export function useDocumentTitle(initialTitle) {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = (newTitle) => {
        setTitle(newTitle);
        document.title = newTitle;
    };

    return { title, updateTitle };
}
import React, { useState } from 'react';

const FileExplorer = () => {
    const [files, setFiles] = useState([]);

    const addFile = (file) => {
        setFiles([...files, file]);
    };

    const removeFile = (fileToRemove) => {
        setFiles(files.filter(file => file !== fileToRemove));
    };

    return (
        <div>
            <h2>File Explorer</h2>
            <ul>
                {files.map(file => (
                    <li key={file}>
                        {file}
                        <button onClick={() => removeFile(file)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addFile(`File ${files.length + 1}`)}>Add File</button>
        </div>
    );
};

export default FileExplorer;

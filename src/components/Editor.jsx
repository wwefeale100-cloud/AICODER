import React from 'react';

const Editor = () => {
    const [code, setCode] = React.useState('');

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    return (
        <div>
            <textarea
                value={code}
                onChange={handleChange}
                style={{ width: '100%', height: '300px' }}
            />
            <button onClick={() => alert(code)}>Run</button>
        </div>
    );
};

export default Editor;
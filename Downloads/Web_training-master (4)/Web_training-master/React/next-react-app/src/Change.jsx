import { useState } from 'react';

function MainComponent() {
    const [showNewComponent, setShowNewComponent] = useState(false);

    if (showNewComponent) {
        return <AnotherComponent />;
    }

    
    return (
        <div>
            <button onClick={() => setShowNewComponent(true)}>
                Show Another Component
            </button>
        </div>
    );
}

function AnotherComponent() {
    return (
        <div>
            <h1>This is another component!</h1>
        </div>
    );
}

export default MainComponent;

import {compile} from "../src/compile";
import {useRef, useState} from "react";
import styles from "../styles.module.scss";

import { js as beautify } from "js-beautify";

const defaultCode = `; name
ldc $Greeter, [
    $this {
        @name: $arg0
    }
]

get $Greeter_proto, $Greeter, #prototype
$Greeter_proto {
    @greet: [
        ldc $message, "Hello "
        get $name, $this, #name
        add $message, $name
        
        lea $alert, #alert
        psh $message
        jsr $, $alert, 1
    ]
}

ctr $Greeter

psh "Dummy"
jsr $greeter, $Greeter, 1

jfn $, $greeter, #greet, 0
`;

export default () => {
    const [output, setOutput] = useState(beautify(compile(defaultCode)));

    const inputRef = useRef<HTMLTextAreaElement>(null);

    function onCompileClick() {
        const result = compile(inputRef.current.value);
        setOutput(beautify(result));
    }

    function onRunClick() {
        onCompileClick();
        const result = compile(inputRef.current.value);
        const script = document.createElement("script") as HTMLScriptElement;
        script.innerHTML = result;
        document.body.appendChild(script);
    }

    return <div className={styles.container}>
        <textarea defaultValue={defaultCode} ref={inputRef}/>
        <textarea readOnly={true} value={output}/>
        <br />
        <button onClick={onCompileClick}>Compile</button>
        <button onClick={onRunClick}>Run</button>
    </div>;
}
# CALang
<small>*Not to be confused with the inferior compiler toolchain called "clang"*</small>  
A revolutionary programming language that combines **C**ss and **A**ssembler to write modern web apps.

Features:
- strings (kinda), are a first class citizen
- numbers, only floating point. Integers are not supported. <small>*They're useless anyway, we're not working on a 16bit platform here.*</small>

Concepts:
- strings, denoted by quotes: `"example"`
- numbers, just write 'em: `1234`
- symbols, prefixed with a pound sign: `#document`
- registers, prefixed with a dollar sign: `$foo`  
<small>*The special discard register `$` with no name.*</small>  
<small>*The special $argN register, for example: `$arg0`*</small>  
<small>*The special `$this` register*</small>

Instructions:
- `lea <reg>, <sym>`
- `ldc <reg>, <val>`
- `mov <dst>, <src>`
- `get <dst>, <src>, <sym>`
- `set <src>, <dst>, <sym>`


- `psh <reg/imm>`
- `pop <reg>`


- `add <reg>, <reg/imm>`
- `sub <reg>, <reg/imm>`
- `mul <reg>, <reg/imm>`
- `div <reg>, <reg/imm>`
- `mod <reg>, <reg/imm>`
- `xor <reg>, <reg/imm>`
- `and <reg>, <reg/imm>`
- `bor <reg>, <reg/imm>`


- `not <reg>`
- `inv <reg>`
- `neg <reg>`


- `beq <reg>, <reg/imm>`
- `bne <reg>, <reg/imm>`
- `bgt <reg>, <reg/imm>`
- `blt <reg>, <reg/imm>`
- `bge <reg>, <reg/imm>`
- `ble <reg>, <reg/imm>` 


- `jsr <res>, <reg>, <cnt>`
- `jfn <res>, <reg>, <sym>, <cnt>`
- `ctr <res>`
- `ret <res/imm>`


- `dbg <reg/imm>`

Example code:
```
body {
  @onload: [
    lea $alert, #alert

    psh "hello world!"
    jsr $, $alert, 1
  ];
}

```

To run an example in dev mode:
```
yarn install
yarn link
calang -wd examples/counter-button.ca
calang -wd examples/doodle.ca
calang -wd examples/p2pchat.ca
calang -wd examples/simple-onclick.ca

```
![logo](https://calang.captureage.com/logo.png)

# CALang
<small>*Not to be confused with the inferior compiler toolchain called "clang"*</small>  
A revolutionary programming language that combines **C**ss and **A**ssembler to write modern web apps.

## Table of contents
- [Features](#Features)
- [Concepts](#Concepts)
- [Examples](#Examples)
- [Building & Running Examples](#Building--Running-Examples)
- [Instructions](#Instructions)

## Features
- strings (kinda), are a first class citizen
- numbers, only floating point. Integers are not supported. <small>*They're useless anyway, we're not working on a 16bit platform here.*</small>

## Concepts
- strings, denoted by quotes: `"example"`
- numbers, just write 'em: `1234`
- symbols, prefixed with a pound sign: `#document`
- registers, prefixed with a dollar sign: `$foo`  
<small>*The special discard register `$` with no name.*</small>  
<small>*The special $argN register, for example: `$arg0`*</small>  
<small>*The special `$this` register*</small>

## Examples
- [counter-button](https://calang.captureage.com/examples/counter-button.html)
- [doodle](https://calang.captureage.com/examples/doodle.html)
- [p2pchat](https://calang.captureage.com/examples/p2pchat.html)
- [simple-onclick](https://calang.captureage.com/examples/simple-onclick.html)

## Example code
```
body {
  @onload: [
    lea $alert, #alert

    psh "hello world!"
    jsr $, $alert, 1
  ];
}

```

## Building & Running Examples
```
yarn install
yarn link
calang -wd examples/counter-button.ca
calang -wd examples/doodle.ca
calang -wd examples/p2pchat.ca
calang -wd examples/simple-onclick.ca
```

## Instructions
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
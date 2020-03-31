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
- `and <reg>, <reg/imm>` 
- `bor <reg>, <reg/imm>` 


- `jsr <res>, <reg>, <cnt>`

Example code:
```
body {
  attr-onload: [
    lea $alert, #alert

    psh "hello world!"
    jsr $, $alert, 1
  ]
}

```

grammar CALang;

program: instruction*;

cssQuery
    : '$' Ident (',' '$' Ident)*  # RegQuery
    | cssQueryPart+ # NormQuery
    ;

cssQueryPart
    : '.' Ident
    | '#' Ident
    | Ident
    | ','
    ;

cssProp
    : '@' Ident ':' arg     # Attr
    | Ident ':' arg         # Prop
    ;

instruction
    : Mnemonic (arg (',' arg)*)? # Assembly
    | cssQuery '{' cssProp* '}'  # CssRule
    ;

arg
    : '$' Ident?            # Reg
    | '#' Ident             # Sym
    | Number                # LitNumber
    | String                # LitString
    | Boolean               # LitBoolean
    | '[' instruction* ']'  # CodeBlock
    ;

WS: [ \n\t\r]+ -> skip;

String
    : '"' (~["])* '"'
    ;

Number
    : [0-9]+
    ;

Boolean
    : 'true' | 'false'
    ;


Mnemonic
    : 'lea'
    | 'ldc'
    | 'mov'
    | 'get'
    | 'set'
    | 'psh'
    | 'pop'
    | 'add' | 'sub' | 'mul' | 'div'
    | 'mod' | 'xor' | 'and' | 'bor'
    | 'not' | 'inv' | 'neg'
    | 'beq' | 'bne' | 'bgt' | 'blt' | 'bge' | 'ble'
    | 'jsr'
    | 'jfn'
    | 'ctr'
    | 'ret'
    | 'dbg'
    ;

Ident
    : [A-Za-z0-9\-]+
    ;


LineComment
    : ';' ~[\r\n]* -> skip
    ;
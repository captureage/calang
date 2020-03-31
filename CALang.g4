grammar CALang;

program: statement*;

statement
    : cssRule
    ;

cssRule
    : cssQuery cssBody
    ;

cssQuery
    : '.' Ident #ClassQuery
    | Ident #TagQuery
    ;

cssBody
    : '{' cssProp* '}'
    ;

cssProp
    : Ident ':' cssValue;

cssValue
    : codeBlock
    ;

codeBlock
    : '[' instruction* ']';

instruction
    : Mnemonic (arg (',' arg)*)?;

arg
    : '$' Ident?    # Reg
    | '#' Ident     # Sym
    | Number        # LitNumber
    | String        # LitString
    ;

WS: [ \n\t\r]+ -> skip;

String
    : '"' (~["])* '"'
    ;

Number
    : [0-9]+
    ;

Mnemonic
    : 'lea'
    | 'psh'
    | 'jsr'
    ;

Ident
    : [A-Za-z0-9\-]+
    ;

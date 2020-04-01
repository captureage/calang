// Generated from src/CALang.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { AttrContext } from "./CALangParser";
import { PropContext } from "./CALangParser";
import { AssemblyContext } from "./CALangParser";
import { CssRuleContext } from "./CALangParser";
import { RegContext } from "./CALangParser";
import { SymContext } from "./CALangParser";
import { LitNumberContext } from "./CALangParser";
import { LitStringContext } from "./CALangParser";
import { LitBooleanContext } from "./CALangParser";
import { CodeBlockContext } from "./CALangParser";
import { RegQueryContext } from "./CALangParser";
import { NormQueryContext } from "./CALangParser";
import { ProgramContext } from "./CALangParser";
import { CssQueryContext } from "./CALangParser";
import { CssQueryPartContext } from "./CALangParser";
import { CssPropContext } from "./CALangParser";
import { InstructionContext } from "./CALangParser";
import { ArgContext } from "./CALangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CALangParser`.
 */
export interface CALangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Attr`
	 * labeled alternative in `CALangParser.cssProp`.
	 * @param ctx the parse tree
	 */
	enterAttr?: (ctx: AttrContext) => void;
	/**
	 * Exit a parse tree produced by the `Attr`
	 * labeled alternative in `CALangParser.cssProp`.
	 * @param ctx the parse tree
	 */
	exitAttr?: (ctx: AttrContext) => void;

	/**
	 * Enter a parse tree produced by the `Prop`
	 * labeled alternative in `CALangParser.cssProp`.
	 * @param ctx the parse tree
	 */
	enterProp?: (ctx: PropContext) => void;
	/**
	 * Exit a parse tree produced by the `Prop`
	 * labeled alternative in `CALangParser.cssProp`.
	 * @param ctx the parse tree
	 */
	exitProp?: (ctx: PropContext) => void;

	/**
	 * Enter a parse tree produced by the `Assembly`
	 * labeled alternative in `CALangParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterAssembly?: (ctx: AssemblyContext) => void;
	/**
	 * Exit a parse tree produced by the `Assembly`
	 * labeled alternative in `CALangParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitAssembly?: (ctx: AssemblyContext) => void;

	/**
	 * Enter a parse tree produced by the `CssRule`
	 * labeled alternative in `CALangParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterCssRule?: (ctx: CssRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `CssRule`
	 * labeled alternative in `CALangParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitCssRule?: (ctx: CssRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `Reg`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	enterReg?: (ctx: RegContext) => void;
	/**
	 * Exit a parse tree produced by the `Reg`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	exitReg?: (ctx: RegContext) => void;

	/**
	 * Enter a parse tree produced by the `Sym`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	enterSym?: (ctx: SymContext) => void;
	/**
	 * Exit a parse tree produced by the `Sym`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	exitSym?: (ctx: SymContext) => void;

	/**
	 * Enter a parse tree produced by the `LitNumber`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	enterLitNumber?: (ctx: LitNumberContext) => void;
	/**
	 * Exit a parse tree produced by the `LitNumber`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	exitLitNumber?: (ctx: LitNumberContext) => void;

	/**
	 * Enter a parse tree produced by the `LitString`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	enterLitString?: (ctx: LitStringContext) => void;
	/**
	 * Exit a parse tree produced by the `LitString`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	exitLitString?: (ctx: LitStringContext) => void;

	/**
	 * Enter a parse tree produced by the `LitBoolean`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	enterLitBoolean?: (ctx: LitBooleanContext) => void;
	/**
	 * Exit a parse tree produced by the `LitBoolean`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	exitLitBoolean?: (ctx: LitBooleanContext) => void;

	/**
	 * Enter a parse tree produced by the `CodeBlock`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	enterCodeBlock?: (ctx: CodeBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `CodeBlock`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	exitCodeBlock?: (ctx: CodeBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `RegQuery`
	 * labeled alternative in `CALangParser.cssQuery`.
	 * @param ctx the parse tree
	 */
	enterRegQuery?: (ctx: RegQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `RegQuery`
	 * labeled alternative in `CALangParser.cssQuery`.
	 * @param ctx the parse tree
	 */
	exitRegQuery?: (ctx: RegQueryContext) => void;

	/**
	 * Enter a parse tree produced by the `NormQuery`
	 * labeled alternative in `CALangParser.cssQuery`.
	 * @param ctx the parse tree
	 */
	enterNormQuery?: (ctx: NormQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `NormQuery`
	 * labeled alternative in `CALangParser.cssQuery`.
	 * @param ctx the parse tree
	 */
	exitNormQuery?: (ctx: NormQueryContext) => void;

	/**
	 * Enter a parse tree produced by `CALangParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `CALangParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `CALangParser.cssQuery`.
	 * @param ctx the parse tree
	 */
	enterCssQuery?: (ctx: CssQueryContext) => void;
	/**
	 * Exit a parse tree produced by `CALangParser.cssQuery`.
	 * @param ctx the parse tree
	 */
	exitCssQuery?: (ctx: CssQueryContext) => void;

	/**
	 * Enter a parse tree produced by `CALangParser.cssQueryPart`.
	 * @param ctx the parse tree
	 */
	enterCssQueryPart?: (ctx: CssQueryPartContext) => void;
	/**
	 * Exit a parse tree produced by `CALangParser.cssQueryPart`.
	 * @param ctx the parse tree
	 */
	exitCssQueryPart?: (ctx: CssQueryPartContext) => void;

	/**
	 * Enter a parse tree produced by `CALangParser.cssProp`.
	 * @param ctx the parse tree
	 */
	enterCssProp?: (ctx: CssPropContext) => void;
	/**
	 * Exit a parse tree produced by `CALangParser.cssProp`.
	 * @param ctx the parse tree
	 */
	exitCssProp?: (ctx: CssPropContext) => void;

	/**
	 * Enter a parse tree produced by `CALangParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `CALangParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `CALangParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;
}


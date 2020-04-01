// Generated from src/CALang.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CALangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CALangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Attr`
	 * labeled alternative in `CALangParser.cssProp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr?: (ctx: AttrContext) => Result;

	/**
	 * Visit a parse tree produced by the `Prop`
	 * labeled alternative in `CALangParser.cssProp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProp?: (ctx: PropContext) => Result;

	/**
	 * Visit a parse tree produced by the `Assembly`
	 * labeled alternative in `CALangParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssembly?: (ctx: AssemblyContext) => Result;

	/**
	 * Visit a parse tree produced by the `CssRule`
	 * labeled alternative in `CALangParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCssRule?: (ctx: CssRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `Reg`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg?: (ctx: RegContext) => Result;

	/**
	 * Visit a parse tree produced by the `Sym`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSym?: (ctx: SymContext) => Result;

	/**
	 * Visit a parse tree produced by the `LitNumber`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLitNumber?: (ctx: LitNumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `LitString`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLitString?: (ctx: LitStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `LitBoolean`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLitBoolean?: (ctx: LitBooleanContext) => Result;

	/**
	 * Visit a parse tree produced by the `CodeBlock`
	 * labeled alternative in `CALangParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeBlock?: (ctx: CodeBlockContext) => Result;

	/**
	 * Visit a parse tree produced by the `RegQuery`
	 * labeled alternative in `CALangParser.cssQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegQuery?: (ctx: RegQueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `NormQuery`
	 * labeled alternative in `CALangParser.cssQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormQuery?: (ctx: NormQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CALangParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `CALangParser.cssQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCssQuery?: (ctx: CssQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CALangParser.cssQueryPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCssQueryPart?: (ctx: CssQueryPartContext) => Result;

	/**
	 * Visit a parse tree produced by `CALangParser.cssProp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCssProp?: (ctx: CssPropContext) => Result;

	/**
	 * Visit a parse tree produced by `CALangParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `CALangParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg?: (ctx: ArgContext) => Result;
}


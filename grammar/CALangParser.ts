// Generated from src/CALang.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CALangListener } from "./CALangListener";
import { CALangVisitor } from "./CALangVisitor";


export class CALangParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly WS = 11;
	public static readonly String = 12;
	public static readonly Number = 13;
	public static readonly Boolean = 14;
	public static readonly Mnemonic = 15;
	public static readonly Ident = 16;
	public static readonly LineComment = 17;
	public static readonly RULE_program = 0;
	public static readonly RULE_cssQuery = 1;
	public static readonly RULE_cssQueryPart = 2;
	public static readonly RULE_cssProp = 3;
	public static readonly RULE_instruction = 4;
	public static readonly RULE_arg = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "cssQuery", "cssQueryPart", "cssProp", "instruction", "arg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'$'", "','", "'.'", "'#'", "'@'", "':'", "'{'", "'}'", "'['", 
		"']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "WS", "String", "Number", 
		"Boolean", "Mnemonic", "Ident", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CALangParser._LITERAL_NAMES, CALangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CALangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CALang.g4"; }

	// @Override
	public get ruleNames(): string[] { return CALangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CALangParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CALangParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CALangParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CALangParser.T__0) | (1 << CALangParser.T__1) | (1 << CALangParser.T__2) | (1 << CALangParser.T__3) | (1 << CALangParser.Mnemonic) | (1 << CALangParser.Ident))) !== 0)) {
				{
				{
				this.state = 12;
				this.instruction();
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cssQuery(): CssQueryContext {
		let _localctx: CssQueryContext = new CssQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CALangParser.RULE_cssQuery);
		let _la: number;
		try {
			this.state = 33;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CALangParser.T__0:
				_localctx = new RegQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 18;
				this.match(CALangParser.T__0);
				this.state = 19;
				this.match(CALangParser.Ident);
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CALangParser.T__1) {
					{
					{
					this.state = 20;
					this.match(CALangParser.T__1);
					this.state = 21;
					this.match(CALangParser.T__0);
					this.state = 22;
					this.match(CALangParser.Ident);
					}
					}
					this.state = 27;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CALangParser.T__1:
			case CALangParser.T__2:
			case CALangParser.T__3:
			case CALangParser.Ident:
				_localctx = new NormQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 28;
					this.cssQueryPart();
					}
					}
					this.state = 31;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CALangParser.T__1) | (1 << CALangParser.T__2) | (1 << CALangParser.T__3) | (1 << CALangParser.Ident))) !== 0));
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cssQueryPart(): CssQueryPartContext {
		let _localctx: CssQueryPartContext = new CssQueryPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CALangParser.RULE_cssQueryPart);
		try {
			this.state = 41;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CALangParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 35;
				this.match(CALangParser.T__2);
				this.state = 36;
				this.match(CALangParser.Ident);
				}
				break;
			case CALangParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.match(CALangParser.T__3);
				this.state = 38;
				this.match(CALangParser.Ident);
				}
				break;
			case CALangParser.Ident:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 39;
				this.match(CALangParser.Ident);
				}
				break;
			case CALangParser.T__1:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 40;
				this.match(CALangParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cssProp(): CssPropContext {
		let _localctx: CssPropContext = new CssPropContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CALangParser.RULE_cssProp);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CALangParser.T__4:
				_localctx = new AttrContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 43;
				this.match(CALangParser.T__4);
				this.state = 44;
				this.match(CALangParser.Ident);
				this.state = 45;
				this.match(CALangParser.T__5);
				this.state = 46;
				this.arg();
				}
				break;
			case CALangParser.Ident:
				_localctx = new PropContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				this.match(CALangParser.Ident);
				this.state = 48;
				this.match(CALangParser.T__5);
				this.state = 49;
				this.arg();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CALangParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 73;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CALangParser.Mnemonic:
				_localctx = new AssemblyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.match(CALangParser.Mnemonic);
				this.state = 61;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 53;
					this.arg();
					this.state = 58;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 54;
							this.match(CALangParser.T__1);
							this.state = 55;
							this.arg();
							}
							}
						}
						this.state = 60;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
					}
					}
					break;
				}
				}
				break;
			case CALangParser.T__0:
			case CALangParser.T__1:
			case CALangParser.T__2:
			case CALangParser.T__3:
			case CALangParser.Ident:
				_localctx = new CssRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.cssQuery();
				this.state = 64;
				this.match(CALangParser.T__6);
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CALangParser.T__4 || _la === CALangParser.Ident) {
					{
					{
					this.state = 65;
					this.cssProp();
					}
					}
					this.state = 70;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 71;
				this.match(CALangParser.T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CALangParser.RULE_arg);
		let _la: number;
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CALangParser.T__0:
				_localctx = new RegContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				this.match(CALangParser.T__0);
				this.state = 77;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 76;
					this.match(CALangParser.Ident);
					}
					break;
				}
				}
				break;
			case CALangParser.T__3:
				_localctx = new SymContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 79;
				this.match(CALangParser.T__3);
				this.state = 80;
				this.match(CALangParser.Ident);
				}
				break;
			case CALangParser.Number:
				_localctx = new LitNumberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 81;
				this.match(CALangParser.Number);
				}
				break;
			case CALangParser.String:
				_localctx = new LitStringContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 82;
				this.match(CALangParser.String);
				}
				break;
			case CALangParser.Boolean:
				_localctx = new LitBooleanContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 83;
				this.match(CALangParser.Boolean);
				}
				break;
			case CALangParser.T__8:
				_localctx = new CodeBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 84;
				this.match(CALangParser.T__8);
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CALangParser.T__0) | (1 << CALangParser.T__1) | (1 << CALangParser.T__2) | (1 << CALangParser.T__3) | (1 << CALangParser.Mnemonic) | (1 << CALangParser.Ident))) !== 0)) {
					{
					{
					this.state = 85;
					this.instruction();
					}
					}
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 91;
				this.match(CALangParser.T__9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13a\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x07\x02\x10\n\x02\f\x02\x0E\x02\x13\v\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03\x1A\n\x03\f\x03\x0E\x03\x1D\v\x03\x03" +
		"\x03\x06\x03 \n\x03\r\x03\x0E\x03!\x05\x03$\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04,\n\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x055\n\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x07\x06;\n\x06\f\x06\x0E\x06>\v\x06\x05\x06@\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x07\x06E\n\x06\f\x06\x0E\x06H\v\x06\x03\x06\x03\x06\x05\x06L" +
		"\n\x06\x03\x07\x03\x07\x05\x07P\n\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07Y\n\x07\f\x07\x0E\x07\\\v\x07\x03\x07" +
		"\x05\x07_\n\x07\x03\x07\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x02\x02\x02m\x02\x11\x03\x02\x02\x02\x04#\x03\x02\x02\x02\x06" +
		"+\x03\x02\x02\x02\b4\x03\x02\x02\x02\nK\x03\x02\x02\x02\f^\x03\x02\x02" +
		"\x02\x0E\x10\x05\n\x06\x02\x0F\x0E\x03\x02\x02\x02\x10\x13\x03\x02\x02" +
		"\x02\x11\x0F\x03\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x03\x03\x02\x02" +
		"\x02\x13\x11\x03\x02\x02\x02\x14\x15\x07\x03\x02\x02\x15\x1B\x07\x12\x02" +
		"\x02\x16\x17\x07\x04\x02\x02\x17\x18\x07\x03\x02\x02\x18\x1A\x07\x12\x02" +
		"\x02\x19\x16\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02" +
		"\x02\x1B\x1C\x03\x02\x02\x02\x1C$\x03\x02\x02\x02\x1D\x1B\x03\x02\x02" +
		"\x02\x1E \x05\x06\x04\x02\x1F\x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x1F" +
		"\x03\x02\x02\x02!\"\x03\x02\x02\x02\"$\x03\x02\x02\x02#\x14\x03\x02\x02" +
		"\x02#\x1F\x03\x02\x02\x02$\x05\x03\x02\x02\x02%&\x07\x05\x02\x02&,\x07" +
		"\x12\x02\x02\'(\x07\x06\x02\x02(,\x07\x12\x02\x02),\x07\x12\x02\x02*," +
		"\x07\x04\x02\x02+%\x03\x02\x02\x02+\'\x03\x02\x02\x02+)\x03\x02\x02\x02" +
		"+*\x03\x02\x02\x02,\x07\x03\x02\x02\x02-.\x07\x07\x02\x02./\x07\x12\x02" +
		"\x02/0\x07\b\x02\x0205\x05\f\x07\x0212\x07\x12\x02\x0223\x07\b\x02\x02" +
		"35\x05\f\x07\x024-\x03\x02\x02\x0241\x03\x02\x02\x025\t\x03\x02\x02\x02" +
		"6?\x07\x11\x02\x027<\x05\f\x07\x0289\x07\x04\x02\x029;\x05\f\x07\x02:" +
		"8\x03\x02\x02\x02;>\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02" +
		"=@\x03\x02\x02\x02><\x03\x02\x02\x02?7\x03\x02\x02\x02?@\x03\x02\x02\x02" +
		"@L\x03\x02\x02\x02AB\x05\x04\x03\x02BF\x07\t\x02\x02CE\x05\b\x05\x02D" +
		"C\x03\x02\x02\x02EH\x03\x02\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02" +
		"GI\x03\x02\x02\x02HF\x03\x02\x02\x02IJ\x07\n\x02\x02JL\x03\x02\x02\x02" +
		"K6\x03\x02\x02\x02KA\x03\x02\x02\x02L\v\x03\x02\x02\x02MO\x07\x03\x02" +
		"\x02NP\x07\x12\x02\x02ON\x03\x02\x02\x02OP\x03\x02\x02\x02P_\x03\x02\x02" +
		"\x02QR\x07\x06\x02\x02R_\x07\x12\x02\x02S_\x07\x0F\x02\x02T_\x07\x0E\x02" +
		"\x02U_\x07\x10\x02\x02VZ\x07\v\x02\x02WY\x05\n\x06\x02XW\x03\x02\x02\x02" +
		"Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[]\x03\x02\x02" +
		"\x02\\Z\x03\x02\x02\x02]_\x07\f\x02\x02^M\x03\x02\x02\x02^Q\x03\x02\x02" +
		"\x02^S\x03\x02\x02\x02^T\x03\x02\x02\x02^U\x03\x02\x02\x02^V\x03\x02\x02" +
		"\x02_\r\x03\x02\x02\x02\x0F\x11\x1B!#+4<?FKOZ^";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CALangParser.__ATN) {
			CALangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CALangParser._serializedATN));
		}

		return CALangParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CALangParser.RULE_program; }
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CssQueryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CALangParser.RULE_cssQuery; }
	public copyFrom(ctx: CssQueryContext): void {
		super.copyFrom(ctx);
	}
}
export class RegQueryContext extends CssQueryContext {
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CALangParser.Ident);
		} else {
			return this.getToken(CALangParser.Ident, i);
		}
	}
	constructor(ctx: CssQueryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterRegQuery) {
			listener.enterRegQuery(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitRegQuery) {
			listener.exitRegQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitRegQuery) {
			return visitor.visitRegQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NormQueryContext extends CssQueryContext {
	public cssQueryPart(): CssQueryPartContext[];
	public cssQueryPart(i: number): CssQueryPartContext;
	public cssQueryPart(i?: number): CssQueryPartContext | CssQueryPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CssQueryPartContext);
		} else {
			return this.getRuleContext(i, CssQueryPartContext);
		}
	}
	constructor(ctx: CssQueryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterNormQuery) {
			listener.enterNormQuery(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitNormQuery) {
			listener.exitNormQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitNormQuery) {
			return visitor.visitNormQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CssQueryPartContext extends ParserRuleContext {
	public Ident(): TerminalNode | undefined { return this.tryGetToken(CALangParser.Ident, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CALangParser.RULE_cssQueryPart; }
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterCssQueryPart) {
			listener.enterCssQueryPart(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitCssQueryPart) {
			listener.exitCssQueryPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitCssQueryPart) {
			return visitor.visitCssQueryPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CssPropContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CALangParser.RULE_cssProp; }
	public copyFrom(ctx: CssPropContext): void {
		super.copyFrom(ctx);
	}
}
export class AttrContext extends CssPropContext {
	public Ident(): TerminalNode { return this.getToken(CALangParser.Ident, 0); }
	public arg(): ArgContext {
		return this.getRuleContext(0, ArgContext);
	}
	constructor(ctx: CssPropContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterAttr) {
			listener.enterAttr(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitAttr) {
			listener.exitAttr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitAttr) {
			return visitor.visitAttr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropContext extends CssPropContext {
	public Ident(): TerminalNode { return this.getToken(CALangParser.Ident, 0); }
	public arg(): ArgContext {
		return this.getRuleContext(0, ArgContext);
	}
	constructor(ctx: CssPropContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterProp) {
			listener.enterProp(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitProp) {
			listener.exitProp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitProp) {
			return visitor.visitProp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CALangParser.RULE_instruction; }
	public copyFrom(ctx: InstructionContext): void {
		super.copyFrom(ctx);
	}
}
export class AssemblyContext extends InstructionContext {
	public Mnemonic(): TerminalNode { return this.getToken(CALangParser.Mnemonic, 0); }
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterAssembly) {
			listener.enterAssembly(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitAssembly) {
			listener.exitAssembly(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitAssembly) {
			return visitor.visitAssembly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CssRuleContext extends InstructionContext {
	public cssQuery(): CssQueryContext {
		return this.getRuleContext(0, CssQueryContext);
	}
	public cssProp(): CssPropContext[];
	public cssProp(i: number): CssPropContext;
	public cssProp(i?: number): CssPropContext | CssPropContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CssPropContext);
		} else {
			return this.getRuleContext(i, CssPropContext);
		}
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterCssRule) {
			listener.enterCssRule(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitCssRule) {
			listener.exitCssRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitCssRule) {
			return visitor.visitCssRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CALangParser.RULE_arg; }
	public copyFrom(ctx: ArgContext): void {
		super.copyFrom(ctx);
	}
}
export class RegContext extends ArgContext {
	public Ident(): TerminalNode | undefined { return this.tryGetToken(CALangParser.Ident, 0); }
	constructor(ctx: ArgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterReg) {
			listener.enterReg(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitReg) {
			listener.exitReg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitReg) {
			return visitor.visitReg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SymContext extends ArgContext {
	public Ident(): TerminalNode { return this.getToken(CALangParser.Ident, 0); }
	constructor(ctx: ArgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterSym) {
			listener.enterSym(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitSym) {
			listener.exitSym(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitSym) {
			return visitor.visitSym(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LitNumberContext extends ArgContext {
	public Number(): TerminalNode { return this.getToken(CALangParser.Number, 0); }
	constructor(ctx: ArgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterLitNumber) {
			listener.enterLitNumber(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitLitNumber) {
			listener.exitLitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitLitNumber) {
			return visitor.visitLitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LitStringContext extends ArgContext {
	public String(): TerminalNode { return this.getToken(CALangParser.String, 0); }
	constructor(ctx: ArgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterLitString) {
			listener.enterLitString(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitLitString) {
			listener.exitLitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitLitString) {
			return visitor.visitLitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LitBooleanContext extends ArgContext {
	public Boolean(): TerminalNode { return this.getToken(CALangParser.Boolean, 0); }
	constructor(ctx: ArgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterLitBoolean) {
			listener.enterLitBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitLitBoolean) {
			listener.exitLitBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitLitBoolean) {
			return visitor.visitLitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CodeBlockContext extends ArgContext {
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	constructor(ctx: ArgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CALangListener): void {
		if (listener.enterCodeBlock) {
			listener.enterCodeBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CALangListener): void {
		if (listener.exitCodeBlock) {
			listener.exitCodeBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CALangVisitor<Result>): Result {
		if (visitor.visitCodeBlock) {
			return visitor.visitCodeBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



import { monaco as monacoEditor } from 'react-monaco-editor'
import cypherFunctions from './functions'

export const cypherLanguageConfiguration: monacoEditor.languages.LanguageConfiguration =
  {
    brackets: [
      ['(', ')'],
      ['{', '}'],
      ['[', ']'],
      ["'", "'"],
      ['"', '"'],
    ],
    comments: {
      blockComment: ['/*', '*/'],
      lineComment: '//',
    },
  }

export const KEYWORDS = [
  'ACCESS',
  'ACTIVE',
  'ADMIN',
  'ADMINISTRATOR',
  'ALLSHORTESTPATHS',
  'ALTER',
  'AND',
  'AS',
  'ASC',
  'ASCENDING',
  'ASSERT',
  'ASSIGN',
  'BOOSTED',
  'BRIEF',
  'BTREE',
  'BUILT',
  'BY',
  'CALL',
  'CASE',
  'CATALOG',
  'CHANGE',
  'COMMIT',
  'CONSTRAINT',
  'CONSTRAINTS',
  'CONTAINS',
  'COPY',
  'CREATE',
  'CSV',
  'CURRENT',
  'CYPHER',
  'DATABASE',
  'DATABASES',
  'DBMS',
  'DEFAULT',
  'DEFINED',
  'DELETE',
  'DENY',
  'DESC',
  'DESCENDING',
  'DETACH',
  'DISTINCT',
  'DROP',
  'EACH',
  'ELEMENT',
  'ELEMENTS',
  'ELSE',
  'END',
  'ENDS',
  'EXECUTABLE',
  'EXECUTE',
  'EXISTENCE',
  'EXPLAIN',
  'EXTRACT',
  'FALSE',
  'FIELDTERMINATOR',
  'FILTER',
  'FOR',
  'FOREACH',
  'FROM',
  'FULLTEXT',
  'FUNCTION',
  'FUNCTIONS',
  'GRANT',
  'GRAPH',
  'GRAPHS',
  'HEADERS',
  'HOME',
  'IF',
  'IN',
  'INDEX',
  'INDEXES',
  'IS',
  'JOIN',
  'KEY',
  'LABEL',
  'LIMIT',
  'LOAD',
  'LOOKUP',
  'MANAGEMENT',
  'MATCH',
  'MERGE',
  'NAME',
  'NAMES',
  'NEW',
  'NODE',
  'NOT',
  'NULL',
  'OF',
  'ON',
  'OPTIONAL',
  'OPTIONS',
  'OR',
  'ORDER',
  'OUTPUT',
  'PASSWORD',
  'PERIODIC',
  'POPULATED',
  'PRIVILEGES',
  'PROCEDURE',
  'PROCEDURES',
  'PROFILE',
  'PROPERTY',
  'READ',
  'REDUCE',
  'REL',
  'RELATIONSHIP',
  'REMOVE',
  'RENAME',
  'REQUIRED',
  'RETURN',
  'REVOKE',
  'ROLE',
  'ROLES',
  'SCAN',
  'SET',
  'SHORTESTPATH',
  'SHOW',
  'SKIP',
  'START',
  'STARTS',
  'STATUS',
  'STOP',
  'SUSPENDED',
  'THEN',
  'TO',
  'TRAVERSE',
  'TRUE',
  'TYPES',
  'UNION',
  'UNIQUE',
  'UNWIND',
  'USER',
  'USERS',
  'USING',
  'VERBOSE',
  'WHEN',
  'WHERE',
  'WITH',
  'WRITE',
  'XOR',
  'YIELD',
]

export const FUNCTIONS: monacoEditor.languages.CompletionItem[] =
  cypherFunctions

export const STRINGS: string[] = ['stringliteral', 'urlhex']

export const NUMBERS: string[] = [
  'hexinteger',
  'decimalinteger',
  'octalinteger',
  'hexdigit',
  'digit',
  'nonzerodigit',
  'nonzerooctdigit',
  'octdigit',
  'zerodigit',
  'exponentdecimalreal',
  'regulardecimalreal',
]

export const OPERATORS: string[] = [
  'identifierstart',
  'identifierpart',
  "';'",
  "':'",
  "'-'",
  "'=>'",
  "'://'",
  "'/'",
  "'.'",
  "'@'",
  "'#'",
  "'?'",
  "'&'",
  "'='",
  "'+'",
  "'{'",
  "','",
  "'}'",
  "'['",
  "']'",
  "'('",
  "')'",
  "'+='",
  "'|'",
  "'*'",
  "'..'",
  "'%'",
  "'^'",
  "'=~'",
  "'<>'",
  "'!='",
  "'<'",
  "'>'",
  "'<='",
  "'>='",
  "'$'",
  "'\u27E8'",
  "'\u3008'",
  "'\uFE64'",
  "'\uFF1C'",
  "'\u27E9'",
  "'\u3009'",
  "'\uFE65'",
  "'\uFF1E'",
  "'\u00AD'",
  "'\u2010'",
  "'\u2011'",
  "'\u2012'",
  "'\u2013'",
  "'\u2014'",
  "'\u2015'",
  "'\u2212'",
  "'\uFE58'",
  "'\uFE63'",
  "'\uFF0D'",
]
